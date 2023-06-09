import React, {useContext} from "react";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Style
import styles from '../styles/Cart.module.css'

// Functions
import {shorten} from "../../helper/functions"

// Icons
const trash = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#22215B" fillRule="evenodd" d="M10.2 18.33c-1.12 0-2.22 0-3.31-.03-1.4-.03-2.36-.93-2.52-2.36-.26-2.37-.71-7.94-.71-8a.62.62 0 0 1 .57-.67c.34-.01.64.23.67.57 0 .06.45 5.62.71 7.96.1.81.53 1.23 1.3 1.25 2.09.04 4.21.04 6.5 0 .82-.01 1.27-.42 1.36-1.25.26-2.33.7-7.9.71-7.96a.64.64 0 0 1 .67-.57c.35.03.6.33.58.67 0 .06-.46 5.65-.72 8-.16 1.45-1.12 2.34-2.57 2.36l-3.23.03M17.26 5.82H3.12a.63.63 0 0 1 0-1.25h14.14a.63.63 0 0 1 0 1.25" clipRule="evenodd"/><path fill="#22215B" fillRule="evenodd" d="M14.53 5.82a2 2 0 0 1-1.95-1.6l-.2-1.01c-.05-.16-.23-.3-.43-.3H8.43c-.2 0-.38.14-.43.33l-.2.98a2 2 0 0 1-1.95 1.6.63.63 0 0 1 0-1.25c.35 0 .66-.25.73-.6l.2-1.01c.2-.78.88-1.3 1.65-1.3h3.52c.77 0 1.44.52 1.64 1.26l.21 1.05c.07.35.38.6.73.6a.63.63 0 0 1 0 1.25" clipRule="evenodd"/></svg>


const Cart = (props) => {
  const {dispatch} = useContext(CartContext)

  const {image, title, price, quantity} = props.data 

  return (
    <div className={styles.cartBox}>
      <div className={styles.cartImg}>
        <img src={image} alt="product"/>
      </div>

      <div className={styles.cartDetail}>
        <h3 className={styles.cartDetailTitle}>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>

      <div className={styles.cartNumber}>
        {quantity > 1 ?
        <button onClick={() => dispatch({type: "DECREASE" , payload : props.data})} className={styles.decrease}>-</button> :
        <span onClick={() => dispatch({type: "REMOVE_ITEM" , payload : props.data})} className={styles.cartTrash}>{trash}</span>}
        <span>{quantity}</span>
        <button onClick={() => dispatch({type: "INCREASE" , payload : props.data})} className={styles.increase}>+</button>
      </div>
    </div>
  );
};

export default Cart;
