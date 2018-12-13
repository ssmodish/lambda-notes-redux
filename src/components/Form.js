import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createNote } from '../actions/noteActions';

class Form extends Component {
  
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  }
  
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    const note = { 
      title: this.state.title,
      textBody: this.state.textBody
    }

    this.props.createNote(note);
  }

  render() {
    return (
      <div>
        <h1>Add Note</h1>
          <form onSubmit={this.handleSubmit} className="input-form">
          <input onChange={this.handleInputChange} value={this.state.title} type="text" name="title" className="title" placeholder='Note Title'/>
          <br/>
          <textarea onChange={this.handleInputChange} value={this.state.textBody} className='textBody' name='textBody' placeholder="Note Content">
          </textarea>
          <br/>
          <button type="submit" className='button'>Save</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  createNote: PropTypes.func.isRequired
};

export default connect(null, { createNote })(Form);