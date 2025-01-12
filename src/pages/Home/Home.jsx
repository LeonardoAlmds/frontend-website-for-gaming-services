import { useState, useEffect } from "react";
import PopularCategory from "../../components/PopularCategory/PopularCategory";
import { CategoriesProvider } from "../../contexts/CategoriesContext";
import Carousel from "../../components/Carousel/Carousel";
import Featured from "../../components/Featured/Featured";
import { ProductsProvider } from "../../contexts/ProductsContext";
import Benefit from "../../components/Benefit/Benefit";
import Loading from "../../components/Loading/Loading"; // Importando o Loading

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um atraso de 500ms antes de remover o loading
    const timer = setTimeout(() => {
      setLoading(false);  // Após 500ms, remove o loading
    }, 400);

    // Limpeza do timer caso o componente seja desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading /> // Exibe o loading durante o delay
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
