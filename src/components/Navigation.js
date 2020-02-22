import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav nav-pills">
            

            <li className="nav-item">
                <NavLink exact className="nav-link " to="/" activeClassName="active"> Home</NavLink>            
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link " to="/posts" activeClassName="active"> Posts </NavLink>           
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link " to="/posts/create" activeClassName="active"> New Post </NavLink>            
            </li>
            
        </div>
    )
}

export default Navigation