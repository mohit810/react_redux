import { combineReducers } from 'redux';
import posts from './post.reducer';
import courses from './course.reducer';
import App from '../App';
 
var rootReducer=combineReducers({posts,courses});
 
export default rootReducer;