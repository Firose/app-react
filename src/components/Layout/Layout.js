import React, {Component} from 'react';
import axios from 'axios';
import LoginScreen from '../LoginScreen/LoginScreen';
import {Route} from 'react-router-dom';

class Layout extends Component{
    constructor(props){
        super(props)

        }

    render()
    {
        return(
            <div>
                <Route  path = "/" component = {LoginScreen}/>
        </div>

        )
    }
   
    
}
export default Layout;