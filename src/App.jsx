import { useState } from "react";

import Content from "./component/Content/Content";
import SideBar from "./component/SideBar/SideBar";
import PopUp from "./component/PopUp/PopUp";
import "./App.css";
function App() {
  const [popUp, toggle] = useState(false);
  return (
    <div className="app">
      {popUp ? <PopUp toggle={toggle} /> : <></>}
      <SideBar />
      <Content toggle={toggle} />
    </div>
  );
}

export default App;
