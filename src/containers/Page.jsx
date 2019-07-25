import React, { useContext } from 'react';
import { AppContext } from '../App';

const Page = (props) => {
  const { items } = useContext(AppContext);
  const { pathname } = props.location;
  const itemUrl = pathname.substr(1);
  const item = items.find(item => item.url === itemUrl);
  return (
    <div>
      <h1 className="title title--full">{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
};

export default Page;
