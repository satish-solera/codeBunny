import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="marketNews bg-red-400">
        marketNews
      </div>

      <div className="marketTrends bg-red-600">
        marketTrends
      </div>

      <div className="componetsSection bg-red-800">
        componetsSection
      </div>

      <div className="codingContents bg-yellow-500">
        codingContents
      </div>
    </>
  )
}

export default App
