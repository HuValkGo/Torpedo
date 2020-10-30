import React, { Component } from 'react'
import logo from"../images/logo.png"
import {Link}from "react-router-dom"
import classnames from "classnames";

export default class Navbar extends Component {
    constructor(props){
    super(props);

    this.state = {
    prevScrollpos: window.pageYOffset,
    visible: true
    }
}
// Adds an event listener when the component is mount.
componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
    render() {
        return (
            <nav className={classnames("navbar",
             {"navbar--hidden": !this.state.visible})}>
                <div className ="nav-center">
                    <div className ="nav-header">
                        <Link to ="/">
                            <img src = {logo} alt =""/>
                        </Link>
                    </div> 
                    <ul className="nav-links show-nav">
                        <li>
                            <Link to ="/">AVALEHT</Link>
                        </li>
                        <li>
                            <Link to ="/rooms">PROJEKTID</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

