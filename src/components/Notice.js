import React from "react";
import DisplayUserdata from "../components/DisplayUserdata"
import { connect } from "react-redux";
import Conversation from "./Conversation"
import Noticebox from "./Noticebox";
import Createbutton from "./Createbutton"
import Header from "./Header";
import Menu from "./menu"
const Notice = (props) =>{
    return(
        
            <div>
                    <div className="groups">
                        <p>Notices</p>
                        <button className="groupbutton">Create Notice </button>
                    </div>
                    <div className="noticecontentfilter">
                        <p>FILTER BY: ALL NOTICE</p>
                    </div>
                    <Createbutton/>
            
            </div>
                
            
    )
    
}

export default Notice