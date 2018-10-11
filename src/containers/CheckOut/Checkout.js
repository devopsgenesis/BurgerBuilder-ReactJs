import React from 'react';
import CheckOutSummary from '../../components/Orders/CheckOutSummary/CheckOutSummary';
import Aux from '../../hoc/Helper';
import {Route} from 'react-router-dom';
import ContactData from '../../containers/CheckOut/ContactData/ContactData';
class CheckOut extends React.Component{

    state={
        ingredients:{
            salad:0,meat:0,cheese:0,bacon:0
        },
        price:0
    }
    componentDidMount(){
        console.log(this.props)
        const query=new URLSearchParams(this.props.location.search);
        console.log(query)
        let ingredients={};
        console.log(query.entries())
        for(let param of query.entries())
              {
                let price=0;  
                console.log(param)
                if(param[0]==='price')
                {
                price=param[1];
                console.log("inside Price param")
            this.setState({price:price})
            }
            else{
        ingredients[param[0]]=+param[1];
        }
    }
        console.log(ingredients)
        this.setState({ingredients:ingredients})
    }
    cancelHandler=()=>{
        console.log("called")
this.props.history.goBack()
    }
    continueHandler=()=>{
        console.log("called")
        this.props.history.push('/checkout/contact-data')
    }
render(){
    return (
    <Aux>
    <CheckOutSummary ingredients={this.state.ingredients} cancelHandler={this.cancelHandler} 
    continueHandler={this.continueHandler}/>
<Route path={this.props.match.path + '/contact-data'} 
render={()=><ContactData ingredients={this.state.ingredients} price={this.state.price}/>}/>    
</Aux>)}
}
export default CheckOut;