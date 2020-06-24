import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import moment from "moment"
const displayNoticeData =(props)=>{
    return(
                <div>
                    <div className="noticetitlebar">
                        <h2 className="noticetitle">{props.noticedata.title}</h2>
                        <p className="noticetime"><img src="./images/clock.png" className="clockimg" ></img>  {moment(props.noticedata.time).fromNow()}</p>

                    </div>
                    
                    {
                        props.noticedata.content.split('\n').map(i=>{
                            return <p className="noticecontentdata">{i}</p>
                        })
                    }
                </div>
            
    )
}
export default displayNoticeData;