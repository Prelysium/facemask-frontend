import React from "react";
import styles from './MainContainer.module.css'
import Header from "../Header/Header";

export default class MainContainer extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={styles.mainContainer}>
            <Header />
        </div>
    }
}