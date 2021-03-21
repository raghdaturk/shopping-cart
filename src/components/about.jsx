import React, { Component } from 'react';
import { Route } from 'react-router';
import {  NavLink } from 'react-router-dom';
import Company from '../company';
import Team from '../ourteam';

class About extends Component {
    state = {  }
    render() { 

        return ( 
            <>
            <h1>About Us</h1>
            <div className="row">

                <div className="col-3">
                    <ul>

                    <li>   <NavLink to ="/about/ourTeam">Our Team </NavLink> </li>
                    <li>  <NavLink to="/about/ourCompany">Our Company</NavLink> </li>

                    </ul>
                    </div>

                    <div className="col">
                        
                        <Route path="/about/ourTeam" component={Team}/>
                        <Route path="/about/ourCompany" component={Company}/>
                </div>
            </div>


            </>

         );
    }
}
 
export default About;