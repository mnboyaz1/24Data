This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Used Babel, Grunt and React as a framework to create this App

## Available Scripts

## Need to run `npm install` first to load all the node modules

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Program Introduction

### Set up Dist folder

See Gruntfile for comments
The dist folder contains the files that have been ran thru grunt.
The image files were placed in the public folder after imagemin:dynamic was run, so they were accessible from the code.

### Application set up

The App.js file loads the SignUpForm and presents it.<br>
The SignUpForm controls the function of the App.<br>
I set up the mobile view within the dimension for Iphone X. I used the mobile debug options in Google browser to maintain the size while creating.<br>

The display is set to use mobile display for all screenWidths lessThan or equal to 600. Any screenWidth greater than that uses the deskTop dispay on load.

After setting the state for the page the App controls the validation of the input fields and the screenWidth when the App was loaded.
If the user inputs the incorrect information the form follows the needed settings for failed attempt.
Once the user completes all the given input fields correctly, the form is removed and a Congratulaions page is shown.

### WIP

I tried to complete as many of the requirements.<br>
I added the `nav` bar to the top of the page. Would use bootstrap format to create a functioning menu and routes for menu bar.<br>

### Needs Attention

Also, i ran out of time (due to work related issues) would have added font-awesome to handle the icons that are needed for the nav bar and also the input pass or fail results. also the responsivness for the Desktop page still needs a to react properly when screenWidth is greater than 1200.<br>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
