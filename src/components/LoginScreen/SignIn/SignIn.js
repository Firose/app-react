import React, {Component} from 'react';
import axios from 'axios';
import { runInThisContext } from 'vm';

class SignIn extends Component{
   
    componentDidMount(){
        console.log(this.props)
    }

    submitHandler = (event) =>{
        console.log("formSubmited")
        event.preventDefault();
        
    }


    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.submitHandler.bind(this)}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" 
                 className="FormField__Input" 
                 placeholder="Enter your email"
                 name='email' 
                 value = {this.props.email}
                 onChange = {this.props.change}/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password"
                 name = "password"
                 className="FormField__Input" 
                 placeholder="Enter your password"
                 value = {this.props.password}
                 onChange = {this.props.change} 
                 />
              </div>
              

        
              <div className="FormField">
                  <button 
                  className="FormField__Button mr-20"
                  onClick = {this.props.signIn}>
                      Sign In</button> 
              </div>
            </form>
            </div>

            
        )
    }
}
export default SignIn;