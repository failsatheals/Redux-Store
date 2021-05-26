import React from 'react';
import classes from './cartItem.module.scss';


const CartItem = () => (
    <div className={classes.container}>
        <div className={classes.image}>
            <img src="https://via.placeholder.com/300" alt="product"/>
        </div>
        <div className={classes.infoContainer}>
            <div className={classes.name}>2x Product name</div>
            <div className={classes.price}>$3.99 ea.</div>
            <div className={classes.xButton + ' clickable'}>✕</div>
        </div>
    </div>
)


export default CartItem;