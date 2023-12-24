import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";
import axios from "axios";

const UpdateProduct = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const loadProducts = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
    console.log(data);
    setImage(data.image);
    setName(data.name);
    setPrice(data.price);
    setDescription(data.description);
    setCategory(data.category);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // update products
  const updateProductInfo = async () => {
    let formField = new FormData();
    formField.append("name", name);

    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);

    if (image !== null) {
      formField.append("image", image);
    }
    await axios({
      method: "PUT",
      url: `http://localhost:8000/api/${id}/`,
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div>
      <h2>UpdateProduct</h2>
      <div className="form-group">
        <div className="form-group">
          <img
            src={image}
            height="250"
            width="200"
            style={{ margin: "15px" }}
          />

          <input
            type="file"
            className="form-control form-control-lg"
            name="image"
            src={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <Button className="btn btn-success " onClick={updateProductInfo}>
        Update Product
      </Button>
    </div>
  );
};

export default UpdateProduct;
