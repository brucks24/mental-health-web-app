# UWW Student Athlete Support System

UWW SASS is a information/social media support platform for student athletes and coaches built on:
  - React
  - NodeJS
  - MySQL
  - Express
  - Webpack
  - And more..

# New Features!
  - Panic button to alert coaches or staff of a critical event
  - Blank pages in the sidebar for content related to the side (boilerplate code)

### Installation

UWW SASS requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the DEVELOPMENT server.

```sh
$ cd stuath-system-web
$ npm install
$ npm run build
```

For production environments...

```sh
$ npm install
$ npm run build:prod
```

# START HERE

### Documentation
* [Backend Documentation]
* [Redux Documentation]
* [Client Documentation]

### Useful Links
* Web framework for Node.js - [Express]
* JavaScript ORM for Node.js - [Bookshelf]
* SQL Query Builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle - [Knex]
* JSON Web Tokens(jwt) - [jsonwebtoken]
* Logging Library - [Winston]
* Object schema validation - [Joi]
* API documentation using [swagger-jsdoc] and [swagger-ui]
* JavaScript library for building user interfaces - [React]
* Predictable state container - [Redux]
* A React component library implementing Google's Material Design - [Material-UI]
* Redux Form - [Redux Form]
* Declarative routing for React - [React-Router]
* Promise based HTTP client - [Axios]
* Code linting tool - [ESLint]

### Server file structure
```server
 ┣ config 
 ┃ ┣ bookshelf.js
 ┃ ┣ database.js
 ┃ ┣ directory.js
 ┃ ┣ express.js
 ┃ ┣ joi.validate.js
 ┃ ┣ knex.js
 ┃ ┣ mail.js
 ┃ ┣ swagger.js
 ┃ ┗ winston.js
 ┣ controllers
 ┃ ┣ auth.controller.js
 ┃ ┣ panic.controller.js
 ┃ ┗ user.controller.js
 ┣ middlewares
 ┃ ┣ authenticate.js
 ┃ ┣ errorHandler.js
 ┃ ┗ joiErrorHandler.js
 ┣ migrations
 ┃ ┗ 20170715222060_create_users_table.js
 ┣ models
 ┃ ┗ user.model.js
 ┣ routes
 ┃ ┣ auth.route.js
 ┃ ┣ index.route.js
 ┃ ┣ panic.route.js
 ┃ ┗ user.route.js
 ┣ utils
 ┃ ┗ validator.js
 ┗ app.js
 ```
