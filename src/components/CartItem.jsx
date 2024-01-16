import { MdDelete } from "react-icons/md"
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const CartItem = ({ data, index }) => {

  const dispatch = useDispatch();

  return (
    <div className="w-full">
      {
        index != 0 && <div className="w-[95%] border border-green-600"></div>
      }
      <div className="my-6 flex w-full justify-between">

        <div className="mt-6 w-[25%]">
          <img className="w-full" src={data.image} alt="image" />
        </div>

        <div className="w-[70%]">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="my-2 text-gray-800 text-sm">{data.description.substr(0, 120)+'...'}</p>
          <div className="w-full pr-3 flex justify-between">
            <p className="text-lg font-semibold text-green-600">$<span>{data.price}</span></p>
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-red-300 text-red-800 "
             onClick={() => { dispatch(remove(data.id)); toast.error("Product Removed") }}><MdDelete /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
