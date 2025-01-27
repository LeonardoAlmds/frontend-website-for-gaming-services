import { useState, useEffect } from "react";
import PopularCategory from "../../components/PopularCategory/PopularCategory";
import { CategoriesProvider } from "../../contexts/CategoriesContext";
import Carousel from "../../components/Carousel/Carousel";
import Featured from "../../components/Featured/Featured";
import { ProductsProvider } from "../../contexts/ProductsContext";
import Benefit from "../../components/Benefit/Benefit";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading /> 
      ) : (
        <>
          <CategoriesProvider>
            <PopularCategory />
          </CategoriesProvider>

          <Carousel />

          <ProductsProvider>
            <Featured />
          </ProductsProvider>

          <Benefit />
        </>
      )}
    </>
  );
};

export default Home;
