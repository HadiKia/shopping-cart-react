import React, { useContext, useEffect, useState } from "react";

// Components
import Product from "./shared/Product";
import Navbar from "./shared/Navbar";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./styles/Store.module.css"

// Icons
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#22215B70" d="m17.781 16.72-4.33-4.33A7.585 7.585 0 0 0 2.221 2.221 7.585 7.585 0 0 0 12.39 13.453l4.33 4.326a.749.749 0 0 0 1.224-.815.75.75 0 0 0-.162-.243Zm-10.2-3.062a6.081 6.081 0 1 1 6.084-6.08 6.088 6.088 0 0 1-6.083 6.08Z"/></svg>

const Store = () => {
  const [search, setSearch] = useState("");

  const products = useContext(ProductsContext);
  useEffect(() => {
    document.title = "Products"
  }, [])

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
   <div className={styles.container}>
     <Navbar />
      <div className={styles.searchBox}>
        <span>{searchIcon}</span>
        <input
          type="text"
          placeholder="Search product"
          value={search}
          onChange={searchHandler}
        />
        </div>
      <div className={styles.productsContainer}>
      {
        products.length ?
        searchedProducts.map((product) => (<Product key={product.id} productData={product} />)) :
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
