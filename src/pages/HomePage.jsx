//Images
import Home1 from "../images/Home1.png";
import Home2 from "../images/Home2.png";
import Home3 from "../images/Home3.png";
import Home4 from "../images/Home4.png";

//icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

// Components
import Products from "../components/Products";

// Router
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="my-[160px]">
        <h1 className="text-[#1D1D1D] text-[96px] font-extrabold mb-4">
          Explore Collections<span className="text-yellow-300">.</span>
        </h1>
        <div className="grid grid-cols-3 grid-rows-[270px_330px]  gap-10 grid-flow-row">
          <img className="col-span-2" src={Home1} alt="" />
          <img className="row-span-3" src={Home2} alt="" />
          <img className="rounded-xl " src={Home3} alt="" />
          <div>
            <img className="rounded-xl " src={Home4} alt="" />
            <div className="flex cursor-pointer justify-between items-center  bg-yellow-300 mt-[30px] px-[30px]  py-[25px] rounded-xl ">
              <h1 className="font-semibold ">See All collections</h1>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
      <section>
        <h1 className="text-[#1D1D1D] text-[96px] font-extrabold mb-4">
          Top Products<span className="text-yellow-300">.</span>
        </h1>
        <Products showHead={false} />
        <div>
          <Link
            className="flex cursor-pointer justify-between items-center w-[830px] text-white bg-[#1d1d1d] mt-[30px] px-[30px]  py-[25px] rounded-xl "
            to={"/products"}
          >
            <h1 className="font-semibold ">See All collections</h1>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </section>
      <div className="my-[160px] relative  bg-[#1d1d1d] rounded-xl w-full h-[450px] gap-[55px] flex justify-center items-center flex-col text-white">
        <h1 className="text-5xl text-center z-10 ">
          Don’t miss out and join our monthly <br /> newsletter to know about
          new arrivals.
        </h1>
        <svg
          className="absolute bottom-[215px]  right-[220px]"
          xmlns="http://www.w3.org/2000/svg"
          width="297"
          height="36"
          viewBox="0 0 297 36"
          fill="none"
        >
          <path
            d="M9.9556 17.9684C56.7597 10.0636 177.794 0.700578 287.499 26.4874"
            stroke="#0075FF"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>
        <div className="relative">
          <input
            placeholder="Your E-mail"
            className="rounded-xl w-[500px]   items-center placeholder:opacity-1 px-[30px] py-[15px] placeholder:font-semibold placeholder:text-lg placeholder:text-black"
            type="text"
          />
          <FiArrowUpRight className="absolute text-2xl text-black bottom-[15px] right-[10px]" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
