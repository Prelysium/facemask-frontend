import React from "react";
import styles from './NavItem.module.css'
import {Link} from "react-router-dom";

export default class NavItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={styles.mainContainer}>
                    <Link to={`${this.props.route}`} style={{textDecoration: 'none'}}>
                        <span className={styles.textContainer}>{this.props.title}</span>
                    </Link>
                </div>);
    }
}