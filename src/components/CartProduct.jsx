import React from "react";

//icons
import { AiFillDelete } from "react-icons/ai";

//hooks
import { useRef } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";

const CartProduct = ({
  category,
  name,
  price,
  totalPrice,
  img,
  id,
  counter,
  size,
  color,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  console.log(color);

  const increaseCounter = () => {
    dispatch(cartActions.increase(id));
  };
  const decreaseCount = () => {
    dispatch(cartActions.decrease(id));
  };
  const deleteProduct = () => {
    dispatch(cartActions.deleteProduct(id));
  };
  const changeCounter = (c) => {
    dispatch(cartActions.setCounter({ value: inputRef.current.value, id: id }));
  };

  return (
    <div className="flex gap-5 min-w-[620px]">
      <img
        className=" w-[350px] h-[350px] border border-neutral-200 rounded-lg"
        src={require(`../images/${img}.png`)}
        alt=""
      />
      <div className="flex w-[300px] flex-col justify-between">
        <div>
          <p className="text-xl font-bold mb-2.5">{name}</p>
          <p className="text-[#292828] font-bold ">{category}</p>
          <div className="flex gap-4 my-4">
            <div className={`w-7 h-7 rounded-full ${color}`}></div>
            <p className="text-white uppercase bg-[#1d1d1d] rounded-3xl flex px-5 items-center justify-center">
              {size}
            </p>
          </div>
          <p className="text-xl text-[#1d1d1d] mb-8">
            {counter} x {price}USD
            {counter != 1 && (
              <span className="font-bold">| {totalPrice.toFixed(2)} USD</span>
            )}
          </p>
          <div className="flex items-center gap-6 font-black">
            <button onClick={decreaseCount} className="text-3xl">
              -
            </button>
            <input
              onChange={changeCounter}
              value={counter}
              ref={inputRef}
              type="number"
              min="1"
              max="100"
              className="border h-14 text-2xl text-center rounded-md"
            />
            <button onClick={increaseCounter} className="text-3xl">
              +
            </button>
          </div>
        </div>
        <button
          onClick={deleteProduct}
          className="w-full relative text-left p-[16px_32px] bg-[#1d1d1d] rounded-xl text-white"
        >
          REMOVE
          <AiFillDelete className="absolute text-2xl top-4 right-4" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
