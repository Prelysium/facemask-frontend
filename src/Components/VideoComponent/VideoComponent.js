import React from "react";
import styles from './VideoComponent.module.css'
import VideoPanel from "./VideoPanel/VideoPanel";
import video from "../../assets/videoplayback.mp4";
import wallpaper from "../../assets/118810350_333303637917573_490411430833512287_n.png"
import loading from "../../assets/big_loading_transparent.gif"

export default class VideoComponent extends React.Component{
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();

        this.state = {
            loading: false,
            blur: false,
        }
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
                            <video className={styles.video} autoPlay ref={this.videoRef} poster={wallpaper} onPlay={this.handlePlay}/>
                            {this.state.loading && <img className={styles.loading} src={loading}/>}
                            <div className={styles.time}>
                                00 : 21
                            </div>
                            <div className={styles.buttonContainer}>
                                <div className={styles.button} onClick={this.clickHandler}>Start</div>
                            </div>
                        </VideoPanel>
                        <VideoPanel title={'Controls'}>
                            <div className={styles.controlContainer}>
                                <div className={styles.controlTitle}>Stream:</div>
                                <div className={styles.controlText}>Prelysium offers you to start streaming and enjoy our Artificial intelligence product. Be aware, safety first.</div>

                                <div className={styles.controlTitle}>Options:</div>
                                <div className={styles.controlText}>Enable/Disable Blurring option before you start streaming.</div>
                            </div>

                            <div className={styles.checkBoxContainer}>
                                <input type={'checkbox'} className={styles.checkBox} onClick={this.handleCheck}/>
                                <label>Activate Blurring</label>
                            </div>



                        </VideoPanel>
                    </div>
                </div>);
    }

    handleCheck = e => {
        this.setState({
            blur: e.target.checked
        })
    }

    handlePlay = e => {

        this.setState({
            loading: false,
        })
    }

    clickHandler = async () => {
        console.log("clink");

        this.setState({
            loading: true,
        })

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
                mode: this.state.blur ? "blur" : "regular",
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
