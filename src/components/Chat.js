import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";

const Chat =(props)=>{
    return(
        <div>
            <div className={props.scroll?"headnav":"headernavOnScroll"}>
                <h3 class=" text-center" style={{color:"black",marginLeft:"20%"}}>Chat</h3>
            </div>


            <div className={props.scroll?"userscrolldata":"userscrolldataOnScroll"}>
                <div class="container" style={{marginTop:"30px"}}>
                    
                    <div class="messaging">
                        <div class="inbox_msg">
                            <div class="inbox_people">
                            <div class="headind_srch">
                                <div class="recent_heading">
                                <h4>Recent</h4>
                                </div>
                                <div class="srch_bar">
                                <div class="stylish-input-group">
                                    <input type="text" class="search-bar"  placeholder="Search" />
                                    <span class="input-group-addon">
                                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                                    </span> </div>
                                </div>
                            </div>
                            <div class="inbox_chat">
                                <div class="chat_list active_chat">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                    <h5>Sunil <span class="chat_date">Jun 12</span></h5>
                                    <p>Test, which is a new approach to have all solutions 
                                        astrology under one roof.</p>
                                    </div>
                                </div>
                                </div>
                                <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="/images/user-profile2.png" alt="Ranjith"/> </div>
                                    <div class="chat_ib">
                                    <h5>Ranjith <span class="chat_date">Jun 5</span></h5>
                                    <p>Hope you are doing good!</p>
                                    </div>
                                </div>
                                </div>
                                <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="/images/user-profile3.jpg" alt="Chandru"/> </div>
                                    <div class="chat_ib">
                                    <h5>Chandru <span class="chat_date">May 30</span></h5>
                                    <p>Can you pls slove this problem?</p>
                                    </div>
                                </div>
                                </div>
                                <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="/images/user-profile1.png" alt="Rajan"/> </div>
                                    <div class="chat_ib">
                                    <h5>Rajan <span class="chat_date">May 25</span></h5>
                                    <p>what are you doing man?</p>
                                    </div>
                                </div>
                                </div>
                                <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="/images/user-profile4.png" alt="Anju"/> </div>
                                    <div class="chat_ib">
                                    <h5>Anju <span class="chat_date">May 20</span></h5>
                                    <p>What are the works are to be completed tommorrow?</p>
                                    </div>
                                </div>
                                </div>
                                <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="/images/user-profile5.png" alt="Anu"/> </div>
                                    <div class="chat_ib">
                                    <h5>Anu <span class="chat_date">May 15</span></h5>
                                    <p>The 5th unt of science portion is not yet completed....rty?</p>
                                    </div>
                                </div>
                                </div>
                                <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="/images/user-profile6.png" alt="Malini"/> </div>
                                    <div class="chat_ib">
                                    <h5>Malini <span class="chat_date">May 05</span></h5>
                                    <p>Maths problems are very difficult to slove rty?</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="mesgs">
                            <div class="msg_history">
                                <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                                </div>
                                <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Test which is a new approach to have all
                                    solutions</p>
                                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                                </div>
                                <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                    <p>Test, which is a new approach to have</p>
                                    <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                                </div>
                                </div>
                                <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Apollo University, Delhi, India Test</p>
                                    <span class="time_date"> 11:01 AM    |    Today</span> </div>
                                </div>
                                <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                    <p>We work directly with our designers and suppliers,
                                        and sell direct to you, which means quality, exclusive
                                        products, at a price anyone can afford.</p>
                                    <span class="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                                </div>
                            </div>
                            <div class="type_msg">
                                <div class="input_msg_write">
                                <input type="text" class="write_msg" placeholder="Type a message" />
                                <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        
                        
                        
                        </div></div>
        
                
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(Chat)

/*
<div className="container">
                    <div className="row">
                        <div className="doodlebody">
                            <div className="doodleheader" style={{justifyContent:"center"}}>
                                <NavLink to="/#" className="navdoodle" >Messages</NavLink>
                                
                            </div>
                            <div className="contactbody">
                                <AccountCircleIcon fontSize="large" color="inherit" className="contacticon"/>
                                <div className="chats">
                                    <p className="chatparentname">Ajith kumar</p>
                                    <p className="msg">hi man how are you</p>
                                </div>
                            </div>
                            <div className="contactbody">
                                <AccountCircleIcon fontSize="large" color="inherit" className="contacticon"/>
                                <div className="chats">
                                    <p className="chatparentname">Gareth</p>
                                    <p className="msg">no, whats the matter</p>
                                </div>
                            </div>
                            <div className="contactbody">
                                <AccountCircleIcon fontSize="large" color="inherit" className="contacticon"/>
                                <div className="chats">
                                    <p className="chatparentname">Ragul</p>
                                    <p className="msg">sure</p>
                                </div>
                            </div>
                            <div className="contactbody">
                                <AccountCircleIcon fontSize="large" color="inherit" className="contacticon"/>
                                <div className="chats">
                                    <p className="chatparentname">Ram</p>
                                    <p className="msg">how is going your work ?</p>
                                </div>
                            </div>
                                
                        </div>
                    
                    </div>
                </div>
            */

