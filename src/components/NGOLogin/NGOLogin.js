import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../history';
import classnames from 'classnames';
import s from './NGOLogin.module.css';
// import {Helmet} from 'react-helmet';

class NGOLogin extends Component {
  render() {
    return (
      <div className={s.bodyc }>
        {/* <Helmet>
          <title>My Tchjitle</title>
          <link rel="stylesheet" href="NGOLogin.css" />
        </Helmet> */}
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className={s.container} id="container">
          <div className={classnames(s.formcontainer ,s.logincontainer)}>
            <form className={s.formc } action="#">
              <h1 className={s.h1c }>Login</h1>
              <div className={s.socialcontainer }>
                <a className={s.ac } href="#" className="social"><i className="fa fa-facebook fa-2x" /></a>
                <a  className={s.ac } href="#" className="social"><i className="fab fa fa-twitter fa-2x" /></a>
              </div>
              <span className={s.spanc }>or use your account</span>
              <input className={s.inputc } id="email" type="email" placeholder="Email" />
              <input className={s.inputc } id="password" type="password" placeholder="Password" />
              <a className={s.ac } href="#">Forgot your password?</a>
              <div style={{"display":'flex'}}> 
                <button className={s.buttonc }>Donor Log In</button>
              <button className={s.buttonc }>NGO Log In</button></div>
              
            </form>
          </div>
          <div className={s.overlaycontainer}>
            <div className={s.overlay}>
              <div className={classnames(s.overlaypanel, s.overlayright)}>
                <h1 className={s.h1c }>GoNGO Login Portal</h1>
                {/* <p /> */}
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}



export default NGOLogin;