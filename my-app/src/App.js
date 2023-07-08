import Home from "./components/Home";
import About from "./components/About.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
       <Route path="/Alumni"  exact element ={<Home/>}></Route>
       <Route path = "/Alumni/About"  element ={<About/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
