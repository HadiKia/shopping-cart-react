import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "./shared/Navbar";
import Cart from "./shared/Cart";

// Context
import { CartContext } from "../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <Navbar />

      <div>
        {state.selectedItems.map((item) => (<Cart key={item.id} data={item} />))}
      </div>

      {state.itemsCounter > 0 && (
        <div>
          <p><span>Total Items: </span> {state.itemsCounter}</p>
          <p><span>Total Payments: </span> {state.total} $</p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {/* checkout button */}
      {state.checkout && (
        <div>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
      {/* clear button */}
      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>Want to buy? :)</h3>
          <Link to="/products">Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
