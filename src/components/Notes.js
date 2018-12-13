import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';

import '../styles/Styles.css';

class Notes extends Component {
  componentWillMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newNote) {
      setTimeout(this.props.notes.unshift(nextProps.newNote), 500);
    }
  }

  render() {
    const singleNotes = this.props.notes.map(note => (
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

Notes.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
  newNote: PropTypes.object
}

const mapStateToProps = state => ({
  notes: state.notes.items,
  newNote: state.notes.item
});

export default connect(mapStateToProps, {fetchNotes})(Notes);