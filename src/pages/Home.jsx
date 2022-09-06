import React, { useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ItemBlock from '../components/ItemBlock';
import Skeleton from '../components/ItemBlock/Skeleton';
import Slider from '../components/Slider';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchItems } from '../redux/slices/itemSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.item);

  const getItems = async () => {
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    dispatch(
      fetchItems({
        order,
        sortBy,
        category,
      }),
    );
  };

  const { categoryId, sort } = useSelector((state) => state.filter);

  const sortType = sort.sortProperty;

  useEffect(() => {
    getItems();
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
        {status === 'error' && (
          <div className="content__error-info">
            <h2>Что-то пошло не так</h2>
            <p>Не удалось вывести товары. Попробуйте повторить попытку чуть позже</p>
          </div>
        )}
        {status === 'loading'
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ItemBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}
