import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {

    return (
        <div className="hero my-12">
  <div className="hero-content flex flex-col">
   <div className='relative h-full mb-12 w-1/2'>

     <img src={person} alt='good' className="w-4/5 h-full max-w-sm rounded-lg shadow-2xl" />
     <img src={parts} alt='good' className="max-w-sm absolute right-12  top-1/3 border-8 w-1/2 rounded-lg shadow-2xl" />

     </div>
    <div className='w-1/2'>
        <h4 className='text-orange-600 font-bold text-xl mb-2'>About Us</h4>
      <h1 className="text-5xl font-bold">We are qualified <br />
       & of experience <br /> in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-warning rounded text-white">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;