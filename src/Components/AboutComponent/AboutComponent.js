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
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <div className={styles.mainTextLower}>
                        <div className={styles.title}>The Long</div>
                        <div className={styles.desc}>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </div>
                    </div>
                </div>
                <div className={`${styles.secondaryTextContainer} ${styles.basicContainer}`}>
                    <div className={styles.listTitle}>List Title</div>
                    <div className={styles.listContent}>
                        <ul>
                            <li className={styles.listItem}>word number one</li>
                            <li className={styles.listItem}>word number one</li>
                            <li className={styles.listItem}>word number one</li>
                            <li className={styles.listItem}>word number one</li>
                            <li className={styles.listItem}>word number one</li>
                            <li className={styles.listItem}>word number one</li>
                            <li className={styles.listItem}>word number one</li>
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
