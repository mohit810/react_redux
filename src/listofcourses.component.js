import React from 'react';
import Course from "./course.component";

export default class ListOfCourses extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
}
componentWillMount(){
  console.log('Component WIll Mount !');
}
componentDidMount(){
  // ajax !
  console.log('Component Did Mount !');
}

componentWillUpdate(){
  console.log('Component Will Update !');
}

componentDidUpdate(){
  console.log('Component Did Update !');
}


DeleteHandler_Parent(theId){
      //console.log('Inside DeleteHandler_Parent !' + theId)

      let newCourseList = this.props.allCourses.filter(c => c.id !== theId);
      this.setState({courses:newCourseList});
}
  render() {
    console.log('Render !')
    var coursesToBeCreated = this.props.allCourses.map(
      c => <Course coursedetails={c} 
      {...this.props}
      key={c.id}
      ParentHandler={this.DeleteHandler_Parent.bind(this)} />);
    return <div>
      <div className="jumbotron">
          <h1> Online Courses</h1>
      </div>
      <div className="row">
        {coursesToBeCreated}
      </div>
    </div>
  }
}

