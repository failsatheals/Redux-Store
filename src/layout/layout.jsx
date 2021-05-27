import React from 'react';
import Header from './header';
import classes from './layout.module.scss';

const Layout = (props) => (
    <div>
        <Header products={props.products} setSelectedProductId={props.setSelectedProductId}/>
        <div className={classes.pageBody}>
            {props.children}
        </div>
    </div>
)

export default Layout;