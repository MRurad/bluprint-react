// Components
import ProductDetail from "../components/ProductDetail";
import ProductImage from "../components/ProductImage";
import ProductFilter from "../components/ProductFilter";
// Router
import { useParams } from "react-router-dom";
//Hooks
import { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/slices/productSlice";

const ProductPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { color, category, price, name, sizes, image } = useSelector((state) =>
    state.products.find((product) => product.id === +id)
  );

  console.log(color);

  const addToProduct = () => {
    dispatch(
      productActions.uptadeProduct({
        category: category,
        name: name,
        price: price,
        color: color,
        image: image,
        color: color,
      })
    );
  };

  useEffect(() => {
    addToProduct();
  }, []);

  useEffect(() => {
    dispatch(productActions.selectSize(null));
    dispatch(productActions.setCounter(1));
  }, [id]);

  let colorClass = `bg-${color}-500`;
  if (color === "black" || color === "white") {
    colorClass = `bg-${color}`;
  }

  return (
    <div className="grid grid-cols-12  h-[70vh] gap-10">
      <ProductDetail category={category} name={name} price={price} />
      <ProductImage img={image} />
      <ProductFilter color={colorClass} sizes={sizes} />
    </div>
  );
};

export default ProductPage;
