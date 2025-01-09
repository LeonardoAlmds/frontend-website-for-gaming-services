import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [availableCount, setAvailableCount] = useState("");
    const [productSold, setProductSold] = useState("");

    const fetchProduct = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/products?id=1");
            const data = await response.json();
            setProduct(data.product);
            setPrice(data.price);
            setCategory(data.category);
            setAvailableCount(data.availableCount);
            setProductSold(data.productSold);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const handleQuestionSubmit = () => {
        if (newQuestion.trim()) {
            setQuestions([...questions, newQuestion]);
            setNewQuestion("");
        }
    };

    return (
        <div className="product-container">
            <div className="product-info">
                <img id="product-image" src="/path/to/image.jpg" alt="Produto" />
                <div className="product-details">
                    <div>
                        <h1 id="product-name">{product}</h1>
                        <div className="product-category">
                            <img id="category-icon" src="/path/to/icon.jpg" alt="Categoria" />
                            <span id="category-name">{category}</span>
                        </div>
                        <div className="product-stats">
                            <div className="stat">
                                <span className="stat-title">DISPONÍVEIS </span>
                                <span id="available-count" className="stat-value">{availableCount}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-title">VENDIDOS </span>
                                <span id="product-sold" className="stat-value">{productSold}</span>
                            </div>
                        </div>
                        <p>
                            <span className="price" id="product-price">{price}</span>
                        </p>
                    </div>
                    <button className="buy-button">Comprar</button>
                    <button id="share-button" className="share-button">Compartilhar</button>
                </div>
            </div>

            <h2 className="desc-title">Descrição do Produto</h2>
            <div className="product-description">
                <p id="product-description">Descrição do produto.</p>
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
    );
};

export default Product;
