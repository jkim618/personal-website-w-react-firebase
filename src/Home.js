import React from 'react';
import Board from './messageBoard'
import Navbar from './Navbar'

class Home extends React.Component{
  render(){
    return(
        <div>
            <div class="home">
                <Navbar/>
                <div class="hometext">
                    <h1>Welcome to my Website.</h1>
                    <p>I am Jane Kim.</p>
                </div>
            </div>
            <div class="home1">
                <h1>Designer. Developer. Dancer.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="home2">
                <h1>Example Projects</h1>
            </div>
      </div>
    )
  }
}
export default Home;
