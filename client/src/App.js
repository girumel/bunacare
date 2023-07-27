import "./app.css";
import Body from "./components/Bodysection/Body";
import Sidebar from "./components/Sidebarsection/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
