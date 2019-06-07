import React from 'react';
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));

class Navbar extends React.Component{
    classes = useStyles;
    render(){
        return(
            <div className={this.classes.root}>
                <AppBar position="static" color="white"
                    style={{boxShadow: 'none', opacity:'0.5'}}>
                    <Toolbar>
                    <Typography variant="h6" className={this.classes.title}
                        style={{color:'black'}} >
                        Jane Kim
                    </Typography>
                    <Button id="button1" color="inherit" style={{flex:2}}><Link to="/">Home</Link></Button>
                    <Button id="button1" color="inherit" style={{flex:2}}><Link to="/aboutme">About me</Link></Button>
                    <Button id="button1" color="inherit" style={{flex:2}}><Link to="/experience">Experience</Link></Button>
                    <Button id="button1" color="inherit" style={{flex:2}}>Projects</Button>
                    <Button id="button1" color="inherit" style={{flex:2}}><Link to="/board">Board</Link></Button>
                    </Toolbar>
                </AppBar>
          </div>
        )
    }
}

export default withRouter(Navbar);