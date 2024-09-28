### **Observable Tasks**

#### **Task 1: Create an Observable that Emits Sequential Numbers**
- **Description**: Create an observable that emits sequential numbers at an interval and completes after 5 emissions.
- **Steps**:
  1. Use the `interval` operator from RxJS to emit numbers every second.
  2. Limit the emissions to 5 numbers using the `take` operator.
  3. Subscribe to the observable and log each emitted value to the console.
  4. Ensure that after the last number is emitted, the observable completes and logs "Complete!".
- **Output**: 
    - Logs the numbers `0, 1, 2, 3, 4` at 1-second intervals and finally logs "Complete!".

#### **Task 2: Implement an Observable that Fetches Data from an API**
- **Description**: Fetch a list of users from an API using `HttpClient` in an Angular service and return it as an observable.
- **Steps**:
  1. Create a service called `UserService`.
  2. Inside the service, use Angular’s `HttpClient` to fetch data from `https://jsonplaceholder.typicode.com/users`.
  3. The API call should return an observable.
  4. In the component, subscribe to the observable and display the user names in the template.
  5. Handle errors using the `catchError` operator.
- **Output**: 
    - A list of user names from the API displayed on the page. If the API call fails, an error message is shown.

#### **Task 3: Debounce a Search Input Using Observables**
- **Description**: Implement a search input that fetches results from a mock API using debounced input.
- **Steps**:
  1. Create a reactive form with an input field for a search term.
  2. Use `FormControl.valueChanges` to observe changes in the input.
  3. Add a 500ms debounce using the `debounceTime` operator to delay the search request.
  4. Use a mock API to fetch search results based on the user input and display the results below the input field.
  5. Display a loading indicator while waiting for the search results.
- **Output**: 
    - The user types in a search input, and after 500ms of inactivity, the search results are fetched and displayed.

#### **Task 4: Combine Observables with `forkJoin`**
- **Description**: Fetch user data and posts using two separate observables and combine their results into a single response.
- **Steps**:
  1. Use `HttpClient` to create two observables: one to fetch users (`/users`) and one to fetch posts (`/posts`) from `jsonplaceholder.typicode.com`.
  2. Use `forkJoin` to execute both requests simultaneously.
  3. When both requests complete, merge the data and display the users and their posts in the template.
- **Output**: 
    - The data from both APIs is displayed together, showing a user and their related posts after both observables have completed.

---

### **Forms Tasks**

#### **Task 1: Build a Basic Template-driven Form with Validation**
- **Description**: Create a template-driven form for user registration with built-in and custom validation.
- **Steps**:
  1. Create a form with fields for `name`, `email`, and `password`.
  2. Bind each field with `ngModel` for two-way data binding.
  3. Add built-in validation: 
     - Name and password should be required.
     - Email should have both required and valid email format checks.
  4. Implement custom validation to ensure that the password is at least 8 characters long.
  5. Display error messages when validation fails.
  6. On form submission, log the form data to the console if it is valid.
- **Output**: 
    - A fully functional form where invalid inputs display appropriate error messages, and valid submissions log form data to the console.

#### **Task 2: Create a Reactive Form with Nested Form Groups**
- **Description**: Build a reactive form with nested form groups for managing user profile details and address information.
- **Steps**:
  1. Set up a `FormGroup` for user details (`firstName`, `lastName`, `email`) and a separate `FormGroup` for address (`street`, `city`, `zip`).
  2. Use `FormBuilder` to simplify form creation.
  3. Add validation:
     - First and last name should be required.
     - Email should be required and follow a valid format.
     - Zip should be a required number.
  4. Display validation messages when the fields are invalid.
  5. Log the form data on submission.
- **Output**: 
    - A form with user details and address. Submitting the form logs valid data, and error messages appear for invalid input.

#### **Task 3: Implement Asynchronous Validation in a Reactive Form**
- **Description**: Implement asynchronous validation for an email field in a reactive form to check if the email is already taken.
- **Steps**:
  1. Create a reactive form with a single email input.
  2. Add synchronous validators for required and valid email format.
  3. Add an asynchronous validator that simulates an API call to check if the email is already registered (e.g., delay the response using `of` and `delay` from RxJS).
  4. Display a loading indicator while the asynchronous validation is in progress.
  5. Show an error message if the email is already registered.
- **Output**: 
    - The form shows validation messages for invalid or already-registered email addresses, with a loading state while checking availability.

#### **Task 4: Dynamic Form Control with `FormArray`**
- **Description**: Create a form that allows users to dynamically add and remove multiple input fields for phone numbers.
- **Steps**:
  1. Create a form with a `FormArray` to manage multiple phone numbers.
  2. Provide buttons to add or remove phone number fields dynamically.
  3. Each phone number should be validated as required and must match a valid phone number pattern.
  4. Display error messages when a phone number is invalid.
  5. Log the form data upon submission.
- **Output**: 
    - A dynamic form where users can add or remove phone numbers, with proper validation and error messages for each phone field.

#### **Task 5: Cross-field Validation in a Reactive Form**
- **Description**: Build a reactive form with password and confirm password fields, ensuring they match using custom cross-field validation.
- **Steps**:
  1. Create a form with `password` and `confirmPassword` fields.
  2. Implement a custom cross-field validator to ensure that both passwords match.
  3. Display an error message below the `confirmPassword` field if the values do not match.
  4. Disable the submit button if the form is invalid.
  5. Log the form data upon successful submission.
- **Output**: 
    - A password form where mismatching passwords trigger an error message and prevent form submission.

---

### **Combined Tasks: Observables and Forms**

#### **Task 1: Submit a Form with an HTTP Request and Display Loading State**
- **Description**: Build a reactive form to collect user details and submit the form data to an API while displaying a loading indicator.
- **Steps**:
  1. Create a reactive form with fields for `name`, `email`, and `message`.
  2. When the form is submitted, simulate an HTTP request to send the data using `HttpClient`.
  3. Use observables to track the submission state:
     - Show a loading indicator while the data is being sent.
     - Display a success message once the data is successfully submitted.
     - Display an error message if the submission fails.
- **Output**: 
    - A functional form where a loading indicator is shown during submission, with success or error feedback based on the result.

#### **Task 2: Automatically Save Form Data as a Draft Using Observables**
- **Description**: Implement a reactive form that automatically saves input data to local storage as a draft using `debounceTime` to delay saving.
- **Steps**:
  1. Create a reactive form with fields for `title` and `description`.
  2. Use the `valueChanges` observable on the form to detect input changes.
  3. Use `debounceTime` to only save changes after 1 second of inactivity.
  4. Automatically save the form data to `localStorage` when changes are detected.
  5. On component load, check for saved draft data in `localStorage` and pre-fill the form.
- **Output**: 
    - A form where unsaved changes are automatically stored in local storage, and the form is pre-filled with the saved draft on page reload.

#### **Task 3: Reactive Form with Real-time Search Using Observables**
- **Description**: Create a search form where the input value triggers real-time data fetching from an API using RxJS observables and operators like `switchMap`.
- **Steps**:
  1. Build a reactive form with a single input field for a product search term.
  2. Use `valueChanges` to observe input changes in the search field.
  3. Use the `switchMap` operator to cancel ongoing requests when new input is entered.
  4. Fetch search results from a