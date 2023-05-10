import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "./shared/Navbar";
import Cart from "./shared/Cart";

// Context
import { CartContext } from "../context/CartContextProvider";

// Style
import styles from "./styles/ShopCart.module.css"

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Navbar />
     
      <div className={styles.shopCartMain}>
      <h3 className={styles.shopCartMainTitle}>Your Cart:</h3>
      <div style={{width : '100%'}}>
        {state.selectedItems.map((item) => (<Cart key={item.id} data={item} />))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.totalPrice}>
          <p>Total Items : <span>{state.itemsCounter}</span></p>
          <p>Total Payments : <span>{state.total} $</span></p>
          <div className={styles.handlerButtons}>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>Checkout</button>
          </div>
        </div>
      )}
      {/* checkout button */}
      {state.checkout && (
        <div className={styles.nullCart}>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
      {/* clear button */}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.nullCart}>
          <h3>Want to buy? :)</h3>
          <Link to="/products">Shop</Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default ShopCart;
