import React from "react";
import styles from "./NavBar.module.css"
import NavItem from "./NavItem/NavItem";
export default class NavBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
        }
    }

    render() {
        return (<div className={`${styles.mainContainer} ${this.props.className}`}>
                    <NavItem onCLick={this.handleClick} title={'Home'} route={''} selected={this.state.selectedIndex === 0} index = {0}/>
                    <NavItem onCLick={this.handleClick} title={'Video'} route={'video'} selected={this.state.selectedIndex === 1} index = {1}/>
                    <NavItem onCLick={this.handleClick} title={'Upload'} route={'upload'} selected={this.state.selectedIndex === 2} index = {2}/>
                    <NavItem onCLick={this.handleClick} title={'About Us'} route={'about-us'} selected={this.state.selectedIndex === 3} index = {3}/>
                </div>)
    }

    handleClick = index => {
        this.setState({
            selectedIndex: index
        });
    }

}
