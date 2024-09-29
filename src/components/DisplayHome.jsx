import React from "react";
import Navbar from "./Navbar";
import {albumsData,songsData} from '../assets/assets';
import Albumitem from './Albumitem';
import Songitem from './Songitem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-xl">Featured Chart's</h1>
        <div className="flex overflow-">
        {albumsData.map((item,index)=>(<Albumitem image={item.image} key={index} name={item.name} desc={item.desc} id={item.id} />))}
        </div>
       </div>
       <div className="mb-4">
        <h1 className="my-5 font-bold text-xl">Today's biggest hits</h1>
        <div className="flex overflow-">
        {songsData.map((item,index)=>(<Songitem image={item.image} key={index} name={item.name} desc={item.desc} id={item.id} />))}
        </div>
       </div>
    </>
  );
};

export default DisplayHome;
