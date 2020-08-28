import React from "react";
import styles from "./NavBar.module.css"
import NavItem from "../NavItem/NavItem";
export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={`${styles.mainContainer} ${this.props.className}`}>
                    <NavItem title={'Home'} route={'home'}/>
                    <NavItem title={'Video'} route={'video'}/>
                    <NavItem title={'Upload'} route={'upload'}/>
                    <NavItem title={'About Us'} route={'about-us'}/>
                </div>)
    }
}