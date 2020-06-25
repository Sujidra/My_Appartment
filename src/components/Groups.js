import React from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import Radio from '@material-ui/core/Radio';

 
const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];
 


class Class  extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            tags: [
                { id: "Volley Ball", text: "Volley Ball" },
                { id: "Singning", text: "Singning" }
             ],
            suggestions: [
                { id: 'Dancing', text: 'Dancing' },
                { id: 'Drawing', text: 'Drawing' },
                { id: 'Karathe', text: 'Karathe' },
                { id: 'Drama', text: 'Drama' },
                { id: 'Music', text: 'Music' },
                { id: 'Volley Ball', text: 'Volley Ball' }
             ],
             selectedValue:"a"
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
 
    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }

    

    handleChange(event) {
    this.setState({selectedValue:event.target.value});
    }

      
      //$(multiInput.getValues().join(' and '))

    render(){

        const { tags, suggestions ,selectedValue} = this.state;

        return(
            <div class="body2">
                <div className={this.props.scroll?"headnav":"headernavOnScroll"}>
                    <h3 class=" text-center" style={{color:"black",marginLeft:"20%"}}>Group</h3>
                </div>

                
                <div className={this.props.scroll?"userscrolldata":"userscrolldataOnScroll"}>
                    <div class="container ">
                    
                        <div class="table-wrapper">
                            <div class="table-title classtabletitle">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div className="tablesearch">
                                            <div class="usersearch-box1">
                                                <div class="input-group">								
                                                    <input type="text" id="search" class="form-control" placeholder="Search"/>
                                                    <span class="input-group-addon"><i class="material-icons">&#xE8B6;</i></span>
                                                </div>
                                            </div>
                                            
                                            <div class="usersearch-box2">
                                                <div class="input-group">								
                                                    <input type="text" id="search" class="form-control" placeholder="Year"/>
                                                    <span class="input-group-addon"><i class="material-icons">filter_alt</i></span>
                                                </div>
                                            </div>
                                            <div class="usersearch-box2">
                                                <div class="input-group">								
                                                    <input type="text" id="search" class="form-control" placeholder="Group"/>
                                                    <span class="input-group-addon"><i class="material-icons">filter_alt</i></span>
                                                </div>
                                            </div>
                                
                                
                                        </div>
                                    </div>
                                    <div class="col-sm-4" style={{width:"100%",display:"flex",justifyContent:"space-between",paddingLeft:"0px"}}>
                                        <a href="#addGroupModal" class="btn btn-color" data-toggle="modal"style={{width:"50%",margin:0,padding:"6px"}}><i class="material-icons">&#xE147;</i> <span>Add New Group</span></a>
                                        <a href="#addStudentModal" class="btn btn-color" data-toggle="modal" style={{width:"50%",marginLeft:5,padding:"6px 4px 6px 4px"}}><i class="material-icons">&#xE147;</i> <span>Add New Member</span></a>
                                        
                                    </div>
                                </div>
                                <a href="#"className="uploadexcel">Upload Excel</a>
                            </div>
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Enrollment No</th>
                                        <th>Name</th>
                                        <th>Date Of Birth</th>
                                        <th>Current Group</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1001</td>
                                        <td>Suraj</td>
                                        <td>20/10/2002</td>
                                        <td>12-A</td>
                                        
                                        <td>
                                            <a href="#editStudentModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1002</td>
                                        <td>Ravi</td>
                                        <td>25/05/2005</td>
                                        <td>10-C</td>
                                                                               
                                        <td>
                                            <a href="#editStudentModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1506</td>
                                        <td>Priya</td>
                                        <td>15/06/2007</td>
                                        <td>7-B</td>
                                
                                        
                                        <td>
                                            <a href="#editStudentModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4674</td>
                                        <td>Anu</td>
                                        <td>07/12/2009</td>
                                        <td>4-C</td>
                                        
                                        
                                        <td>
                                            <a href="#editStudentModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>					
                                    <tr>
                                        <td>2345</td>
                                        <td>Vikram</td>
                                        <td>22/10/2012</td>
                                        <td>1th</td>
                                                                               
                                        <td>
                                            <a href="#editStudentModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
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
                    
                    <div id="addStudentModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <form>  
                                    <div class="modal-header">						
                                        <h4 class="modal-title">Add Member Details</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                                            
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>First Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Last Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Enrollment No</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Current Group</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Date Of Birth</label>
                                                    <div class="input-group-icon">
                                                        <input class="form-control js-datepicker" type="text" name="birthday"/>
                                                        <span class="input-group-addon"><i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i></span>
                                        
                                                    </div>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Gender</label>
                                                    <div>
                                                        <Radio
                                                            checked={selectedValue === 'a'}
                                                            onChange={this.handleChange}
                                                            value="a"
                                                            name="radio-button-demo"
                                                            label="Male"
                                                            inputProps={{ 'aria-label': 'A' }}
                                                        />Male
                                                        <Radio
                                                            checked={selectedValue === 'b'}
                                                            onChange={this.handleChange}
                                                            value="b"
                                                            name="radio-button-demo"
                                                            inputProps={{ 'aria-label': 'B' }}
                                                        />Female

                                            </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Father's Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Father's Occupation</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Father's Email</label>
                                                    <input type="email" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Father's Phone</label>
                                                    <input type="number" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Mother's Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Mother's Occupation</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Mother's Email</label>
                                                    <input type="email" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Mother's Phone</label>
                                                    <input type="number" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" required></textarea>
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
                    
                    <div id="addGroupModal" class="modal fade">
                        
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <form>  
                                    <div class="modal-header">						
                                        <h4 class="modal-title">Add New Group</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                                            
                                        <div class="form-group">
                                            <label>Group Name</label>
                                            <input type="text" class="form-control" required/>
                                              
                                        </div>
                                        <a href="#"className="uploadexcel" style={{marginLeft:"82%"}}>Upload Excel</a>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                        <input type="submit" class="btn btn-color" value="Add"/>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>


                    <div id="editStudentModal" class="modal fade">
                        
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <form>  
                                    <div class="modal-header">						
                                        <h4 class="modal-title">Edit Member Details</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                                            
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>First Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Last Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Admission No</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Current Group</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Date Of Birth</label>
                                                    <div class="input-group-icon">
                                                        <input class="form-control js-datepicker" type="text" name="birthday"/>
                                                        <span class="input-group-addon"><i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i></span>
                                        
                                                    </div>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Gender</label>
                                                    <div>
                                                        <Radio
                                                            checked={selectedValue === 'a'}
                                                            onChange={this.handleChange}
                                                            value="a"
                                                            name="radio-button-demo"
                                                            label="Male"
                                                            inputProps={{ 'aria-label': 'A' }}
                                                        />Male
                                                        <Radio
                                                            checked={selectedValue === 'b'}
                                                            onChange={this.handleChange}
                                                            value="b"
                                                            name="radio-button-demo"
                                                            inputProps={{ 'aria-label': 'B' }}
                                                        />Female

                                            </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Father's Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Father's Occupation</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Father's Email</label>
                                                    <input type="email" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Father's Phone</label>
                                                    <input type="number" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Mother's Name</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Mother's Occupation</label>
                                                    <input type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div className="splitrows">
                                                <div className="halfcontent">
                                                    <label>Mother's Email</label>
                                                    <input type="email" class="form-control" required/>
                                                </div>
                                                <div className="halfcontent">
                                                    <label>Mother's Phone</label>
                                                    <input type="number" class="form-control" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" required></textarea>
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
                                        <h4 class="modal-title">Delete Member</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">					
                                        <p>Are you sure you want to delete this member?</p>
                                        <p class="text-warning"><small>This action cannot be undone.</small></p>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                        <input type="submit" class="btn btn-danger" value="Delete"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    
                    

                </div>
            </div>
            
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        scroll:state.scroll
    }
}
export default connect(mapStateToProps)(Class)


