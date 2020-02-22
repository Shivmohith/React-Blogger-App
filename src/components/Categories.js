import React from 'react';
import {categoryAll} from '../constants/index';
// import categoryService from '../services/CategoryService'
import { connect } from 'react-redux';
class Categories extends React.Component {
    
    // state = {
    //     categories: []
    // }
    // constructor() {
    //     super();

    //     this.state = {
    //         categories: []
    //     }
    // }

    // async componentDidMount() {
    //     try {
    //         const categories = await categoryService.getAll();
            
    //         this.setState({
    //             categories: categories
    //         })
    //     } catch (error) {
    //         console.log('Get all categories failed');
    //         console.log('Error: ',error);
    //     }
    // }
    

    render() {

        const categoriesWithAll = [categoryAll, ...this.props.categories];
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


const mapStateToProps = state => {
    return {
        categories: state.categories
    };
};
export default connect(mapStateToProps, null)(Categories);