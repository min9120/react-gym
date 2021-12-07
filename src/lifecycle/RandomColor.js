import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import RandomColorNumber from "./RandomColorNumber";

function getRandomColor(){
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

class RandomColor extends Component{
    state = {
        color:"#000000"
    }
    handleClick =()=>{
        this.setState({
            color:getRandomColor()
        })
    }
    render(){
        return(
            <>
            <ErrorBoundary>
            <button onClick = {this.handleClick}>랜덤 색상</button>
            <RandomColorNumber color ={this.state.color}/>
            </ErrorBoundary>
            </>
        )
    }
}

export default RandomColor;