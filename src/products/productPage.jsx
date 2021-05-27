import React from 'react';
import classes from './productPage.module.scss';
import Quantity from '../quantity/quantity'
import PropTypes from 'prop-types';
import { addToCart } from '../actions'
import { useDispatch } from 'react-redux'

const ProductPage = (props) => {
    const dispatch = useDispatch();
    const addToCarthandler = () => {
        dispatch(addToCart(
            props.product.id, props.quantity, props.product.name, props.product.imageUrl, props.product.price
            ));
        props.setQuantity(1);
    }

    return (
        <div>
            <div className={classes.title}>{props.product.name}</div>
            <div className={classes.imageAndDescriptionContainer}>
                <div className={classes.image}>
                    <img src={props.product.imageUrl} alt="product"/>
                </div>
                <div className={classes.description}>{props.product.description}</div>
            </div>
            <div className={classes.price}>{"$"+props.product.price}</div>
            <Quantity quantity={props.quantity} setQuantity={props.setQuantity}/>
            <div className='button' onClick={() => addToCarthandler()}>
                Add to cart
            </div>
        </div>
    );
}//
ProductPage.propTypes  = {
    product: PropTypes.shape({
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
}

export default ProductPage;



