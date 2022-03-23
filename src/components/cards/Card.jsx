import React from 'react';
import './Card.css';

function Card({stock, price, name, rating, image}) {
    const isStock = stock;
  return (
    <>
        <div className="card">
            <div className="card__img">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7046 4.25644C13.8299 3.13067 15.3564 2.49817 16.9482 2.49817C18.5399 2.49817 20.0664 3.13063 21.1916 4.25636C22.3174 5.38164 22.95 6.90829 22.95 8.49999C22.95 10.0917 22.3175 11.6183 21.1917 12.7435C21.1917 12.7436 21.1917 12.7435 21.1917 12.7435L12.3517 21.5835C12.1565 21.7788 11.8399 21.7788 11.6446 21.5835L2.80461 12.7435C0.460963 10.3999 0.460963 6.60009 2.80461 4.25644C5.14826 1.91279 8.94807 1.91279 11.2917 4.25644L11.9982 4.96289L12.7046 4.25644C12.7046 4.25647 12.7046 4.25641 12.7046 4.25644ZM16.9482 3.49817C15.6217 3.49817 14.3496 4.02528 13.4118 4.96346L12.3517 6.02355C12.258 6.11732 12.1308 6.16999 11.9982 6.16999C11.8656 6.16999 11.7384 6.11732 11.6446 6.02355L10.5846 4.96355C8.63149 3.01042 5.46484 3.01042 3.51172 4.96355C1.55859 6.91667 1.55859 10.0833 3.51172 12.0364L11.9982 20.5229L20.4846 12.0364C21.4228 11.0987 21.95 9.82648 21.95 8.49999C21.95 7.17351 21.4229 5.90138 20.4847 4.96363C19.5469 4.02544 18.2747 3.49817 16.9482 3.49817Z" fill="#414141"/>
            </svg>
            <img src={image} alt="card" />
            <span
            style={{display: isStock ? "block" : "none" }}
            >{stock}</span>
            </div>
            <div className="card__body">
                <div
                className="card__body-price">
                    <div
                    style={{display: isStock ? "block" : "none" }}
                    className="price">
                        <h5><span>{price.card}</span> ₽</h5>
                        <p
                        >С картой</p>
                    </div>
                    <div
                    className="price">
                        <h6
                        style={{fontWeight: isStock ? "400" : "700" }}
                        ><span>{price.default}</span> ₽</h6>
                        <p
                        style={{visibility: isStock ? "visible" : "hidden" }}
                        >Обычная</p>
                    </div>
                </div>
                <div className="name">
                    <h6>{name}</h6>
                </div>
                <div className="rate">
                    <img src="images/card/star.png" alt="star" />
                    <img src="images/card/star.png" alt="star" />
                    <img src="images/card/star.png" alt="star" />
                    <img src="images/card/star-gray.png" alt="star" />
                    <img src="images/card/star-gray.png" alt="star" />
                </div>
                <button className="card-btn">В корзину</button>
            </div>
        </div>
    </>
  )
}

export default Card