import React from 'react';
export default class CourseComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {count:this.props.coursedetails.likes};
    }
    ClickHandler(){
        // change the state to update UI !
        this.setState({count:this.state.count+1})
    }

    
componentWillUnmount()
{
 console.log('componentWillUnmount') 
}
    render() {
        return <div className="col-md-4">
            <button className="btn btn-danger"
            onClick={this.props.ParentHandler.bind(this,
                this.props.coursedetails.id)}
            >
                <span className="glyphicon glyphicon-trash">

                </span>
            </button>
            <h1> {this.props.coursedetails.name} </h1>
            <img src={this.props.coursedetails.imageUrl}
             height="100px" width="100px"/> <br/>
            <b>Price : </b> {this.props.coursedetails.price} <br/>
            <b>Rating : </b> {this.props.coursedetails.rating} <br/>
            <button className="btn btn-primary"
             onClick={()=>this.props.IncrementLikes(this.props.coursedetails.id)}>
                  {this.state.count}
                <span className="glyphicon glyphicon-thumbs-up">

                </span>
              
            </button>
        </div>
    }
}
