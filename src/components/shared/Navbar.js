import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Style
import styles from "../styles/Navbar.module.css";

// Icons
const shopIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m2.98 3.52 2.25.4 1.05 12.42c.08 1.01.93 1.8 1.95 1.8h11.81c.98 0 1.8-.72 1.94-1.68L23 9.36c.11-.8-.44-1.54-1.23-1.65L5.59 7.69M15.3 11.7h3"
    />
    <path
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.75 21.89a.59.59 0 1 1 0 1.17.59.59 0 0 1 0-1.17ZM19.97 21.89a.59.59 0 1 1 0 1.18.59.59 0 0 1 0-1.18Z"
      clipRule="evenodd"
    />
  </svg>
);
const userIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none">
    <mask
      id="a"
      width="18"
      height="9"
      x="4"
      y="15"
      maskUnits="userSpaceOnUse"
      styles="mask-type:luminance"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.33 15.7H21.5v8H4.33v-8Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#22215B"
        fillRule="evenodd"
        d="M12.91 17.33c-4.61 0-6.95.8-6.95 2.36 0 1.58 2.34 2.38 6.95 2.38 4.62 0 6.96-.8 6.96-2.36 0-1.58-2.34-2.38-6.96-2.38Zm0 6.36c-2.12 0-8.58 0-8.58-4 0-3.57 4.9-3.99 8.58-3.99 2.13 0 8.58 0 8.58 4 0 3.58-4.9 4-8.58 4Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="b"
      width="12"
      height="12"
      x="7"
      y="2"
      maskUnits="userSpaceOnUse"
      styles="mask-type:luminance"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.16 2.17h11.5v11.5H7.17V2.17Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#b)">
      <path
        fill="#22215B"
        fillRule="evenodd"
        d="M12.91 3.71a4.21 4.21 0 0 0-.03 8.41l.03.78v-.78a4.21 4.21 0 0 0 0-8.4Zm0 9.96h-.03a5.74 5.74 0 0 1 .03-11.5 5.76 5.76 0 0 1 0 11.5Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <Link to="/products">Products</Link>
      <div className={styles.navbarCart}>
        <div>
          <Link to="/cart">
            <span>{shopIcon}</span>
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
        <div className={styles.userIcon}> <Link to="/login">{userIcon}</Link></div>
      </div>
    </div>
  );
};

export default Navbar;
