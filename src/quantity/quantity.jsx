import React from 'react';
import classes from './quantity.module.scss'

//could set in another file and import
const maxQuantity = 12;
const minQuantity = 1;

const Quantity = (props) => {

    const increment = () => {
        if(props.quantity < maxQuantity){
            props.setQuantity(props.quantity+1);
        }
    }
    const decrement = () => {
        if(props.quantity > minQuantity){
            props.setQuantity(props.quantity-1);
        }
    }

    return (
        <div>
            <div>Quantity Picker</div>
            <div className={classes.quantity}>
                <button className={classes.quantityButton} onClick={decrement}>-</button>
                <input className={classes.quantityInput} type="text" value={props.quantity} readOnly />
                <button className={classes.quantityButton} onClick={increment}>+</button>
                
            </div>
        </div>
    );
}

export default Quantity;