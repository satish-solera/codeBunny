import { useState } from "react";
import MarketNews from "./components/MarketNews";
import MarketTrends from "./components/MarketTrends";
import CodeComponets from "./components/CodeComponets";

import InterviewComponet from "./components/InterviewComponet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="">
      CodeBunny
    </div>
      <div className="flex justify-between">
        <div className="">
          <MarketNews />
        </div>

        <div className="">
          <MarketTrends />
        </div>
      </div>

      <div className="componetsSection">
        <CodeComponets />
      </div>

      <div className="InterViewContents">
        <InterviewComponet />
      </div>
    </>
  );
}

export default App;
