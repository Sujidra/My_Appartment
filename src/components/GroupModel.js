import React from "react"
import Modal from "react-modal";

/*const GroupModel = (props)=>{
    return(
        <Modal 
        className="modal"
        isOpen={props.show}
        onRequestClose={props.close}
        contentLabel="Selected Option">
        <p>Selected Option</p>
        
        <button className="addbutton"onClick={props.close}>Okay</button>
        </Modal>
    )
    
};*/
const GroupModel = (props)=>{
    return(
        /*<div className="bg-model">

        
            <div style={{
                visibility:props.show?"visible":"hidden",
                opacity:props.show?1:0,
                transition:"all 0.2s linear"
            }}className="groupmodel">
                <div className="groupModelHead">
                    <p class="groupcreatetitle">Create a group</p>
                    <button className="groupclose" onClick={props.close}>x</button>
                </div>
                <div className="groupbody">
                    <form action="">
                        <div className="groupname">
                            <p className="groupnamehead">Group Name</p>
                            <div className="groupNameInput">
                                <input className="groupnametext" placeholder="Group Name"></input>
                                <p className="groupnamerule">The sub group name should be one word, for a maximum of 12 characters and should not have any special characters-as this forms part of the email address.</p>
                            </div>
                        </div>
                        <div className="groupname">
                            <p className="groupDescriptionHead">Group Description</p>
                            <div className="groupNameInput">
                                <textarea Name="groupDescriptionText" placeholder="Group Description"></textarea>
                                
                            </div>
                        </div>
                        <div className="groupname">
                            <p className="groupDescriptionHead">Type</p>
                            <div className="groupRadioInput">
                                <div class="radiooption">
                                    <input type="radio" name="type" value="open" />
                                    <label for="type" className="radiolabel"> Open For All</label>
                                </div>
                                <div class="radiooption">
                                    <input type="radio" name="type" value="restricted" />
                                    <label for="type" className="radiolabel"> Restricted</label>
                                </div>
                                
                            </div>
                        </div>
                        <div className="groupbuts">
                            <button className="groupbutcancel"onClick={props.close}>Cancel</button>
                            <button className="groupbut"onClick={props.close}>Create</button>
                        </div>
                        
                    </form>
                    
                </div>
                
            </div>
        </div>*/
        <div></div>
    )
}
export default GroupModel;