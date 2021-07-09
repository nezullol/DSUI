import {
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from './types'

import axios from 'axios';
import { arrayInsert } from 'redux-form';


export function fetchRecentPosts() {
    return function(dispatch)
   { 
       //preform our requests here
    axios.get('https://api.dailysmarty.com/posts').then(response => {
        console.log(response.data.posts);
        dispatch({
            type: SET_RECENT_POSTS,
            payload: response.data.posts
        })
    })

    }
}

export function fetchPostsWithQuery(query) {
    return function(dispatch)
   { 
       //preform our requests here
    axios.get(`https://api.dailysmarty.com/search?q=${query}`).then(response => {
        const results = response.data.posts

        for (var i = 0; i < results.length; i++) {
            console.log(results[i].title);
        }
        
        dispatch({
            type: SET_RESULTS_POSTS,
            payload: response.data.posts
        })
    })

    }
}
