// Now we have to make use of this index file  in the api which we have created earlier.
import * as api from '../api'
// star(*) as means we import everything from the actions as api.
// Action creators are functions that return actions.
// to make this function work we need to use try and catch block.
export const getPosts = () => async (dispatch) => {
  // the problem here is we are working with async data.Basically to fetch the data, sometimes have to pass.As a matter of the fact that we have to use redux thunk.Redux thunk allows here to specify an additional arrow function and then instead of returning the function we have to dispatch the function.Basically data represents the posts.

  try {
    const { data } = await api.fetchPosts() // first we are getting the response from api and then response always has the data object which returning from the backend.
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error)
  }

  //const action = {type: 'FETCH_ALL', payload: []} // action is an object and action must have a type property. Action can have payload which is usually the data where we store our posts.
  //return action
  //dispatch(action)
}
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}
// here we successfully using redux. actually we passed or dispatched an action from the data, from our backend.
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.log(error)
  }
}
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error)
  }
}
