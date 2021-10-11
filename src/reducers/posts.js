//const reducers = (posts = [], action) => {

// reducers is a function which accepts the state and also it accepts the action. more specifically either return the action or return the state change by the action.
// In reducer  the state always needs to be equal to something and we cannot have equal for nothing. in this case we need to set the initial value. So we can name the posts anything and in this case we will name it a post because we are in  posts reducer.

const reducerPost = (posts = [], action) => {
  switch (action.type) {
    case 'DELETE':
      return posts.filter((post) => post._id !== action.payload)
    case 'UPDATE':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case 'LIKE':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case 'FETCH_ALL':
      return action.payload // action.payload our actual posts.
    case 'CREATE':
      return [...posts, action.payload]

    default:
      return posts
  }
}
export default reducerPost
