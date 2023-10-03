import { Burger, Container, Logo, Menu, Navigation } from "../../styles/final-project/header-styles.css";
import logo from '../../assets/images/final-project/logo.png'
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [switchMenu, setSwitchMenu] = useState(false);

    return (
        <Container>
            <Logo>
                <img alt="logo" src={logo} />
            </Logo>
            <Menu onClick={() => setSwitchMenu(!switchMenu)}>
                <Burger $switchmenu={switchMenu.toString()} ></Burger>
            </Menu>
            <Navigation $switchmenu={switchMenu.toString()}>
                <ul>
                    <li>
                        <NavLink to='.' onClick={() => setSwitchMenu(!switchMenu)}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='./about' onClick={() => setSwitchMenu(!switchMenu)}>about us</NavLink>
                    </li>
                    <li>
                        <NavLink to='./contact' onClick={() => setSwitchMenu(!switchMenu)}>contact</NavLink>
                    </li>
                </ul>
            </Navigation>
        </Container>
    )
}