/*
<div class="form-group">
                                            <label>Add Groups</label>
                                            <ReactTags tags={tags}
                                                inline
                                                suggestions={suggestions}
                                                handleDelete={this.handleDelete}
                                                handleAddition={this.handleAddition}
                                                handleDrag={this.handleDrag}
                                                delimiters={delimiters} 
                                            />
                                            <div class="react-tags">
                                                <div class="react-tags__selected">
                                                     <button class="react-tags__selected-tag">
                                                       <span class="react-tags__selected-tag-name" />
                                                    </button>
                                                </div>
                                                <div class="react-tags__search">
                                                    <div class="react-tags__search-input">
                                                       <input />
                                                    <div />
                                                </div>
                                                <div class="react-tags__suggestions">
                                                    <ul>
                                                        <li class="is-active">
                                                            <mark />
                                                        </li>
                                                        <li class="is-disabled">
                                                            <mark />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        </div>
                                        */

/*
<div class="table-title">
                                <a href="#addStudentModal" class="btn btn-color" data-toggle="modal"><i class="material-icons">get_app</i> <span>Download Form</span></a>
                                <a href="#addStudentModal" class="btn btn-color" data-toggle="modal"><i class="material-icons">description</i> <span>Upload Excel</span></a>
                            </div>
                            */