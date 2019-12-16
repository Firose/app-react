import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import AuthContext from '../../Context/authContext';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    constructor(props){
        super(props);{
            this.logOutHandler = this.logOutHandler.bind(this);
        }
    }
logOutHandler=()=>{
    this.props.sign_out();
}

    render () {
        return (
            <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}} className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Articles</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Article</NavLink></li>
                            <li><NavLink to={{
                                path: '/logout'
                            }}
                            onClick ={()=> this.logOutHandler()}>
                            Log Out</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;