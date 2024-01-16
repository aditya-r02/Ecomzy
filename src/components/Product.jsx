import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import {  toast } from "react-hot-toast";

const Product = ({data}) => {

  const desc = data.description.length>50? data.description.substr(0,50)+'...' : data.description;
  const heading = data.title.length>15 ? data.title.substr(0, 12)+'...' : data.title;
  const cards = useSelector(state => state.cart.value);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    if (cards.length>0 &&  cards.some((card)=> card.id==data.id)){
      setAdded(true);
    }else{
      setAdded(false);
    }
  }, [cards])



  return (
    <div className="flex flex-col items-center h-96 w-64 px-[45px] rounded-xl shadow-card py-3 justify-around
    hover:scale-110 duration-200">
      <h2 className="text-lg font-semibold text-slate-950">{heading}</h2>
      <p className="text-[0.7rem] text-gray-400">{desc}
      </p>
      <img src={data.image} alt="product-image" className="w-32 h-44 object-contain"/>
      <div className="w-[120%] flex justify-between">
        <p className="text-base text-green-600 font-medium">$<span>{data.price}</span></p>
        {
          added?
          (<button className="text-gray-950 font-medium border-2 border-gray-950 rounded-2xl py-1 px-2
          text-xs hover:bg-slate-900 hover:text-gray-200"
          onClick={()=>{dispatch(remove(data.id)); toast.error("Product Removed")}}>REMOVE ITEM</button>):
          (<button className="text-gray-950 font-medium border-2 border-gray-950 rounded-2xl py-1 px-2
          text-xs hover:bg-slate-900 hover:text-gray-200"
          onClick={()=>{dispatch(add(data)); toast.success("Added to Cart!")}}>ADD TO CART</button>)
        }
      </div>
      
    </div>
  );
};

export default Product;
