import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setSort } from '../redux/slices/filterSlice';

export let sortList = [
  { name: 'популярности', sortProperty: '-rating' },
  { name: 'возрастанию цены', sortProperty: 'price' },
  { name: 'убыванию цены', sortProperty: '-price' },
  { name: 'алфавиту asc', sortProperty: 'title' },
  { name: 'алфавиту desc', sortProperty: '-title' },
];

export default function Sort() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const sortRef = useRef();

  function onClickListItem(obj) {
    dispatch(setSort(obj));
    setOpen(false);
  }
  useEffect(() => {
    const handleClick = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"></svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  onClickListItem(obj);
                }}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
