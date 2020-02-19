import React from 'react';

const Home = (props) => {
    return (
        <div>
            <h3> Blogger App Home</h3>
            <button className="btn btn-sn btn-outline-info mr-2" onClick = { () => props.history.push('/posts') }> Go to Posts</button>
            <button className="btn btn-sn btn-outline-info" onClick = { () => props.history.push('/create-new-post') }> Create a Post</button>
            
        </div>
    )
}

export default Home;