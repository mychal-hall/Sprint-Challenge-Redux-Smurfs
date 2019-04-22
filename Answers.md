1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- forEach() - 
- Filter() -
- Map() -

Spread Operator
Also, Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions -
Actions are payloads of information that send data from you application to the store. They are the only source of information for the store.

- reducers -
Reducers specify how the application's state changes in response to actions send to the store.

- store -
The Store is what brings the Actions and the Reducers together. It holds the state for the application.

The store is known as the 'single source of truth because it holds our application state in one place instead of all around on in different places.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- App state -
 A global state, used across the entire application. Great for dealing with data checks to the server. Components can access the state pretty easily (lol) by connecting through redux or some other library.

- Component state -
Local state. Lives in an individual component. Used for smaller tasks, such as updating a form. Can only be passed to it's children via props


App state, being a global state is good to hold our general state that will be utilized either in a 'high level' or across many of our components. However, if we are dealing with a small state issue, such as something that doesn't really matter to the WHOLE application, OR a state that doesn't travel far. Then a component level state should be fine.
Also, doesn't a re-render trigger on state change? So if you are just updating small bits of state, keeping them on their localized components wouldn't force a whole app reload.


1.  What is middleware?

Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that allows for writing of action creators that return a function instead of an action. 
A Thunk is a concept where a function is used to delay the evaluation/calculation of an operation.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
