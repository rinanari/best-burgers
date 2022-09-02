import React from 'react';

export default function Categories({ value, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Куриные', 'Рыбные', 'Cнэки', 'Напитки'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
