import React from "react";
import {Link} from 'react-router-dom'

function InterviewComponet() {
  return (
    <>
      <div className="mainInt flex justify-around mt-10">
      <div className="inetriewInfo bg-red-300 w-[40rem] text-start ml-2">
        <h1 className="ml-2 mt-2">
            interview is an part of our life.
        </h1>
      </div> 

      <div className="topINTrounds text-center ">
        <Link to='/interview'><h1 className="h-8 w-48 bg-red-200  my-1 hover:bg-gray-200 ">System Design</h1></Link>
        <Link to=''><h1 className="h-8 w-48 bg-red-200 my-1  hover:bg-gray-200">Coding round</h1></Link>
        <Link to=''><h1 className="h-8 w-48 bg-red-200 my-1  hover:bg-gray-200">UI design</h1></Link>
      </div>
      </div>
    </>
  );
}

export default InterviewComponet;
