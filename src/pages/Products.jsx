import React, { useEffect } from "react";
import useProductStore from "../store/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { getProducts, products, loaders } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <div className="products-con">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} loaders={loaders} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
