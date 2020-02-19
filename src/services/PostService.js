import {posts} from '../data/store';

class PostService {
    getAll() {
        return posts;
    }

    get(postId) {
        const post = posts.find(post => post.id === postId);
        return post;
    }

    create(newPost) {
        posts.push(newPost);
    }

    update(post) {
        // code to update
        

    }

    delete(postId) {
        // code to delete
        const index = posts.findIndex(post => post.id === postId);
        if (index !== -1) {
            posts.splice(index, 1);
        }
        
    }
}

export default new PostService();