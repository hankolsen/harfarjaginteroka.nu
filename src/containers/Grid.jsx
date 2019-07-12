import React from 'react';
import ListItem from '../components/ListItem/ListItem';

const Grid = () => {
  const listItems = [
    { image: 'train-station', id: 1, title: 'Tågperrong' },
    { image: 'store-entrance', id: 2, title: 'Affärsentré' }
  ];
  return (
    <ul className="grid">
      {
        listItems.map(listItem => (
          <ListItem item={listItem} key={listItem.id}/>
        ))
      }
    </ul>
  );
};

export default Grid;
