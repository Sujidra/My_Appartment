import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";


const Discover=(props)=>{
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
        
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 discovercontent">
                            <div className="Discovercard">
                                <img src="/images/tution.jpg" className="discoverimge" ></img>
                                <div class="discoverCardContent">
                                    <p className="discoverName">Tution</p>
                                    <button className="discoverbutton">Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 discovercontent">
                            <div className="Discovercard">
                                <img src="/images/signing.jpg" className="discoverimge" ></img>
                                <div class="discoverCardContent">
                                    <p className="discoverName">Music Class</p>
                                    <button className="discoverbutton">Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 discovercontent">
                            <div className="Discovercard">
                                <img src="/images/dance.jpg" className="discoverimge" ></img>
                                <div class="discoverCardContent">
                                    <p className="discoverName">Dance Class</p>
                                    <button className="discoverbutton">Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 col-sm-12 discovercontent">
                            <div className="Discovercard">
                                <img src="/images/music class.jpg" className="discoverimge" ></img>
                                <div class="discoverCardContent">
                                    <p className="discoverName">Signing</p>
                                    <button className="discoverbutton">Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 discovercontent">
                            <div className="Discovercard">
                                <img src="/images/karathe.jpg" className="discoverimge" ></img>
                                <div class="discoverCardContent">
                                    <p className="discoverName">Karathe class</p>
                                    <button className="discoverbutton">Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(Discover)


