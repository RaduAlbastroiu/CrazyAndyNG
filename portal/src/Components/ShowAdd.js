import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import AddProductForm from "../forms/AddProductForm";
import productList from "../data/data";
export default function ShowAdd(product) {
  const [products, setProducts] = useState(productList);
  const [isClicked, setIsClicked] = useState(false);
  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  return (
    <div>
      <Add
        style={{ marginLeft: "0.5%", color: "blue" }}
        onClick={() => setIsClicked(!isClicked)}
      />
      {isClicked ? <AddProductForm addProduct={addProduct} /> : <></>}
    </div>
  );
}
