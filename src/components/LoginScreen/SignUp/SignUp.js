import React, {Component} from 'react';
import axios from 'axios';
import Blog from '../../../Container/Blog/Blog';
import Aux from '../../../../src/hoc/Aux';
import {NavLink,Route} from 'react-router-dom';
class SignUp extends Component{
    
    componentDidMount(){
        console.log(this.props)

    }
    submitHandler = (event) => {
        console.log("formSubmitted")
        event.preventDefault();
        

    }

    render(){
        return(
            <Aux>
            <div className="FormCenter">
            <form className="FormFields" onSubmit = {this.submitHandler.bind(this)}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" 
                id="name" 
                className="FormField__Input" 
                placeholder="Enter your full name" 
                name="name"
                value = {this.props.name}
                onChange={this.props.change}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" 
                id="password" 
                className="FormField__Input" 
                placeholder="Enter your password" 
                name="password"
                value = {this.props.password}
                onChange={this.props.change}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" 
                id="email" 
                className="FormField__Input" 
                placeholder="Enter your email" 
                name="email"
                value = {this.props.email}
                onChange={this.props.change}
                />
              </div>

        
              <div className="FormField">
                  <button 
                  type = "submit"
                  className="FormField__Button mr-20"
                  onClick = {this.props.signUp}>Sign Up</button> 
              </div>
            </form>
            </div>
            </Aux>

        )
    }
}
export default SignUp; 