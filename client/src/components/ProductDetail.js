import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/${id}`);
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  // delete products
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/api/${id}/`);
    navigate("/");
  };

  return (
    <div>
      <h2>Product Detail</h2>
      <div className="single-product-info">
        <img
          src={product.image}
          height="300"
          width="250"
          alt={product.name || "Product Image"}
        />
        <p>{product.name}</p>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>

        <Link className="btn btn-primary m-2" to={`/${product.id}/update`}>
          Update
        </Link>
        <Link
          className="btn btn-danger m-2"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
