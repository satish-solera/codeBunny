import React from 'react'
import news from '../images/news.jpeg'
import {Link } from 'react-router-dom'

function marketNews() {
  return (
    <>
     <div className="topBar list-none flex gap-2 justify-between mt-4">
        <li >
            IT
        </li>
        <li>
            Elon Musk
        </li>
        <li>
            AI
        </li>
     </div>

     <div className="todayNews">
        <div className="newsBox h-[20rem] w-[30rem] border-2 border-gray-100 p-1">
            <div className="img">
            <Link to='/news'>
            <img className='object-cover h-[15rem] w-[30rem]' src={news} alt='newsImage'></img>
            </Link>
            </div>
            <div className="info">
              Lorem, ipsum.
            </div>
        </div>
     </div>
    </>
  )
}

export default marketNews