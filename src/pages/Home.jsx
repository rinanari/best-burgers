import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ItemBlock from '../components/ItemBlock';
import Skeleton from '../components/ItemBlock/Skeleton';
import Slider from '../components/Slider';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';

export default function Home() {
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { categoryId, sort } = useSelector((state) => state.filter);
  // const sort = useSelector((state) => state.filter.sort);
  const sortType = sort.sortProperty;

  useEffect(() => {
    setLoading(true);
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    axios
      .get(
        `https://630600ae697408f7edd06da7.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
      )

      .then((res) => {
        setItems(res.data);
        setLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  return (
    <>
      <Slider />
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все </h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ItemBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}
