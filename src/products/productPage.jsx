import React from 'react';
import classes from './productPage.module.scss';

const ProductPage = () => {

    return (
        <div>
            <div className={classes.title}>Sample Product</div>
            <div className={classes.imageAndDescriptionContainer}>
                <div className={classes.image}>
                    <img src="https://via.placeholder.com/300" alt="product"/>
                </div>
                <div className={classes.description}>
                    This is a sample product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
            <div className={classes.price}>$5.00</div>
            <div className={classes.quantityText}>Quantity</div>
            <div className='button'>
                Add to cart
            </div>
        </div>
    );
}

export default ProductPage;