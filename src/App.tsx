import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import Work from "./components/work";
import Wrapper from "./components/wrapper";
import Contact from "./components/contact";
import About from "./components/about";
import Credit from "./components/credit";

function App() {
  const [workId, setWorkId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isShowingWrapper, setIsShowingWrapper] = useState<boolean>(false);
  const [wrapperContent, setWrapperContent] = useState<string>('');
  return (
    <div>
      <Header setIsShowingWrapper={setIsShowingWrapper} setWrapperContent={setWrapperContent}/>
      <Main setWorkId={setWorkId} setIsAnimating={setIsAnimating}/>
      {workId && <Work workId={workId} isAnimating={isAnimating} setIsAnimating={setIsAnimating}/>}
      <Wrapper isShowingWrapper={isShowingWrapper} setIsShowingWrapper={setIsShowingWrapper} wrapperContent={wrapperContent}>
        {wrapperContent==='contact'&&<Contact/>}
        {wrapperContent==='about'&&<About/>}
      </Wrapper>
      <Credit/>
    </div>
  );
}

export default App;
