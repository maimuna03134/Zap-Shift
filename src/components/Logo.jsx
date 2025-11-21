import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Logo = () => {
    return (
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <span className="text-2xl font-bold bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            ZapShift
          </span>
        </div>
      </Link>
    );
};

export default Logo;