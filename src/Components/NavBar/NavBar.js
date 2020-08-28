import React from "react";
import styles from "./NavBar.module.css"
import NavItem from "../NavItem/NavItem";
export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={`${styles.mainContainer} ${this.props.className}`}>
                    <NavItem />
                    <NavItem />
                    <NavItem />
                    <NavItem />
                </div>)
    }
}