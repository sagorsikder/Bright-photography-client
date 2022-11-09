import React from 'react';
import About from '../About/About';
import Achivement from '../Achivement/Achivement';
import Banner from '../Banner/Banner';
import Category from '../Category/Caregory';
import Roadmap from '../Roadmap/Roadmap';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <About></About>
           <Achivement></Achivement>
           <Roadmap></Roadmap>
        
        </div>
    );
};

export default Home;