import React from 'react';
import ReactDOM from 'react-dom';

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

/* Name of the function should be in Pascal case - start with capital letter so that it doesn't conflict with the standard HTML elements' name */
/* Component */
function Header() {
    return <div> 
                <h1> Blogger App </h1>
                <p> A simple blogging app in React! </p>
           </div>;
}

function App() {
    return <div>
        <Header />
    </div>
}