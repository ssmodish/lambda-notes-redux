import { FETCH_POSTS, NEW_POST } from './types';
import axios from "axios";

export const fetchPosts = () => dispatch => {
  axios
    .get('https://peaceful-sands-23658.herokuapp.com/notes')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
    .catch(error => console.log(error)
  );
}