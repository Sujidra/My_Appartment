import React from "react";
import SortIcon from '@material-ui/icons/Sort';
import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";


const directory = (props) =>{
    return(
        <div>
            <div className={props.scroll?"headnav":"headernavOnScroll"}>
                <h3 class=" text-center" style={{color:"black",marginLeft:"15%"}}>Directory</h3>
            </div>


            <div className={props.scroll?"conversationscrolldata":"converationscrolldataOnScroll"}>
        
                <div className="container">
                    <div className="row searchrowcontent">
                        <div className="col-10 col-sm-10">
                            <div className="main">
                                <div class="form-group has-search">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control" placeholder="Search"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 sort">
                        <button className="sortbutton" ><span className="directorysort" > SortBy</span> <SortIcon /></button>
                        </div>
                        
                    </div>
                    <div className="row ">
                        <div className="col-12 col-12 directoryradio">
                            <div class="form-check-inline">
                                <label class="form-check-label" for="radio1">
                                    <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked/><b>By Group</b>  
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label" for="radio2">
                                    <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2"/><b>By Name</b>
                                </label>
                            </div>
                
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <div className="directorycard">
                                <p className="parentname">Somasundar</p>
                                <p className="parentof">p/o Vighnesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <div className="directorycard">
                                <p className="parentname">P Sathis kumar</p>
                                <p className="parentof">P/o Punitha</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <div className="directorycard">
                                <p className="parentname">Gururajan R</p>
                                <p className="parentof">p/o Rajan</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <div className="directorycard">
                                <p className="parentname">Harini</p>
                                <p className="parentof">p/o Vighnesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <div className="directorycard">
                                <p className="parentname">Priya</p>
                                <p className="parentof">p/o Anu</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <div className="directorycard">
                                <p className="parentname">Lakshimi</p>
                                <p className="parentof">p/o Raju</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(directory)

