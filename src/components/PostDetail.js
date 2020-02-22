import React from 'react';
import postService from '../services/PostService';


class PostDetail extends React.Component {

    state = {
        post: null
    }
    
    async componentDidMount() {
        try {
        const post = await postService.get(parseInt(this.props.match.params.id));
        this.setState({ 
            post: post
        });
    } catch (error) {
        console.log('Get by Id failed');
        console.log('Error:',error);
    }
    }

    handlePostDelete = async () => {
        try {
            if (window.confirm('Are you sure you want to delete?')) {
                await postService.delete(this.state.post.id);
                this.props.history.push('/posts');
            }
    } catch (error) {
        console.log('Post Delete failed');
        console.log('Error:',error);
    }
    }

    render() {
        if(!this.state.post) {
            return (
                <div>
                    Loading post. Please wait...
                </div>
            )
        }

        return (
            <div className="shadow p-3 mb-5 bg-white roundedd">
                <div className="card-header">
                <h5>
                    {this.state.post.title}
                </h5>
                </div>
                <div className="card-body">
                <p className="card-text">
                    {this.state.post.content}
                </p>
                <p className="card-text">Author: <em>
                    {this.state.post.author}
                    </em></p>
                <p className="card-text">Category: <em>
                    {this.state.post.category}
                    </em></p>
                </div>
                <div className="card-footer">
                <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
                <button onClick ={this.handlePostDelete} className="btn btn-sm btn-outline-danger mr-1" type="button">Delete</button>
                <button onClick = {this.props.history.goBack}className="btn btn-sm btn-outline-info" type="button">Back</button>
                </div>
            </div>
        );
    }
}

export default PostDetail 