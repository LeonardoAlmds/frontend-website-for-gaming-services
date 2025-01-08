import PopularCategory from "../../components/PopularCategory/PopularCategory"
import { CategoriesProvider } from "../../contexts/CategoriesContext"
import Carousel from '../../components/Carousel/Carousel'
import Featured from "../../components/Featured/Featured"
import { ProductsProvider } from "../../contexts/ProductsContext"

const Home = () => {
  return (
    <>
      <CategoriesProvider>
        <PopularCategory/>
      </CategoriesProvider>
      
      <Carousel />

      <ProductsProvider>
        <Featured />
      </ProductsProvider>
    </>
  )
}

export default Home