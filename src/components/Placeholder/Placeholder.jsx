import React, { useEffect, useState } from 'react';
import { getScreenRect } from '../../utils/Screen';

import './Placeholder.css';

const Placeholder = ({ item }) => {
  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (!item) {
      return;
    }
    const { top, left, width, height } = getScreenRect(item, document.body);
    setStyle({
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    });
  }, [item]);

  useEffect(() => {
    if (!item) {
      return;
    }
    const toRect = { top: window.pageYOffset, left: 0 };
    const fromRect = getScreenRect(item, document.body);
    const transform = `translate3d(${toRect.left - fromRect.left}px, ${toRect.top - fromRect.top}px, 0)`;
    setStyle({
      ...style,
      transform,
      width: '100%',
      height: '100%',
    });
  }, [style]);

  return (
    <div className="placeholder" style={style} />
  )
};

export default Placeholder;
