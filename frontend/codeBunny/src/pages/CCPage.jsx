import React, { useState } from "react";
import { Link } from "react-router-dom";
import news from '../images/news.jpeg'

const componet = [
  {
    nameOfComponets: "button with animation",
    codeOfComponets: "animator ",
    imgUrl: "http//abc.png",
  },

  {
    nameOfComponets: "form",
    codeOfComponets: "form",
    imgUrl: "http//form.png",
  },

  {
    nameOfComponets: "animator button",
    codeOfComponets: "button",
    imgUrl: "http//buttn.png",
  },

  {
    nameOfComponets: "kbc",
    codeOfComponets: "animatorlabel",
    imgUrl: "http//label.png",
  },
 
  {
    nameOfComponets: "kbc",
    codeOfComponets: "animatorlabel",
    imgUrl: "http//label.png",
  },

  {
    nameOfComponets: "kbc",
    codeOfComponets: "animatorlabel",
    imgUrl: "http//label.png",
  },
  {
    nameOfComponets: "kbc",
    codeOfComponets: "animatorlabel",
    imgUrl: "http//label.png",
  },

  
  {
    nameOfComponets: "kbc",
    codeOfComponets: "animatorlabel",
    imgUrl: "http//label.png",
  },

  {
    nameOfComponets: "kbc",
    codeOfComponets: "animatorlabel",
    imgUrl: "http//label.png",
  },
  
];

function CCPage() {
  const [componets, setComponets] = useState(componet);
  return (
    <>
      <div className="mainCompontes ">
        {componets.length > 0 ? (
          <div className="  flex flex-wrap  gap-4 justify-evenly mt-5">
            {componets.map(({ nameOfComponets, codeOfComponets, imgUrl }) => {
              return (
                <div className="box2 border border-3 border-black bg-gray-200 w-[20rem] ">
                  <div className="  hover:transform hover:translate-x-1 hover:translate-y-2 hover:bg-blue-400 hover:text-white w-[10rem] text-center">
                    <div className="img ">
                      <Link to="/news">
                        <img className='object-cover h-[15rem] w-[30rem]' src={news} alt='newsImage'></img>
                      </Link>
                    </div>
                    <div className="   ">{nameOfComponets}</div>
                    <Link to={"/"}>
                      <h1>{codeOfComponets}</h1>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div> 

        ) : (
          <h1>you dont have any componets</h1>
        )}

        

       
      </div>
    </>
  );
}

export default CCPage;
