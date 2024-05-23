// Router
import { Route, Routes } from "react-router-dom";

// Components
import Container from "./components/Container";
import Header from "./components/Header";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Container>
      <Header />
      <main className="my-20 font-satoshi">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <footer className="flex  px-[30px] pt-[30px] justify-between items-center border-t-2  ">
        <div className="flex gap-[56px] items-center">
          <img
            className="h-[60px] w-[40px] grayscale"
            src={require("./images/Logo.png")}
            alt=""
          />
          <p>© 2023 Company Name. </p>
        </div>
        <ul className="flex gap-[30px] items-center">
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <button className="bg-black px-3 py-2 text-white rounded-md">
              English
            </button>
          </li>
        </ul>
      </footer>
    </Container>
  );
};

export default App;
