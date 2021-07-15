import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../history';
class DonorLogin extends Component {
    render(){
        return (
            <div>
                <h1>Donor Login</h1>
                <div>
              <form>
                <Button variant="btn btn-success" onClick={() => history.push('/DonorRegistration')}>Register Here</Button>
                <Button variant="btn btn-success" onClick={() => history.push('/DonorView')}>Login</Button>
              </form>
            </div>
            </div>
        );
    }
}

export default DonorLogin;