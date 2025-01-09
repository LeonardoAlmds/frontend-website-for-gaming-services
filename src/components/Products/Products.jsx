import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";
import './Products.css'

const Products = ({ products }) => {
  const [itemsToShow, setItemsToShow] = useState(12);
  const [itemsIncrement, setItemsIncrement] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="products">
      <div className="grid-container">
        {products.slice(0, itemsToShow).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {itemsToShow < products.length && (
        <div className="ver-mais-div">
          <hr />
          <button className="ver-mais" onClick={handleShowMore}>
            Ver mais produtos
          </button>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Products;
