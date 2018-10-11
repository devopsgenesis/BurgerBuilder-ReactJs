import React from 'react';
import Aux from '../../hoc/Helper';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends React.Component{
   state={
       isSideBarOpen:false,
       showBackDrop:false
   }
   backDropHandler=()=>{
       console.log("inside Sidebar")
this.setState({showBackDrop:false});
   }
   openSideBar=()=>{
       console.log("inside Open")
       this.setState({showBackDrop:true})
   }
    render(){
    return(
    <Aux>
<div>
    <ToolBar openSideDrawer={this.openSideBar}/>
    <SideDrawer show={this.state.showBackDrop} backDropHandler={this.backDropHandler}/>
</div>
<main className={classes.Content}>
{this.props.children}
</main>
</Aux>
    )
}
}
export default Layout;