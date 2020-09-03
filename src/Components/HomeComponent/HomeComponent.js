import React from "react";
import styles from './HomeComponent.module.css'
import Circle from "./Circle/Circle";
import backgroundImage from "../../assets/peopleWallpaper.jpg"
import maskGuy from "../../assets/mask_guy.jpg"
import video from "../../assets/demo.mov"

const TextItem = (props) => (
    <div className={styles.textItem}>
        <div className={styles.textItemTitle}>
            {props.title}
        </div>
        <div className={styles.textItemBody}>
            {props.text}
        </div>
    </div>);

export default class HomeComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (<div className={styles.mainContainer}>
                    <img className={styles.backgroundImage} src={backgroundImage}/>
                    <div className={styles.backgroundLayer}>
                        <span className={styles.mainTitle}>Prelysium</span>
                        <span className={styles.secondaryText}> Is new AI breakthrough product, which aims to help companies fight coronavirus and its consequences, while following new guidelines structured by government.</span>
                    </div>

                    <div className={styles.title}>
                        <span className={styles.companyName}>Prelysium</span>
                        <span className={styles.apiFeatures}>Demo Showcase</span>
                    </div>

                    <div className={styles.videoPanel}>
                <div className={styles.text}>
                    <div className={styles.titleVid}>Recognition Speed</div>
                    <div className={styles.textVid}>With our on-device computer vision model, users can expect an average response time of less than 250ms. </div>
                    <div className={styles.titleVid}>Real-time Streaming</div>
                    <div className={styles.textVid}>Users can test our product by simply launching it to the website. This feature is unique to our on-device model.</div>
                    <div className={styles.titleVid}>Ultimate Privacy</div>
                    <div className={styles.textVid}>By removing the need for data to leave the end-user device, privacy concerns are virtually eliminated. While our API takes every precaution possible to protect your privacy and data, our on-device model raises the bar on security substantially. </div>
                </div>
                <div className={styles.videoContainer}>
                    <video src={video} controls/>
                </div>
            </div>

                    <div className={styles.title}>
                        <span className={styles.companyName}>Prelysium</span>
                        <span className={styles.apiFeatures}>API Features</span>
                    </div>

                    <div className={styles.middleContainer}>
                        <div className={`${styles.leftTexts} ${styles.texts}`}>
                            <TextItem title={"Protect Your Health"} text={"Safety first, each company has responsibility to stop Covid-19 from spreading around the world. Our product will help you to follow Government rules."}/>
                            <TextItem title={"Safety Isn’t Expensive, It’s Priceless"} text={"In pandemic situations like this safety is priceless. Our product will help you to gain trust from customers and also, lead you to the better world."}/>
                        </div>
                        <Circle size={600}/>
                        <div className={`${styles.rightTexts} ${styles.texts}`}>
                            <TextItem title={"Image/Video Classification"} text={"Filter and categorize images or videos, monitor for content, and automatically assign labels for all of your digital media."}/>
                            <TextItem title={"Fine-Grained Machine Vision Recognition"} text={"Make things easier for customers and for your company. Marketplace through our product and gain newest AI real-time recognition software."}/>
                        </div>
                    </div>

                    <div className={styles.afterCircle}>

                    </div>

                    <div className={styles.secondBackgroundPanel}>
                        <div className={styles.secondBackgroundBackground} >
                            <img className={styles.secondBackgroundImage} src={maskGuy}/>
                        </div>
                    </div>

                    <div className={styles.footer}>

                    </div>
                </div>);
    }
}
