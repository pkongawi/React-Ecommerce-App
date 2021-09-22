import React from "react";
import { render } from "react-dom";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";

class ProductList extends React.Component {
  state = {
    products: []
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
