import React from "react";
import styles from './HomeComponent.module.css'
import Circle from "./Circle/Circle";
import backgroundImage from "../../assets/peopleWallpaper.jpg"
import maskGuy from "../../assets/mask_guy.jpg"

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
                        <span className={styles.secondaryText}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</span>
                    </div>
                    <div className={styles.title}>
                        <span className={styles.companyName}>Prelysium</span>
                        <span className={styles.apiFeatures}>API Features</span>
                    </div>
                    <div className={styles.middleContainer}>
                        <div className={`${styles.leftTexts} ${styles.texts}`}>
                            <TextItem title={"Image Classification"} text={"Filter and categorize images, monitor for inappropriate content, and automatically assign labels for all of your digital media."}/>
                            <TextItem title={"Image Classification"} text={"Filter and categorize images, monitor for inappropriate content, and automatically assign labels for all of your digital media."}/>
                        </div>
                        <Circle size={600}/>
                        <div className={`${styles.rightTexts} ${styles.texts}`}>
                            <TextItem title={"Image Classification"} text={"Filter and categorize images, monitor for inappropriate content, and automatically assign labels for all of your digital media."}/>
                            <TextItem title={"Image Classification"} text={"Filter and categorize images, monitor for inappropriate content, and automatically assign labels for all of your digital media."}/>
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
