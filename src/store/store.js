import { createStore } from 'redux';
 import  rootReducer from '../reducers/root.reducer'
 
let storeData={
    courses: [{id:1, name: "React", price: 4000, likes: 200, rating: 4, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
    {id:2, name: "Redux", price: 3000, likes: 300, rating: 5, imageUrl: 'https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png' },
    {id:3, name: "Typescript", price: 6000, likes: 800, rating: 3, imageUrl: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png' },
    {id:4, name: "Angular", price: 5000, likes: 500, rating: 4, imageUrl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png' }]
  ,posts:[]
}
 //createstore()
var store = createStore(rootReducer,storeData);
export default store;