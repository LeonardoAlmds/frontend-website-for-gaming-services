import { useContext, useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './Featured.css';
import { ProductsContext } from "../../contexts/ProductsContext";

const Featured = () => {
  const productsContext = useContext(ProductsContext);
  const [topProducts, setTopProducts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(12); 
  const [itemsIncrement, setItemsIncrement] = useState(6); 
  const [isMobile, setIsMobile] = useState(false); 

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
    const mediaQuery = window.matchMedia("(max-width: 1600px)");
    updateLayout(mediaQuery);
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
        {
          topProducts && topProducts.length > 0 ? (
            topProducts.slice(0, itemsToShow).map((product, index) => (
              <ProductCard key={index} product={product} />
          ))) : (
          
            Array.from({ length: 12 }).map((_, index) => (
              <div className="empty-card">
                <p>Aqui estarão os produtos melhores avaliados</p>
              </div>
          )))
        }
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
