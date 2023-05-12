import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

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
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
