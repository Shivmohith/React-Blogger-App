import React from 'react';
import Header from './Header';
import Posts from './Posts';
import {Route} from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import PostDetail from './PostDetail';

const App = () => 
    <div className="container">
        <Header />

        <Route exact path = "/" component={Home} />
        <Route exact path = "/posts" component={Posts} />
        <Route path = "/posts/:id" component={PostDetail} />
        <Route path = "/create-new-post" component={PostForm} />
        
    </div>

export default App;