// Components
import ProductDetail from "../components/ProductDetail";
import ProductImage from "../components/ProductImage";
import ProductFilter from "../components/ProductFilter";
// Router
import { useParams } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { id } = useParams();
  const productData = useSelector((state) =>
    state.products.find((product) => product.id === +id)
  );

  let colorClass = `bg-${productData.color}-500`;
  if (productData.color === "black" || productData.color === "white") {
    colorClass = `bg-${productData.color}`;
  }

  console.log(productData);
  return (
    <div className="grid grid-cols-12 gap-10">
      <ProductDetail
        category={productData.category}
        name={productData.name}
        price={productData.price}
      />
      <ProductImage img={productData.image} />
      <ProductFilter color={colorClass} sizes={productData.sizes} />
    </div>
  );
};

export default ProductPage;
