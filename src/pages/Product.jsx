import React, { useEffect } from "react";
import useProductStore from "../store/products";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { ShoppingBag } from "lucide-react";

import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { id } = useParams();
  const { getProduct, product, loaders, addToCart } = useProductStore();

  useEffect(() => {
    getProduct(id);
  }, [getProduct]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Succesfully Added the product", {
      position: "bottom-center",
      icon: () => <ShoppingBag />,
      theme: "dark",
      autoClose: 1500,
    });
  };

  return (
    <>
      {loaders ? (
        <Loader />
      ) : (
        <div className="product-info-con">
          <div className="img-info-con">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <p>$ {product.price}</p>
            <div className="rating-con">
              <p>⭐ {product.rating?.rate}</p>
              <p>{product.rating?.count} reviews</p>
            </div>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>{product.description}</p>
          </div>
          <div className="btn-con">
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
