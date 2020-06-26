import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import { Link, NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import { connect } from "react-redux";
const mydoodle = (props) =>{

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
      
      // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }
    const[memberSelected,changeMember]=useState("Gokul");

    let profile =   props.mydoodledata.find((profil)=>{
        return profil.membername===memberSelected
    })
    
    
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
        
                <div className="mydoodle">
                    <h1 className="mydoodletitle">My Group</h1>

                    <div className="doodlemember">
                        <div className="mydoodleprofile">
                            <img  className="profileimg" src={`${profile.imgurl}`} ></img>
                            <span className="profilename" > {profile.membername}</span>
                        </div>
                        <div className="dropdown">
                            <ArrowDropDownIcon onClick={myFunction} className="dropbtn"/>
                            
                            <div id="myDropdown" className="dropdown-content">
                                {
                                    props.mydoodledata.map((profiles)=>{
                                        return(
                                            <button key={profiles.imgurl} className="dropdownbutton" onClick={(e)=>{changeMember(`${profiles.membername}`)}}>{profiles.membername}</button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="countdetails">
                        <Card className="totalmembers">
                            <GroupOutlinedIcon className="groupoutlineicon"/>
                            <p className="membercount"><span style={{color:"red"}}>35</span> Members</p>
                        </Card>
                        <Card className="totalmembers">
                            <GroupOutlinedIcon className="groupoutlineicon"/>
                            <p className="membercount"><span style={{color:"red"}}>5</span> Faculties</p>
                        </Card>

                    </div>
                    <div className="doodlebody">
                        <div className="doodleheader">
                            <NavLink to="/mydoodle" className="navdoodle" activeClassName="activedoodle" exact={true} >My Dues</NavLink>
                            <NavLink to="/mydoodle/history" className="navdoodle" activeClassName="activedoodle">History</NavLink>
                        </div>
                        {
                            props.mydoodledata.map((profiles)=>{
                                return(
                                    <div key={profiles.imgurl} className="duecard">
                                        <div className="amt">
                                            <p className="dueusename">{profiles.membername}</p>
                                            <b className="rupee">{profiles.rupee}</b>
                                        </div>
                                        <div className="amt">
                                            <p className="duetime">{profiles.date}</p>
                                            <NavLink to="/a" className="detaillink">detail</NavLink>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        <div className="totalamt">
                            <p className="totalamtdue">Total Amount Due:</p>
                            <b className="totamt">Rs.26,000</b>
                        </div>

                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        mydoodledata:state.Mydoodledata,
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(mydoodle);