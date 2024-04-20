import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import Work from "./components/work";

function App() {
  const [workId, setWorkId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <div>
      <Header />
      <Main setWorkId={setWorkId} setIsAnimating={setIsAnimating}/>
      {workId && <Work workId={workId} setWorkId={setWorkId} isAnimating={isAnimating} setIsAnimating={setIsAnimating}/>}
    </div>
  );
}

export default App;
