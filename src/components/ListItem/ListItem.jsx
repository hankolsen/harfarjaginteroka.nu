import React from 'react';

import './ListItem.css';

const ListItem = ({ animating, clickHandler, url, title }) => {

  const imagePath = `/images/${url}.jpg`;

  const itemStyle = {
    backgroundImage: `url(${imagePath})`,
  };

  const classNames=`grid-item ${animating ? 'grid-item--animate' : ''}`;

  return (
    <li className={classNames}  >
      <div className="bg" style={itemStyle} />
      <a href={url} onClick={clickHandler}>
        <h2 className="title title--preview">{title}</h2>
      </a>
    </li>
  )
};

export default ListItem;
