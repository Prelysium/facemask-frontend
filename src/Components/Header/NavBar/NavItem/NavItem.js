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
                        <span className={`${this.props.selected ? styles.selected : styles.textContainer}`}
                              onClick={this.handleClick}>
                            {this.props.title}
                        </span>
                    </Link>
                </div>);
    }

    handleClick = e => {
        this.props.onCLick(this.props.index);
    }
}