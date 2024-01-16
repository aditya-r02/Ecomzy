import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect } from "react";

const Cart = () => {
  const data = useSelector(state=>state.cart.value);

  const totalAmt = data.reduce((current, card)=> current+card.price, 0);

  return (
    <div className=" flex justify-center w-full items-center">
      {
        data.length>0 ?
        (
          <div className="w-[1150px] flex justify-between">
            <div className="w-[50%] mt-6">
              {
                data.map((card, index)=> <CartItem key={card.id} data={card} index={index}/>)
              }
            </div>
            <div className="w-[45%] mt-20">
              <p className="text-xl text-green-600 font-semibold">YOUR CART</p>
              <p className="text-4xl text-green-600 font-semibold">SUMMARY</p>
              <p className="mt-5 font-semibold text-lg">Total Items: <span>{data.length}</span></p>
              <p className=" font-semibold text-lg">Total Amount: $<span>{totalAmt}</span></p>

              <button className="mt-5 w-[80%] py-2 rounded-lg bg-white/50 border-2 border-green-600 text-green-700
              font-semibold hover:bg-green-700 hover:text-white duration-150">
                Checkout Now
              </button>
            </div>
          </div>
        ):
        (
          <div className="min-h-[80vh] flex flex-col my-auto items-center justify-center gap-5">
            <p className="text-2xl font-semibold text-gray-800">Your Cart is Empty!</p>
            <NavLink to='/'>
              <p className="text-xl px-7 py-3 bg-green-600 font-bold text-white
              rounded-lg">SHOP NOW</p>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
