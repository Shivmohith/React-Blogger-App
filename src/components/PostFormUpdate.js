import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormUpdate extends Component {
  state = {
    post: null
  }

  async componentDidMount() {
    try {
    const post = await postService.get(this.props.match.params.id);
    console.log(post)
    this.setState({ 
        post: post
    });
    } catch (error) {
        console.log('Update failed');
        console.log('Error:',error);
    }
  }

  handleSubmit = async post => {
    try {
    await postService.update(post);
    this.props.history.push('/posts');
    } catch (error) {
      console.log('Update post failed');
      console.log('Error:',error);
    }
  }

  render() {
    return <PostForm
      operation="Update"
      post={this.state.post}
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormUpdate;