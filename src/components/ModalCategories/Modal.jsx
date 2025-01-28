import './Modal.css'
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, setOpenModal, categories }) {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    setOpenModal(!isOpen);
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
          {categories.length > 0 ? (
            <ul className="categories-list">
              {categories.map((category, index) => (
                <button key={index} onClick={() => handleCategory(category)}>
                  <li>
                    <img
                      className="category-icon"
                      src={category.icon_url}
                      alt="icon game"
                    />
                    {category.name}
                  </li>
                </button>
              ))}
            </ul>
          ) : (
            <div className="empty-categories">
              <p>Aqui estarão as categorias</p>
              <button className="add-category-btn" onClick={() => setOpenModal(false)}>
                Adicionar categoria
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default Modal;
