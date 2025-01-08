import { useContext, useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './Featured.css';
import { ProductsContext } from "../../contexts/ProductsContext";

const Featured = () => {
  const productsContext = useContext(ProductsContext);
  const [topProducts, setTopProducts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(12); // Itens iniciais
  const [itemsIncrement, setItemsIncrement] = useState(6); // Incremento inicial
  const [isMobile, setIsMobile] = useState(false); // Controle do estado mobile

  const loadTopProducts = async () => {
    try {
      const topProducts = await productsContext.getTopProducts();
      setTopProducts(Array.isArray(topProducts) ? topProducts : []);
    } catch (error) {
      console.error("Erro ao carregar os produtos em destaque", error);
    }
  };

  const updateLayout = (e) => {
    const mobile = e.matches;
    setIsMobile(mobile);
    setItemsToShow(mobile ? 8 : 12);
    setItemsIncrement(mobile ? 4 : 6);
  };

  useEffect(() => {
    // Configurar o listener para media query
    const mediaQuery = window.matchMedia("(max-width: 1600px)");
    updateLayout(mediaQuery); // Aplicar configuração inicial
    mediaQuery.addEventListener("change", updateLayout);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
    };
  }, []);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + itemsIncrement);
  };

  useEffect(() => {
    loadTopProducts();
  }, []);

  return (
    <div className="featured">
      <h2 id="title-featured">Em Destaque</h2>
      <div className="grid-container">
        {topProducts.slice(0, itemsToShow).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {itemsToShow < topProducts.length && (
        <div className="ver-mais-div">
          <hr />
          <button className="ver-mais" onClick={handleShowMore}>
            Ver mais serviços
          </button>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Featured;
