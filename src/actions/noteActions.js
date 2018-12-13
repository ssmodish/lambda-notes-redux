import { FETCH_NOTES, NEW_NOTE } from './types';
import axios from "axios";

export const fetchNotes = () => dispatch => {
  axios
    .get('https://peaceful-sands-23658.herokuapp.com/notes')
    .then(res => res.data)
    .then(notes => dispatch({
      type: FETCH_NOTES,
      payload: notes
    }))
    .catch(error => console.log(error)
  );
}

export const createNote = (noteData) => dispatch => {
  axios
    .post('https://peaceful-sands-23658.herokuapp.com/notes', noteData)
    .then(res => res.data)
    .then(note => dispatch({
      type: NEW_NOTE,
      payload: note
    }))
    .catch(error => console.log(error));
}