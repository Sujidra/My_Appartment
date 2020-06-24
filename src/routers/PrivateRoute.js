import { connect } from "react-redux"
import React,{useState} from "react";
import {Route,Redirect} from "react-router-dom"
import Header from "../components/Header";
import Menu from "../components/menu";
import {addScroll} from "../store/Actions/scroll"

class PrivateRoute extends React.Component{
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0,open:true,scroll:false};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleDrawer=this.handleDrawer.bind(this);
        this.handleScroll=this.handleScroll.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        let screenWidth=screen.width;
        if(screenWidth<500){
            this.setState({open:false})
            console.log("false")
        }
        else{
            this.setState({open:true})
            console.log("true");
        }
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if(this.state.width<500){
            this.setState({open:false})
            console.log("false")
        }
        else{
            this.setState({open:true})
            console.log("true");
        }

    }

    handleScroll() {
        let scrollTop = event.srcElement.body.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 50 || document.documentElement.scrollTop > 50) {
            this.setState({scroll:true})
            this.props.dispatch(addScroll({scroll:this.state.scroll}))
        } else {
            this.setState({scroll:false})
            this.props.dispatch(addScroll({scroll:this.state.scroll}))
        }
        }




    
    handleDrawer() {
    this.setState((previousState)=>{
        return {
            open:!previousState.open
        }
    })
    };
    render(){
        console.log(this.state.width);

    return(
        
        <div id="totalbody">
            <Header open={this.state.open} width={this.state.width} handler={this.handleDrawer} scroll={this.state.scroll}/>
            <div className="bodyarea" >
                <div className={this.state.width<500?"mobile_nav":this.state.scroll?"desktop_nav":"desktop_navOnScroll"}>
                    <div className={this.state.open?"menu_navopen":"menu"}>
                        <Menu open={this.state.open} width={this.state.width} handler={this.handleDrawer}/>
                    </div>
                </div>
                
                <Route  {...this.props} />
                {
                    console.log(this.props)
                }
                
            </div>
        </div>
    )
    }
}



export default connect()(PrivateRoute)
