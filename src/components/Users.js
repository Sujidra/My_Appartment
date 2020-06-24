import React from "react"
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const Users =(props)=>{
    $(document).ready(function(){
        // Activate tooltip
        $('[data-toggle="tooltip"]').tooltip();
        
    });
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
    setSelectedValue(event.target.value);
    };

    const myFunction=()=>{
        let x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
         
    
    
    return(
        <div class="body2">
            <div className={props.scroll?"headnav":"headernavOnScroll"}>
                <h3 class=" text-center" style={{color:"black",marginLeft:"20%"}}>Users</h3>
            </div>


            <div className={props.scroll?"userscrolldata":"userscrolldataOnScroll"}>
                <div class="container ">
                    
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2><b>Users</b></h2>
                                </div>
                                <div class="col-sm-6">
                                    <a href="#addEmployeeModal" class="btn btn-color" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New User</span></a>
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
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Relation</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Member</th>
                                    <th>Group</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Rathinavel</td>
                                    <td>Father</td>
                                    <td>rathinavel@gmail.com</td>
                                    <td>7010842989</td>
                                    <td>Suraj</td>
                                    <td>4th</td>
                                    <td>
                                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Change Password">https</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Shanthi</td>
                                    <td>Mother</td>
                                    <td>shanthi@gmail.com</td>
                                    <td>7890875676</td>
                                    <td>Ravi</td>
                                    <td>5th</td>
                                    
                                    <td>
                                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Change Password">https</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Muthuvel</td>
                                    <td>Guardian</td>
                                    <td>muthu@gmail.com</td>
                                    <td>7015642989</td>
                                    <td>Hema</td>
                                    <td>3th</td>
                                    
                                    <td>
                                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Change Password">https</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Gokul</td>
                                    <td>Father</td>
                                    <td>gokul@gmail.com</td>
                                    <td>7015642989</td>
                                    <td>Vighnesh</td>
                                    <td>6th</td>
                                    
                                    <td>
                                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Change Password">https</i></a>
                                    </td>
                                </tr>					
                                <tr>
                                    <td>5</td>
                                    <td>Anitha</td>
                                    <td>Mother</td>
                                    <td>anitha@gmail.com</td>
                                    <td>9085642989</td>
                                    <td>Anu</td>
                                    <td>2th</td>
                                    
                                    <td>
                                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Change Password">https</i></a>
                                    </td>
                                </tr> 
                            </tbody>
                        </table>
                        <div class="clearfix">
                            <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul class="pagination">
                                <li class="page-item disabled"><a href="#">Previous</a></li>
                                <li class="page-item"><a href="#" class="page-link">1</a></li>
                                <li class="page-item"><a href="#" class="page-link">2</a></li>
                                <li class="page-item active"><a href="#" class="page-link">3</a></li>
                                <li class="page-item"><a href="#" class="page-link">4</a></li>
                                <li class="page-item"><a href="#" class="page-link">5</a></li>
                                <li class="page-item"><a href="#" class="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div id="addEmployeeModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form>
                                <div class="modal-header">						
                                    <h4 class="modal-title">Add User</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Address</label>
                                        <textarea class="form-control" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Phone</label>
                                        <input type="text" class="form-control" required/>
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
                
                <div id="editEmployeeModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form>
                                <div class="modal-header">						
                                    <h4 class="modal-title">Edit User</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <div>
                                            <Radio
                                                checked={selectedValue === 'a'}
                                                onChange={handleChange}
                                                value="a"
                                                name="radio-button-demo"
                                                label="Male"
                                                inputProps={{ 'aria-label': 'A' }}
                                            />Active
                                            <Radio
                                                checked={selectedValue === 'b'}
                                                onChange={handleChange}
                                                value="b"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />Inactive

                                        </div>
                                    </div>					
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Address</label>
                                        <textarea class="form-control" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Phone</label>
                                        <input type="text" class="form-control" required/>
                                    </div>					
                                </div>
                                <div class="modal-footer">
                                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                    <input type="submit" class="btn btn-color" value="Save"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div id="deleteEmployeeModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form>
                                <div class="modal-header">						
                                    <h4 class="modal-title">Change password</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <div class="form-group">
                                        <label>New Password</label>
                                        <input type="password" class="form-control" required/>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" class="form-control" id="myInput" required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" onClick={myFunction}/>  Show Password
                                    </div>					
                                </div>
                                <div class="modal-footer">
                                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                    <input type="submit" class="btn btn-color" value="Save"/>
                                </div>
                            </form>
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
export default connect(mapStateToProps)(Users)
/*
<form>
                                <div class="modal-header">						
                                    <h4 class="modal-title">Delete User</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">					
                                    <p>Are you sure you want to delete these Records?</p>
                                    <p class="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div class="modal-footer">
                                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                    <input type="submit" class="btn btn-danger" value="Delete"/>
                                </div>
                            </form>
                    */