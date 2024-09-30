# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


=========================================

Cache Strategy:

The app uses a CacheFirst strategy for caching API responses. This means the service worker first tries to serve cached responses before fetching from the network. Cached responses are stored for 24 hours and up to 50 entries are stored.
Running the App:

Use npm start to run the app locally. The service worker will be activated automatically.
Testing the Caching:

Open the browser's Developer Tools and go to the Network tab.
Request a recipe for the first time. You should see a network request to https://dummyjson.com/recipes, and the response should be cached by the service worker.
Request the same recipe again. The service worker should now serve the recipe from the cache instead of making another network request.
You can monitor the caching activity in the Application > Cache Storage section of the Developer Tools.
Clearing Cache and Service Worker:

To test the caching behavior from scratch, clear the Cache Storage in Developer Tools > Application > Cache Storage.
You can also unregister the service worker from Developer Tools > Application > Service Workers and restart the app.
Deployment:

For production deployment, run npm run build. The service worker and caching logic will work as expected in the production build.
Common Issues and Fixes
Multiple Network Requests: If you notice multiple API calls for the same recipe, ensure that the service worker is properly installed and that React components are checking the cache before making network requests.

Cache Expiration: Cached responses are kept for 24 hours. After this period, the service worker will automatically fetch fresh data from the network.

How to Test:
First Load: The first time you select a recipe, a network request will be made and the response will be cached.
Subsequent Loads: When you select the same recipe again, it will be served from the cache, reducing network requests.
Further Reading:
Workbox Documentation
Create React App Documentation

Clearing Cache and Unregistering Service Worker
To clear cached data, local storage, or session storage, follow these steps:

Delete Cache in Cache Storage:
Open your browser’s Developer Tools and navigate to the Application tab. Under Cache Storage, find the specific cache (in this case, recipes-api-cache) and delete it. This will clear all cached API responses stored by the service worker.

Clear Local Storage and Session Storage:
In the Developer Tools under the Application tab, you will also find Local Storage and Session Storage. You can select these and manually delete any stored data if needed.

Unregister the Service Worker:
To remove the service worker, go to Developer Tools > Application > Service Workers. There, you can unregister the service worker. This will stop the service worker from intercepting network requests and caching responses. After unregistering, refresh the page to reload the app without the service worker.


--------------------------------------------------------


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

