import React, { useEffect, useState } from "react";
import useProductStore from "../store/products";
import ProductCard from "../components/ProductCard";
import FilterItems from "../components/FilterItems";

const Products = () => {
  const { getProducts, products, loaders } = useProductStore();
  const [filterData, setFilterData] = useState("All");

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleFilterChange = (data) => {
    setFilterData(data);
  };

  return (
    <>
      <FilterItems onFilterChange={handleFilterChange} />
      <div className="products-con">
        {products.map((product, index) => {
          if (product.category === filterData || filterData === "All") {
            return (
              <div key={index}>
                <ProductCard product={product} loaders={loaders} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Products;
