import React from "react";
import DisplayUserdata from "./DisplayUserdata"
import { connect } from "react-redux";
import Conversation from "./Conversation"
import Noticebox from "./Noticebox";
import Createbutton from "./Createbutton"
import {NavLink} from "react-router-dom";
import Header from "./Header";
import Menu from "./menu"
import Card from '@material-ui/core/Card';
const Groups = (props) =>{
    return(
        <div>
            <div className={props.scroll?"headnav":"headernavOnScroll"}>
                <NavLink to="/conversation" className="nav" activeClassName="active" >Conversations</NavLink>
                <NavLink to="/groups" className="nav" activeClassName="active">Circles</NavLink>
                <NavLink to="/photos" className="nav" activeClassName="active">Album</NavLink>
                <NavLink to="/discover" className="nav" activeClassName="active">Discover</NavLink>
                <NavLink to="/polls" className="nav" activeClassName="active">Polls</NavLink>
                
            </div>


            <div className={props.scroll?"conversationscrolldata":"converationscrolldataOnScroll"}>
        
                <div className="groups">
                        <button className="groupbutton">Discover and Join more Groups </button>
                        <button className="groupbutton">Create a Groups </button>
                </div>
                <div className="horiset">
                    <div className="photocontent">
                        <Card elavation={2} className="photoImgbutton">
                            <img className="photoimg" src="./images/class10.jpg"></img>
                            <div className="bottomcontent">
                                <p className="bottomtitlegroup"><b>10-A Class Group</b></p>
                            </div>
                        </Card>
                    </div>
                    <div className="photocontent">
                        <Card elavation={2}  className="photoImgbutton">
                            <img className="photoimg" src="./images/class8.jpg"></img>
                            <div className="bottomcontent">
                                <p className="bottomtitlegroup"><b>8-C Class Group</b></p>
                            </div>
                        </Card>
                    </div>
                        
                </div>
                <div className="horiset">
                    <div className="photocontent">
                        <Card elavation={2}  className="photoImgbutton">
                            <img className="photoimg" src="./images/football.jpg"></img>
                            <div className="bottomcontent">
                                <p className="bottomtitlegroup"><b>Football Team</b></p>
                            </div>
                        </Card>
                    </div>
                    <div className="photocontent">
                        <Card elavation={2}  className="photoImgbutton">
                            <img className="photoimg" src="./images/cricket.jpg"></img>
                        
                            <div className="bottomcontent">
                                <p className="bottomtitlegroup"><b>Cricket Team</b></p>
                            </div>
                        </Card>
                    </div>
                
                </div>
                    
                <Createbutton/>
            
            </div>
        </div>
            
                
            
    )
    
}


const mapStateToProps=(state)=>{
    return{
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(Groups)


