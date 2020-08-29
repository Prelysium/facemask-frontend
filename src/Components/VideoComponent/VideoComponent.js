import React from "react";
import styles from './VideoComponent.module.css'

export default class VideoComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (<div>
                    <video/>
                    <button onClick={this.clickHandler}>Rezga</button>
                </div>);
    }

    clickHandler = () => {
        console.log("clink");
    }
}