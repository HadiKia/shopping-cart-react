import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icons
const shopIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none">
    <path
      stroke="#001833"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m2.98 3.52 2.25.4 1.05 12.42c.08 1.01.93 1.8 1.95 1.8h11.81c.98 0 1.8-.72 1.94-1.68L23 9.36c.11-.8-.44-1.54-1.23-1.65L5.59 7.69M15.3 11.7h3"
    />
    <path
      fill="#001833"
      fillRule="evenodd"
      stroke="#001833"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.75 21.89a.59.59 0 1 1 0 1.17.59.59 0 0 1 0-1.17ZM19.97 21.89a.59.59 0 1 1 0 1.18.59.59 0 0 1 0-1.18Z"
      clipRule="evenodd"
    />
  </svg>
);

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      <Link to="/products">Products</Link>
      <div>
        <Link to="/cart"><span>{shopIcon}</span></Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
