import React from 'react';
import classes from './NavItem.css';
import {NavLink} from 'react-router-dom';
const NavItem=(props)=>{
    console.log(props);
return (<li className={classes.NavItem}><NavLink to={props.link}
    activeClassName={classes.active} exact
className={props.active?classes.active:null}>{props.children}</NavLink></li>)
}
export default NavItem;