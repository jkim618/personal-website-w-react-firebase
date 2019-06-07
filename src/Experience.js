import React from 'react';
import Navbar from './Navbar'
import './Experience.css'

class Experience extends React.Component{
    render(){
        return(
            <div>
                <div class = "experience1">
                    <Navbar/>
                </div>
                <div class= "home1">
                    <h1>Experiences</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type spe</p>
                </div>
            </div>
        )
    }
}

export default Experience;