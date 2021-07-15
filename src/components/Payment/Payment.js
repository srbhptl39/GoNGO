import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../history';
import NavBar from '../Navbar/Navbar';
import pay from  './paymetn.png'


class Payment extends Component {
    render() {

        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <img src={pay}></img>
                </div>

            </div>

        );
    }
}

export default Payment;