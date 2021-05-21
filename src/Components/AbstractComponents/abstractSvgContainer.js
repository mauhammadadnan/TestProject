import React, {Component} from 'react';
import {SvgXml} from 'react-native-svg';

const AbstractSVGContainer = (props) => {
  const size = props.size ? props.size : 40;
  return (
    <SvgXml
      style={props.style}
      width={size}
      height={size}
      xml={props.svg}
    />
  );
};
export default AbstractSVGContainer;