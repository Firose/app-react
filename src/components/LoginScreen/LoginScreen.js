import React, {Component} from 'react';
import './LoginScreen.css'
import Aux from '../../hoc/Aux';
import {NavLink,Route,Redirect, Switch, Link} from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Blog from '../../Container/Blog/Blog';
import axios from 'axios';
import AuthContext from '../../Context/authContext';


class LoginScreen extends Component{
    constructor(props){
        super();
        this.state = {
        name: '',
        password: '',
        email: '',      
        submitted: false}      
        this.signOutHandler = this.signOutHandler.bind(this)
                             
    }
    
    componentDidMount(){
        console.log(this.props)
        if(localStorage.getItem('email') !== null && localStorage.getItem('password') !== null) {
            this.setState(
                {submitted: true}
            )
        } else {
            this.setState({submitted: false})
        }
    }
    signUpHandler = () =>{
        const user = {
             name: this.state.name,
             email: this.state.email,
             password: this.state.password
             
         }
         axios.post("http://localhost:3000/api/users" , user)
         .then(response => {
             console.log(response.data.remember_token);

           if(response.status === 201){
 
                 this.setState({submitted: true});
             }
             else if(response.status === 204){
                 alert("Mail Already Exists")
 
             }
         })
             .catch(error => {
                 console.log(error)
             }); 
 
          }

          signInHandler = () =>{

            const auth = {
                email: this.state.email,
                password: this.state.password,
                // token: localStorage.token
            }
            axios.post("http://localhost:3000/api/sign_in" , auth)
            .then(response =>{
                console.log(response);
                if(response.status === 200){
                    // localStorage.getItem('')
                    this.setState({submitted: true});
                    localStorage.setItem('email', this.state.email);
                    localStorage.setItem('password', this.state.password);

                }
                else if(response.status === 204){
                    alert("Mail Already Exists")
    
                }
            });
                
        }

        signOutHandler = (e)=>{
            axios.delete("http://localhost:3000/api/sign_out")
            .then(response =>{
                    console.log(response);
                    if(response.status === 200)
                    this.setState({submitted: !this.state.submitted});
                    localStorage.removeItem('email');
                    localStorage.removeItem('password')
                    this.props.history.push('/')
                })
    
        }

        onChangeHandler = (event) =>{
            
            this.setState( { [event.target.name]: event.target.value} )

        }
          

    

    render(){
        return(
            
<Aux>
    {this.state.submitted?
        // <div>
        //     <Switch>
        //         <Route path="/blog" render={(props) =>
        //         <Blog sign_out ={this.signOutHandler} />
        //     } /> 
        //     </Switch>
        //     <Redirect to="/blog" />
        // </div> 
        <Blog sign_out={this.signOutHandler} />:
    <div className="LoginScreen">
        <div className = "LoginScreen__Aside"></div>
        <div className = "LoginScreen__Form">
        <div className = "PageSwitcher">
            <NavLink to ="Sign_In" activeClassName = "PageSwitcher__Item--Active" className ="PageSwitcher__Item ">SignIn</NavLink>
            <NavLink exact to= "/" activeClassName = "PageSwitcher__Item--Active" className ="PageSwitcher__Item ">SignUp</NavLink>
        </div>
        <div className = "FormTitle ">
        <NavLink to ="/Sign_In"  activeClassName ="FormTitle__Link--Active" className ="FormTitle__Link">SignIn</NavLink> or
            <NavLink exact to ="/" activeClassName ="FormTitle__Link--Active" className ="FormTitle__Link">SignUp</NavLink>

        </div>
        <Switch> <Route exact path="/"  render={(props) => <SignUp {...props} 
            signUp={this.signUpHandler} 
            change = {this.onChangeHandler}
            name= {this.state.name}     
            email = {this.state.email}
            password = {this.state.password}/>}
            />

            <Route path="/Sign_in" render={(props) => <SignIn {...props} 
            signIn={this.signInHandler} 
            change = {this.onChangeHandler}
            email = {this.state.email}
            password = {this.state.password}/>} />
            </Switch>
       
                                  


        </div>
        
        
    </div>}
    </Aux>
    
        );
    }
}
export default LoginScreen;