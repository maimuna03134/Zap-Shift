import React from 'react';
import MyContainer from '../../components/MyContainer';
import Banner from './Banner';
import HowItWorks from '../others/HowItWorks';
import OurServices from '../others/OurServices';
import Brands from './Brands';
import Reviews from './Reviews';

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
    return (
        <MyContainer>
            <Banner />
            <Brands />
            <HowItWorks />
            <OurServices />
            <Reviews reviewsPromise={reviewsPromise} />
        </MyContainer>
    );
};

export default Home;