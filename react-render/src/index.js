import React from './my-react';

const {createElement} = React;

window.onload = () => {
  const root  = document.getElementById("root");

  const mobile = createElement('div', {style: {color: '#333'}}, '1234765433');
  
  const name = createElement('div', {style: 'color: red'}, '王有训', mobile)

  React.render(name, root);
}