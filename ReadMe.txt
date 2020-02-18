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

every component has to be kept in its own file

Technical Notes:

you can export anything - classes, functions, variables; to use it in a different file, you have to use "import" keyword
multiple exports have to be named exports
"export default" - another syntax for exporting; if you use "export default", while importing you don't have to use curly brackets
2 types of exports: 1. Named exports
                    2. Default exports


classes should have render method!

state is an object pasrt of the Component class in React

Rule in js: a derived class has to call the parent class's constructor first 

"this" points to the global object

In javascript functions are objects so functions have properties and methods
/* Common interview question */
".bind" returns a new function reference after binding the "this" 
".call" just attches the "this"