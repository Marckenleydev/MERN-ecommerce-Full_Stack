import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {

  const user= useSelector((state)=>state.user.currentUser);

 
  return ( 
    <Router>
  <div className="App">
  <Routes>
        <Route exact path="/" element={<Home />} />
    
      </Routes>

      <Routes>
          <Route path="/products/:category" element={<ProductList/>} />
          </Routes>

          <Routes>
          <Route path="/product/:id" element={<Products/>} />
          </Routes>
          <Routes>
          <Route path="/cart" element={<Cart/>} />
          </Routes>
          <Routes>
          <Route path="/success" element={<Success/>} />
          </Routes>

          <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
          </Routes>

          <Routes>
          <Route path="/register" element={user ?  <Navigate to="/" /> : <Register/>} />
          </Routes>
      
  </div>
  </Router>
  )}

export default App;
