import React,{useState} from "react";
import Create from "../components/Create"
import {history} from "../routers/Approuter"
import { connect } from "react-redux";
import GroupModel from "../components/GroupModel"
import AlbumModel from "../components/AlbumModel"
import NoticeModel from "../components/Noticemodel";
import Radio from '@material-ui/core/Radio';

const Createbutton = (props) =>{

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').on('click', function () {
            $(this).tooltip('hide')
        })
        // Activate tooltip
        //$('[data-toggle="tooltip"]').tooltip();
        
    });



    const [createstatus,changeCreateStatus]=useState(true);
    const [clicked,changeToggle]=useState(false);
    const [groupshow,changeGroupShow]=useState(false);
    const [albumshow,changeAlbumShow]=useState(false);
    const [noticeshow,changeNoticeShow]=useState(false)
    const [selectedValue,changeSelectedValue]=useState("a")
    const [selectedNoticeValue,changeSelectedNoticeValue]=useState("a")
    
    const closegroupshow =()=>{
        changeToggle(false);
        changeGroupShow(false);
        changeCreateStatus(true);
        document.getElementById("totalbody").style.background="rgba(0,0,0,0.0)";
        
      }
      const closealbumshow =()=>{
        changeToggle(false);
        changeAlbumShow(false);
        changeCreateStatus(true);
        document.getElementById("totalbody").style.background="rgba(0,0,0,0.0)";
        
      }
    const closenoticeshow =()=>{
        changeToggle(false);
        changeNoticeShow(false);
        changeCreateStatus(true);
                
    }

    const handleChange=(event)=> {
        changeSelectedValue(event.target.value);
        }
    
    const handleNoticeChange=(event)=> {
        changeSelectedNoticeValue(event.target.value);
        }
    

    return(
        <div>
            <div style={{
                    visibility:createstatus?"visible":"hidden",
                    opacity:createstatus?1:0}}
                    className="totalcreate">
                {!clicked && <button className="add" onClick={(e)=>{changeToggle(true)}}>+</button> }
                
                <div style={{
                    visibility:clicked?"visible":"hidden",
                    opacity:clicked?1:0,
                    transition:"all 0.25s linear"
                    
                }}>
    
                    <button className="add" onClick={(e)=>{changeToggle(false)}}>x</button>
                    <button style={{
                        bottom:clicked?70:20,
                        transition:"all 0.25s linear"
                        }} className="add"
                        data-toggle="tooltip" title="Create Post"
                        onClick={(e)=>{changeToggle(false);history.push("/conversation/create")}}><img className="addimg" src="/images/PEN.png"></img></button>
                    
                    <a href="#CreateGroupModal" data-toggle="modal">
                        <button style={{
                            bottom:clicked?140:20,
                            transition:"all 0.25s linear"
                            }}className="add"
                            data-toggle="tooltip" title="Create Group"
                            onClick={(e)=>{changeToggle(false)}}
                            /*onClick={()=>{changeGroupShow(true);
                                        changeCreateStatus(false);
                                        document.getElementById("totalbody").style.background="rgba(0,0,0,0.5)"
                                        document.getElementById("totalbody").style.transition="all 0.3s linear"
                                        }}*/><img className="addimg" src="/images/GROUP ADD.png"></img>
                        </button>
                    </a>
                    <a href="#CreateAlbumModal" data-toggle="modal">
                        <button style={{
                            bottom:clicked?210:20,
                            transition:"all 0.25s linear"
                        }}className="add" 
                        data-toggle="tooltip" title="Create Album"
                        onClick={(e)=>{changeToggle(false)}}
                        /*onClick={()=>{changeAlbumShow(true);
                            changeCreateStatus(false);
                            document.getElementById("totalbody").style.background="rgba(0,0,0,0.5)"
                            document.getElementById("totalbody").style.transition="all 0.3s linear"
                            }}*/><img className="addimg" src="/images/IMAGE.png"></img></button>
                    </a>
                    
                    <a href="#addNoticeModal" data-toggle="modal">
                        <button style={{
                            bottom:clicked?280:20,
                            transition:"all 0.25s linear"
                        }}className="add"
                        data-toggle="tooltip" title="Create Notice"
                        onClick={(e)=>{changeToggle(false)}}
                        /*onClick={()=>{changeNoticeShow(true);
                            changeCreateStatus(false);
                            }}*/><img className="addimg" src="/images/USER ADD.png"></img></button>
                    </a>
                    
                </div>
                
            </div>


            <div id="CreateGroupModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form>
                                <div class="modal-header">						
                                    <h4 class="modal-title">Create Group</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>Group Name</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Group Description</label>
                                        <textarea class="form-control" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Type</label>
                                        <div>
                                            <Radio
                                                checked={selectedValue === 'a'}
                                                onChange={handleChange}
                                                value="a"
                                                name="radio-button-demo"
                                                label="Male"
                                                inputProps={{ 'aria-label': 'A' }}
                                            />Open For All
                                            <Radio
                                                checked={selectedValue === 'b'}
                                                onChange={handleChange}
                                                value="b"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />Restricted

                                        </div>
                                    </div>					
                                </div>
                                <div class="modal-footer">
                                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                    <input type="submit" class="btn btn-color" value="Create"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="CreateAlbumModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form>
                                <div class="modal-header">						
                                    <h4 class="modal-title">Create Album</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>Album Name</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Album Description</label>
                                        <textarea class="form-control" required></textarea>
                                    </div>
                                    					
                                </div>
                                <div class="modal-footer">
                                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                    <input type="submit" class="btn btn-color" value="Create"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="addNoticeModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content" style={{zIndex:1042}}>
                            <form>
                                <div class="modal-header">						
                                    <h4 class="modal-title">Add Notice</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label>User Type</label>
                                        <div>
                                            <Radio
                                                checked={selectedNoticeValue === 'a'}
                                                onChange={handleNoticeChange}
                                                value="a"
                                                name="radio-button-demo"
                                                label="Male"
                                                inputProps={{ 'aria-label': 'A' }}
                                            />Administration
                                            <Radio
                                                checked={selectedNoticeValue === 'b'}
                                                onChange={handleNoticeChange}
                                                value="b"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />Staff
                                            <Radio
                                                checked={selectedNoticeValue === 'c'}
                                                onChange={handleNoticeChange}
                                                value="c"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />Student

                                        </div>
                                    </div>						
                                    <div class="form-group">
                                        <label>Notice Title</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Notice Description</label>
                                        <textarea class="form-control" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Notice Recipient</label>
                                        <select className="visiblecheck" style={{width:"100%",borderColor:"#dddddd",height:"40px",borderRadius:2,marginLeft:0}}>
                                            <option value="All Members">All Members</option>    
                                        </select>
                                        
                                    </div>					
                                </div>
                                <div class="modal-footer">
                                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                    <input type="submit" class="btn btn-color" value="Add"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            
            <GroupModel show={groupshow} close={closegroupshow} />
            <AlbumModel show={albumshow} close={closealbumshow}/>
            <NoticeModel show={noticeshow} close={closenoticeshow}/>
            
        </div>
    )
        
        
    
}

export default connect()(Createbutton);