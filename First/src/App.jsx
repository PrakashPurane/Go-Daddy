import { LuHeartHandshake } from "react-icons/lu";
import Box from "./assets/Box/Box";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <LuHeartHandshake className="heart" />
          <h1>GoDaddy</h1>
        </div>
        <Box/>
        <button>Shop now</button>
      </div>
    </>
  );
}

export default App;
