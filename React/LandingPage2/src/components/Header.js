import React, { Component } from "react";
import { NavStyle, UlStyle, AStyle } from "./StyledHeader";
import logo from './cafe.webp';

class Header extends Component {
    render() {
        return (
            <header>
                <NavStyle>
                    <img src={logo} style={{ height: "50px", width: "50px" }} alt="Logo"></img>
                    <UlStyle>
                        <li><AStyle href="#home">Home</AStyle></li>
                        <li><AStyle href="#about">About</AStyle></li>
                        <li><AStyle href="#menu">Menu</AStyle></li> 
                        <li><AStyle href="#shop">Shop</AStyle></li> 
                        <li><AStyle href="#contact">Contact</AStyle></li> 
                        <li><AStyle href="#testimonial">Testimoni</AStyle></li> 
                    </UlStyle>
                </NavStyle>
            </header>
        );
    }
}

export default Header;