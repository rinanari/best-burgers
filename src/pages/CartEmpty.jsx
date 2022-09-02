import React from 'react';
import emptyCart from '../assets/img/cart_empty.png';
export default function CartEmpty() {
  return (
    <>
      <div className="cart cart--empty">
        <img src={emptyCart} alt="Empty cart" />

        <p>
          Вероятней всего, вы ещё не заказывали бургеры.
          <br />
          Для того, чтобы заказать, перейдите на главную страницу.
        </p>
        <a href="/" className="button button--black">
          <span>Вернуться назад</span>
        </a>
      </div>
    </>
  );
}
