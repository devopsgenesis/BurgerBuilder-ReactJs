import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-order';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Helper';
class ContactData extends Component {
    state={
        
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        isLoading:false
    }
    orderHandler=()=>{
         this.setState({isLoading:true})
    const orders={
        ingredients:this.props.ingredients,
        totalPrice:this.props.price,
        customer:{
            name:'ashuGhildiyal',
            address:{
                street:'surenderColony D-13',
                zipCode:'110084',
                country:'india'
            },
            email:'ashughildiyal@example.com'
        }
    }
    axios.post("/orders.json",orders).then(response=>{
        this.setState({isLoading:false,isCheckOut:false})
    }).catch(err=>this.setState({isLoading:false,isCheckOut:false}));
        
    }
    render () {
        ContactData=(<Aux><h4>Enter your Contact Data </h4>
            <form action="">
            <input className={classes.Input} type="text" name="name" placeholder="Enter your Name Here"/>
            <input className={classes.Input} type="email" name="email" placeholder="Enter Your Email"/>
            <input className={classes.Input} type="text" name="street" placeholder="Enter Your street"/>
            <input className={classes.Input} type="text" name="postalCode" placeholder="Enter Postal Code"/>
            </form>
            <Button type="Success" clicked={this.orderHandler}>Order</Button></Aux>)
        if(this.state.isLoading===true)
        {console.log("is Loading")
            ContactData=<Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                {ContactData}
            </div>
        )
    }
}

export default ContactData