import React, { useCallback, useContext, useState } from 'react';
import { HomeContext } from '../Home';
import ListItem from '../../components/ListItem/ListItem';

const ListItemContainer = ({ item }) => {
  const { openPage } = useContext(HomeContext);
  const [animating, setAnimating] = useState(false);

  const { url, title } = item;

  const clickItem = useCallback(({ nativeEvent }) => {
    nativeEvent.preventDefault();
    const item = nativeEvent.target.closest('li');
    const bg = item.querySelector('.bg');
    bg.addEventListener('transitionend', () => {
      openPage(item, url);
    });
    setAnimating(true);

    return false;
  }, []);

  return (
    <ListItem
      animating={animating}
      clickHandler={clickItem}
      url={url}
      title={title}
    />
  );
};

export default ListItemContainer;
