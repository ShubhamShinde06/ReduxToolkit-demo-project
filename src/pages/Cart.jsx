import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { removeToCart } from "../store/actions/cart";
//import { updateCart } from "../store/reducers/cart.js";
//import {updateCart} from '../store/reducers/cart'


const Cart = () => {
  const basket = useSelector(function(state){
    return state?.cart?.cart
  });

  const dispatch = useDispatch()

  function handleRemove(id){
    return () => {
      //dispatch(removeToCart(id))
    }
  }


  return (
    <>
      {Object?.keys(basket)?.map((key) => {
        const cart = basket[key]
        const product = cart.value;
        const { title, image, price, id } = product;
        console.log(id)
        return (
          <div className="flex flex-col w-full h-full p-5">
            <div className="w-full h-50 border rounded-md flex items-center justify-around">
              <img
                src={image}
                alt=""
                className="w-30 h-40 overflow-hidden"
              />
              <h1>{title}</h1>
              <h1>1 x {cart.count} = {cart.count * Math.floor(price)}</h1>
              <button onClick={handleRemove(id)} className="px-2 py-1 border text-red-400 rounded-md cursor-pointer">
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
