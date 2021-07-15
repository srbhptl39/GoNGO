import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../history';
// import './stylesignup.module.css';
import './stylesignup.css';


class DonorRegistration extends Component {
  render() { 
    return (
      <div className="bodyd">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="containerd" id="container">
          <div className="form-containerd signup-containerd">
            <form className="formd" action="#">
              <h1 className="h1d" >Sign Up for Donor</h1>
              <input className="inputd"  id="name" type="text" placeholder="Full Name" />
              <input className="inputd" id="contact" type="number" placeholder="Contact Number" />
              <input className="inputd" id="email" type="email" placeholder="Email" />
              <input className="inputd" id="password" type="password" placeholder="Password" />
              <input className="inputd" id="confirm-password" type="password" placeholder="Confirm Password" />
              <div className="domains">
                <label htmlFor="domain">Interested Domains</label>
                <br />
                <input className="inputd" type="checkbox" id="choice1" name="domain" defaultValue="Education" />
                <label htmlFor="choice1"> Education</label><br />
                <input className="inputd" type="checkbox" id="choice2" name="domain" defaultValue="Healthcare" />
                <label htmlFor="choice2"> Healthcare</label><br />
                <input className="inputd" type="checkbox" id="choice3" name="domain" defaultValue="Relief funds" />
                <label htmlFor="choice3"> Relief Funds</label><br />
                <input className="inputd" type="checkbox" id="choice4" name="domain" defaultValue="Environment" />
                <label htmlFor="choice4"> Environment</label><br />
              </div>
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

export default DonorRegistration;