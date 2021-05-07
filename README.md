<!-- PROJECT SHIELDS -->
<!--
*** Since this project is a private repo, the shields will show "REPO NOT FOUND"
*** To use, simply uncomment below
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/uww-student-athlete-success/stuath-success-web">
    <img src="imgs/2SASSModel.jpg" alt="Logo" width="480" height="360">
  </a>

  <h3 align="center">Student Athlete Success</h3>

  <p align="center">
    UWW SASS is a information/social media support platform for student athletes and coaches.
    <br />
    <a href="https://github.com/uww-student-athlete-success/stuath-success-web"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/uww-student-athlete-success/stuath-success-web">View Demo</a>
    ·
    <a href="https://github.com/uww-student-athlete-success/stuath-success-web/issues">Report Bug</a>
    ·
    <a href="https://github.com/uww-student-athlete-success/stuath-success-web/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#helpful-links">Helpful Links</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The primary goal of the Student Athlete Success application is to make getting 
mental support for student athletes at UW-Whitewater more accessible in a private 
manner. In order to achieve this, the system will be able to:
* Allow easy and instant communication between student athletes, coaches, and support staff from UWW
* Provide an easy and simplified interface for all users, allowing them to access critical resources from one place
* Create a positive environment to allow student athletes to talk about mental health issues and provide an outlet for those suffering from mental health issues

### Built With

* [Material-UI]
* [MongoDB]
* [NodeJS]
* [React]
* [Express]

### Helpful Links

* JSON Web Tokens(jwt) - [jsonwebtoken]
* Predictable state container - [Redux]
* A React component library implementing Google's Material Design - [Material-UI]
* Redux Form - [Redux Form]
* Declarative routing for React - [React-Router]
* Promise based HTTP client - [Axios]
* Code linting tool - [ESLint]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

UWW SASS requires [Node.js](https://nodejs.org/) v10+ to run.
UWW SASS requires a backend server and a front client.

### Installation

To start the Client
1. Clone the repo
   ```sh
   git clone https://github.com/uww-student-athlete-success/stuath-success-web.git
   ```
2. Install dependencies
   ```sh
   yarn install
   ```
3. Start yarn
   ```sh
   yarn
   ```
4. Start Server
   ```sh
   npm start
   ```

Once this is completed a window should pop up in your browser. This is the frontend. If you get an error, change the version of ```"react-scripts":``` to  ```"3.4.1"```.

To start the Server
1. Ensure you have the most up-to-date config.json file. This will allow you to connect to the database
2. Open a separate commandline
3. Navigate to the project's root directory
4. Run
   ```sh
   yarn server
   ```

A successful connection to the Server looks like this on the terminal:
  ```sh
  yarn run v1.x.x
  $ node ./server/index.js
  mongodb+srv://zh3844:GaGGZCiX58w5uPz@cluster0.zrjbw.mongodb.net/sass?retryWrites=true&w=majority
  undefined
  Nodemailer is running
  Server listening on port 4000
  Database connected
  ```

### Image Hosting
This project uses Cloudinary to host images, replacing AWS S3. Cloudinary does not require a credit card attached to the account. The free tier consists of 25 monthly credits. 1 credit = 1,000 transformations, 1GB storage, or 1 GB Bandwidth

To log into Cloudinary:
1. Visit https://cloudinary.com/users/login
2. Username: stuathsuccess@gmail.com
3. Password: 7o0@7VNKMum*aRGX

To add a new photo
1. After logging in, go to the Media Library tab
2. Navigate to the correct folder and drag/drop the image
3. Once the image is added, simply hover over it and click on the chain hyperlink icon
4. Use this direct link to reference the picture in the project

<!-- USAGE EXAMPLES -->
## Usage

### Registering a New User

To log into SAS:
1. Initialize a localhost connection ```npm start```
2. Run the server ```yarn server```

3. Click Sign up

![Main Page](imgs/mainPage.png)

4. Complete fields for registration

![Register Page](imgs/register.png)

### Usage of the Panic Button

To report an emergency situation:

1. Select the panic button on the main page
2. Select the boxes that apply to you, then click I understand.

![Panic Button](imgs/panic-button-image.png)

4. Notification "Support has been notified" will prompt.

### Additional Screenshots

### Home Page
![Home Page](imgs/home.png)
### User Profile
![User profile](imgs/userProfile.png)
### "Your Teams" Page
![Your teams](imgs/yourTeams.png)
### "Support Teams" Page
![Support Teams](imgs/supportTeams.png)
### Panic Button
![Panic Button](imgs/panicButton.png)
### Creating a Message
![Chat Message](imgs/createMessage.png)

_For more examples, please refer to the [Documentation](https://github.com/uww-student-athlete-success/stuath-success-web/wiki)_

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/uww-student-athlete-success/stuath-success-web/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## License

<!-- Distributed under the MIT License. See `LICENSE` for more information. -->

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [CS476 Contributors](https://github.com/uww-student-athlete-success/stuath-success-web/graphs/contributors)

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/uww-student-athlete-success/repo.svg?style=plastic
[contributors-url]: https://github.com/uww-student-athlete-success/stuath-success-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/uww-student-athlete-success/repo.svg?style=plastic
[forks-url]: https://github.com/uww-student-athlete-success/stuath-success-web/network/members
[stars-shield]: https://img.shields.io/github/stars/uww-student-athlete-success/repo.svg?style=plastic
[stars-url]: https://github.com/uww-student-athlete-success/stuath-success-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/uww-student-athlete-success/repo.svg?style=plastic
[issues-url]: https://github.com/uww-student-athlete-success/stuath-success-web/issues
<!-- [license-shield]: https://img.shields.io/github/license/uww-student-athlete-success/repo.svg?style=plastic
[license-url]: https://github.com/uww-student-athlete-success/repo/blob/master/LICENSE.txt -->

[//]: #
   [Redux]: <https://react-redux.js.org/>
   [Express]: <http://expressjs.com/>
   [jsonwebtoken]: <https://www.npmjs.com/package/jsonwebtoken>
   [React]: <https://facebook.github.io/react/>
   [Redux]: <http://redux.js.org/>
   [Material-UI]: <https://material-ui-1dab0.firebaseapp.com/>
   [Redux Form]: <https://redux-form.com/8.3.0/>
   [React-Router]: <https://reacttraining.com/react-router/>
   [Axios]: <https://github.com/mzabriskie/axios>
   [ESLint]: <http://eslint.org/>
   [Bootstrap]: <https://material-ui.com/>
   [MongoDB]: <https://www.mongodb.com/>
   [NodeJS]: <https://nodejs.org/en/>
