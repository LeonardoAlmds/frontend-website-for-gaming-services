import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useContext, useState } from 'react';

import Modal from '../ModalCategories/Modal';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { ProductsContext } from '../../contexts/ProductsContext';

const Navbar = () => {
  const categoriesContext = useContext(CategoriesContext);
  const productsContext = useContext(ProductsContext);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const loadCategories = async () => {
    try {
      await categoriesContext.getCategories();
      setCategories(Array.isArray(categoriesContext.categories) ? categoriesContext.categories : []);
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  };

  const loadProducts = async () => {
    try {
      const productsList = await productsContext.getProducts();
      setProducts(Array.isArray(productsList) ? productsList : []);
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(term)
    );
    console.log('Produtos encontrados:', filteredProducts);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, [openModal]);

  return (
    <>
      <div className='content-navbar'>
        <Link to='/'><img src={Logo} alt='Logo K+' /></Link>

        <div className='search-bar'>
          <FaSearch />
          <input
            type='text'
            id='search-input'
            placeholder='Anúncio, usuário ou categoria'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <nav className='navigation'>
          <button className='categories' onClick={() => { setOpenModal(!openModal); }}>
            Categorias <IoIosArrowDown />
          </button>
          <button id='about'>Sobre</button>
          <button className='highlight-btn' id='announce-btn'>Anunciar</button>
          <button className='icon-btn'><FaShoppingCart /></button>
          <button className='icon-btn'><GiHamburgerMenu /></button>
        </nav>
      </div>

      <Modal isOpen={openModal} setOpenModal={setOpenModal} categories={categories} />
    </>
  );
};

export default Navbar;
