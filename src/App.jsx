import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-full">
      <div><Toaster/></div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
