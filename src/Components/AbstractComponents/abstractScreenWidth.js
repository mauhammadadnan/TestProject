import React, {useState, useEffect} from 'react';
import {useWindowDimensions} from 'react-native';

const windowWidthWithSideMargin = (margin) => {
  const [calWidth, setCalWidth] = useState(0);
  const windowWidth = useWindowDimensions().width;
  
  useEffect(() => {
    let calW = windowWidth - margin * 2;
    setCalWidth(calW);
  }, [windowWidth]);
  return calWidth;
};

export default windowWidthWithSideMargin;