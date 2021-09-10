const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = require('./app');
const Product = require('./models/ProductSchema');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    // .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 7000
const server = app.listen(port, () => {
    console.log(`App starting on port ${ port }...`)
});

// Import data

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/product.json`, 'utf-8')
)
// console.log(products);


const importData = async () => {
  try
  {
    await Product.create(products)
    console.log('DATA SUCESSFULL UPLOAD')
  } catch (err){
    console.log(err)
  }
  process.exit()
}
const deleteData = async () => {
  try
  {
    await Product.deleteMany()
     console.log('Data successfully deleted!');
  } catch (err)
  {
    console.log(err)
  }
  process.exit()
}

if (process.argv[ 2 ] === '--import')
{
  importData()
} else if (process.argv[ 2 ] === '--delete')
{
  deleteData()
}
