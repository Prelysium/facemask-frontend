import React from "react";
import styles from "./Circle.module.css"
import presentation from "../../assets/illustration2.svg"
import {keyframes} from 'styled-components'

export default class Circle extends React.Component{

    constructor(props) {
        super(props);
        this.circleColor = '#adb3b7';
    }

    componentDidMount() {

    }

    render() {
        return (<div className={styles.mainContainer}>
                    <svg className={styles.svg} width={this.props.size} height={this.props.size}>

                        <rect id={'upperRect'}
                              x={90}
                              onAnimationEnd={this.handleAnimationEnd}
                              width={0}
                              height={200}
                              fill={'none'}
                              className={styles.upperFill}
                        />

                        <rect id={'rightRect'}
                              x={600-90}
                              y={90}
                              onAnimationEnd={this.handleAnimationEnd}
                              width={200}
                              height={0}
                              fill={'none'}
                              className={styles.rightFill}
                        />

                        <rect id={'lowerRect'}
                              x={600-90}
                              y={600-90}
                              onAnimationEnd={this.handleAnimationEnd}
                              width={0}
                              height={200}
                              fill={'none'}
                              className={styles.lowerFill}
                        />

                        <rect id={'leftRect'}
                              x={0}
                              y={600-90}
                              onAnimationEnd={this.handleAnimationEnd}
                              width={200}
                              height={0}
                              fill={'none'}
                              className={styles.leftFill}
                        />

                        <clipPath id={'clipRect'}>
                            <use href={'#upperRect'} />
                            <use href={'#rightRect'}/>
                            <use href={'#lowerRect'} />
                            <use href={'#leftRect'} />
                        </clipPath>



                        <circle className={styles.mainCircle}
                                id={'mainCircle'}
                                r={this.props.size / 2 - 1}
                                cx={this.props.size / 2}
                                cy={this.props.size / 2}
                                fill={'none'}
                                strokeDasharray={'2 2'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={50}
                                strokeWidth={1}
                        />

                        <use href={'#mainCircle'} stroke={this.circleColor}/>
                        <use href={'#mainCircle'} stroke={'red'} clipPath={'url(#clipRect)'}/>

                    </svg>
                    <svg className={styles.presentation}
                        xmlns="http://www.w3.org/2000/svg"
                         width="376"
                         height="273">
                        <defs>
                            <path id="a" d="M0 233V0h336v233z"/></defs><g fill="none"><path fill="#FFF" fillRule="nonzero" d="M0 0h376v273H0z"/><path fill="#E0E9F3" fillRule="nonzero" d="M20 253V20h336v233z"/><g transform="translate(20 20)"><mask id="b"><
                                use href="#a"/></mask><path fill="#FFF" fillRule="nonzero" d="M1.7 234.1a7.15 7.15 0 0 1-3.66-5.47l3.66 5.48zM-2 222.4L6.42 235H5.16l-.4-.02-6.76-10.1v-2.48zm0-6.17L10.53 235H8.9L-2 218.7v-2.47zm0-6.16L14.65 235H13l-15-22.47v-2.46zm0-6.17L18.77 235h-1.65L-2 206.37v-2.47zm0-6.17L22.9 235h-1.66L-2 200.2v-2.47zm0-6.16L27 235h-1.64L-2 194.04v-2.47zm0-6.17L31.12 235h-1.65L-2 187.87v-2.47zm0-6.16L35.24 235H33.6L-2 181.7v-2.46zm0-6.17L39.36 235H37.7L-2 175.54v-2.47zm0-6.17L43.48 235h-1.65L-2 169.37v-2.47zm0-6.16L47.6 235h-1.65L-2 163.2v-2.46zm0-6.17L51.7 235h-1.64L-2 157.04v-2.47zm0-6.16L55.83 235h-1.65L-2 150.87v-2.46zm0-6.16L59.95 235H58.3L-2 144.7v-2.46zm0-6.17L64.07 235h-1.65L-2 138.54v-2.47zm0-6.16L68.2 235h-1.66L-2 132.38v-2.47zm0-6.16L72.3 235h-1.65L-2 126.2v-2.46zm0-6.16L76.42 235h-1.65L-2 120.04v-2.46zm0-6.17L80.54 235H78.9L-2 113.88v-2.47zm0-6.16L84.66 235H83L-2 107.7v-2.46zm0-6.16L88.78 235h-1.65L-2 101.54v-2.46zm0-6.17L92.9 235h-1.66L-2 95.38V92.9zm0-6.15L97 235h-1.64L-2 89.2v-2.45zm0-6.17L101.13 235h-1.65L-2 83.05v-2.47zm0-6.17L105.25 235h-1.65L-2 76.88V74.4zm0-6.15L109.37 235h-1.65L-2 70.7v-2.45zm0-6.17L113.48 235h-1.65L-2 64.55v-2.47zm0-6.17L117.6 235h-1.65L-2 58.38V55.9zm0-6.15L121.72 235h-1.65L-2 52.22v-2.47zm0-6.17L125.84 235h-1.65L-2 46.05v-2.47zm0-6.16L129.96 235h-1.65L-2 39.88v-2.46zm0-6.17L134.07 235h-1.65L-2 33.72v-2.47zm0-6.17L138.2 235h-1.66L-2 27.55v-2.47zm0-6.16L142.3 235h-1.64L-2 21.4V18.9zm0-6.17L146.43 235h-1.65L-2 15.22v-2.47zm0-6.16L150.54 235h-1.64L-2 9.05V6.6zm.26-3.33c.14-.54.35-1.06.6-1.54L154.67 235H153L-1.74 3.27zM.2 0C.5-.3.9-.6 1.26-.84L158.77 235h-1.64L.2 0zm2.96-1.7c.48-.15.97-.24 1.48-.27L162.9 235h-1.65L3.15-1.7zM8.74-2l158.28 237h-1.65L7.1-2h1.64zm4.12 0l158.28 237h-1.65L11.2-2h1.66zm4.1 0l158.3 237h-1.66L15.33-2h1.64zm4.13 0l158.27 237h-1.65L19.44-2h1.65zm4.1 0l158.3 237h-1.66L23.56-2h1.65zm4.13 0L187.6 235h-1.65L27.68-2h1.65zm4.12 0l158.27 237h-1.64L31.8-2h1.65zm4.1 0l158.3 237h-1.66L35.9-2h1.64zm4.13 0l158.28 237h-1.65L40.04-2h1.65zm4.12 0l158.28 237h-1.65L44.15-2h1.65zm4.12 0L208.2 235h-1.65L48.27-2h1.65zm4.12 0L212.3 235h-1.64L52.4-2h1.64zm4.1 0l158.3 237h-1.66L56.5-2h1.65zm4.13 0l158.28 237h-1.65L60.62-2h1.65zm4.12 0l158.27 237h-1.65L64.74-2h1.65zm4.1 0l158.3 237h-1.66L68.86-2h1.65zm4.13 0L232.9 235h-1.64L72.98-2h1.65zm4.1 0l158.3 237h-1.66L77.1-2h1.64zm4.13 0l158.28 237h-1.65L81.2-2h1.66zm4.12 0l158.28 237h-1.65L85.34-2h1.65zm4.12 0l158.28 237h-1.65L89.45-2h1.65zm4.12 0L253.5 235h-1.65L93.57-2h1.65zm4.1 0l158.3 237h-1.66L97.68-2h1.65zm4.13 0l158.28 237h-1.65L101.8-2h1.65zm4.12 0l158.28 237h-1.65L105.92-2h1.65zm4.12 0l158.27 237h-1.65L110.04-2h1.65zm4.1 0L274.1 235h-1.64L114.16-2h1.65zm4.12 0L278.2 235h-1.65L118.27-2h1.65zm4.12 0l158.28 237h-1.65L122.4-2h1.64zm4.12 0l158.28 237h-1.65L126.5-2h1.66zm4.12 0l158.28 237h-1.65L130.64-2h1.65zm4.1 0l158.3 237h-1.65L134.75-2h1.64zm4.13 0l158.3 237h-1.65L138.85-2h1.66zm4.13 0L302.9 235h-1.64L142.98-2h1.65zm4.12 0l158.28 237h-1.65L147.1-2h1.65zm4.12 0l158.28 237h-1.65L151.22-2h1.65zm4.1 0l158.3 237h-1.65L155.34-2h1.64zm4.13 0l158.28 237h-1.65L159.45-2h1.65zm4.12 0L323.5 235h-1.65L163.57-2h1.65zm4.12 0l158.28 237h-1.65L167.7-2h1.64zm4.12 0L331.7 234.94c-.28.04-.57.06-.86.06h-.75L171.8-2h1.66zm4.1 0l157.4 235.68c-.36.27-.76.5-1.18.68L175.93-2h1.64zm4.13 0l155.58 232.97c-.22.45-.5.88-.8 1.27L180.04-2h1.65zm4.1 0L338 225.88l-.02 2.43L184.16-2h1.65zm4.13 0L338 219.7v2.48L188.28-2h1.65zm4.12 0L338 213.55v2.47L192.4-2h1.65zm4.1 0L338 207.38v2.47L196.52-2h1.64zm4.13 0L338 201.22v2.46L200.63-2h1.65zm4.12 0L338 195.05v2.47L204.75-2h1.65zm4.12 0L338 188.88v2.47L208.87-2h1.65zm4.12 0L338 182.72v2.46L213-2h1.64zm4.1 0L338 176.55v2.47L217.1-2h1.65zm4.13 0L338 170.38v2.47L221.22-2h1.65zM227-2l111 166.22v2.47L225.34-2H227zm4.1 0L338 158.05v2.47L229.46-2h1.65zm4.13 0L338 151.9v2.46L233.58-2h1.65zm4.1 0L338 145.72v2.47L237.7-2h1.64zm4.13 0L338 139.55v2.47L241.8-2h1.66zm4.12 0L338 133.4v2.46L245.93-2h1.65zm4.12 0L338 127.22v2.47L250.05-2h1.65zm4.12 0L338 121.06v2.46L254.17-2h1.65zm4.1 0L338 114.9v2.46L258.3-2h1.63zm4.13 0L338 108.72v2.47L262.4-2h1.65zm4.12 0L338 102.56v2.47L266.52-2h1.65zm4.12 0L338 96.4v2.46L270.64-2h1.65zm4.1 0L338 90.23v2.46L274.76-2h1.65zm4.12 0L338 84.06v2.47L278.88-2h1.64zm4.12 0L338 77.9v2.46L283-2h1.64zm4.12 0L338 71.73v2.47L287.1-2h1.66zm4.12 0L338 65.56v2.47L291.23-2h1.65zM297-2l41 61.4v2.46L295.35-2H297zm4.1 0L338 53.23v2.47L299.47-2h1.64zm4.13 0L338 47.06v2.47L303.58-2h1.65zm4.12 0L338 40.9v2.47L307.7-2h1.65zm4.12 0L338 34.73v2.47L311.82-2h1.65zm4.12 0L338 28.57v2.46L315.94-2h1.65zm4.1 0L338 22.4v2.47L320.06-2h1.64zm4.12 0L338 16.23v2.47L324.17-2h1.65zm4.12 0L338 10.07v2.47L328.3-2h1.64zm2.6.2c.87.22 1.66.58 2.36 1.06l2.94 4.4c.1.5.16.98.16 1.5v1.2l-5.45-8.15z" mask="url(#b)"/></g><g fillRule="nonzero"><path fill="#FF4E4C" d="M159 200c0 17.12-14.1 31-31.5 31S96 217.12 96 200c0-17.12 14.1-31 31.5-31s31.5 13.88 31.5 31m31 25h110V117H190z"/><path fill="#FFF" d="M222 148l-127-.15L163 41z"/><path fill="#FF4E4C" d="M275.82 79c-8.92 0-19.36-2-31.15-7.55-35.32-16.65-53.6-5.13-59.62-1.35a12.63 12.63 0 0 1-2.5 1.37l-1.5-4.4H181c.22-.1.88-.5 1.47-.88 6.57-4.15 26.54-16.73 64.27 1.06 36.4 17.16 58.57-1.96 60.98-4.2l3.28 3.38C309.14 68.16 296.63 79 275.82 79M155.2 136.5c0 2.15-1.82 3.9-4.05 3.9a3.97 3.97 0 0 1-4.04-3.9c0-2.15 1.8-3.9 4.05-3.9a3.97 3.97 0 0 1 4.04 3.9zM60.1 149.4a6.76 6.76 0 0 0 6.93 6.6l74.73-.55c1.53 0 3-.5 4.2-1.42l17.4-13.17c3.6-2.73 3.47-8-.24-10.58l-17.37-12.03a7.07 7.07 0 0 0-4.07-1.25l-74.87.55c-3.8.03-6.85 3-6.83 6.65l.12 25.2z"/><path fill="#FFF" d="M248 87h51V61h-51z"/><path fill="#FF4E4C" d="M181.7 138c-16.37 0-31.4-.92-32.7-1l.13-2.02c18.15 1.14 66.7 2.62 73.25-4.1.57-.6.6-1.06.57-1.36-.5-4.77-10.5-5.57-14.3-5.5l-.06-2.02c.63 0 15.62-.27 16.4 7.32.1 1.07-.3 2.1-1.15 2.96-4.48 4.6-24.12 5.72-42.16 5.72"/><path fill="#FFF" d="M75.45 140.6v-2.47h2.34c1.16 0 1.72.45 1.72 1.2 0 .84-.6 1.27-1.62 1.27h-2.45zm0-3.8v-2.4h2.13c.95 0 1.48.44 1.48 1.15 0 .84-.64 1.24-1.6 1.24h-2zM74 142h3.9c1.86 0 3.1-.86 3.1-2.47 0-1.25-.68-1.85-1.67-2.2.63-.36 1.2-.94 1.2-2 0-.65-.2-1.13-.56-1.53-.48-.52-1.24-.8-2.2-.8H74v9zm10.45-4.54v-3.02h2.1c1.08 0 1.72.53 1.72 1.5 0 .93-.66 1.52-1.7 1.52h-2.12zM83 142h1.45v-3.14h1.8l2.04 3.14H90l-2.23-3.4a2.66 2.66 0 0 0 1.97-2.73c0-1.74-1.13-2.87-3.06-2.87H83v9zm12-3.55l1.47-3.57 1.5 3.57H95zM92 142h1.55l.9-2.16h4.07l.88 2.16h1.6l-3.8-9h-1.4l-3.8 9zm10-9h1.5l4.9 6.22V133h1.6v9h-1.35l-5.06-6.4v6.4H102zm12.55 7.56v-6.12h1.75c1.86 0 3.07 1.3 3.07 3.06a2.9 2.9 0 0 1-3.07 3.06h-1.75zM113 142h3.3c2.78 0 4.7-1.97 4.7-4.5 0-2.56-1.92-4.5-4.7-4.5H113v9z"/><path fill="#FF4E4C" d="M256.6 74.68v-3.24h1.84c1.18 0 1.95.55 1.95 1.6 0 .97-.76 1.64-1.96 1.64h-1.85zM255 79h1.6v-2.9h1.8c1.97 0 3.6-1.05 3.6-3.07 0-1.83-1.33-3.03-3.44-3.03H255v9zm9.45-4.54v-3.02h2.1c1.08 0 1.72.53 1.72 1.5 0 .93-.66 1.52-1.7 1.52h-2.12zM263 79h1.45v-3.14h1.8L268.3 79h1.7l-2.23-3.4a2.66 2.66 0 0 0 1.97-2.73c0-1.74-1.13-2.87-3.06-2.87H263v9zm10 0h2v-9h-2zm4-4.5c0-2.47 1.86-4.5 4.5-4.5 1.62 0 2.6.56 3.44 1.35l-1 1.14a3.5 3.5 0 0 0-2.44-1.1c-1.67 0-2.9 1.37-2.9 3.1 0 1.7 1.23 3.1 2.9 3.1 1.07 0 1.76-.44 2.5-1.14l1 1a4.53 4.53 0 0 1-3.55 1.54 4.4 4.4 0 0 1-4.45-4.5m9-4.5h6.93v1.4h-5.3v2.35h4.7v1.42h-4.7v2.42H293V79h-7z"/></g></g>
                    </svg>

                    <div className={`${styles.shapeContainer} ${styles.upperLeftShape}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="20"
                             height="20"
                             viewBox="0 0 20 20"
                             fill={'#ff4e4c'}
                        >
                            <path d="M1 1h20v20H1z" />
                        </svg>
                    </div>

                    <div className={`${styles.shapeContainer} ${styles.upperRightShape}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="20"
                             height="20"
                             viewBox="0 0 20 20"
                             fill={'#ff4e4c'}
                        >
                            <path d="M1 1h20v20H1z" />
                        </svg>
                    </div>

                    <div className={`${styles.shapeContainer} ${styles.lowerLeftShape}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="20"
                             height="20"
                             viewBox="0 0 20 20"
                             fill={'#ff4e4c'}
                        >
                            <path d="M1 1h20v20H1z" />
                        </svg>
                    </div>

                    <div className={`${styles.shapeContainer} ${styles.lowerRightShape}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="20"
                             height="20"
                             viewBox="0 0 20 20"
                             fill={'#ff4e4c'}
                        >
                            <path d="M1 1h20v20H1z" />
                        </svg>
                    </div>

                </div>);
    }

    handleAnimationEnd = e => {
        console.log("animation end");
    }
}
