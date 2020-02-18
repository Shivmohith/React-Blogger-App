import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


ReactDOM.render(
<App />,
document.getElementById('root')
); /* first parameter is JSX and put/render the JSX(HTML) code inside the second parameter (div tag)
      first parameter is JSX, not HTMl, though it looks like it. This JSX is converted (by React library) into 
      React.createElement("div", 
                           null, 
                           React.createElement("h1", null, " Blogger App "), 
                           React.createElement("p", null, " A simple blogging app in React! ")); */ 
// ReactDOM.render(<h1> Blogger App </h1>, document.querySelector('#root')); // another way



