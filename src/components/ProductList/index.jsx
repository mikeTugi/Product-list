import React, { useState, useEffect } from "react";
import styles from "./productList.module.css";
import data from "../../../data.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data); // Assuming you're fetching the product data from a local JSON file
  }, []);

  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.heading}>Desserts</h2>
      <div className={styles.productsContainer}>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
