import React, { useState } from "react";

import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const AddProductInfo = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);

    if (image !== null) {
      formField.append("image", image);
    }

    await axios({
      method: "post",
      url: "http://localhost:8000/api/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };
  return (
    <div className="container">
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4 ">Add Product</h2>
          <div className="form-group">
            <div className="form-group">
              <label>Select an Image to upload</label>
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

          <Button className="btn btn-success " onClick={AddProductInfo}>
            Add Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
