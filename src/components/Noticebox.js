import React, { useState,useEffect } from "react";
import NoticedataReducer from "../store/Reducers/NoticedataReducers";
import DisplayNoticeData from "./DisplayNoticeData";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import {NavLink} from "react-router-dom"
import Notification from "../components/Notification";
const Noticebox =(props)=>{
    const [index,changeindex] =useState(0);
    const[animate,changeanimate]=useState(true)
    const changeIncreIndex = (e) =>{
        e.preventDefault();
        if(props.noticedata.length-1<=index){
            changeindex(0)
        }else{
            changeindex(index+1)
        }
        
        
    }
    const changeDecreIndex = (e) =>{
        e.preventDefault();
        if(index===0){
            changeindex(props.noticedata.length-1)
        
        }else{
            changeindex(index-1)
        }
    }
    
    useEffect(()=>{
        changeanimate(false)
        setTimeout(() => {
            changeanimate(true)
        }, 300)
        
    },[index])
        
               
        
    return (
            <div>
                <div className={props.scroll?"headnav":"headernavOnScroll"}>
                    <NavLink to="/conversation" className="nav" activeClassName="activesubhead" >Conversations</NavLink>
                    <NavLink to="/groups" className="nav" activeClassName="activesubhead">Circles</NavLink>
                    <NavLink to="/photos" className="nav" activeClassName="activesubhead">Album</NavLink>
                    <NavLink to="/discover" className="nav" activeClassName="activesubhead">Discover</NavLink>
                    <NavLink to="/polls" className="nav" activeClassName="activesubhead">Polls</NavLink>
                
                </div>


                <div className={props.scroll?"conversationscrolldata":"converationscrolldataOnScroll"}>
            
                    {
                        props.noticedata.map((data,index)=>{
                            return (<Notification key={data.title} noticedata={props.noticedata[index]} />)
                        })
                    }
                </div>
            </div>
        
     
         /*<Card elevation={3} className="noticebox">
             <div className="noticehead">
                <p className="noticebox_title">Notice Board</p>
                <button className="next" onClick={(e)=>{changeIncreIndex(e)}}>NEXT</button>
                <button className="prev" onClick={(e)=>{changeDecreIndex(e)}}>PREV</button>
            
             </div>
             
            <div className="noticecontent">
                <div style={{
                            //visibility:animate?"visible":"hidden",
                            //opacity:animate?1:0,
                            transform:animate?"translateX(0%)":"translateX(10%)",
                            transition:"all 1s linear"
                            
                        }}>*/

                    
                    
               /* </div>

            </div>
        </Card>*/
       
    )
}
const mapStateToProps=(state)=>{
    return{
        noticedata:state.noticedata,
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(Noticebox)


