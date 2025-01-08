import './Modal.css'
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, setOpenModal, categories }) {
  const navigate = useNavigate()

  const handleCategory = (category) => {
    setOpenModal(!isOpen)
    navigate("/category", { state: { category } });
  };

  if (isOpen) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={() => setOpenModal(!isOpen)}>
            &times;
          </span>
          <h2>Categorias</h2>
          <ul className="categories-list">
            {categories.map((category, index) => (
              <button onClick={() => handleCategory(category)}><li key={index}><img className='category-icon' src={category.icon_url} alt="icon game" />{category.name}</li></button>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return null
}

export default Modal
