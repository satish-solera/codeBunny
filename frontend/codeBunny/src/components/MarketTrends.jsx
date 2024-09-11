import React from 'react'
import market from '../images/MarketTrends.jpeg'
import {Link} from 'react-router-dom'
function MarketTrends() {
  return (
    <>
    <div className="topBar list-none flex gap-2 justify-between mt-4">
        <li>
           Top Company
        </li>
        <li>
            Development
        </li>
        <li>
            Jobs
        </li>
     </div>
     <div className="todayTrends  border-2 border-gray-100">
        <div className="trendBox h-[20rem] w-[30rem] bg-white ">
            <div className="trend pt-3">
              <Link to='/markettrendspage'>
              <img src={market} alt="marketTrends"  />
              </Link>
            </div>

            <div className="info"></div>
        </div>
     </div>
    </>
  )
}

export default MarketTrends