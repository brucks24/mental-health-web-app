|-- undefined
    |-- .babelrc
    |-- .env
    |-- .eslintignore
    |-- .eslintrc
    |-- .gitignore
    |-- knexfile.js
    |-- package-lock.json
    |-- package.json
    |-- readme.md
    |-- client
    |   |-- main.js
    |   |-- actions
    |   |   |-- authAction.js
    |   |   |-- commonAction.js
    |   |   |-- crudAction.js
    |   |   |-- uiActions.js
    |   |   |-- userActions.js
    |   |-- components
    |   |   |-- auth
    |   |   |   |-- LoginForm.js
    |   |   |   |-- RegisterForm.js
    |   |   |   |-- styles.js
    |   |   |-- chat
    |   |   |   |-- Chat.js
    |   |   |   |-- styles.js
    |   |   |-- common
    |   |   |   |-- drawer
    |   |   |   |   |-- Sidebar.js
    |   |   |   |   |-- styles.js
    |   |   |   |   |-- components
    |   |   |   |       |-- Dot.js
    |   |   |   |       |-- PanicButton.js
    |   |   |   |       |-- SidebarLink.js
    |   |   |   |       |-- styles.js
    |   |   |   |-- form
    |   |   |   |   |-- renderText.js
    |   |   |   |   |-- selectText.js
    |   |   |   |-- header
    |   |   |   |   |-- Header.js
    |   |   |   |   |-- styles.js
    |   |   |   |-- layout
    |   |   |   |   |-- MainLayout.js
    |   |   |   |-- snackbar
    |   |   |   |   |-- CustomizedSnackbar.js
    |   |   |   |   |-- DefaultSnackbar.js
    |   |   |   |-- user
    |   |   |       |-- userName.js
    |   |   |-- dashboard
    |   |   |   |-- Chat.js
    |   |   |   |-- Dashboard.js
    |   |   |   |-- styles.js
    |   |   |   |-- SummaryBox.js
    |   |   |-- error
    |   |   |   |-- NotFound.js
    |   |   |-- people
    |   |   |   |-- People.js
    |   |   |   |-- styles.js
    |   |   |-- settings
    |   |   |   |-- Settings.js
    |   |   |   |-- styles.js
    |   |   |-- teams
    |   |       |-- styles.js
    |   |       |-- Teams.js
    |   |-- config
    |   |   |-- config.js
    |   |-- constants
    |   |   |-- actionType.js
    |   |   |-- entity.js
    |   |-- containers
    |   |   |-- app
    |   |   |   |-- AppContainer.js
    |   |   |-- auth
    |   |   |   |-- LoginContainer.js
    |   |   |   |-- SignUpContainer.js
    |   |   |-- chat
    |   |   |   |-- ChatContainer.js
    |   |   |-- dashboard
    |   |   |   |-- DashboardContainer.js
    |   |   |-- people
    |   |   |   |-- PeopleContainer.js
    |   |   |-- settings
    |   |   |   |-- SettingsContainer.js
    |   |   |-- teams
    |   |       |-- TeamsContainer.js
    |   |-- reducers
    |   |   |-- authReducer.js
    |   |   |-- crudReducer.js
    |   |   |-- index.js
    |   |   |-- uiReducer.js
    |   |   |-- userReducer.js
    |   |-- routers
    |   |   |-- PrivateRoute.js
    |   |   |-- PublicRoute.js
    |   |   |-- RestrictRoute.js
    |   |   |-- routes.js
    |   |-- services
    |   |   |-- authService.js
    |   |   |-- httpService.js
    |   |   |-- tokenService.js
    |   |   |-- uiService.js
    |   |   |-- userService.js
    |   |-- store
    |   |   |-- configureStore.js
    |   |-- utils
    |       |-- commonUtil.js
    |       |-- history.js
    |       |-- httpBaseUtil.js
    |       |-- httpUtil.js
    |       |-- jwtUtil.js
    |       |-- serializeUtil.js
    |       |-- storageUtil.js
    |-- dist
    |   |-- client.bundle.js
    |-- logs
    |   |-- .995f824fd1e835e44f98c326fe1ace14cce22953-audit.json
    |   |-- 2019-12-11-log.log
    |   |-- 2019-12-12-log.log
    |   |-- 2019-12-13-log.log
    |   |-- 2019-12-18-log.log
    |-- public
    |   |-- .htaccess
    |   |-- index.html
    |   |-- css
    |   |   |-- style.css
    |   |-- img
    |   |   |-- avatar5.png
    |   |-- swagger
    |       |-- favicon-16x16.png
    |       |-- favicon-32x32.png
    |       |-- index.html
    |       |-- oauth2-redirect.html
    |       |-- swagger-ui-bundle.js
    |       |-- swagger-ui-bundle.js.map
    |       |-- swagger-ui-standalone-preset.js
    |       |-- swagger-ui-standalone-preset.js.map
    |       |-- swagger-ui.css
    |       |-- swagger-ui.css.map
    |       |-- swagger-ui.js
    |       |-- swagger-ui.js.map
    |-- server
    |   |-- app.js
    |   |-- config
    |   |   |-- bookshelf.js
    |   |   |-- database.js
    |   |   |-- directory.js
    |   |   |-- express.js
    |   |   |-- joi.validate.js
    |   |   |-- knex.js
    |   |   |-- mail.js
    |   |   |-- swagger.js
    |   |   |-- winston.js
    |   |-- controllers
    |   |   |-- auth.controller.js
    |   |   |-- panic.controller.js
    |   |   |-- user.controller.js
    |   |-- middlewares
    |   |   |-- authenticate.js
    |   |   |-- errorHandler.js
    |   |   |-- joiErrorHandler.js
    |   |-- migrations
    |   |   |-- 20170715222060_create_users_table.js
    |   |-- models
    |   |   |-- user.model.js
    |   |-- routes
    |   |   |-- auth.route.js
    |   |   |-- index.route.js
    |   |   |-- panic.route.js
    |   |   |-- user.route.js
    |   |-- utils
    |       |-- validator.js
    |-- webpack
        |-- webpack.config.dev.js
        |-- webpack.config.prod.js
