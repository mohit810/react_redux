export default  function courses(originalStore=[],action){
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log('Inside courses Reducer !')
            return originalStore;
        case 'DELETE_COURSE':
            console.log('Inside courses Reducer !')
            return originalStore;

        default:
            return originalStore;
        
    }
}