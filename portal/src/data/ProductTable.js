import React from "react";
import { Image } from "react-bootstrap";
import trash from "../assets/trash.png";
const ProductTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Origin</th>
          <th>Barcode</th>
          <th>Valid</th>
          <th>Hashtag</th>
          <th>Created</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        {props.products.length > 0 ? (
          props.products.map((product) => {
            const {
              id,
              name,
              category,
              price,
              brand,
              origin,
              barcode,
              valid,
              hashtag,
              created,
              updated,
            } = product;
            return (
              <tr key={id}>
                <td>
                  <Image
                    src={trash}
                    style={{ width: 20, height: 20 }}
                    onClick={() => props.deleteProduct(id)}
                  />
                </td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{brand}</td>
                <td>{origin}</td>
                <td>{barcode}</td>
                <td>{valid}</td>
                <td>{hashtag}</td>
                <td>{created}</td>
                <td>{updated}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No Product found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
