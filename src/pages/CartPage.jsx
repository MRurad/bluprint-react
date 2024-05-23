//components
import EmptyCart from "../components/EmptyCart";
import CartProduct from "../components/CartProduct";

//icon
import { BiSolidRightArrow } from "react-icons/bi";

// Redux
import { useSelector } from "react-redux";
const CartPage = () => {
  const cartData = useSelector((state) => state.cart);

  console.log(cartData);
  let total = 0;
  const calTotal = cartData.forEach((item) => {
    total += +item.totalPrice;
  });

  return (
    <>
      {Array.from(cartData).length === 0 && <EmptyCart />}
      {Array.from(cartData).length !== 0 && (
        <div>
          <h1 className="text-[#1D1D1D] text-[96px] font-extrabold mb-4">
            Cart<span className="text-yellow-300">.</span>
          </h1>
          <div className="w-full flex overflow-x-scroll py-[80px] gap-10 border-y border-[#1d1d1d] ">
            {cartData.map((product, index) => (
              <CartProduct
                key={product.id}
                counter={product.counter}
                id={product.id}
                category={product.category}
                name={product.name}
                price={product.price}
                totalPrice={product.totalPrice}
                img={product.img}
                size={product.size}
                color={product.color}
              />
            ))}
          </div>
          <div className="my-[80px] flex justify-between items-center">
            <div className="flex min-w-[700px]">
              <h1 className="text-4xl z-10 font-bold">
                Subtotal<span className="text-yellow-300">:</span>{" "}
                {total.toFixed(2)} AZN
              </h1>
              <img
                className="-translate-x-[190px] -translate-y-[10px]"
                src={require("../images/Yellow.png")}
                alt=""
              />
            </div>
            <button className="text-white duration-200 hover:bg-[#0075ff] relative text-xl font-bold uppercase text-left w-[440px] bg-[#1d1d1d] p-[20px_30px] rounded-lg">
              Place your order
              <BiSolidRightArrow className="text-xl absolute top-6 right-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
