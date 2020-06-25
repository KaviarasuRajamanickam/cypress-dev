import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';

const Navigation = () => {
    return (
        <div style={{textAlign : 'center', marginBottom : '50px'}}>
            <img src={Logo} style={{height: '40px', marginBottom: '30px'}} alt="Lister"/>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/example1">Example1</NavLink>
                <NavLink to="/example2">Example2</NavLink>
                <NavLink to="/example3">Example3</NavLink>
                <NavLink to="/example4">Example4</NavLink>
                <NavLink to="/example5">Example5</NavLink>
            </nav>
        </div>
    );
}

export default Navigation;