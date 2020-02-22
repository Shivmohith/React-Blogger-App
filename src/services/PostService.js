// import { posts } from '../data/store';
import {apiBaseUrl} from '../constants';

class PostService {

  apiPostsUrl  = `${apiBaseUrl}/posts`;

  getAll() {
    return fetch(this.apiPostsUrl)
            .then(response => {
                return response.json()
            });

  }

  get(id) {
    // const post = posts.find(p => p.id === id);
    // return post;
    const apiPostUrl = `${this.apiPostsUrl}/${id}`;
    return fetch(apiPostUrl)
              .then(response => response.json());
  }

  create(post) {

    return fetch(`${this.apiPostsUrl}`,{
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json'}})
            .then(response => {
              return response.json();
            })
    // post.id = Date.now();
    // posts.push(post);
    // return post;
  }

  update(post) {
    return fetch(`${this.apiPostsUrl}/${post.id}`,{
      method: 'PUT',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json'}})
          .then(response => {
            return response.json();
          })
  }

  delete(id) {
    // const index = posts.findIndex(p => p.id === id)

    // if (index >= 0) {
    //   posts.splice(index, 1);
    // }
    return fetch(`${this.apiPostsUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(response => 
        {return response.json()
        })
  }
}

const serviceInstance = new PostService();
export default serviceInstance;