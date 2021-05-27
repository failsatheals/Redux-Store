import React from 'react';
import classes from './cartItem.module.scss';
import {removeFromCart} from '../actions'
import { useDispatch } from 'react-redux'

//could put in a seperate file and import to use in other places
const roundMoney = (value) => {
    return (Math.round((value) * 100) / 100).toFixed(2);
}

const CartItem = (props) => {
    const dispatch = useDispatch();
    const totalPrice = roundMoney(props.price*props.quantity);
    return (
    <div className={classes.container}>
        <div className={classes.image}>
            <img src={props.imageUrl} alt="product"/>
        </div>
        <div className={classes.infoContainer}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.price}>{'$'+totalPrice}</div>
            <div>{'Qty: ' + props.quantity}</div>
            <div className={classes.xButton + ' clickable'} onClick={() => dispatch(removeFromCart(props.id,props.index))}>✕</div>
        </div>
    </div>
    )
}


export default CartItem;