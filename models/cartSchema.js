const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "user"
   },
    product: [ {
        productId: {
            type: String,
            ref: "product"
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [ 1, 'Quantity can not be less than 1.' ],
            default: 1
        },
        price: Number,
        image: String
}],
    bill: {
        type: Number,
        required: true,
        default: 0
  }  
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart