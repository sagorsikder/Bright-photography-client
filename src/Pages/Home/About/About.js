import React from 'react';

const About = () => {

    return (
        <div className="hero my-12">
  <div className="hero-content flex flex-col">
   <div className='relative h-full mb-12 w-1/2'>

     <img src='https://th.bing.com/th/id/R.e0eb4a9c301a4839479331db2e5318c6?rik=%2bhGt%2f8JuvwAhMw&pid=ImgRaw&r=0' alt='good' className="w-4/5 h-full max-w-sm rounded-lg shadow-2xl" />
     <img src='https://th.bing.com/th/id/OIP.PvVjgQdea-ruiFkLkbtk1AHaE8?pid=ImgDet&w=800&h=534&rs=1' alt='good' className="max-w-sm absolute right-12  top-1/3 border-8 w-1/2 rounded-lg shadow-2xl" />

     </div>
    <div className='w-1/2'>
        <h4 className='text-orange-600 font-bold text-xl mb-2'>About Us</h4>
      <h1 className="text-5xl font-bold">I am qualified <br />
       & of experience <br /> in this field</h1>
      <p className="py-6">Photography is my emotion,hobby,passion,profession.Always i was try to best performance,and i have services with low cost. </p>

      <p className="py-6">Wedding,birthday party,consert etc,all event handle with my Gorgeous camera and my team.Maximum client satisfied with me. </p>
      <button className="btn btn-warning rounded text-white"> More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;