import React from "react";
import { Link } from "react-router";
import Loader from "./Loader";

const ProductCard = ({ product, loaders }) => {
  return (
    <>
      {loaders ? (
        <Loader />
      ) : (
        <div className="product-con">
          <div className="product-img-con">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
          </div>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>$ {product.price}</p>
          <div className="rating-con">
            <p>⭐ {product.rating.rate}</p>
            <p>{product.rating.count} reviews</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
