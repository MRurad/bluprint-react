// Components
import Size from "./Size";

//Hooks
import { useRef, useEffect } from "react";

//router
import { useNavigate } from "react-router-dom";

//Redux
import { productActions } from "../redux/slices/productSlice";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

// Images
import Cart from "../images/cart.png";

const ProductFilter = ({ color, sizes }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const history = useNavigate();
  const { size, counter, category, name, id, img, price } = useSelector(
    (state) => state.product
  );

  const selectSize = (s) => {
    dispatch(productActions.selectSize(s));
  };
  const increaseCounter = () => {
    dispatch(productActions.increase());
  };
  const decreaseCount = () => {
    dispatch(productActions.decrease());
  };
  const changeCounter = (c) => {
    dispatch(productActions.setCounter(c));
  };

  const addToCart = () => {
    if (!size) return;
    dispatch(
      cartActions.addToCart({
        name: name,
        category: category,
        size: size,
        id: id,
        img: img,
        price: price,
        counter: counter,
        color: color,
      })
    );

    // history("/cart");
  };

  return (
    <div className="col-span-4">
      {/* Color */}
      <div className="mb-10">
        <h3 className="text-xs font-bold mb-3">Product color</h3>
        <div className={`h-8 w-8 ${color} rounded-full`}></div>
      </div>
      {/* Size */}
      <div className="mb-28">
        <h3 className="text-xs font-bold mb-3">Choose your size</h3>
        <ul className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <Size
              click={() => {
                selectSize(s.name);
              }}
              key={s.name}
              title={s.title}
              disabled={s.aviable}
              selected={size === s.name}
            >
              {s.name}
            </Size>
          ))}
        </ul>
      </div>
      {/* Counter */}
      <div className="flex items-center gap-6 font-black mb-8">
        <button onClick={decreaseCount} className="text-3xl">
          -
        </button>
        <input
          onChange={() => {
            changeCounter(inputRef.current.value);
          }}
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
      {/* Add To Cart */}
      <button
        onClick={() => {
          addToCart();
        }}
        className="w-full  flex rounded-lg font-black uppercase duration-200 justify-between items-center bg-[#1d1d1d] hover:bg-[#0075ff] text-white text-xl px-8 py-6"
      >
        Add To Cart
        <span>
          <img src={Cart} alt="cart" />
        </span>
      </button>
    </div>
  );
};

export default ProductFilter;
