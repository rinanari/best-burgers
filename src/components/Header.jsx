import React from 'react';
import logoSvg from '../assets/img/free-icon-burger.png';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/img/cart.svg';
import { useSelector } from 'react-redux';
export default function Header() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="50" src={logoSvg} alt="Burger logo" />
            <div>
              <h1>Быстро, вкусно!</h1>
              <p>твои любимые бургеры</p>
            </div>
          </div>
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>
                <img src={cartIcon} alt="" />

                <p>{totalCount}</p>
                <p>{totalPrice}₽</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
