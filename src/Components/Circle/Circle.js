import React from "react";
import styles from "./Circle.module.css"

export default class Circle extends React.Component{

    constructor(props) {
        super(props);
        this.circleColor = '#b7adad';
    }

    componentDidMount() {

    }

    render() {
        return (<div className={styles.mainContainer}>
                    <svg className={styles.svg} width={this.props.size} height={this.props.size}>
                        <circle className={styles.mainCircle}
                                id={'mainCircle'}
                                r={this.props.size / 2 - 1}
                                cx={this.props.size / 2}
                                cy={this.props.size / 2}
                                fill={'none'}
                                stroke={this.circleColor}
                                strokeDasharray={'2 2'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={50}
                                strokeWidth={1}
                        />

                    </svg>
                </div>);
    }
}