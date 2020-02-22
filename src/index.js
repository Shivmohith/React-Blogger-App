import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import appReducer from './reducers';
import thunk from 'redux-thunk';


const appStore = createStore(appReducer, 
                            compose(applyMiddleware(thunk),
                                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
<Provider store = {appStore}>
<BrowserRouter>
    <App />
</BrowserRouter>

</Provider>,
document.getElementById('root')
); /* first parameter is JSX and put/render the JSX(HTML) code inside the second parameter (div tag)
      first parameter is JSX, not HTMl, though it looks like it. This JSX is converted (by React library) into 
      React.createElement("div", 
                           null, 
                           React.createElement("h1", null, " Blogger App "), 
                           React.createElement("p", null, " A simple blogging app in React! ")); */ 
// ReactDOM.render(<h1> Blogger App </h1>, document.querySelector('#root')); // another way




