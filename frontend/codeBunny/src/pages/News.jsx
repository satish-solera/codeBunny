import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummynews = [
  {
    id: 1,
    nameOfNews: "AI is trending",
    dateOfNews: 12,
    infoOfNews: "hey this news of AI",
  },
  {
    id: 2,
    nameOfNews: "abc is good",
    dateOfNews: 15,
    infoOfNews: "abc is good coder of world",
  },
  {
    id: 3,
    nameOfNews: "google is doimg very great",
    dateOfNews: 16,
    infoOfNews: "google pss ",
  },
  {
    id: 4,
    nameOfNews: "data is stole by ",
    dateOfNews: 17,
    infoOfNews: "who is data stoler?",
  },

  {
    id: 5,
    nameOfNews: "AI is job eater",
    dateOfNews: 12,
    infoOfNews: "hey this news of AI",
  },
];
function News() {
  const [news, setNews] = useState(dummynews);
  return (
    <>
      <div className="main1 box-border ">
        <div className="main2 ">
          {news.length > 0 ? (
            <div className="flex flex-wrap gap-2 justify-evenly mt-5 ">
              {news.map(({ id, nameOfNews, dateOfNews, infoOfNews }) => {
                return (
                  <div className="todayNews ">
                    <div className="newsBox h-[20rem] w-[30rem] border-2 border-gray-100 p-1 mt-5 ">
                      <div className="nameOfNews">
                        <h1>{nameOfNews}</h1>
                        <h1>Date : {dateOfNews}</h1>
                      </div>
                      <div className="img">
                        <Link to="/news">
                          {/* <img className='object-cover h-[15rem] w-[30rem]' src={news} alt='newsImage'></img> */}
                        </Link>
                      </div>
                      <div className="info">{infoOfNews}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>you dont have any news</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default News;
