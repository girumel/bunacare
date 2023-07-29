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
    <div className="container">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="calender" element={<Calender />} />
            <Route path="Diagnostics" element={<Diagnostics />} />
            <Route path="info" element={<Info />} />
            <Route path="checklist" element={<Checklist />} />
            <Route path="Graph" element={<Graph />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
