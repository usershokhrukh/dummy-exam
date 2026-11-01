import {ProductsType} from "@/ProductsType.d";
import React from "react";

const ProductsTable = ({data}: {data: ProductsType[]}) => {
  return (
    <table className="products__table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th> <th>Brand</th> <th>Rating</th>
          <th>Price</th>
          <th>Count</th>
          {/* <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {data?.map(
          ({images, price, id, stock, title, category, rating, brand}) => (
            <tr className="products__row">
              <td className="products__td">
                <img width={30} height={30} src={images[0]} alt="" />
              </td>
              <td className="products__td">{title}</td>
              <td className="products__td">{category}</td>
              <td className="products__td">{brand}</td>
              <td className="products__td">{rating}</td>
              <td className="products__td">{price}</td>
              <td className="products__td">{stock}</td>

            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default ProductsTable;
