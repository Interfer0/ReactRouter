import React, { Component } from 'react';
import './css/myStyle.css';
import {Link} from 'react-router';
//react router link
class Top extends Component {
    render() {
        return ( 
            <div className="topbar">
                < div className="Logo" >
                </div>
                <div className="Nav" >
                    {/* Add links here */}
                    <Link to='/' className="tbLink">Home</Link>
                    <Link to='/Goals' className="tbLink">Goals</Link>
                    <Link to='/Classes' className="tbLink">Class</Link>
                </div> 
            </div>
            
        );
    }
}


export default Top;