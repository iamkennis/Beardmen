const express = require('express');
const cartController = require('../controller/cartController');

const router = express.Router();

router.route('/:id')
    .get(cartController.getCartProducts)
    .post(cartController.addCartProduct)
      
router.route('/userId/productId/:id')
    .delete(cartController.deleteCartProduct)
      

module.exports = router