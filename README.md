# Virtual Store

An online shopping portal for a fictional store

## Author: Eva Grace Smith

## Business Requirements

Our application will power an online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase

The core requirements and functionality are as follows:

* Display a list of our product categories
* Display a listing of products for each category, when the category is selected
* From the product listings:
* Click to view a full detail page about the product
* Add the product to your shopping cart
* Shopping cart (simple version) always visible on screen
* Full shopping cart and check out screen available from main navigation

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
2. ES6 Classes
3. Redux Store for Application State
4. Deployed API with MongoDB storage for storing categories and products
5. Superagent or Axios for performing API Requests
6. Material UI for layout and styling
7. Test Driven Development, using Jest
8. Deployment to a cloud provider (Netlify, Amplify, or GitHub Pages)


## Phase 1: Application Setup

* Basic React Application
* Redux State Management
* State managed in memory
* Material UI Components & Styling

In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

* As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
* As a user, I want to choose a category and see a list of all available products matching that category.
* As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

![Phase 1 UML](./src/assets/phase1UML.png)

### AI testing prompts:

Using this code, could you write tests that utilize jest, and verify the following:
As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
As a user, I want to choose a category and see a list of all available products matching that category.
As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

### Links:

[Deployment: CodeSandbox on redux branch](https://codesandbox.io/p/github/EvaGraceSmith/storefront/redux?workspaceId=0f6b3b9a-f258-4570-996a-1c11d92f10b3)

## Phase 2

**Virtual Store Phase 2**: Continue work on the e-Commerce storefront, breaking up the store into multiple reducers and sharing functionality/data between components.

In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

* As a user, I want to choose from products in the list and add them to my shopping cart.
* As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page”.
* As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)
* As a user, I want to be able to remove an item from my shopping cart.

Application Flow:

* User sees a list of categories.
* Chooses a category and sees a list of products.
* Clicks the “Add to Cart” button on any product.
* Sees a list of all products in the <SimpleCart /> side menu.
* Clicks the delete button on an item and sees the item removed (see stretch goals for this lab).
* Changes the cart total in the header. If two different products are in the cart you should see: CART (2)

![Phase 2 UML](./src/assets/phase2UML.png)

### AI testing prompts:



### Links:

[Deployment: CodeSandbox on redux branch](https://codesandbox.io/p/github/EvaGraceSmith/storefront/combined-reducers?file=/.codesandbox/tasks.json:1,1&workspaceId=0f6b3b9a-f258-4570-996a-1c11d92f10b3)

### Collaborators

Ryan Galloway - Instructor
Daniel Frey - TA
Mark Smith - Tutor


!["Storefront"](./src/assets/storefront.jpg)

Image by <a href="https://pixabay.com/users/foundry-923783/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=832188">Foundry Co</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=832188">Pixabay</a>
