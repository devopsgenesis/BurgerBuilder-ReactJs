import React from 'react';
import Aux from '../Helper';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends React.Component {
        state={
            error:null
        }
        componentWillMount(){
            console.log("I am MOunt")
            axios.interceptors.request.use(req=>{this.setState({error:null});
        return req;},err=>this.setState({error:err}))
         axios.interceptors.response.use(res=>res,err=>{
             console.log(err);
             this.setState({error:err});
         })
        }
        modalCloseHandler=()=>{
            console.log("clicked backdrop")
            this.setState({error:null})
        }
        render()
        {
console.log("inside error handler");
console.log(this.state.error)

//console.log(errorMessage)
  //  console.log("inside error handler"
  

            return (<Aux>
        <Modal show={this.state.error} modalClose={this.modalCloseHandler}>
        {this.state.error?this.state.error.message:null}
            </Modal>
        <WrappedComponent {...this.props}/>
    </Aux>)
    }
}
}
export default withErrorHandler;