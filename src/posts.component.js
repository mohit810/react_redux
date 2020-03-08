import React from 'react';
import axios from 'axios';


export default class PostsComponent extends React.Component{
    constructor(){
        super();
        this.state = { posts: [] }
    }
    componentDidMount(){
        // ajax !
      let thePromise= axios.get('https://jsonplaceholder.typicode.com/posts');
      thePromise.then(
          response=>this.setState({posts:response.data}),
          err=>console.log(err)
      )
    }
    render(){
    let listOfPosts =this.state.posts.map(p=><li key={p.id}>{p.title}</li>)
        return <div><h1> All Posts !</h1>
                <ul>{listOfPosts}</ul>
        </div>
    }
    }