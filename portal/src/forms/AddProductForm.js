import React, { useState } from "react";

const AddProductForm = (props) => {
  const initProduct = {
    id: null,
    name: "",
    category: "",
    price: "",
    brand: "",
    origin: "",
    barcode: "",
    valid: "",
    hashtag: "",
    created: "",
    updated: "",
  };

  function getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month}${separator}${
      month < 10 ? `0${month}` : `${date}`
    }${separator}${year}`;
  }
  const [product, setProduct] = useState(initProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      product.name &&
      product.category &&
      product.price &&
      product.brand &&
      product.origin &&
      product.barcode &&
      product.valid &&
      product.hashtag &&
      product.created &&
      product.updated
    ) {
      handleChange(e, props.addProduct(product));
    }
  };

  return (
    <div style={{ flexDirection: "row", marginBottom: 10, marginLeft: 10 }}>
      <input
        className='u-full-width'
        type='text'
        value={product.name}
        name='name'
        onChange={handleChange}
        placeholder='Name'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.category}
        name='category'
        onChange={handleChange}
        placeholder='Category'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.price}
        name='price'
        onChange={handleChange}
        placeholder='Price'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.brand}
        name='brand'
        onChange={handleChange}
        placeholder='Brand'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.origin}
        name='origin'
        onChange={handleChange}
        placeholder='Origin'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.barcode}
        name='barcode'
        onChange={handleChange}
        placeholder='barcode'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.valid}
        name='valid'
        onChange={handleChange}
        placeholder='Valid'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.hashtag}
        name='hashtag'
        onChange={handleChange}
        placeholder='Hashtag'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.created}
        name='created'
        onChange={handleChange}
        placeholder='Creation Date'
      />
      <input
        className='u-full-width'
        type='text'
        value={product.updated}
        name='updated'
        onChange={handleChange}
        placeholder={getCurrentDate()}
      />
      <button
        style={{ marginLeft: 10, borderRadius: 10 }}
        type='submit'
        onClick={handleSubmit}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProductForm;
