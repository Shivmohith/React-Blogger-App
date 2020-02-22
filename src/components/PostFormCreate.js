import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormCreate extends Component {
  handleSubmit = async post => {
    try {
    delete post.id;
    await postService.create(post);
    this.props.history.push('/posts');
    } catch (error) {
      console.log('Creation of post failed');
      console.log('Error:',error);
    }
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormCreate;