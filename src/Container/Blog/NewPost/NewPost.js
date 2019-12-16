import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        description: '',
        submitted: false
    }

    componentDidMount () {
        console.log( this.props );
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            description: this.state.description,
        };
        axios.post( 'http://localhost:3000/api/blogs', data )
            .then( response => {
                console.log( response );
                this.props.history.replace('/posts');
                // this.setState( { submitted: true } );
            } );
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Article</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={( event ) => this.setState( { title: event.target.value } )} />
                <label>Description</label>
                <textarea rows="4" value={this.state.description} onChange={( event ) => this.setState( { description: event.target.value } )} />
                <button onClick={this.postDataHandler}>Add Article</button>
            </div>
        );
    }
}

export default NewPost;