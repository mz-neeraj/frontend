import './Nav.css';
import React from 'react';
import {Link} from 'react-router-dom'
function Nav()
{
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/"> <b>Add User</b></Link></li>
                <li><Link to="/showUsers"> <b>Show Users</b></Link></li>
            </ul>
        </div>
    );
}
export default Nav;