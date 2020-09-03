import React from "react";
import styles from "./CloseButton.module.css"

export default class CloseButton extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (<svg onClick={this.props.onClick} className={styles.mainContainer} width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                     fillRule="evenodd"
                     clipRule="evenodd">
            <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
        </svg>)

    }
}
