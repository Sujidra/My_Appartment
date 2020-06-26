import React from "react";
import DisplayUserdata from "../components/DisplayUserdata"
import { connect } from "react-redux";
import Conversation from "./Conversation"
import Noticebox from "./Noticebox";
import Createbutton from "./Createbutton"
import Header from "./Header";
import Menu from "./menu";
import {NavLink} from "react-router-dom";
import Card from '@material-ui/core/Card';
const Polls = (props) =>{
    return(
            <div>
                
                <div className={props.scroll?"headnav":"headernavOnScroll"}>
                    <NavLink to="/conversation" className="nav" activeClassName="activesubhead" >Conversations</NavLink>
                    <NavLink to="/groups" className="nav" activeClassName="activesubhead">Circles</NavLink>
                    <NavLink to="/photos" className="nav" activeClassName="activesubhead">Album</NavLink>
                    <NavLink to="/discover" className="nav" activeClassName="activesubhead">Discover</NavLink>
                    <NavLink to="/polls" className="nav" activeClassName="activesubhead">Polls</NavLink>
                
                </div>


                <div className={props.scroll?"conversationscrolldata":"converationscrolldataOnScroll"}>
        
                    <Card className="Displaypolls">
                        <div>
                            <img className="userprofile"  src="/images/person2.jpg"></img>
                            <p className="username"><b>Sujidra</b><br></br><span className="flatno">10-C</span></p>
                            <p className="postingtime"><img src="./images/clock.png" className="clockimg" style={{}}></img>  10 days ago</p>
                        </div>
                        <div  >
                            <p className="usertitle">Abacus Polls</p>
                            <p className="usercontent">Are you interested in Abacus training?</p>
                        </div>            
                        <div className="pollOptions">
                            <button className="pollbutton">
                                <p className="pollOption">Yes</p>
                                <p className="pollVotes">30 Votes</p>
                            </button>
                        </div>
                        <div className="pollOptions">
                            <button className="pollbutton">
                                <p className="pollOption">No</p>
                                <p className="pollVotes">10 Votes</p>
                            </button>
                        </div>

                        
                    </Card>
                    <Createbutton/>
            
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
export default connect(mapStateToProps)(Polls)