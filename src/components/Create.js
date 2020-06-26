import React from "react";
import DisplayUserdata from "../components/DisplayUserdata"
import { connect } from "react-redux";
import Conversation from "./Conversation"
import Noticebox from "./Noticebox";
import Header from "./Header";
import Menu from "./menu";
import Createbutton from "./Createbutton"
import {history} from "../routers/Approuter"
import {NavLink} from "react-router-dom";

const Create = (props) =>{
    return(
        
        <div>
            <div className={props.scroll?"headnav":"headernavOnScroll"}>
                <NavLink to="/conversation" className="nav" activeClassName="activesubhead" >Conversations</NavLink>
                <NavLink to="/photos" className="nav" activeClassName="activesubhead">Album</NavLink>
                <NavLink to="/discover" className="nav" activeClassName="activesubhead">Discover</NavLink>
                <NavLink to="/groups" className="nav" activeClassName="activesubhead">Circles</NavLink>
                <NavLink to="/polls" className="nav" activeClassName="activesubhead">Polls</NavLink>
                
            </div>


            <div className={props.scroll?"conversationscrolldata":"converationscrolldataOnScroll"}>
        
                <div className="createbox">
                    <p className="post"><img className="createimg" src="/images/create.png"></img>Post</p>
                    <input placeholder="Title" className="inputtitle"></input>
                    <textarea placeholder="Type your message here" className="posttextarea"></textarea>
                    <div className="createbottom">
                        <div className="visibleto">
                            <p>Visible to</p>
                            <select className="visiblecheck">
                                <option value="All Members">All Members</option>    
                            </select>
                        </div>
                        <div className="postbutton">
                            <button className="attachmentbutton"><img src="/images/attachment.png" className="attachmentimg"></img></button>
                            <button className="groupbutton" onClick={()=>{history.push("/conversation")}}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
    
        </div>
                
            
    )
    
}
const mapStateToProps=(state)=>{
    return{
        userdata:state.userdata,
        noticedata:state.noticedata,
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(Create)