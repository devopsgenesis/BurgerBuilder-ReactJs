import React from 'react';
import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Helper';
import BackDrop from '../../UI/BackDrop/BackDrop';
const SideDrawer=(props)=>{
    let classesToApply=[classes.SideDrawer,classes.Close];
    if(props.show)
    {
        classesToApply=[classes.SideDrawer,classes.Open]
    }
    console.log(classesToApply);
    console.log(classes.Open);
    console.log(classes.Close)
    return (<Aux>
           <BackDrop show={props.show} clicked={props.backDropHandler}/>    
        <div className={classesToApply.join(' ')}>
        <div className={classes.Logo}>
         <Logo/>
         </div>
        <nav>
            <NavItems/>
            </nav>
        </div>
        </Aux>
        )
}
export default SideDrawer;