import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import ShopCart from "./components/ShopCart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Store/>} />
          <Route path="/cart" element={<ShopCart/>} />
          <Route path="/*" element={<Navigate to="/products"/>} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
