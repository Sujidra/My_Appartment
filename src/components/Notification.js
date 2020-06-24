import React from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
import moment from "moment"
import Card from '@material-ui/core/Card';

const Notification = (props)=>{
    return(
        

                
                    <Card elevation={3} className="displaynotice">
                        <div className="noticetitlebar">
                            <h2 className="noticetitle">{props.noticedata.title}</h2>
                            <p className="noticetime"><img src="./images/clock.png" className="clockimg" ></img>  {moment(props.noticedata.time).fromNow()}</p>

                        </div>
                            
                        {
                            props.noticedata.content.split('\n').map(i=>{
                                return <p className="noticecontentdata">{i}</p>
                            })
                        }
                    </Card>
                
            
        
    )
}


const mapStateToProps=(state)=>{
    return{
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(Notification)


