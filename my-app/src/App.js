import Home from "./components/Home";
import About from "./components/About.js";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {HashRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <HashRouter basename='/Alumni'>
      <Routes>
       <Route path="/"  exact element ={<Home/>}></Route>
       <Route path = "/About"  element ={<About/>}></Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
