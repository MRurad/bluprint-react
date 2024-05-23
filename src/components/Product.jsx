// Images
import Cap from "../images/cap.png";
import Tshirt from "../images/t-shirt.png";
// Router
import { Link } from "react-router-dom";

const Product = ({ img, title, price, category, id, topProduct = true }) => {
  return (
    <div
      className={` ${!topProduct ? "col-span-3" : "col-span-4"} cursor-pointer`}
    >
      <Link to={`/products/${id}`}>
        <div
          className={`mb-4 ${
            !topProduct ? "w-[300px]" : ""
          }  border border-neutral-200 rounded-lg`}
        >
          <img
            src={require(`../images/${img}.png`)}
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex w-[300px] justify-between font-bold">
          <div>
            <h1 className="text-xl ">{title}</h1>
            <p className=" text-neutral-500">{category}</p>
          </div>
          <h1 className="text-2xl">
            <span>{price} </span>
            AZN
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Product;
