import ImageMain from "../layout/ImageMain";
import TitleContainer from "../layout/TitleContainer";
import ProductList from "../list-product/BestPrices";
import CategoriesList from "../list-product/CategoriesList";
import ProductListWN from "../list-product/WhatsNew";

export default function LandingPage() {
  return (
    <div>
      <ImageMain />
      <TitleContainer name="Whats New" />
      <ProductListWN />
      <TitleContainer name="Best Price" />
      <ProductList />
      <CategoriesList />
    </div>
  );
}
