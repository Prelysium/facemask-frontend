import React from "react";
import styles from './NavItem.module.css'

export default class NavItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={styles.mainContainer}>
                    <span className={styles.textContainer}>Beqa yle</span>
                </div>);
    }
}