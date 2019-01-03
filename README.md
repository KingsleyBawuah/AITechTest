# MovieApp

This application was created as part of a interview process for the position of Software Developer (December 2018)

**Task**:

Dynamic View displaying results from OMDb API using a provided key. The application must contain:

- Text Field

- Button

- Table View

I used Angular and Angular CLI to generate and build this application. The API call provided returns a list of media in which I display in the form of cards. OMDb'a API restricts query responses to only 10 results but provided a parameter to move through pages of responses. I used this in conjunction with a Pagination library to implement pages in which the user can click through to see all of the results from a query.

**Bonus Points Attempted:**

- ES6 - Fat Arrow functions are used in the API Calls to assign response data. The `searchMovies()` function in the API service makes use of default parameters. Angular also makes use of classes, imports, and exports all ES6 features

- Custom CSS - Using the Material Library provided me with a variety of custom built modules that adhere to Material Design. Each component in the application makes use of some custom CSS. The most notable cases are the display errors, the placement of the search-bar and pagnation controls, along with the material cards.

- Promises - In Angular, RxJS`Observable` is preferred over promises in most cases due to providing the features of promises and much more. I implemented the API calls using this.

- Error Handling - An error message is displayed if for whatever reason the query does not return any data. Media without images are caught using `onError` and replaced with a placeholder image to keep UI uniformity.

- Responsiveness - The application automatically hides the menu bar if the application is viewed on a smaller screen, and hides the rest of the pages in the pagination controls.

## Development server / Installation Instructions

1.  `cd /Movie-app`

2.  Run `npm install`

3.  Run `ng serve` for a dev server.

4.  Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Technologies Used

- [Angular 7](https://angular.io/docs)

- [Angular C.L.I 7.1.3](https://github.com/angular/angular-cli/wiki)

- [Angular Material Library](https://material.angular.io/components/categories)

- [Hammer.js](https://hammerjs.github.io/getting-started/)

- [ngx-pagination](https://github.com/michaelbromley/ngx-pagination)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
