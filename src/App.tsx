import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import Work from "./components/work";
import Contact from "./components/contact";

function App() {
  const [workId, setWorkId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isShowingContact, setIsShowingContact] = useState<boolean>(false);
  return (
    <div>
      <Header setIsShowingContact={setIsShowingContact}/>
      <Main setWorkId={setWorkId} setIsAnimating={setIsAnimating}/>
      {workId && <Work workId={workId} isAnimating={isAnimating} setIsAnimating={setIsAnimating}/>}
      <Contact isShowingContact={isShowingContact} setIsShowingContact={setIsShowingContact}/>
    </div>
  );
}

export default App;
