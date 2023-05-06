import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div>
      <div>
        <Link to="/products">Back</Link>
        <span>Order</span>
        <span></span>
      </div>

      <div>
        <img src={image} alt="product" />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span>Category :</span> {category}</p>
        <span>{price} $</span>
      </div>
    </div>
  );
};

export default ProductDetails;
