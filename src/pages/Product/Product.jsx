import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

import { ProductsContext } from "../../contexts/ProductsContext";

const Product = () => {
    const { id } = useParams();
    const productsContext = useContext(ProductsContext);
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [product, setProduct] = useState("");

    const loadProduct = async () => {
        try {
            const productData = await productsContext.getProductById(id);
            setProduct(productData);
        } catch (error) {
            console.error("Erro ao carregar o produto", error);
        }
    };
    

    useEffect(() => {
        setProduct(null);
        loadProduct();
    }, [id]);

    const handleQuestionSubmit = () => {
        if (newQuestion.trim()) {
            setQuestions([...questions, newQuestion]);
            setNewQuestion("");
        }
    };

    return product ? (
        <div className="product-container">
            <div className="product-info">
                <img id="product-image" src={product?.image_url} alt="Imagem do produto" />
                <div className="product-details">
                    <div>
                        <h1 id="product-name">{product?.name}</h1>
                        <p>
                            <span className="price" id="product-price">{product?.price}</span>
                        </p>
                        <div className="product-stats">
                            <div className="stat">
                                <span className="stat-title">DISPONÍVEIS </span>
                                <span id="available-count" className="stat-value">{product?.stock_quantity}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-title">VENDIDOS </span>
                                <span id="product-sold" className="stat-value">{product?.sold_quantity}</span>
                            </div>
                        </div>
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
        <h1>Carregando...</h1>
    );
};

export default Product;
