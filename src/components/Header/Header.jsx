import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
        <header className='header__section'>
            <div className="container">
                <div className="header">
                    <a href='#' className="logo-img">
                        <img src="images/logo-self.png" alt="" className="mobile-img" />
                        <img className='desktop-img' src="images/logo-line-shape.png" alt="logo" width={152} />
                    </a>
                    <button className="header__btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 18C2.5 17.7239 2.72386 17.5 3 17.5H21C21.2761 17.5 21.5 17.7239 21.5 18C21.5 18.2761 21.2761 18.5 21 18.5H3C2.72386 18.5 2.5 18.2761 2.5 18Z" fill="white"/>

                    </svg>
                    <span>Каталог</span>
                    </button>
                    <label htmlFor="search" className="header__label">
                        <input type="search"   placeholder='Найти товар'/>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z" fill="#414141"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z" fill="#414141"/>
                        </svg>
                    </label>
                    <div className="tool">
                        <div className="favorites">
                            <img src="images/heart-icon.png" alt="heart" />
                            <span>Избранное</span>
                        </div>
                        <div className="orders">
                            <img src="images/box-icon.png" alt="orders" />
                            <span>Заказы</span>
                        </div>
                        <div className="basket">
                            <img src="images/basket.png" alt="besket" />
                            <span>Корзина</span>
                        </div>
                    </div>
                    <div className="profile">
                        <img src="images/avatar.png" alt="avatar" />
                        <span>Алексей
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7 6.29289L12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447C13.5488 0.841709 13.5488 1.15829 13.3536 1.35355L7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#414141"/>
                        </svg>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header