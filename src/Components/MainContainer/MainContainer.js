import React from "react";
import styles from './MainContainer.module.css'
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import HomeComponent from "../HomeComponent/HomeComponent";
import VideoComponent from "../VideoComponent/VideoComponent";
import UploadComponent from "../UploadComponent/UploadComponent";

export default class MainContainer extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={styles.mainContainer}>
            <Header />
            <Route exact path={'/'} component={HomeComponent}/>
            <Route exact path={'/video'} component={VideoComponent}/>
            <Route exact path={'/upload'} component={UploadComponent}/>
            <Route exact path={'/about-us'} render={() => <div>about-us</div>}/>
        </div>
    }
}
