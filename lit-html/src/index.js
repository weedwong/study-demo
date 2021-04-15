import {html, render} from 'lit-html';

// Declare a template
const myTemplate = html`<div>Hello lit-html</div>`;

// Render the template
window.onload = () => {
  render(myTemplate, document.body);
}