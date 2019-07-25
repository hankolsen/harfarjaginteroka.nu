import React, { useContext } from 'react';
import ListItemContainer from './ListItemContainer/ListItemContainer';
import { AppContext } from '../App';

const Grid = () => {

  // Get the list items from AppContext
  const { items } = useContext(AppContext);

  return (
    <ul className="grid">
      {
        items.map(listItem => (
          <ListItemContainer item={listItem} key={listItem.id}/>
        ))
      }
    </ul>
  );
};

export default Grid;
