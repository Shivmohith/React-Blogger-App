node_modules contains all the dependencies
    react and react-dom are the important ones
    the name has to be "node_modules"
    git repository does not contain node_modules
    so when you clone react repository, you won't have node_modules, but you can use "npm install" to install dependencies based on package.json
    
all the static files are in public folder
    any third-party javascript files can be placed in public folder

package.json is the configuration files - all node.js files have package.json

jest framework is used for testing

"npm start" is used in dev environment 

Every component has to be kept in its own file

Try to keep your component file small

Repeatedly calling render() reduces performance

Generally start with function based components then based on the requirement it can be changed to class based components

Instances should be names using camel case and classes should be named using pascal case

Technical Notes:

you can export anything - classes, functions, variables; to use it in a different file, you have to use "import" keyword
multiple exports have to be named exports
"export default" - another syntax for exporting; if you use "export default", while importing you don't have to use curly brackets
2 types of exports: 1. Named exports
                    2. Default exports


classes should have render method!
render method defines the UI

state is an object pasrt of the Component class in React

Rule in js: a derived class has to call the parent class's constructor first 

"this" points to the global object

In javascript functions are objects so functions have properties and methods
/* Common interview question */
".bind" returns a new function reference after binding the "this" 
".call" just attches the "this"

services: components get data from services class

While importing if you mention only the folder, js will look for "index.js" by default. if you give any other name, you have to explicitly mention the name of the file

Don't make a call to the server in render function or constructor 

Only class based components have lifecycle methods
3 stages of lifecycle: 1. Mounting - when a new component is created
                            a. constructor is called first
                            b. next, render is called
                            c. next, componentDidMount is called only once
                       2. Updating
                            a. render is called whenever there is a change to a state
                            b. next, componentDidUpdate is called, but it will be called repeatedly i.e, whenerver there is a change to a state
                       3. Unmounting

Call to the server can be done in componentDidMount - best practice

When defining methods/properties in class, if "static" is not used then an instance of the class has to be exported to use the methods/properties. If you use "static"
you can access the methods/properties using the class name

js should not be used to access HTML controls

ROUTING: 
Based on the URL you show that component
Query parameters is different from URL parameters
Query parameters are always inserted at the end of the URL