import React from 'react';
import classes from './cart.module.scss';
import CartItem from './cartItem';
import {useSelector } from 'react-redux'
import EmptyCart from './emptyCart'
import {checkout} from '../actions'
import { useDispatch } from 'react-redux'

//could put in a seperate file for math helpers and import to use in other places
const roundMoney = (value) => {
    return (Math.round((value) * 100) / 100).toFixed(2)
}

const Cart = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    
    const checkoutDispatcher = () => {
        window.alert('Thank you for your purchase.');
        dispatch(checkout());
    }
    const cartTotal = roundMoney(cart.reduce((a,b) => a + (b.price * b.quantity), 0));
    
    return (
        <div>
            <div className={classes.cart + ' ' + (props.open ? classes.open : '')}>
            {!!cart.length > 0 ?
            //Could make its own component  
            <div>
                <div className={classes.info + ' ' + classes.price}>
                    {"Total: $" + cartTotal }
                </div>
                <div className={'button ' + classes.info} onClick={checkoutDispatcher}>
                    Checkout
                </div> 
            </div> : null}
            
            {!!cart.length > 0 ? cart.map((i,index) => (
                <div key={index}>
                    <div>
                        <CartItem index={index} id={i.id} name={i.name} price={i.price} imageUrl={i.imageUrl} quantity={i.quantity}/>
                    </div>
                </div>
            )) : <EmptyCart/> }
            </div>
        </div>
    );
};
export default Cart;
