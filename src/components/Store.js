import React, { useContext } from "react";

// Components
import Product from "./shared/Product";
import Navbar from "./shared/Navbar";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
   <div>
     <Navbar />
     <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
   </div>
  );
};

export default Store;