### Client file structure
```
client
 ┣ actions
 ┃ ┣ authAction.js
 ┃ ┣ commonAction.js
 ┃ ┣ crudAction.js
 ┃ ┣ uiActions.js
 ┃ ┗ userActions.js
 ┣ components
 ┃ ┣ auth
 ┃ ┃ ┣ LoginForm.js
 ┃ ┃ ┣ RegisterForm.js
 ┃ ┃ ┗ styles.js
 ┃ ┣ chat
 ┃ ┃ ┣ Chat.js
 ┃ ┃ ┗ styles.js
 ┃ ┣ common
 ┃ ┃ ┣ drawer
 ┃ ┃ ┃ ┣ components
 ┃ ┃ ┃ ┃ ┣ Dot.js
 ┃ ┃ ┃ ┃ ┣ PanicButton.js
 ┃ ┃ ┃ ┃ ┣ SidebarLink.js
 ┃ ┃ ┃ ┃ ┗ styles.js
 ┃ ┃ ┃ ┣ Sidebar.js
 ┃ ┃ ┃ ┗ styles.js
 ┃ ┃ ┣ form
 ┃ ┃ ┃ ┣ renderText.js
 ┃ ┃ ┃ ┗ selectText.js
 ┃ ┃ ┣ header
 ┃ ┃ ┃ ┣ Header.js
 ┃ ┃ ┃ ┗ styles.js
 ┃ ┃ ┣ layout
 ┃ ┃ ┃ ┗ MainLayout.js
 ┃ ┃ ┣ snackbar
 ┃ ┃ ┃ ┣ CustomizedSnackbar.js
 ┃ ┃ ┃ ┗ DefaultSnackbar.js
 ┃ ┃ ┗ user
 ┃ ┃ ┃ ┗ userName.js
 ┃ ┣ dashboard
 ┃ ┃ ┣ Chat.js
 ┃ ┃ ┣ Dashboard.js
 ┃ ┃ ┣ styles.js
 ┃ ┃ ┗ SummaryBox.js
 ┃ ┣ error
 ┃ ┃ ┗ NotFound.js
 ┃ ┣ people
 ┃ ┃ ┣ People.js
 ┃ ┃ ┗ styles.js
 ┃ ┣ settings
 ┃ ┃ ┣ Settings.js
 ┃ ┃ ┗ styles.js
 ┃ ┗ teams
 ┃ ┃ ┣ styles.js
 ┃ ┃ ┗ Teams.js
 ┣ config
 ┃ ┗ config.js
 ┣ constants
 ┃ ┣ actionType.js
 ┃ ┗ entity.js
 ┣ containers
 ┃ ┣ app
 ┃ ┃ ┗ AppContainer.js
 ┃ ┣ auth
 ┃ ┃ ┣ LoginContainer.js
 ┃ ┃ ┗ SignUpContainer.js
 ┃ ┣ chat
 ┃ ┃ ┗ ChatContainer.js
 ┃ ┣ dashboard
 ┃ ┃ ┗ DashboardContainer.js
 ┃ ┣ people
 ┃ ┃ ┗ PeopleContainer.js
 ┃ ┣ settings
 ┃ ┃ ┗ SettingsContainer.js
 ┃ ┗ teams
 ┃ ┃ ┗ TeamsContainer.js
 ┣ reducers
 ┃ ┣ authReducer.js
 ┃ ┣ crudReducer.js
 ┃ ┣ index.js
 ┃ ┣ uiReducer.js
 ┃ ┗ userReducer.js
 ┣ routers
 ┃ ┣ PrivateRoute.js
 ┃ ┣ PublicRoute.js
 ┃ ┣ RestrictRoute.js
 ┃ ┗ routes.js
 ┣ services
 ┃ ┣ authService.js
 ┃ ┣ httpService.js
 ┃ ┣ tokenService.js
 ┃ ┣ uiService.js
 ┃ ┗ userService.js
 ┣ store
 ┃ ┗ configureStore.js
 ┣ utils
 ┃ ┣ commonUtil.js
 ┃ ┣ history.js
 ┃ ┣ httpBaseUtil.js
 ┃ ┣ httpUtil.js
 ┃ ┣ jwtUtil.js
 ┃ ┣ serializeUtil.js
 ┃ ┗ storageUtil.js
 ┗ main.js
```

[//]: #
   [Backend Documentation]: <https://github.com/uww-student-athlete-success/stuath-success-web/tree/master/docs/BACKEND.md>
   [Redux Documentation]: <https://github.com/uww-student-athlete-success/stuath-success-web/tree/master/docs/REDUX.md>
   [Client Documentation]: <https://github.com/uww-student-athlete-success/stuath-success-web/tree/master/docs/CLIENT.md>
   [Express]: <http://expressjs.com/>
   [Bookshelf]: <http://bookshelfjs.org/>
   [Knex]: <http://knexjs.org/>
   [jsonwebtoken]: <https://www.npmjs.com/package/jsonwebtoken>
   [Winston]: <https://www.npmjs.com/package/winston>
   [Joi]: <https://www.npmjs.com/package/joi>
   [swagger-jsdoc]: <https://www.npmjs.com/package/swagger-jsdoc>
   [swagger-ui]: <https://www.npmjs.com/package/swagger-ui>
   [React]: <https://facebook.github.io/react/>
   [Redux]: <http://redux.js.org/>
   [Material-UI]: <https://material-ui-1dab0.firebaseapp.com/>
   [Redux Form]: <http://redux-form.com/8.2.6/>
   [React-Router]: <https://reacttraining.com/react-router/>
   [Axios]: <https://github.com/mzabriskie/axios>
   [ESLint]: <http://eslint.org/>
