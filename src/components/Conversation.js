import React from "react";
import Card from '@material-ui/core/Card';
const Conversation =() =>{
    return(
        <div  className="conversation">
            <img src="/images/person1.jpg" className="convoimg"style={{}}></img>
            <div className="textbox">
                 <input placeholder="Start a Conversation, poll or share Photos" className="textletters" type="text" ></input>
       
            </div>
        </div>
    )
}

export default Conversation;