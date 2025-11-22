import React from 'react';
import MyContainer from '../../components/MyContainer';
import Banner from './Banner';
import HowItWorks from '../others/HowItWorks';
import OurServices from '../others/OurServices';

const Home = () => {
    return (
        <MyContainer>
            <Banner />
            <HowItWorks />
            <OurServices/>
        </MyContainer>
    );
};

export default Home;