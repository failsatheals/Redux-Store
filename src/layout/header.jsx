import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import Cart from '../cart/cart';

const Header = (props) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartButtonClicked = () => setIsCartVisible(!isCartVisible);
  const productIdSelectionHandler = (id) => {
    props.setSelectedProductId(id);
  }

  return (
    <div className={classes.header}>
        <div className={classes.headerTitle}>
            <Link to='/'>Redux Store</Link>
        </div>
        {!!props.products ? props.products.map((p,index) => (
          <div className={classes.headerLink} key={index} onClick={() => productIdSelectionHandler(p.id)} >
            <Link to={'/product/'+p.id}>{p.name}</Link>
          </div>
          )): null } 
        <div className={classes.cartButton}>
            <div className='clickable' onClick={cartButtonClicked}>View cart</div>
        </div>
        <Cart open={isCartVisible}/>
    </div>
  )
}

export default Header;