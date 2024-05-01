import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const AddProducts = () => {
  const [product_name, setProduct_name] = useState("");
  const [product_brand, setProduct_brand] = useState("");
  const [product_description, setProduct_description] = useState("");
  const [product_price, setProduct_price] = useState();
  const [product_mrp, setProduct_mrp] = useState();
  const [product_category, setProduct_category] = useState("");
  const [product_img, setProduct_img] = useState("");
  const [products, setProducts] = useState(() => {
    let locaData = localStorage.getItem("products");
    if (locaData != null) {
      return JSON.parse(locaData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (event) => {
    event.preventDefault();
    let newProduct = {
      product_id: Date.now(),
      product_name: product_name,
      product_brand: product_brand,
      product_description: product_description,
      product_price: product_price,
      product_mrp: product_mrp,
      product_category: product_category,
      product_img: product_img,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    console.log(newProduct);
    console.log(products);

    setProduct_name("");
    setProduct_brand("");
    setProduct_description("");
    setProduct_price("");
    setProduct_mrp("");
    setProduct_category("default");
    setProduct_img("");
  };

  return (
    <div className="container mt-5">
      <h3>Add new Product</h3>
      <form action>
        <div className="form-group d-flex">
          <label>Product Name : </label>
          <input
            type="text"
            className="form-control border-2 py-4"
            placeholder="Product Name"
            required="required"
            value={product_name}
            onChange={(e) => setProduct_name(e.target.value)}
          />
        </div>

        <div className="form-group d-flex">
          <label>Product Brand : </label>
          <input
            type="text"
            className="form-control border-2 py-4"
            placeholder="Producr Brand"
            required="required"
            value={product_brand}
            onChange={(e) => setProduct_brand(e.target.value)}
          />
        </div>

        <div className=" form-group d-flex">
          <label for="avatar">Product Image URL</label>

          <input
            type="text"
            id="avatar"
            name="avatar"
            placeholder="Enter Image URL"
            className=" form-select input-group mb-3 p-3"
            onChange={(e) => setProduct_img(e.target.value)}
          />
        </div>

        <div className="form-group d-flex">
          <div class="input-group mb-3">
            <label>Category</label>
            <select
              class="form-select input-group mb-3 p-3"
              onClick={(e) => setProduct_category(e.target.value)}
              id=""
            >
              <option hidden>Select Category</option>
              <option className="p-2" value="shirts">
                Shirts
              </option>
              <option className="p-2" value="pents">
                Pents
              </option>
              <option className="p-2" value="t-shirts">
                T-Shirts
              </option>
              <option className="p-2" value="kids">
                Kids
              </option>
              <option className="p-2" value="jeans">
                Jeans
              </option>
              <option className="p-2" value="electronic">
                Electronics
              </option>
              <option className="p-2" value="womens">
                Womens
              </option>
            </select>
          </div>
        </div>

        <div className="form-group d-flex">
          <label>Product Description : </label>
          <input
            type="text"
            className="form-control border-2 py-4"
            placeholder="Product Description"
            required="required"
            value={product_description}
            onChange={(e) => setProduct_description(e.target.value)}
          />
        </div>

        <div className="form-group d-flex">
          <label>Product MRP : </label>
          <input
            type="number"
            className="form-control border-2 py-4"
            placeholder="Product MRP"
            required="required"
            value={product_mrp}
            onChange={(e) => setProduct_mrp(e.target.value)}
          />
        </div>
        <div className="form-group d-flex">
          <label>Product Price : </label>
          <input
            type="number"
            className="form-control border-2 py-4"
            placeholder="Product Price"
            required="required"
            value={product_price}
            onChange={(e) => setProduct_price(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary btn-block border-2 py-3"
          type="submit"
          onClick={addProduct}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
