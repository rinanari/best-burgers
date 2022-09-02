import React from 'react';
import '..//scss/components/_footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__about-us">
          <h3>О наc </h3>
          <ul>
            <li>
              <a href="#">Работа у нас</a>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
          </ul>
        </div>
        <div className="footer__subscribe">
          <h3>Подписывайтесь на рассылку</h3>
          <form className="footer__subscribe--form" action="post">
            <input type="text" id="1" />

            <input type="submit" value="Подписаться" className="button button--footer" />

            <input type="checkbox" name="agree" id="agreeForm" required />
            <label htmlFor="agreeForm">Соглашаюсь на обработку персональных данных</label>
          </form>
        </div>
      </div>
    </div>
  );
}
