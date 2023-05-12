import React, { useContext, useEffect } from "react";

// Components
import Product from "./shared/Product";
import Navbar from "./shared/Navbar";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./styles/Store.module.css"

const Store = () => {
  const products = useContext(ProductsContext);
  useEffect(() => {
    document.title = "Products"
  }, [])

  return (
   <div className={styles.container}>
     <Navbar />
     <div className={styles.productsContainer}>
      {
        products.length ?
        products.map((product) => (<Product key={product.id} productData={product} />)) :
        <div className={styles.loading}>
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      }
    </div>
   </div>
  );
};

export default Store;
