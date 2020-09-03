import styles from './AboutComponent.module.css'
import React from "react";

import rezo from '../../assets/unnamed.jpg'
import beqa from '../../assets/beqa.jpg'
import misho from '../../assets/misho.jpg'

export default class AboutComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={`${styles.imageContainer} ${styles.basicContainer}`}>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={rezo}/>
                        <span className={styles.name}>rezo</span>
                    </div>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={beqa}/>
                        <span className={styles.name}>beqa</span>
                    </div>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={misho}/>
                        <span className={styles.name}>misho</span>
                    </div>
                </div>
                <div className={`${styles.mainTextContainer} ${styles.basicContainer}`}>123</div>
                <div className={`${styles.secondaryTextContainer} ${styles.basicContainer}`}>123</div>
                <div className={`${styles.contactContainer} ${styles.basicContainer}`}>123</div>
            </div>
        );
    }
}
