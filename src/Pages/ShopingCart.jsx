import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopingCart = () => {
  const [total, setTotle] = useState();
  const [myCart, setMyCart] = useState(() => {
    let localCart = localStorage.getItem("myCarts");
    if (localCart != null) {
      return JSON.parse(localCart);
    } else {
      return [];
    }
  });

  const addQuantity = (count, id) => {
    let newCart = myCart.map((item) => {
      if (item.product_id === id) {
        return {
          ...item,
          count: count + 1,
        };
      }
      return item;
    });
    setMyCart(newCart);
    localStorage.setItem("myCarts", JSON.stringify(newCart));
  };

  const removeQuantity = (count, id) => {
    if (count > 1) {
      let newCart = myCart.map((item) => {
        if (item.product_id === id) {
          return {
            ...item,
            count: count - 1,
          };
        }
        return item;
      });
      setMyCart(newCart);
      localStorage.setItem("myCarts", JSON.stringify(newCart));
    }
  };

  const removeCart = (id) => {
    let newCart = myCart.filter((product) => {
      return product.product_id !== id;
    });
    setMyCart(newCart);
    localStorage.setItem("myCarts", JSON.stringify(newCart));
  };

  useEffect(() => {
    let total = 0;
    myCart.map((item) => {
      total += item.product_price * item.count;
    });
    setTotle(total);
  }, [addQuantity, removeQuantity]);

  const navigate = useNavigate();
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {myCart?.map((product) => {
                return (
                  <tr>
                    <td className="text-left">
                      <img
                        src={product.product_img}
                        alt
                        style={{
                          width: 50,
                          textAlign: "left",
                          marginRight: 25,
                        }}
                      />
                      {product.product_name}
                    </td>
                    <td className="align-middle"> ₹ {product.product_price}</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: 100 }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick={() => {
                              removeQuantity(product.count, product.product_id);
                            }}
                          >
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={product.count}
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick={() => {
                              addQuantity(product.count, product.product_id);
                            }}
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      {" "}
                      ₹ {product.product_price * product.count}
                    </td>
                    <td className="align-middle">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          removeCart(product.product_id);
                        }}
                      >
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form className="mb-5" action>
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium"> ₹ {total}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$ ₹ {myCart.length * 10}</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">
                  {" "}
                  ₹ {total + myCart.length * 10}
                </h5>
              </div>
              <button
                className="btn btn-block btn-primary my-3 py-3"
                onClick={() => navigate("/pages/checkout")}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
