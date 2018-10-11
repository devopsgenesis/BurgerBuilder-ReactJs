import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckOutSummary.css';
const CheckOutSummary = (props) => {
    console.log(props)
    return (
        <div className={classes.CheckOut}>
        <h4>Loooks Tasty</h4>
            <Burger ingredients={props.ingredients}/>
            <Button type="Success" clicked={props.continueHandler}>Continue</Button>
            <Button type="Danger" clicked={props.cancelHandler}>Cancel</Button>
        </div>
    );
};

export default CheckOutSummary;