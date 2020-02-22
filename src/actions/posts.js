import {PostActions} from '../constants'

export const beginGetPost = () => {
    return (
        {
            type: PostActions.GET_POSTS_BEGIN
        }
    );
}

export const endGetPost = (posts) => {
    return (
        {
            type: PostActions.GET_POSTS_END,
            payload: posts
        }
    )
}
export const createPost = () => {
    return (
        {
            type: PostActions.CREATE_POSTS, /* type is a keyword */
            payload: post      /* payload is not a keyword */
        }
    )
}