import React, { useState } from "react";
import productList from "../data/data";
import ProductTable from "../data/ProductTable";
import AddProductForm from "../forms/AddProductForm";

export default function Helper() {
  const [products, setProducts] = useState(productList);

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='five columns'>
          <div>
            <AddProductForm addProduct={addProduct} />
          </div>
        </div>
        <div className='seven columns'>
          <ProductTable products={products} deleteProduct={deleteProduct} />
        </div>
      </div>
    </div>
  );
}
