import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conference from "./Components/Conference";
import Speaker from "./Components/Speaker"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Conference/>} path="/:id" / > 
        <Route element={<Speaker/>} path='/speaker/:id'  / > 
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
