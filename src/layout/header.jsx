import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import Cart from '../cart/cart';

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartButtonClicked = () => setIsCartVisible(!isCartVisible);

  return (
    <div className={classes.header}>
        <div className={classes.headerTitle}>
            <Link to='/'>React Store</Link>
        </div>
        <div className={classes.headerLink}>
            <Link to='/product'>Sample Product</Link>
        </div>
        <div className={classes.cartButton}>
            <div className='clickable' onClick={cartButtonClicked}>View cart</div>
        </div>
        <Cart open={isCartVisible}/>
    </div>
  )
}

export default Header;