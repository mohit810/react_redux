import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AllActions from './action/actionCreators';
import App from './App'

function mapStateToProps(storeData){
    console.log(storeData);
    return{
       allPosts:storeData.posts, //expose posts to props and rename the props to allPosts
       allCourses:storeData.courses
    }
}

function mapDispatchToProps(dispatcherObj){
    return bindActionCreators(AllActions,dispatcherObj)
}

var WrapperApp = connect(mapStateToProps,mapDispatchToProps)(App)
export default WrapperApp;