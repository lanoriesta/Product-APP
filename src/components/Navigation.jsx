import React, { useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import useProductStore from "../store/products";

const Navigation = () => {
  const { cart, addToCart } = useProductStore();
  return (
    <div className="nav-con">
      <Link to={"/"}>
        <h2 className=" text-[1.1rem] font-normal">
          Product{" "}
          <span className=" tracking-widest text-white bg-black px-3 py-2">
            STORE
          </span>
        </h2>
      </Link>
      <div className="cart-icon-con">
        <Link to={"/cart"}>
          <ShoppingBag strokeWidth={1} size={30} />
        </Link>
        {cart.length !== 0 ? (
          <div className="bg-red-400 w-[25px] h-[25px] rounded-full text-white border-2 border-white">
            <p className="p-0 m-0 text-[.6rem]">{cart.length}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navigation;
