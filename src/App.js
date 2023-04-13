import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./pages/dashboard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Fruit from "./pages/frits/Fruit";
import Fastfood from "./pages/fastfood/fastfood";
import Cart from "./pages/card/Cart";

import Products from "./pages/products/Products";
function App() {
  return (
    <div className="App">
      {/* <NavLink to="/da">DashBoard</NavLink> */}
      <Products />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Menu />}>
            <Route path="/frits" element={<Fruit />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/fastfood" element={<Fastfood />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
