import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({
  category,
  id,
  img,
  name,
  price,
  quantity,
  ratings,
  ratingsCount,
  seller,
  shipping,
  stock,
  handleAddToCart,
}) => {
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p className="price">Price: ${price}</p>
        <p className="seller">Manufacturer: {seller}</p>
        <p className="rating">Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() =>
          handleAddToCart({
            category,
            id,
            img,
            name,
            price,
            quantity,
            ratings,
            ratingsCount,
            seller,
            shipping,
            stock,
          })
        }
        className="btn-cart"
      >
        Add to Cart
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
