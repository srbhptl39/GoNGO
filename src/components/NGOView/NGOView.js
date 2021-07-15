import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';
//import history from '../../history';
import '../Post/Post.css';
class NGOView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div className="container">
        <form className="cardc col">
          <h2>Let the world know you!</h2>
          <div class="card-image">
            {/* <label for="img">Upload a picture</label> */}
            <br></br>
            <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleChange} />
            <br></br>
            <br></br>
            <img src={this.state.file} width="380" />
          </div>

          <div className="card-text">
            <label for="description">Description</label>
            <br></br>
            <textarea id="description" rows="5" cols="44" />
          </div>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default NGOView;