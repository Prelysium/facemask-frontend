import React from "react";
import styles from './MainContainer.module.css'
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import HomeComponent from "../HomeComponent/HomeComponent";

export default class MainContainer extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={styles.mainContainer}>
            <Header />
            <Route exact path={'/'} component={HomeComponent}/>
            <Route exact path={'/video'} render={() => <div>video</div>}/>
            <Route exact path={'/upload'} render={() => <div>upload</div>}/>
            <Route exact path={'/about-us'} render={() => <div>about-us</div>}/>
        </div>
    }
}
