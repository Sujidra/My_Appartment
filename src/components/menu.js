import React from "react";
import { Link, NavLink } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import Icon from '@mdi/react'
import { mdiAccountGroupOutline } from '@mdi/js';
class Menu extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="appnav">
                <ul>

                    <li className={this.props.width<500?"closebuttonli_open":"closebuttonli_close"}>
                        <div>
                            <button 
                                className="navimgclose"
                                onClick={this.props.handler}>
                                <CloseIcon />
                            </button>
                        </div>
                    </li>


                    <NavLink to="/conversation" activeClassName="NavActive" className="navli" exact={true} >
                        <li style={{paddingTop:"7px"}}>
                            
                            <div className="navim1"><HomeWorkOutlinedIcon style={{fill: "gray"}}/></div>
                            <div className="navtitle" style={{marginTop:"9px"}}>
                                The wall
                            </div>
                            
                        </li>
                    </NavLink>
                    <NavLink to="/mydoodle" activeClassName="NavActive" className="navli"  >
                        <li>
                            
                            <div className="navim"><Icon path={mdiAccountGroupOutline}
                                                            title="User Profile"
                                                            color="grey"
                                                            /> </div>
                            <div className="navtitle">
                                My doodle
                            </div>
                            
                        </li>
                    </NavLink>



                    <NavLink to="/discover" activeClassName="NavActive" className="navli" exact={true}>
                        <li>
                            
                            <img className="navim" src="/images/icon 1/classified.svg"></img>
                            <div className="navtitle">
                                Discover
                            </div>
                            
                        </li>
                    </NavLink> 

                    <NavLink to="/conversation/chat" activeClassName="NavActive" className="navli" exact={true}>
                        <li>
                            
                            <div className="navim"><ChatBubbleOutlineIcon style={{fill: "gray"}}/> </div>
                            <div className="navtitle">
                                Chat
                            </div>
                            
                        </li>
                    </NavLink>  
                    
                    <NavLink to="/conversation/directory" activeClassName="NavActive" className="navli"  exact={true}>
                        <li>
                            
                            <img className="navim" src="/images/icon 1/directory.svg"></img>
                            <div className="navtitle">
                                Directory
                            </div>
                            
                        </li>
                    </NavLink>  

                    <NavLink to="/class" activeClassName="NavActive" className="navli" exact={true}>
                        <li>
                            
                            <img className="navim" src="/images/icon 1/class.svg"></img>
                            <div className="navtitle">
                                Group
                            </div>
                            
                        </li>
                    </NavLink>  


                    <NavLink to="/users" activeClassName="NavActive" className="navli" exact={true}>
                        <li>
                            
                            <img className="navim" src="/images/icon 1/users.svg"></img>
                            <div className="navtitle">
                                Users
                            </div>
                            
                        </li>
                    </NavLink>  

                    <NavLink to="/payment" activeClassName="NavActive" className="navli" >
                        <li>
                            
                            <img className="navim" style={{height:"20px"}} src="/images/payment.svg"></img>
                            <div className="navtitle" style={{marginTop:"0"}}>
                                Payment
                            </div>
                            
                        </li>
                    </NavLink>  

                    </ul>


            </div>
            
        )     
                
        

       }
    }
export default Menu;
/*
<li><b>Download ADDA  App:</b>   <img className="smallimg" src="/images/apple.jpg"></img>   <img className="smallimg" src="/images/android.svg"></img></li>
                
                <li><b>Follow Us:</b>  <img className="smallimg" src="/images/facebook.png"></img>   <img className="smallimgsocial" src="/images/twitter.png"></img>  <img className="smallimgsocial" src="/images/google.png"></img></li>
*/

/*
<NavLink to="/help" activeClassName="NavActive" className="navli" exact={true}>
                    <li>
                        
                        <img className="navim" src="/images/icon 1/helpdesk.svg"></img>
                        <div className="navtitle">
                            Helpdesk
                        </div>
                        
                    </li>
                </NavLink>  
*/