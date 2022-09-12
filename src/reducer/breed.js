export default function breedReducer(state = null, action){
    switch(action.type){
        case "CHANGE_BREED":
            return action.payload;
        default:
            return state;
    }
}