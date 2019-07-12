import React, { useContext, useState } from 'react';
import { HomeContext } from '../../containers/Home';

import './ListItem.css';

const ListItem = ({ item }) => {
  const { showPreview } = useContext(HomeContext);
  const [animating, setAnimating] = useState(false);
  const baseImagePath = '/images';
  const { image, title } = item;
  const imagePath = `${baseImagePath}/${image}.jpg`;

  const clickItem = ({ nativeEvent }) => {
    nativeEvent.preventDefault();
    const item = nativeEvent.target.closest('li');
    const bg = item.querySelector('.bg');
    bg.addEventListener('transitionend', () => {
      showPreview(item, image);
    });
    setAnimating(true);

    return false;
  };

  const itemStyle = {
    backgroundImage: `url(${imagePath})`,
  };

  const classNames=`grid-item ${animating ? 'grid-item--animate' : ''}`;

  return (
    <li className={classNames}  >
      <div className="bg" style={itemStyle} />
      <a href={image} onClick={clickItem}>
        <h2 className="title title--preview">{title}</h2>
      </a>
    </li>
  )
};

export default ListItem;
