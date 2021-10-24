import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartProducts = createSelector(
    [ selectCart ],
    cart => cart.cartProducts
);

export const selectCartProductCount = createSelector(
    [ selectCartProducts ],
  cartProducts => cartProducts.reduce((calcQuantity, cartProduct) =>
        calcQuantity + cartProduct.quantity,
        0)
)

export const selectCartTotal = createSelector(
    [ selectCartProducts ],
    cartProducts => cartProducts.reduce((calcQuantity, cartProduct) =>
        calcQuantity + cartProduct.quantity * cartProduct.price, 0)
)