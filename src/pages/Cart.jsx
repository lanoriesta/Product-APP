import React, { useState } from "react";
import useProductStore from "../store/products";
import { Link } from "react-router";
import { Trash2Icon } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart } = useProductStore();
  const array = ["ball", "boy", "apple", "apple", "ball"];
  const arrayNum = [1, 2, 3, 4, 5];

  const handleNumberOfItems = (arr, id) => {
    return arr.filter((item) => item.id === id).length;
  };

  const handleProductPrice = (arr, id) => {
    const sameItems = arr.filter((item) => item.id === id);
    const totalAmount = sameItems.reduce((sum, num) => sum + num.price, 0);

    return totalAmount;
  };

  const removeDuplicatedObject = (arr, key) => {
    const seen = new Set();
    return arr.filter((item) => {
      if (seen.has(item[key])) {
        return false;
      }
      seen.add(item[key]);
      return true;
    });
  };

  const hanldeTotalAmount = (arr) => {
    return arr.reduce((sum, item) => sum + item.price, 0);
  };

  const fliteredItem = removeDuplicatedObject(cart, "id");

  return (
    <div className="cart-con">
      {!cart || cart.length === 0 ? (
        <div className="empty-cart-con">
          <h3>Cart is empty</h3>
          <Link>Shop Now</Link>
        </div>
      ) : (
        fliteredItem.map((item, index) => (
          <div className="cart-item-con" key={index}>
            <div>
              <p className="line-clamp-1">{item.title} </p>
              <p className="text-[.8rem] text-gray-400">${item.price}</p>
              <p className="font-bold">
                <span className="font-bold">
                  {handleNumberOfItems(cart, item.id)}x
                </span>{" "}
                ${handleProductPrice(cart, item.id)}
              </p>
              <div className="trash-btn-con">
                <button onClick={() => removeFromCart(item.id)}>
                  {/* // <Trash2Icon color="white" strokeWidth={1} size={30} /> */}
                  remove
                </button>
              </div>
            </div>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))
      )}
      <div className="amount-con">
        <p>Total: ${hanldeTotalAmount(cart).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
