import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h2 style={{ alignItems: "center" }}>Our Products</h2>
      <div className="products-card-info">
        {products.map((product, index) => (
          // <div>
          //   <img src={product.image} height="300" width="200" />
          //   <p>{product.name}</p>
          //   <p>{product.price}</p>
          //   <p>{product.description}</p>
          //   <p>{product.category}</p>
          // </div>

          <Card
            className="m-2 rounded shadow-lg products-card-info"
            style={{ width: "22rem" }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              height="250"
              width="150"
              style={{ padding: "5%" }}
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                {product.name}
              </Card.Title>
              <Card.Text className="product-price-info">
                ${product.price}
              </Card.Text>
              {/* <Card.Text>{product.description}</Card.Text> */}
              <Card.Text className="product-category-info">
                {product.category}
              </Card.Text>

              <Link className="btn btn-primary" to={`/${product.id}/`}>
                Detail
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
