import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import UserdataReducer from "./Reducers/UserdataReducer";
import NoticeDataReducer from "./Reducers/NoticedataReducers";
import MydoodleReducer from "./Reducers/MydoodleMembers"
import MydoodleMemberReducer from "./Reducers/MydoodleMembers";
import ScrollReducer from "./Reducers/ScrollReducer"


const storeConfig = ()=>{
    const store=createStore(combineReducers({
        userdata:UserdataReducer,
        noticedata:NoticeDataReducer,
        Mydoodledata:MydoodleMemberReducer,
        scroll:ScrollReducer
        
    }),
    applyMiddleware(thunk));
    return store;
}

export default storeConfig;
