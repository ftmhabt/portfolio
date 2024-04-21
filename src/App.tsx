import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import Work from "./components/work";
import Wrapper from "./components/wrapper";

function App() {
  const [workId, setWorkId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isShowingWrapper, setIsShowingWrapper] = useState<boolean>(false);
  return (
    <div>
      <Header setIsShowingWrapper={setIsShowingWrapper}/>
      <Main setWorkId={setWorkId} setIsAnimating={setIsAnimating}/>
      {workId && <Work workId={workId} isAnimating={isAnimating} setIsAnimating={setIsAnimating}/>}
      <Wrapper isShowingWrapper={isShowingWrapper} setIsShowingWrapper={setIsShowingWrapper}>

      </Wrapper>
      <Wrapper isShowingWrapper={isShowingWrapper} setIsShowingWrapper={setIsShowingWrapper}>
        
      </Wrapper>
    </div>
  );
}

export default App;
