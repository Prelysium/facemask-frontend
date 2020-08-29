import styles from './UploadComponent.module.css'
import React from "react";

export default class UploadComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return <div className={styles.mainComponent}>
            Upload
            <div>
                <input onChange={this.uploadHandler} type={'file'}/>
            </div>
        </div>
    }

    uploadHandler = e => {
        console.log("upload", e.target.files)
        const reader = new FileReader();
        reader.onload = this.handleLoad;
        reader.readAsArrayBuffer(e.target.files[0])
    }

    handleLoad = function(e) {

        const rawData = e.target.result;

        //ws.send(rawData);
        console.log(rawData);

        alert("the File has been transferred.")

        const ws = new WebSocket("ws://localhost:5000");
        ws.addEventListener('open', () => {
            ws.send(rawData);
        })

    }
}