import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css'
const NavItems=()=>{
return (
    <ul className={classes.NavigationItems}>
        <NavItem link='/'>Burger Builder</NavItem>
        <NavItem link='/Orders'>Orders</NavItem>
        
            </ul>
)
}
export default NavItems;