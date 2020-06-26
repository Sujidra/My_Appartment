import React from "react";
import { Link, NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { white } from '@material-ui/core/colors';

import Card from '@material-ui/core/Card';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const Header =(props)=>{
    $(document).ready(function(){
        // Activate tooltip
        $('[data-toggle="tooltip"]').tooltip();
      
    });
    function myFunctionHeader() {
        document.getElementById("myDropdownHeader").classList.toggle("show");
      }
      
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content-header");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    return(
        <div className={props.scroll?"header":"headerOnScrolled"}>
            
            <div className={props.scroll?"top":"topOnScroll"}>
                
                <div className="nav-img">
                    <button className="navmenuimg" onClick={props.handler}><img className="addimgnav" src="/images/Greenville.png"></img></button>
                    <div className="heading">
                        <p className="headtitle">Greenville Foundation</p>
                    </div>
                </div>
            <div className="headerrigth">
                <NavLink to="/notification"  className="notificationicon">
                    <NotificationsNoneOutlinedIcon style={{ color: white }} data-toggle="tooltip" title="Notification"  />
                </NavLink>
                <div className="activeuserflex">
                    <img src="/images/user-profile4.png" style={{height:25}}></img>
                    <p style={{paddingLeft:"5px"}}>Sujidra </p>
                    <div class="dropdown" style={{marginTop:"9px",paddingLeft:"3px"}}>
                        <a href="#" class="dropdown-toggle" style={{color:"white"}} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="caret">  </span></a>
                        <ul class="dropdown-menu" style={{padding:"0",marginTop:"9px",maxWidth:"70px"}}>
                            <li className="dropdownLi" style={{background:"#f1f1f1",margin:0,minWidth:"70px",height:"40px",paddingLeft:"50px"}}><a href="#"style={{paddingLeft:"10px",paddingTop:"7px",display:"inline-block",fontSize:"17px"}}>Logout</a></li>
                        </ul>
                    </div>

                        
                    
                </div>
                
            </div>
    
                
                
            </div>
            
            
            
        </div>
    )
}
export default Header;
/*
<div>
                <button 
                    className={props.open? "navimgclose_navopen":"navimgclose"}
                    onClick={props.handler}>
                    <CloseIcon />
                </button>
            </div>
*/