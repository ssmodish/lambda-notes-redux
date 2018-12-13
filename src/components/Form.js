import React, { Component } from 'react'
import axios from "axios";

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

    const post = { 
      title: this.state.title,
      textBody: this.state.textBody
    }

    axios
      .post('https://peaceful-sands-23658.herokuapp.com/notes', post)
      .then(res => console.log(res))
      .catch(error => console.log(error));
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

export default Form;