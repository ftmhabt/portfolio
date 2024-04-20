import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import Work from "./components/work";

function App() {
  const [workId, setWorkId] = useState<number | null>(null);
  return (
    <div>
      <Header />
      <Main setWorkId={setWorkId} />
      {workId && <Work workId={workId} />}
    </div>
  );
}

export default App;
