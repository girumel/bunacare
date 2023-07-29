import "./app.css";
import Body from "./components/Bodysection/Body";
import Sidebar from "./components/Sidebarsection/Sidebar";
import Diagnostics from "./components/Diagnostics/Diagnostics";
import Checklist from "./components/Checklist/Checklist";
import Graph from "./components/Graph/Graph";
import Info from "./components/Info/Info";
import Calender from "./components/Calender/Calender";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          <Route path="/diagnostics" element={<Diagnostics />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/checklist" element={<Checklist />}></Route>
          <Route path="/graph" element={<Graph />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
