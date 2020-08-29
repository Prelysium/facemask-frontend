import React from "react";
import styles from './HomeComponent.module.css'

export default class HomeComponent extends React.Component{
    constructor(props) {
        super(props);


    }

    render(){
        return (<div className={styles.mainContainer}>
                    <svg className={styles.svg} width={100} height={100}>
                        <circle cx="50" cy="50" r="50"
                                fill="none"
                                stroke='#000000'
                                strokeDasharray="2 2 2 2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="50"
                                opacity=".9"/>
                    </svg>
                </div>);
    }
}
