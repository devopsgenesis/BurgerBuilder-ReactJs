import React from 'react';
import classes from './Order.css';
const Order = (props) => {
    return (
        <div className={classes.Order}>
        
            price<strong>{props.price}$</strong>
        </div>
    );
};

export default Order;