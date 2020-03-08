export default  function posts(originalStore=[],action){
   switch(action.type){
       case 'ADD_POSTS':
       console.log('Inside Posts Reduces !');
       return originalStore;

       default:
           return originalStore;

    }
}