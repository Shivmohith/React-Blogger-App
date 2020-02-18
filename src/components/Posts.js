import React from 'react';
import PostDetail from './PostDetail'
import {posts} from '../data/store.js'

// const posts = [
//     {
//         id : 1,
//         title : "Introduction to Quantum Physics",
//         author : "Bill",
//         category : "Quantum",
//         content : "A deep dive into the Quantum World"
//     },
//     {
//         id : 2,
//         title : "Introduction to Classical Physics",
//         author : "Jake",
//         category : "Classical",
//         content : "A deep dive into the Classical Physics"  
//     }
// ]

// const transformToJSX = (jsObject) => {
//     return (
//     <div key={jsObject.id}>
//         <div>
//             <h4>Title: {jsObject.title}</h4>
//         </div>
//         <div>
//             <h4>Author: {jsObject.author}</h4>
//         </div>
//         <div>
//             <h4>Category: {jsObject.category}</h4>
//         </div>
//         <div>
//             <p>{jsObject.content}</p>
//         </div>
//         <hr />
//     </div>
//     );
// }

// const postsJSX = posts.map(transformToJSX) 

const Posts = () => 
    <div>
        {posts.map(p => <PostDetail key={p.id} post={p} />)}
    </div>

export default Posts;