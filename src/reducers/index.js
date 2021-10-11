import { combineReducers } from 'redux'
import posts from './posts'

export const reducers = combineReducers({ posts })
// here we can use all the individual reducers  what we have.in our case we are going to have only posts.
