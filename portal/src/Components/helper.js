import React, { useState } from "react";
import productList from "../data/data";
import ProductTable from "../data/ProductTable";
import ShowAdd from "./ShowAdd";

export default function Helper(addProduct) {
  const [products, setProducts] = useState(productList);
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='five columns'>
          <div>
            <ShowAdd addProduct={addProduct} />
          </div>
        </div>
        <div className='seven columns'>
          <ProductTable products={products} deleteProduct={deleteProduct} />
        </div>
      </div>
    </div>
  );
}
