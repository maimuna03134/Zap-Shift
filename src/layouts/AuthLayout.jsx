import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import MyContainer from '../components/MyContainer';
const AuthLayout = () => {
    return (
        <MyContainer>
              <div>
        <Logo />
        <div className='flex'>
          <div className='flex-1'>
            <Outlet />
          </div>
          <div className='flex-1'>
            <img src={authImg} alt="" />
          </div>
        </div>
      </div>
        </MyContainer>
    
    );
};

export default AuthLayout;