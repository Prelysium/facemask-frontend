import styles from './VideoPanel.module.css'
import React from "react";
import enlarge from "../../../assets/enlarge.png"

export default class VideoPanel extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={`${styles.mainContainer} ${this.props.large ? styles.large : styles.small}`} >
                    <div className={styles.header}>
                        <span>{this.props.title}</span>
                        <img className={styles.enlarge} src={enlarge}/>
                    </div>
                    <div className={styles.body}>
                        {this.props.children}
                    </div>
                </div>
    }
}
