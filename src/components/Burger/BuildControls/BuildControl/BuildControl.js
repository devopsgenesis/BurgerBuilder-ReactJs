import React from 'react';
import classes from './BuildControl.css';
const BuildControl=(props)=>{
return (<div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} disabled={props.disable} onClick={()=>props.decreaseMyCount(props.type)}>Less</button>
    <button className={classes.More} onClick={()=>{props.increaseMyCount(props.type)}}>More</button>
    </div>)
}
export default BuildControl;