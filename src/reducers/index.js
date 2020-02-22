import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import postReducer from './postsReducer';

const appReducer = combineReducers({
    posts: postReducer, 
    categories: categoriesReducer
});

export default appReducer;
