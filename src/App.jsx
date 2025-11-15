import './App.css';
import Navbar from "./components/navigation";
import "./index.css"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
         <Navbar/> 
         <Outlet/>
    </div>
  );
}

export default App;
