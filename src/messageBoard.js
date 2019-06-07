import React from 'react';
import firebase from './firebase.js';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Navbar from './Navbar'
import './messageBoard.css'
import TextField from '@material-ui/core/TextField';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:"",
            message:"",
            posts:[]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        var ref = firebase.database().ref('posts')
        const post = {
            name: this.state.name,
            message: this.state.message
        }
        ref.push(post)
    }

    componentDidMount(){
        var ref = firebase.database().ref('posts')

        ref.on('value', (snapshot) => {
            let posts = snapshot.val();
            let newState = [];
            for (let post in posts){
                newState.push({
                    name: posts[post].name,
                    message: posts[post].message
                })
            }
            console.log(newState)
            this.setState({
                posts:newState
            })
        })
    }
    

    
    render(){
        return(
            <div class="messageboard">
                <Navbar/>
                <div class="inputting">
                    <h1 style={{color:"#2E323C"}}>Hi! Leave any messages here!</h1>
                <TextField value = {this.state.name} type="text" style={{width:"500px"}}
                    placeholder = "What is your name?" variant="outlined"
                    onChange = {e => this.setState({name:e.target.value})}
                /> <br/> <br/>
                <TextField value = {this.state.message} type="text" style={{width:"500px"}}
                    placeholder = "Type your message!" variant="outlined"
                    onChange = {e => this.setState({message:e.target.value})}
                /> <br/>
                <Button variant = "contained" color="primary" onClick={this.handleClick} 
                    style={{marginTop:"20px", width:"500px"}}>Post!</Button>
                </div>
                <div class="boxparent">
                {this.state.posts.map(x => {
                    return(
                        <div class="box">
                        <p key={x.key}>
                                Name: {x.name} <br/>
                                Message: {x.message} <br/>
                                <br/>
                        <Button variant="contained">delete</Button>
                        </p>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
export default Board;
