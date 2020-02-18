import React from 'react';
import PostDetail from './PostDetail'
import {posts, categoryAll} from '../data/store.js'
import Categories from './Categories'

class Posts extends React.Component {

    constructor() {
        super();
        
        this.state = {
            posts: posts,
            selectedCategory: categoryAll
        };

        this.handleCategorySelect = this.handleCategorySelect.bind(this);
    }

    handleCategorySelect(selectedCategory) {
        this.setState({
            selectedCategory: selectedCategory
        });
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
                {filteredPosts.length > 0 ? filteredPosts.map(p => <PostDetail key={p.id} post={p} />) : <div className="alert alert-info"> No posts found for this category </div>}
            </div>
        </div> 
        );
    }
}

export default Posts;
