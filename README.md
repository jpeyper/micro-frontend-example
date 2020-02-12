# Micro frontend example

A small codebase to show how micro frontends can be implemented. Based on [Cam Jacksons micro frontend blog post](https://www.martinfowler.com/articles/micro-frontends.html)

## Notes

The package.json in the root directory is purely for the purpose of this demo to make setting up and starting everything easier.

The src/setupProxy.js script in the parent application and example 3 is just to get around cors issues in this demo. In a real version of this you probably wouldn't be running everything locally like this and relying on webpack dev server.

The parent application is just a standard Create React App project.
The micro frontends are also just Create React App projects with some slight modifications to the public/index.html and src/index.js.