import ProductCardMain from "../components/ProductCardMain";
import TitleContainer from "../layout/TitleContainer";
import ProductList from "../list-product/BestPrices";
import ProductListWN from "../list-product/WhatsNew";
import productData from "../list-product/productData";

export default function LandingPage() {
  return (
    <div>
      <ProductCardMain {...productData} />
      <TitleContainer name="Related Product" />
      <ProductListWN />
      <TitleContainer name="Best Price" />
      <ProductList />
    </div>
  );
}
