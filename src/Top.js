import React, { Component } from 'react';
import './css/myStyle.css';

class Top extends Component {
    render() {
        return ( 
            <div className="topbar">
                < div className="Logo" >
                </div>
                <div className="Nav" >
                    {/* Add links here */}
                    <a className="tbLink" href='./'>Home</a>
                    <a className="tbLink" href='./Goals'>Goals</a>
                    <a className="tbLink" href='./Classes'>Class</a>
                </div> 
            </div>
            
        );
    }
}


export default Top;