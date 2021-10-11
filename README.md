/ all actions from frontend towards our backend going to be done using redux and then we need to dispatch those actions. to do that we have to add some boilerplate code meaning we do have to create few files and folders.
// basically we initialize redux to the root file and in this case index.js.

// once we set up our redux and connected with our application, then we can dispatch our get posts action and we are going to do it in our app.js.Once we bring the usedispatch hook to the file and this hook allows us to do an action. then we define the dispatch like( const dispatch = useDispatch()). once we have access to the dispatch, then we need to find a way where we actually dispatch the action and best way to do that is inside the {useEffect} hook.
// What does useEffect do? By using this Hook, you tell React that your component needs to do something after render.
// Now we will create an action in useEffect hook.

// Generally there are few steps for redux data passing.we imported getPosts action from action/post.js to app.js. as soon as getPosts dispatched in our app.js then we immediately go our posts reducers there we have to handle the logic (Fetching all posts).
// Now how we retrieve the data within our components, to do that we need to go to the component/Posts/Posts.js
// Basically redux follow those steps

// Store(your globalized state)
// action describes (what you want to do ). Action is a just function that returns an object.

// reducer check how your action details transfer one state to another.reducer is going to take care all these actions related to our reducer (for example counter). reducer is function and it also return an object.reducer also takes two parameters. first one is going to be how our counter reducer looks like and what is the initial state.the second one parameter going to be an action.Now what we do inside the reducer function is that we can switch()the action depending on it's name.Once we do that case inside the switch statement then return a state and update our store.

// dispatch and this is the way where we can actually execute the action.we can say hey dispatch that action to the reducer and reducer is going to check what to do and eventually store gets updated.

an example
import{createStore} from 'redux'

// store- globalized state

// action increment

const increment = () => {
return {
type: 'INCREMENT'
}

}
const decrement = () => {
return {
type: 'DECREMENT'
}
}
// REDUCER
const counter = (state = 0, action) => {
switch(action.type) {
case 'INCREMENT'
return state + 1
case 'DECREMENT'
return state - 1
}
}
let store = createStore(counter)

// display it in console
store.subscribe(() => console.log(store.getState())) // and we got 1 in console.

// dispatch the action
store.dispatch(increment())

// Basically what we do in this example is that we dispatch an action which is function increment and it returns an object with the type 'INCREMENT'. Once we dispatch this action to our reducer and it is going to take a look what was dispatched or what action was dispatched . Eventually we dispatch the action in component. why we do that and how we do that. First of all we import that action, since we do not have reducer set up in our component and we have to do that by importing {useDispatch} hook in our component as well and then we initialize {useDispatch} hook under the hood(functional component).check the Post.js file to have a clear understanding.In addition, we can put that hook into a variable called dispatch.
Now the whole circle is that first we need to create a routes in backend and put them in a file which is called controller/post.js where all the router's second parameter callback function will be stored in variables for making files in a better shape. and then connect them to the frontend and then creating actions api calls and reducer for the delete request.

To implement all the functionality (for example like) we have to do full circle.Once we have proper structure set up using redux, controllers, routes that is extremely scalable.It is easy to keep adding new things onto it just by following structure.So what we do now as we always do follow the structure. First we are going to add router that patch request and it is going to be router.patch('/:id/likePost') that we know that this is the route for liking. As soon as we done with controller that means back end part, we will go to the frontend part.As always we have to add api call that means bring that api to api folder in index.js ( make it like export const variable which we can export it in action folder) and connect with frontend through axios.Once we have api request in the api/index.js then we will move over to actions folder that means action/posts.js.once we dispatch our action then we go to our reducer to check what was dispatched and what action was dispatched.then we will import the function to the component from action folder.
