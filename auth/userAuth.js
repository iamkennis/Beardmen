const {promisify} = require('util')
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError')

const signToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SERCRET, {
                expiresIn: process.env.JWT_EXPIRES_IN,
        });
}

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({

        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

   const token = signToken(newUser._id)
    res.status(200).json({
        status: 'success',
        token,
        data: {
            user:newUser
        }
    })
})

exports.signin = catchAsync(async (req, res, next) => {
    
    const { email, password } = req.body
    
    if (!email || !password)
    {
        return next(new AppError('Please enter your password or email', 400))
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user || !(await user.correctPassword(password, user.password))){
        return next(new AppError('Incorrect email or password', 401))
    }

    const token = signToken(user._id)
    res.status(200).json({
        status: 'success',
        token,
    })
})

// exports.protectProduct = catchAsync(async (req, res, next) => {
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
//     {
//         token = req.headers.authorization.split(' ')[1];
//     }
//     if (!token)
//     {
//         return next(new AppError('Please log in to get access.',401))
//     }
//     const passwordDecode = await promisify(jwt.verify)(token, process.env.JWT_SERCRET);
//     console.log(passwordDecode);
// next();
// })