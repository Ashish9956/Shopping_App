
import {RiDeleteBin7Fill} from "react-icons/ri"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <>
    <div className="flex items-center p-5 justify-between bg-violet-200 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img src={item.image} className="h-28 rounded-lg" alt="product" />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-purple-700 font-semibold">
            {item.title}
          </h1>
          <p>${item.price}</p>
        </div>
      </div>
      <div
        onClick={removeFromCart}
        className="bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
      >
        < RiDeleteBin7Fill className="text-gray-800" />
      </div>
    </div>
  </>
  );
};

export default CartItem;
