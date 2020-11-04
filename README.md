# UWW Student Athlete Support System

UWW SASS is a information/social media support platform for student athletes and coaches built on:
  - React
  - NodeJS
  - MongoDB
  - Express
  - Webpack
  - And more..

### Table of Contents
  * [New Features]
  * [Planned Features]
  * [Installation]
  * [Documentation]
  * [Useful Links]

### New Features!
  - Panic button to alert coaches or staff of a critical event
  - Blank pages in the sidebar for content related to the side (boilerplate code)
  
### Planned Features - Maybe, we haven't discussed this yet.
  - Chat between players, coaches, and other professionals.
  - Assignment of players to new teams
  - Allow coaches to make new teams
  - Allow coaches to assign players to new teams
  - Maybe an invite only feature? A coach can send an email to the player to speed up registration.

### Installation

UWW SASS requires [Node.js](https://nodejs.org/) v10+ to run.
UWW SASS requires a backend server and a front end server

To start the front end in development mode do the following
```
$ Navigate to the root directory of the project
$ Ensure all depencies are downloaded (npm install && yarn)
$ Start the server (npm start)
```
Once this is completed a window should pop up in your browser. This is the frontend. If you get an error, change the version of ```"react-scripts":``` to  ```"3.4.1"```.

Now it's time to start the backend.
```
$ Ensure you have the most up-to-date config.json file. This will allow you to connect to the database
$ Open a seperate command line and navigate to the projects root directory.
$ Run (yarn server)
```
The backend server will then start, if you connect to the database properly the command line will say so. Once that is done, the installation is complete.

### Documentation -- OLD Needs updating
* [Backend Documentation] -- dead link
* [Redux Documentation] -- dead link
* [Client Documentation] -- dead link

### Useful Links
* Web framework for Node.js - [Express]
* JSON Web Tokens(jwt) - [jsonwebtoken]
* JavaScript library for building user interfaces - [React]
* Predictable state container - [Redux]
* A React component library implementing Google's Material Design - [Material-UI]
* Redux Form - [Redux Form]
* Declarative routing for React - [React-Router]
* Promise based HTTP client - [Axios]
* Code linting tool - [ESLint]

[//]: #
   [Backend Documentation]: <https://github.com/uww-student-athlete-success/stuath-success-web/tree/master/docs/BACKEND.md>
   [Redux Documentation]: <https://github.com/uww-student-athlete-success/stuath-success-web/tree/master/docs/REDUX.md>
   [Client Documentation]: <https://github.com/uww-student-athlete-success/stuath-success-web/tree/master/docs/CLIENT.md>
   [Express]: <http://expressjs.com/>
   [jsonwebtoken]: <https://www.npmjs.com/package/jsonwebtoken>
   [React]: <https://facebook.github.io/react/>
   [Redux]: <http://redux.js.org/>
   [Material-UI]: <https://material-ui-1dab0.firebaseapp.com/>
   [Redux Form]: <http://redux-form.com/8.2.6/>
   [React-Router]: <https://reacttraining.com/react-router/>
   [Axios]: <https://github.com/mzabriskie/axios>
   [ESLint]: <http://eslint.org/>

   [New Features]: <https://github.com/uww-student-athlete-success/stuath-success-web#new-features>
   [Planned Features]: <https://github.com/uww-student-athlete-success/stuath-success-web#planned-features---maybe-we-havent-discussed-this-yet>
   [Installation]: <https://github.com/uww-student-athlete-success/stuath-success-web#installation>
   [Documentation]: <https://github.com/uww-student-athlete-success/stuath-success-web#documentation----old-needs-updating>
   [Useful Links]: <https://github.com/uww-student-athlete-success/stuath-success-web#useful-links>
