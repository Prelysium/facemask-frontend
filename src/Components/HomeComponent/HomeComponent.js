import React from "react";
import styles from './HomeComponent.module.css'
import Circle from "../Circle/Circle";

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

                    <div className={styles.emptySpace}>
                        ...
                     </div>
                </div>);
    }
}
