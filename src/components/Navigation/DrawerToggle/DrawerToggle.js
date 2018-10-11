import React from 'react';
import classes from './DrawerToggle.css';
const DrawerToggle=(props)=>{
return (
    <div className={classes.DrawerOpener}>
<span className={classes.Bars} onClick={props.openSideDrawer}><i className="fa fa-bars fa-lg"></i></span>
</div>
)
}
export default DrawerToggle;