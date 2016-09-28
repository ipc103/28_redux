export default function catsReducer(state = [], action){
    switch (action.type) {
        case 'FETCH_CATS':
            return action.payload
        case 'ADD_CATS':
            var newKitty ={name: action.payload.name, id: state.length + 1 } 
            return [...state, newKitty]
        default:
            return state;
    }
}
