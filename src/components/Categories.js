import React from 'react';
import {categoryAll} from '../constants/index';
import categoryService from '../services/CategoryService'

class Categories extends React.Component {
    
    state = {
        categories: []
    }
    // constructor() {
    //     super();

    //     this.state = {
    //         categories: []
    //     }
    // }

    componentDidMount() {
        const categories = categoryService.getAll();
        this.setState({
            categories: categories
        })
    }
    

    render() {

        const categoriesWithAll = [categoryAll, ...this.state.categories];
        return (
        <div>
            <div> 
                <h3 className="text-center">Categories</h3>
            </ div>
            <div className="list-group">
                {categoriesWithAll.map(c => <button onClick={() => this.props.onCategorySelect(c)} type = "button" key={c.id} className="list-group-item list-group-item-action"> {c.name} </button>)}
            </div>
        </div>
        )
    }
}



export default Categories;