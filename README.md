# Getting the Fetch call to work with CORS
./chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

Running the app in this instance of chrome will overcome any CORS issues.

# How to run and build
While in the project directory run npm install and then npm start.

# Data loading and product page
Have the app fetch product data via HTTP GET request from the following
endpoint: \
https://drive.google.com/uc?export=view&id=13tTE7bKIN2XZ6BGLU3Yr9jNjHSWoA_r9 \
The product data will be fetched upon each page load. \
Replace the placeholder product link in the header with one link for each
product from the API. Clicking these links will display the product page for
that product. \
On the product page, replace the placeholder name, description, image, and
price with the values from the API 

# Quantity picker
Add a quantity picker. It will go below “Quantity”, and above “Add to Cart”. \
Please implement it as its own React component. \
The current value will start at 1. Clicking the minus or plus buttons will
subtract or add 1 to the value, respectively. The value should not go below 1. \
This value will be used when adding to the cart, as detailed in the next section 

# Cart state
Clicking the “Add to Cart” button will add the selected quantity of the current
product to the cart.  \
The cart panel on the right will be updated to reflect the
new contents of the cart. \
Please use Redux to implement app state. \
If the “Add to Cart” button is clicked while that product is already in the cart, it
will add to the quantity in the cart, and not create another cart item tile. \
The cart’s contents will persist if navigating to another product page. You do
not need to preserve the cart’s contents when the user refreshes the page or
navigates away from the site. \
Clicking an ‘x’ button in the cart will remove that item from the cart
Clicking the checkout button will display the message “Thank you for your
purchase!” and clear all the items from the cart. 





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
