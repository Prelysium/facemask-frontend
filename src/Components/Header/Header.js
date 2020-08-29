import React from "react";
import styles from './Header.module.css'
import NavBar from "../NavBar/NavBar";
import logo from '../../assets/logo.png'


export default class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={styles.mainContainer}>
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo} alt={'logo'}/>
                        <span className={styles.logoText}>Prelysium</span>
                    </div>
                    <NavBar className={styles.navBar}/>
                </div>);
    }
}
