import React from "react";
import DisplayUserdata from "../components/DisplayUserdata"
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import Conversation from "./Conversation"
import Noticebox from "./Noticebox";
import Createbutton from "./Createbutton"
import Header from "./Header";
import Menu from "./menu";
import Card from '@material-ui/core/Card';
const Photos = (props) =>{
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
        
                <div className="photobutton">
                            <button className="photobut">Create your Album to share Photos </button>
                        </div>
                        <div className="photos">
                            <div className="horiset">
                                <div className="photocontent">
                                    <Card elavation={1} className="photoImgbutton">
                                        <img className="photoimg" src="./images/school.jpg"></img>
                                        <div className="bottomcontent">
                                            <p className="bottomtitle"><b>School Images</b></p>
                                            <p className="bottomtime"><img src="./images/clock.png" className="clockimgbottom" ></img>1-Oct-2017</p>
                                        </div>
                                    </Card>
                                </div>
                                <div className="photocontent">
                                <Card elavation={1} className="photoImgbutton">
                                    <img className="photoimg" src="./images/annual day.jpg"></img>
                                    <div className="bottomcontent">
                                        <p className="bottomtitle"><b>Annual Day</b></p>
                                        <p className="bottomtime"><img src="./images/clock.png" className="clockimgbottom" ></img>10-Dec-2017</p>
                                    </div>
                                </Card>
                                </div>
                            
                            </div>
                            <div className="horiset">
                                <div className="photocontent">
                                    <Card elavation={1} className="photoImgbutton">
                                        <img className="photoimg" src="./images/football.jpg"></img>
                                        <div className="bottomcontent">
                                            <p className="bottomtitle"><b>Football</b></p>
                                            <p className="bottomtime"><img src="./images/clock.png" className="clockimgbottom" ></img>1-Oct-2017</p>
                                        </div>
                                    </Card>
                                </div>
                                <div className="photocontent">
                                    <Card elavation={1} className="photoImgbutton">
                                        <img className="photoimg" src="./images/cricket.jpg"></img>
                                    
                                        <div className="bottomcontent">
                                            <p className="bottomtitle"><b>Cricket</b></p>
                                            <p className="bottomtime"><img src="./images/clock.png" className="clockimgbottom" ></img>10-Dec-2017</p>
                                        </div>
                                    </Card>
                                </div>
                            
                            </div>
                            <div className="horiset">
                                <div className="photocontent">
                                    <Card elavation={1} className="photoImgbutton">
                                        <img className="photoimg" src="./images/function.jpg"></img>
                                    
                                        <div className="bottomcontent">
                                            <p className="bottomtitle"><b>Function</b></p>
                                            <p className="bottomtime"><img src="./images/clock.png" className="clockimgbottom" ></img>1-Oct-2017</p>
                                        </div>
                                    </Card>
                                </div>
                                <div className="photocontent">
                                    <Card elavation={1} className="photoImgbutton">
                                        <img className="photoimg" src="./images/chess.jpg"></img>
                                    
                                        <div className="bottomcontent">
                                            <p className="bottomtitle"><b>Chess</b></p>
                                            <p className="bottomtime"><img src="./images/clock.png" className="clockimgbottom" ></img>10-Dec-2017</p>
                                        </div>
                                    </Card>
                                </div>
                            
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
export default connect(mapStateToProps)(Photos)

