import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger=(props)=>{
    
    let BurgerMiddle=Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,index)=>{
            console.log(index);
            return <BurgerIngredient key={igKey+index} type={igKey}/>
        })}).reduce(
            (acc,val)=>
            {console.log("accum and val are ",acc,val)
                return acc.concat(val)},[]);
    console.log(BurgerMiddle);
    if(BurgerMiddle.length===0){
BurgerMiddle=(<div>please start filling!</div>)
    }
    return(<div className={classes.Burger}>
    <BurgerIngredient type="bread-top"/>
    {BurgerMiddle}
    <BurgerIngredient type="bread-bottom"/> 
    </div>
    )


}
export default Burger;