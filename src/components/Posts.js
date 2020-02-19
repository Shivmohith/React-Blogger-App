import React from 'react';
import {categoryAll} from '../constants/index';
import Categories from './Categories';
import postService from '../services/PostService';
import {Link} from 'react-router-dom';
class Posts extends React.Component {

    constructor() {
        super();
        
        this.state = {
            posts: [],
            selectedCategory: categoryAll
        };

        this.handleCategorySelect = this.handleCategorySelect.bind(this);
    }

    componentDidMount() {
        const posts = postService.getAll();
        this.setState({
            posts: posts
        })
    }

    handleCategorySelect(selectedCategory) {
        this.setState({
            selectedCategory: selectedCategory
        });
    }

    handlePostDelete = (postId) => {
        if (window.confirm("Are you sure you want to delete?")){
            postService.delete(postId);
            this.setState((prevState) => {
                const updatedPost = prevState.posts.filter(post => post.id !== postId);
                return {
                    posts: updatedPost
                }
            })
        }
    }

    renderPosts(posts) {

        
        return (
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => 
                            <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.category}</td>
                            <td>
                                <div className="btn-group btn-group-sm">
                                <Link className="btn btn-info" to={`/posts/${post.id}`}>View </Link>
                                <Link className="btn btn-warning" to="/">Edit</Link>
                                <button onClick={() => this.handlePostDelete(post.id)} className="btn btn-danger" to="/">Delete</button>
                                </div>
                            </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
        )
    }

    render() {

        const selectedCategory = this.state.selectedCategory;
        
        const posts = this.state.posts;

        const filteredPosts = selectedCategory.id === 'all' ? posts : this.state.posts.filter(post => post.category === selectedCategory.id);
        return (
        <div className="row">
            <div className="col-3">
                <Categories  onCategorySelect={this.handleCategorySelect}/>
            </div>
            <div className="col">
                <small className="text-muted"> Slected Category: {this.state.selectedCategory.name}</small>
                {filteredPosts.length > 0 ?  this.renderPosts(filteredPosts): <div className="alert alert-info"> No posts found for this category </div>}
            </div>
        </div> 
        );
    }
}

export default Posts;
