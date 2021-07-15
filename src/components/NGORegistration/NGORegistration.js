import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../history';

// import './stylesignup.css';

class NGORegistration extends Component {
  render() {
    return (
      <div className="bodyd">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="containerd" id="container">
          <div className="form-containerd signup-containerd">
            <form className="formd" action="#">
              <h1 className="h1d">Sign Up for NGO</h1>
              <input className="inputd"id="name" type="text" placeholder="Name of the organization" />
              <input className="inputd"id="storeid" type="number" placeholder="Visa Store ID" />
              <input className="inputd"id="contact" type="number" placeholder="Contact Number" />
              <input className="inputd"id="website" type="text" placeholder="Website" />
              <input className="inputd"id="email" type="email" placeholder="Email" />
              <input className="inputd"id="password" type="password" placeholder="Password" />
              <input className="inputd"id="confirm-password" type="password" placeholder="Conform Password" />
              <select name="domains" id="domains">
                <option id="ph" value disabled selected hidden>Working Domain</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="relief">Relief Funds</option>
                <option value="environment">Environment</option>
              </select>
              <button className="buttond" type="submit">Sign Up</button>
            </form>

          </div>
          <div className="overlay-containerd">
            <div className="overlayd">
              <div className="overlay-paneld overlay-rightd">
              <h1 className="h12d" >GoNGO</h1>
              <h2 className="h22d" >powered by VISA</h2>
                <p />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default NGORegistration;