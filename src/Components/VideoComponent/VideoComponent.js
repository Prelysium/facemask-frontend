import React from "react";
import styles from './VideoComponent.module.css'
import VideoPanel from "./VideoPanel/VideoPanel";
import video from "../../assets/videoplayback.mp4";

export default class VideoComponent extends React.Component{
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        console.log("trying to establish connection");

        this.connection = new RTCPeerConnection();
        this.connection.addEventListener('icecandidate', this.iceCandidate);
        this.connection.addEventListener('track', this.trackReceived);
    }

    // Send a msg to the websocket
    sendMessage = async () => {


    }

    trackReceived = (event) => {
        console.log("video track received");
        console.log(event.streams[0]);
        this.videoRef.current.srcObject = event.streams[0];
    }

    render(){

        return (<div className={styles.mainContainer}>
                    <div className={styles.upperPanel}>
                        <VideoPanel title={'Server Messages'}/>
                        <VideoPanel title={'Video Stream'} large={true}>
                            <video className={styles.video} autoPlay ref={this.videoRef}/>
                            <div className={styles.time}>
                                00 : 21
                            </div>
                            <button onClick={this.clickHandler}>click</button>
                        </VideoPanel>
                        <VideoPanel title={'Controls'}/>
                    </div>
                </div>);
    }

    clickHandler = async () => {
        console.log("clink");

        this.stream = await navigator.mediaDevices.getUserMedia({video:true});
        await this.connection.addTrack(this.stream.getVideoTracks()[0], this.stream);

        console.log("connection set");

        // create offer:
        const offer = await this.connection.createOffer();
        await this.connection.setLocalDescription(offer)
    }

    iceCandidate = async (event) => {
        console.log("ice");
        if(!event.candidate){
            console.log("ice gathering finished.");

            const data = {
                mode: "cartoon",
                sdp: event.target.localDescription.sdp,
            };

            const response = await fetch('http://localhost:5000/api/offer', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });


            const answer = await response.json();
            await event.target.setRemoteDescription(answer);
        }

    }
}
