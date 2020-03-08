import React from 'react';
import './App.css';
import ListOfCourses from './listofcourses.component';
import PostsComponent from './posts.component';

class App extends React.Component {
  render() {
      console.log(this.props);
      
      return <ListOfCourses {...this.props}/>//spread operators
   // return <PostsComponent/>
   
  }
}

export default App;
