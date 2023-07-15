import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className=" relative mx-auto w-11/12">
  {
    cart.length > 0  ? 
    (<div className="flex-col relative mx-auto flex xl:flex-row justify-center">


      <div className="grid xl:grid-cols-3 xl:flex-row overflow-hidden w-11/12 ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div >

        <div className="mx-10 w-11/12 flex-col  justify-center items-center">
          <div className="text-3xl  xl:text-5xl font-bold my-12">Your Cart</div>
          <div className="text-2xl xl:text-3xl font-semibold my-3">Summary:</div>
          <p>
            <span className="text-2xl xl:text-2xl  my-3">Total Items: <span className="font-semibold">{cart.length}</span></span>
          </p>
          <p className="text-2xl xl:text-2xl my-3">Total Amount: <span className="font-semibold">${totalAmount.toFixed(3)}</span></p>
          <button className="text-white font-bold xl:text-3xl bg-slate-900 rounded-lg px-9 py-3 my-8 cursor-pointer ">
           Buy
          </button>
        </div>

        
        
        

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center align-middle mt-[330px] gap-[100px]">
      <h1 className="text-black font-bold text-6xl translate-x-20">Cart Empty!!</h1>
      <Link to={"/"}>
        <button className="text-white font-bold text-3xl bg-slate-900 rounded-lg p-6 ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
