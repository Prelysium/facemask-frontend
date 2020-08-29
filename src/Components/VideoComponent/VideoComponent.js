import React from "react";
import styles from './VideoComponent.module.css'

export default class VideoComponent extends React.Component{
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        console.log("trying to establish connection");
        this.socket = new WebSocket('ws://localhost:5000');

        // Opened
        this.socket.addEventListener('open', e => {
            console.log("Connection established.");
            this.connection = new RTCPeerConnection();
            this.connection.addEventListener('track', this.trackReceived);
            this.connection.addEventListener('icecandidate', this.iceCandidate);
        });

        // Closed
        this.socket.addEventListener('close', function (event) {
            console.log('Disconnected from the server!')
        });

        // Listen for messages
        this.socket.addEventListener('message',  async (e) => {
            console.log('Message from server ', e.data);
            const answer = new RTCSessionDescription({sdp: e.data, type: "answer"})
            // const answer = await response.json();
            await this.connection.setRemoteDescription(answer);
        });
    }

    // Send a msg to the websocket
    sendMessage = async () => {
        this.stream = await navigator.mediaDevices.getUserMedia({video:true});
        await this.connection.addTrack(this.stream.getVideoTracks()[0], this.stream);

        console.log("connection set");

        // create offer:
        const offer = await this.connection.createOffer();
        await this.connection.setLocalDescription(offer)

    }

    trackReceived = (event) => {
        console.log("video track received");
        console.log(event.streams[0]);
        this.videoRef.current.srcObject = event.streams[0];
    }

    render(){

        return (<div>
                    <video className={styles.video} ref={this.videoRef} autoPlay/>
                    <button onClick={this.sendMessage}>Click</button>
                </div>);
    }

    clickHandler = () => {
        console.log("clink");
    }

    iceCandidate = async (event) => {
        console.log("ice");
        if(!event.candidate){
            console.log("ice gathering finished.");

            console.log(this.connection.localDescription);
            this.socket.send(JSON.stringify(this.connection.localDescription));
        }

    }
}