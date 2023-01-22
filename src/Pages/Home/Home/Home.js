import React from 'react';
import About from '../About/About';
import Achivement from '../Achivement/Achivement';
import Banner from '../Banner/Banner';
import MiniCategory from '../../MiniCategory/MiniCategory'
import Roadmap from '../Roadmap/Roadmap';
import useTitle from '../../../Hooks/useTitle';


const Home = () => {
    useTitle('Home')
    return (
        <div>

           <Banner></Banner>
           <MiniCategory></MiniCategory>
           <About></About>
           <Achivement></Achivement>
           <Roadmap></Roadmap>
        
        </div>
    );
};

export default Home;