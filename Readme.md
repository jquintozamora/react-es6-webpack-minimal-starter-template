# Simple Starter Template for React, ES6, SCSS, Webpack and Live Reloading (React Hot Loader 3)
The reason for doing other React starter template for single page applications (SPA) 
is because when I started to look into templates it took to me hours and hours of googling and testing different templates
to have some starting point for my SPA application.   
There are templates with hundreds of dependencies. Why not reduce to the minimal?  
In addition, even if there are tons of Starter Templates, Starter Kits and Boilerplates 
for React + ES6 + WebPack projects, it is hard to get working easily just typing npm i (or yarn), npm run start.   
Let's try!


## Features
- React 
- ES6 (with babel)
- SCSS
- Hot Module Replacement (React Hot Loader 3)
- Webpack
    - Webpack-dev-server
    - Webpack development environment configuration
    - Webpack Babel loader configuration
    - Webpack SCSS configuration
    - Webpack configuration for HMR

<br />

### Features NOT INCLUDED (TODOs)
- React Router
- Redux
- Testing environment
- Linting (eslint)
- Webpack production configuration



<br /><br />
## Getting Started
### Install pre-requisites
- Node.js and NPM: [Download and install](https://nodejs.org/). *I have version 6.6.0 of Node and 3.10.6 of NPM on Windows PC*
- Git: [Download and install](https://git-scm.com/). *I have version 2.7.4 installed on Windows PC*

### Fork
Go to the project Github page (<https://github.com/jquintozamora/react-es6-webpack-minimal-starter-template>) and click Fork button.  
*Note: That will create a new fork of the project for you, which means you will have your own space on Github to play with the code.*

### Clone Repo
1. Get the url of your forked project.
    - Go to https://github.com/username/react-es6-webpack-minimal-starter-template
2. Click on **"Clone or download"** and Copy to clipboard the url ending on .git.
3. Open your command line and go to your directoy  
*You don't need to create a specific folder for the project, it will be created by git*
4. Clone your forked repo on your machine:
```
$ git clone https://github.com/username/react-es6-webpack-minimal-starter-template
```  
*Note: That will create a new folder called react-es6-webpack-minimal-starter-template with all the files in.*

### Install yarn
We will use yarn as a client for NPM registry, because that will avoid some conflicts on dependencies between environments.  
Download and Install yarn (I have version 0.16.1 installed):
```
$ npm i -g yarn
```


### Install Project dependencies
As we have yarn, instead of using npm i to install all our dependencies in our node_modules folder, we will use just yarn.
*Note: you need to be sure your are inside the project folder because yarn will look for package.json file.*

```
$ cd react-es6-webpack-minimal-starter-template  
$ yarn
```


### Open the project with your Development IDE
I use VS Code https://code.visualstudio.com
Open the project using this command:
```
$ code .
``` 

### Start development server with Hot Reloading
```
$ npm run start
```

### Done! 
Now you can edit the files .jsx and .scss and see how the browser automatically reflects the changes.


![React Hot Loader 3 Image](./screenshots/ReactHotLoader3-logs.png)

<br /><br />

## Application Structure
Coming soon...


<br /><br />
## Contributing
Please be free of add your own improvement. I am waiting your Pull Request (PR).

## License
MIT License
Copyright (c) 2016 Jose Quinto Zamora