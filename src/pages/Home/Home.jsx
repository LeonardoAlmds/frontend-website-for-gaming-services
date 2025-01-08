import PopularCategory from "../../components/PopularCategory/PopularCategory"
import { CategoriesProvider } from "../../contexts/CategoriesContext"

const Home = () => {
  return (
    <>
      <CategoriesProvider>
        <PopularCategory/>
      </CategoriesProvider>
    </>
  )
}

export default Home