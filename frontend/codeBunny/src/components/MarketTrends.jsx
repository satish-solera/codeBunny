import React, { useState } from "react";
import market from "../images/MarketTrends.jpeg";
import { Link } from "react-router-dom";
function MarketTrends() {
  const trends = [
    {
      trend: "Top Company",
    },
    {
      trend: "Devlopments Stack",
    },
    {
      trend: "Jobs",
    },
  ];
  const [trend, setTrend] = useState(trends);
  return (
    <>
      <div className="topBar list-none flex gap-2 justify-between mt-4">
        {trend.length > 0 ? (
          <div className="flex justify-between flex-1 mx-2">
            {trend.map(({ trend }) => {
              return (
                <ul className="">
                  <li>
                    <Link to={""}>{trend}</Link>
                  </li>
                </ul>
              );
            })}
          </div>
        ) : (
          <h1>Trending Today</h1>
        )}
      </div>

      <div className="todayTrends  border-2 border-gray-100">
        <div className="trendBox h-[20rem] w-[30rem] bg-white ">
          <div className="trend pt-3">
            <Link to="/markettrendspage">
              <img src={market} alt="marketTrends" />
            </Link>
          </div>

          <div className="info"></div>
        </div>
      </div>
    </>
  );
}

export default MarketTrends;
