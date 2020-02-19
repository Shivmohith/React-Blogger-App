import React from 'react';
import categoryService from '../services/CategoryService'
import postService from '../services/PostService'

class PostForm extends React.Component {

    state = {
        categories: [],
        title: "",
        author: "",
        content: "",
        category: ""

    }

    componentDidMount() {
        const categories = categoryService.getAll();
        this.setState({ 
            categories: categories 
        });
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    // handleTitleChange = (e) => {
    //     this.setState({ 
    //         title: e.target.value
    //     })
    // }

    // handleContentChange = (e) => {
    //     this.setState({
    //         content: e.target.value
    //     })
    // }

    // handleAuthorChange = (e) => {
    //     this.setState({
    //         author: e.target.value
    //     })
    // }

    // handleCategoryChange = (e) => {
    //     this.setState({
    //         category: e.target.value
    //     })
    // }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const {title, content, author, category} = this.state;
        
        const post = {
            title,
            author,
            content,
            category,
            id: Date.now()
            // title: this.state.title,
            // author: this.state.author,
            // content: this.state.content,
            // category: this.state.category,
        }

        postService.create(post);
        this.props.history.push('/posts');
    }

    render() {

        const {title, author, content, category, categories} = this.state;

        // const title = this.state.title;
        // const author = this.state.author;
        // const content = this.state.content;
        // const category = this.state.category;
        // const categories = this.state.categories;
        return (
              
            <div>
                <h3 className="mr-3">Post Form</h3>
            
                <div className="card bg-light">
                <div className="card-body">
                    <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input required onChange={this.handleChange} type="text" className="form-control" id="title" name="title" placeholder="Enter title" value={title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea required onChange={this.handleChange} type="text" className="form-control" id="content" name="content" placeholder="Enter content" rows="3" cols="30" value={content}>
                            
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input required onChange={this.handleChange} type="text" className="form-control" id="author" name="author" placeholder="Enter author" value={author}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select required onChange={this.handleChange} className="form-control" id="category" name="category" value={category}>
                        <option value="">-Select Category-</option>
                        {categories.map(c => 
                            <option key={c.id} value={c.name}>{c.name}</option> 
                            )}
                        </select>
                    </div>
            
                    <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
                </div>
          
          </div>

        );
    }
}

export default PostForm;