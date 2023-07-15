import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col  items-center justify-between gap-3 p-4 mt-10 ml-8 border-4 border-slate-800">
      <div className="flex-shrink-0 mr-4 flex-col xl:flex-row p-8 w-[50vw] md:w-[20vw]">
        <img src={item.image} alt="" className="object-cover" />
      </div>
      <div className=" my-[3vw] relative">
        <h1 className="text-lg font-semibold ">{item.title}</h1>
        <h2 className="text-sm text-gray-500 mt-3">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h2>
        <div className="flex-col md:flex gap-10">
          <p className="text-4xl font-medium mt-6 flex relative">${item.price} 
              <div onClick={removeFromCart} className="text-red-500 cursor-pointer text-4xl w-9  translate-x-20">
            <FcDeleteDatabase />
        </div></p>

        </div>         
      </div>
  
    </div>
  );
};

export default CartItem;