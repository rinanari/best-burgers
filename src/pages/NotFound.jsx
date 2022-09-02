import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/img/404-error.png';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Ничего не найдено</h1>
      <img src={notFound} alt="Ничего не нашлось" />
      <Link to="/" class="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}
