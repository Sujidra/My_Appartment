const defaultscroll = false;
const ScrollReducer = (state=defaultscroll,action)=>{
    switch(action.type){
        case "ADDSCROLL":return action.scroll
        default:return state
    }
}
export default ScrollReducer;