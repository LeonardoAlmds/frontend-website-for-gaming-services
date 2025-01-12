import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router-dom";

import Loading from "../../components/Loading/Loading";

import "./Product.css";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const Product = () => {
		const categoryContext = useContext(CategoriesContext)
		const [category, setCategory] = useState()
		const [questions, setQuestions] = useState([]);
		const [newQuestion, setNewQuestion] = useState("");
		const [productAt, setProductAt] = useState([])

		const location = useLocation();
		const { product } = location.state || {};

		const loadCategory = async (categoryId) => {
			try {
				const category = await categoryContext.getCategoryById(categoryId);
				setCategory(category);
			} catch (error) {
				console.error("Erro ao carregar a categoria", error);
			}
		}

		useEffect(() => {
			setProductAt(product)
			loadCategory(product.category_id)
		}, [])
	
		const handleQuestionSubmit = () => {
			if (newQuestion.trim()) {
					setQuestions([...questions, newQuestion]);
					setNewQuestion("");
			}
	};

		return productAt ? (
			<div className="product-container">
				<div className="product-info">
					<img id="product-image" src={productAt.image_url} alt="Imagem do produto" />
					<div className="product-details">
						<div>
							<h1 id="product-name">{productAt.name}</h1>

							{category && (
								<div className="product-category">
									<img src={category.icon_url} alt="Categoria" />
									<span>{category.name}</span>
								</div>
							)}

							<div className="product-stats">
								<div className="stat">
									<span className="stat-title">DISPONÍVEIS </span>
									<span id="available-count" className="stat-value">{productAt.stock_quantity}</span>
								</div>
								<div className="stat">
									<span className="stat-title">VENDIDOS </span>
									<span id="product-sold" className="stat-value">{productAt.sold_quantity}</span>
								</div>
							</div>

							<p>
								<span className="price" id="product-price">{'R$ ' + productAt.price}</span>
							</p>
						</div>
						<button className="buy-button">Comprar</button>
						<button id="share-button" className="share-button">Compartilhar</button>
					</div>
				</div>

				<h2 className="desc-title">Descrição do Produto</h2>
        <div className="product-description">
            <p id="product-description">{product?.description}</p>
        </div>

            <div className="product-questions">
                <div className="content-questions">
                    <h2>Perguntas</h2>
                    <div id="questions-list">
                        {questions.map((question, index) => (
                            <p key={index} className="question-item">{question}</p>
                        ))}
                    </div>
                    <div className="ask-question">
                        <textarea
                            id="new-question"
                            placeholder="Faça sua pergunta..."
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        />
                        <button id="ask-question-btn" onClick={handleQuestionSubmit}>Perguntar</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
		<Loading/>
	);
};

export default Product