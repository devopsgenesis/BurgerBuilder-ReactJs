import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const BuildControls=(props)=>{
    const Controls=[
     {type:'salad',label:'salad'},
     {type:'meat',label:'meat'},
     {type:'bacon',label:'bacon'},
     {type:'cheese',label:'cheese'},
     ]
return (
    <div className={classes.BuildControls}>
        <p>Total Price {props.TotalPrice}$</p>
         {Controls.map((item,index)=>{return <BuildControl 
         increaseMyCount={props.increaseMyCount} decreaseMyCount={props.decreaseMyCount}
         key={index} label={item.label} type={item.type} disable={props.disableInfo[item.type]}/>})}
   <button className={classes.OrderButton} onClick={props.makeCheckOut} disabled={!props.purchasable}>OrderNow</button>
    </div>
)
}
export default BuildControls;