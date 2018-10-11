import React from 'react';
import Aux from '../../../hoc/Helper';
import Button from '../../UI/Button/Button';
const OrderSummary=(props)=>{
    const ingredients=Object.keys(props.ingredients).map((key,index)=>{return (
    <li key={index}><span>{key}</span>{props.ingredients[key]}</li>)}) 
return (
    <Aux>
        
        <h3>Your Order</h3>
        <p>Delecious Burger with Following Ingredients</p>
        <ul>
            {ingredients}
                </ul>
                <p><strong>Total Money To be Paid {props.price}$</strong></p>
                <p>Continue To CheckOut?</p>
                
                <Button clicked={props.continueHandler} type="Success">Continue</Button>
        <Button clicked={props.cancelHandler} type="Danger">Cancel</Button>
        
    </Aux>
    )
}
export default OrderSummary;