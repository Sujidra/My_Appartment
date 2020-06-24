import React from "react";


import { connect } from "react-redux";
import {NavLink} from "react-router-dom";


const Payment =(props)=>{
    return(
        <div className="body2">
            <div className={props.scroll?"headnav":"headernavOnScroll"}>
                <h3 class=" text-center" style={{color:"black",marginLeft:"15%"}}>Payment</h3>
            </div>


            <div className={props.scroll?"payscrolldata":"payscrolldataOnScroll"}>
            <div class="container ">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2><b>Payment Details</b></h2>
                                </div>
                                <div class="col-sm-6">
                                    <div class="usersearch-box">
                                        <div class="input-group">								
                                            <input type="text" id="search" class="form-control" placeholder="Search"/>
                                            <span class="input-group-addon"><i class="material-icons">&#xE8B6;</i></span>
                                        </div>
                                    </div>
         					
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    
                                    <th style={{width:"40%"}}>Class</th>
                                    <th>File</th>
                                    <th >Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>1-A</td>
                                    <td><a href="#" style={{color:"blue"}}>2019/07/12_1A.xlsx</a></td>
                                    <td >
                                        
                                            <a href="#addStudentModal" class="btn btn-color" data-toggle="modal" style={{color:"white",fontSize:"11px"}}>Upload Excel</a>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td>1-B</td>
                                    <td><a href="#" style={{color:"blue"}}>2019/06/29_1B.xlsx</a></td>
                                    <td >
                                       <a href="#addStudentModal" class="btn btn-color" data-toggle="modal" style={{color:"white",fontSize:"11px"}}>Upload Excel</a>
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td>2-A</td>
                                    <td><a href="#" style={{color:"blue"}}>2019/08/09_2A.xlsx</a></td>
                                    <td >
                                       <a href="#addStudentModal" class="btn btn-color" data-toggle="modal" style={{color:"white",fontSize:"11px"}}>Upload Excel</a>
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td>2-B</td>
                                    <td><a href="#" style={{color:"blue"}}>2019/07/12_2B.xlsx</a></td>
                                    <td >
                                       <a href="#addStudentModal" class="btn btn-color" data-toggle="modal" style={{color:"white",fontSize:"11px"}}>Upload Excel</a>
                                    </td>    
                                </tr>					
                                <tr>
                                    
                                    <td>3-A</td>
                                    <td><a href="#" style={{color:"blue"}}>2019/07/1_3A.xlsx</a></td>
                                    <td >
                                       <a href="#addStudentModal" class="btn btn-color" data-toggle="modal" style={{color:"white",fontSize:"11px"}}>Upload Excel</a>
                                    </td>
                                </tr> 
                                
                            </tbody>
                        </table>
                        <div class="clearfix">
                                <div class="hint-text">Showing <b>5</b> out of <b>20</b> entries</div>
                                <ul class="pagination">
                                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                    <li class="page-item"><a href="/payment/page2" class="page-link">2</a></li>
                                    <li class="page-item"><a href="/payment/page3" class="page-link">3</a></li>
                                    <li class="page-item"><a href="/payment/page4" class="page-link">4</a></li>
                                    <li class="page-item"><a href="/payment/page2" class="page-link">Next</a></li>
                                    
                                </ul>
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
export default connect(mapStateToProps)(Payment)

