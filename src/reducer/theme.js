export default function themeReducer(state = "peru",action){
    switch(action.type){
        case "CHANGE_THEME":
            return action.payload;
        default:
            return state;
    }
}