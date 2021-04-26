import {html, render} from 'lit-html';
import React from './hooks/index';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('Hello lit-html');
  React.useEffect(() => {
    console.log('effect', count, text)
  }, [count, text]);
  return {
    onClickCount: () => setCount(count + 1),
    onClickText: () => setText(text+count),
    state: {count, text}
  }
}

// Declare a template
const myTemplate = (props) => {
  return html`<div>
  <h3>${props.text}</h3>
  <p>点击次数： ${props.count}</p>
  <button @click=${props.onClickCount}>click count</button>
  <button @click=${props.onClickText}>click text</button>
  </div>`
};

let App;
App = React.render(Counter);

function onClickCount() {
  App.onClickCount();
  App = React.render(Counter);
  MyRender()
}

function onClickText() {
  App.onClickText();
  App = React.render(Counter);
  MyRender()
}
function MyRender() {
  const {text, count} = App.state;
  render(myTemplate({text, count, onClickCount, onClickText}), document.body);
}
// Render the template
window.onload = () => {
  MyRender();
}