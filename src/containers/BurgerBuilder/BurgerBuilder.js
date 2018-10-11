import React,{Component} from 'react';
import Aux from '../../hoc/Helper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICE={
 salad:0.5,
 meat:1.4,
 cheese:1.2,
 bacon:1.9   
}
 class BurgerBuilder extends Component{

    state={
    ingredients:null
    ,TotalPrice:0,
purchasable:false,
isCheckOut:false,
isLoading:false,
error:false
}
componentDidMount(){
    this.setState({isLoading:true})
    console.log(this.props)
    axios.get("https://react-burger-builder-ashu.firebaseio.com/ingredients.json")
    .then(response=>{
    console.log(response.data)
        this.setState({ingredients:response.data,isLoading:false});

    }).catch(err=>{
              this.setState({isLoading:false,error:true});
    })
}
updatePurchasable(ingredients){
    
    let sum=Object.keys(ingredients).map(key=>ingredients[key]).reduce((acc,val)=>{
        return acc+val;
    })
    console.log(sum)
this.setState({purchasable:sum>0})
}
increaseMyCount(type){
    let updatedIngredient={...this.state.ingredients};
updatedIngredient[type]=updatedIngredient[type]+1;
let updatedPrice=this.state.TotalPrice+INGREDIENT_PRICE[type];   
console.log(updatedPrice); 
this.setState({ingredients:updatedIngredient,TotalPrice:updatedPrice})
this.updatePurchasable(updatedIngredient)
}
decreaseMyCount(type)
{
 let oldCount=this.state.ingredients[type];
 if(oldCount<=0)
 {
     return;
 }
 let updatedCount=oldCount-1;   
    let updatedIngredient={...this.state.ingredients};
updatedIngredient[type]=updatedCount;
    let updatedPrice=this.state.TotalPrice-INGREDIENT_PRICE[type];   
    console.log(updatedPrice); 
    this.setState({ingredients:updatedIngredient,TotalPrice:updatedPrice})
this.updatePurchasable(updatedIngredient)
}
makeCheckOut=()=>{this.setState({isCheckOut:true})
console.log('checkout',this.state.checkOut)
}
modalClose=()=>{       
this.setState({isCheckOut:false})
console.log("checkOut",this.state.isCheckOut)
}
continueHandler=()=>{
    console.log(this.props);
const queryParams=[];
for(let i in this.state.ingredients)
{
    queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
}
queryParams.push('price='+this.state.TotalPrice);
console.log(queryParams)
const queryString=queryParams.join('&');
    this.props.history.push({pathname:'/checkout',search:'?'+queryString})


   
}
    render(){
        const disableInfo={...this.state.ingredients}
        for(let key in disableInfo)
        {
            disableInfo[key]=disableInfo[key]<=0
        }
        
        
let orderSummary=null;
   let burgerWrapper=this.state.error?<p>ingredients cant be loaded</p>:<Spinner/>
     if(this.state.ingredients)
     {console.log(this.state.ingredients)
         burgerWrapper=(<Aux><Burger ingredients={this.state.ingredients}/>
            <BuildControls increaseMyCount={this.increaseMyCount.bind(this)} 
            decreaseMyCount={this.decreaseMyCount.bind(this)} TotalPrice={this.state.TotalPrice.toFixed(2)}
            disableInfo={disableInfo}
            purchasable={this.state.purchasable}
            makeCheckOut={this.makeCheckOut}/>
            </Aux>)
             orderSummary=<OrderSummary price={this.state.TotalPrice.toFixed(2)} cancelHandler={this.modalClose} continueHandler={this.continueHandler} 
            checkOut={this.state.isCheckOut} ingredients={this.state.ingredients}/>
     }
     if(this.state.isLoading)
        {
            orderSummary=<Spinner/>
        }
return (

    <Aux>
        <Modal show={this.state.isCheckOut} modalClose={this.modalClose}>
        {orderSummary}
            </Modal>
        {burgerWrapper}
        </Aux>
)
}
}
export default withErrorHandler(BurgerBuilder,axios);