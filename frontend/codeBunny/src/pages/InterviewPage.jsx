import React, { useState } from "react";
import InterviewComponet from "../components/InterviewComponet";
import SystemDesign from "./SystemDesign";
import { Link, Navigate } from "react-router-dom";

const int = [
  {
    id: 1,
    interviewQue: "what is an application",
    interviewAns: "application is a data",
  },

  {
    id: 2,
    interviewQue: "what is a jsx",
    interviewAns: "Jsx is kind of componets",
  },

  {
    id: 3,
    interviewQue: "data structres type",
    interviewAns: " 1 - linear , 2 - non-linear",
  },
  {
    id: 4,
    interviewQue: "java is laungage? ",
    interviewAns: "ya jaava is launage that perform amny data",
  },
];

function InterviewPage() {
  const [interview, setInterview] = useState(int);
  return (
    <>
      <div className="">
        <div className="topINTrounds text-center flex justify-normal gap-2 mt-10 ">
          <Link to="/systemdesign">
            <h1 className="h-8 w-48 bg-red-200  my-1 hover:bg-gray-200 ">
              System Design
            </h1>
          </Link>
          <Link to="/codinground">
            <h1 className="h-8 w-48 bg-red-200 my-1  hover:bg-gray-200">
              Coding round
            </h1>
          </Link>
          <Link to="/uidesign">
            <h1 className="h-8 w-48 bg-red-200 my-1  hover:bg-gray-200">
              UI design
            </h1>
          </Link>
        </div>
      </div>

      <div className="interviewQue">
        {interview.length > 0 ? (
          <div className="">
            {interview.map(({ id, interviewQue, interviewAns }) => {
              return (
                <div className="">
                  <div className="interviewQuens ">
                    <h1>que : {id}</h1>
                    <p>que : {interviewQue}</p>
                  </div>
                  <div className="interviewAns">
                    <p>{interviewAns}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1> you dont have any interview quetions</h1>
        )}
      </div>
    </>
  );
}

export default InterviewPage;
