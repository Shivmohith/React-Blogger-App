import React from 'react';
import {categories, categoryAll} from '../data/store'


const Categories = (props) => {

    const categoriesWithAll = [categoryAll, ...categories]
    return (<div>
        <div> 
            <h2>Categories</h2>
        </ div>
        <div className="list-group">
            {categoriesWithAll.map(c => <button onClick={() => props.onCategorySelect(c)} type = "button" key={c.id} className="list-group-item list-group-item-action"> {c.name} </button>)}
        </div>
    </div>);
}

export default Categories;