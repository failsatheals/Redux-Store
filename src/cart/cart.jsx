import React from 'react';
import classes from './cart.module.scss';
import CartItem from './cartItem';

const Cart = (props) => {

    return (
        <div className={classes.cart + ' ' + (props.open ? classes.open : '')}>
            <CartItem/>
            <CartItem/>
            <div className='button' onClick={() => window.alert('Thank you for your purchase.')}>
                Checkout
            </div>
        </div>
    );
}

export default Cart;