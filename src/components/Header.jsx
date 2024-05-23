// Router
import { Link } from "react-router-dom";

// Logo
import Logo from "../images/Logo.png";
import Search from "../images/search.png";
import Cart from "../images/cart.png";

//hooks
import { useState, useEffect } from "react";

// redux
import { useSelector } from "react-redux";

// Styles
const styles = {
  header: "my-10 flex items-center justify-between font-satoshi",
  logo: "h-12 w-10",
  ul: "flex gap-20",
  li: "text-3xl font-black pb-3",
  span: "text-yellow-400",
  btnGroup: "flex gap-5",
  btn: "bg-[#1d1d1d] border-2 transition-all duration-200 hover:border-yellow-400 h-12 w-12 flex items-center justify-center rounded-full",
};

const Header = () => {
  const cartData = useSelector((state) => state.cart);

  const [totalCount, setTotalCount] = useState(0);

  const calCount = () => {
    const totalCount = cartData.reduce((acc, item) => acc + item.counter, 0);
    setTotalCount(totalCount);
  };

  useEffect(() => {
    calCount();
  }, [cartData]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="logo" className="h-full w-full" />
        </Link>
      </div>
      <nav>
        <ul className={styles.ul}>
          <Link to="/products">
            <li className={styles.li}>
              Products<span className={styles.span}>.</span>
            </li>
          </Link>
          <Link to="/collections">
            <li className={styles.li}>
              Collections<span className={styles.span}>.</span>
            </li>
          </Link>

          <div className="relative group">
            <li className={`${styles.li}`}>
              Accounts<span className={styles.span}>.</span>
            </li>
            <div className="absolute group  bg-white z-10 pointer-events-none opacity-0 translate-y-1 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 duration-200  w-[200px] -translate-x-[25px] rounded-xl border border-gray-100 p-5 shadow">
              <ul className="">
                <li className="hover:translate-x-1 duration-200 font-bold text-lg  mb-4">
                  <Link to="/login">
                    <a href="">Sign In</a>
                  </Link>
                </li>
                <li className="hover:translate-x-1 duration-200 font-bold text-lg  ">
                  <Link to="/sign-up">
                    <a href="">Create Account</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/help">
            <li className={styles.li}>
              Help<span className={styles.span}>.</span>
            </li>
          </Link>
        </ul>
      </nav>
      <div className={styles.btnGroup}>
        <Link to="/cart">
          <button
            className={`${styles.btn} ${
              Array.from(cartData).length !== 0 &&
              "border-4 relative border-yellow-400"
            }`}
          >
            {Array.from(cartData).length !== 0 && (
              <div className="w-6 rounded-md h-6 animate-[spin_4s_linear_infinite] text-sm font-bold flex justify-center items-center  text-center bg-yellow-400 -top-2 -right-2 absolute">
                <p className="animate-[spin_4s_linear_infinite_reverse]">
                  {totalCount}
                </p>
              </div>
            )}
            <img src={Cart} alt="cart" className="w-4" />
          </button>
        </Link>
        <button className={styles.btn}>
          <img src={Search} alt="search" className="w-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
