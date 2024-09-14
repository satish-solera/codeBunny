import React from 'react'
import InterviewComponet from '../components/InterviewComponet'
import {Link} from 'react-router-dom'


function InterviewPage() {
  return (
    <>
      <div className="">
      
        <div className="topINTrounds text-center ">
        <Link to='/interview/systemdesign'><h1 className="h-8 w-48 bg-red-200  my-1 hover:bg-gray-200 ">System Design</h1></Link>
        <Link to=''><h1 className="h-8 w-48 bg-red-200 my-1  hover:bg-gray-200">Coding round</h1></Link>
        <Link to=''><h1 className="h-8 w-48 bg-red-200 my-1  hover:bg-gray-200">UI design</h1></Link>
      
      </div>

      </div>
    </>
  )
}

export default InterviewPage