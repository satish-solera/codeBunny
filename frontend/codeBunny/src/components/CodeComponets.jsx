import React from 'react'
import btn from '../images/btn.jpeg'

function CodeComponets() {
  return (
    <>
    <div className="codesComponets flex justify-around mt-3  ">
        <div className="box1 bg-gray-200 w-[20rem] h-[12rem] align-center ">
             <div className=" text-center w-[18rem] h-[10rem] hover:transform hover:translate-x-4 hover:translate-y-4 hover:bg-blue-400 hover:text-white hover:ease-out">
              Button
             </div>
          </div>
          <div className="box2 bg-gray-200 w-[20rem] h-[12rem] align-center ">
        <div className="box2 text-center w-[18rem] h-[10rem] hover:transform hover:translate-x-4 hover:translate-y-4 hover:bg-blue-400 hover:text-white hover:ease-out">
             box2
        </div>
        </div>

        <div className="box3 bg-gray-200 w-[20rem] h-[12rem] align-center ">
        <div className="box3 text-center w-[18rem] h-[10rem] hover:transform hover:translate-x-4 hover:translate-y-4 hover:bg-blue-400 hover:text-white hover:ease-out">
             box3
        </div>
        </div>

    </div>
    
    </>
  )
}

export default CodeComponets