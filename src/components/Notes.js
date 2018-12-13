import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions';

import '../styles/Styles.css';

class Notes extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const singleNotes = this.state.notes.map(note => (
      <div key={note.id} className='note-list--note'>
        <h4>{note.title}</h4>
        <p>{note.textBody}</p>
      </div>
    ))
    return (
      <div>
        <h1>Notes</h1>
        <div className='note-list'>
          {singleNotes}
        </div>
      </div>
    );
  }
}

export default connect(null, {fetchPosts})(Notes);