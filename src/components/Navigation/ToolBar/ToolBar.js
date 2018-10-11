import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
const ToolBar=(props)=>{
return (
    <header className={classes.ToolBar}>
        <DrawerToggle openSideDrawer={props.openSideDrawer}/>
    <Logo/>
        <nav className={classes.DesktopOnly}>
            <NavItems/>
                </nav>
    </header>
)
}
export default ToolBar;