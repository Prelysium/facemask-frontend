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
                <div className={`${styles.mainTextContainer} ${styles.basicContainer}`}>
                    <div className={styles.mainTextUpper}>
                        <div className={styles.title}>The Short</div>
                        <div className={styles.desc}>
                            Prelisium, new AI breakthrough product, which aims to help companies fight coronavirus and its consequences while, on the other hand help them to follow new guidelines structured by government. This product will be accessible to any company and will challenge their fear about AI.
                        </div>
                    </div>
                    <div className={styles.mainTextLower}>
                        <div className={styles.title}>The Long</div>
                        <div className={styles.desc}>
                            Artificial intelligence is cool, everyone admits it. However, we don’t use it in our daily lives. According to the research done by student of Free University of Tbilisi, 95% of companies are not willing to invest money to AI start-ups. Due to this, we introduce very accessible product for every company in every country.  Our software will be able to detect and track people from the video cameras. Technology-wise, the product’s base part will be built on artificial intelligence models, which will locate people and control wether or not they’re wearing face masks and following the rules given by the government. The main feature of our project is that it will be accessible from all devices. Users will be able to use their webcam source and get back video stream processed by our Computer Vision algorithm in a real time.
                        </div>
                    </div>
                </div>
                <div className={`${styles.secondaryTextContainer} ${styles.basicContainer}`}>
                    <div className={styles.listTitle}>List Title</div>
                    <div className={styles.listContent}>
                        <ul>
                            <li className={styles.listItem}>Carrefour</li>
                            <li className={styles.listItem}>Nikora</li>
                            <li className={styles.listItem}>Orinabiji</li>
                            <li className={styles.listItem}>Europroduct</li>
                            <li className={styles.listItem}>Agrohub</li>
                            <li className={styles.listItem}>Tbilisi malls</li>
                            <li className={styles.listItem}>Mzesumzira</li>
                            <li className={styles.listItem}>Ciskari</li>
                            <li className={styles.listItem}>Bank of Georgia</li>
                            <li className={styles.listItem}>TBC bank</li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.contactContainer} ${styles.basicContainer}`}>
                    <div className={styles.title}>Get In Touch</div>
                    <div className={styles.field}>
                        <label className={styles.inputLabel}>Name</label>
                        <input type={'test'} className={styles.input}/>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.inputLabel}>Email</label>
                        <input type={'test'} className={styles.input}/>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.inputLabel}>Subject</label>
                        <input type={'test'} className={styles.input}/>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.inputLabel}>Message</label>
                        <textarea className={styles.textarea}>

                        </textarea>
                    </div>
                    <div className={styles.highFiveContainer}>
                        <div className={styles.highFiveButton}>
                            High Five
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
