import React  , {useState} from 'react'
import news from '../images/news.jpeg'
import {Link } from 'react-router-dom'

function marketNews() {
  const topicNews = [
    {
      topic1 : 'IT'
    },
    {
      topic1 : 'AI'
    },  {
      topic1 : 'WEB'
    },  {
      topic1 : 'MAANG'
    },  
  ]
  const [topic , setTopic] = useState(topicNews)
  return (
    <>
     <div className="topBar list-none flex gap-2 justify-between mt-4">
        {/* <Link to={''}>
        <li >
            IT
        </li>
        </Link>
       <Link to={''}>
       <li>
            Elon Musk
        </li>
       </Link>

        <Link to={''}>
        <li>
            AI
        </li>
        </Link> */}

      {
        
        topic.length > 0 ? <div className='flex justify-between flex-1 mx-2'> 
            {
           
           topic.map ( ({topic1 , topic2 , topic3}) =>{
              return <ul className=''>
               <li>
               <Link to={''}>
                {
                  topic1
                }
                </Link>
               </li>
              </ul>
           })

            }
             
           </div> : <h1>HOT NEWS</h1>
         
      }
        
        
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