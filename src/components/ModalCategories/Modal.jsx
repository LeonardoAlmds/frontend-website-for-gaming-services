import './Modal.css'

function Modal({ isOpen, setOpenModal, categories }) {
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
              <li key={index}><img className='category-icon' src={category.icon_url} alt="icon game" />{category.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return null
}

export default Modal
