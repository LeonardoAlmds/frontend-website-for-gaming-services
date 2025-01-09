import React, { useState } from "react";
import "./Product.css";

const Product = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");

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
                        <h1 id="product-name">Produto</h1>
                        <div className="product-category">
                            <img id="category-icon" src="/path/to/icon.jpg" alt="Categoria" />
                            <span id="category-name">Categoria</span>
                        </div>
                        <div className="product-stats">
                            <div className="stat">
                                <span className="stat-title">DISPONÍVEIS </span>
                                <span id="available-count" className="stat-value">35</span>
                            </div>
                            <div className="stat">
                                <span className="stat-title">VENDIDOS </span>
                                <span id="product-sold" className="stat-value">2260</span>
                            </div>
                        </div>
                        <p>
                            <span className="price" id="product-price">R$ 0.00</span>
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
