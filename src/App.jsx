import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import TaskBoard from './task/TaskBoard';

const App = () => {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
    <Header></Header>
    <div className=" flex flex-col justify-between items-center">
      <Hero></Hero>
    <TaskBoard></TaskBoard>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default App;