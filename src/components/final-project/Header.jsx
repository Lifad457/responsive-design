import { Burger, Container, Logo, Navigation } from "../../styles/final-project/header.styles.css";
import logo from '../../assets/images/final-project/logo.png'
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [switchMenu, setSwitchMenu] = useState(false);
    console.log(switchMenu);

    return (
        <Container>
            <Logo>
                <img alt="logo" src={logo} />
            </Logo>
            <Burger onClick={() => setSwitchMenu(!switchMenu)} switchMenu={switchMenu}></Burger>
            <Navigation switchMenu={switchMenu}>
                <ul>
                    <li>
                        <NavLink to='.'>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='./about'>about us</NavLink>
                    </li>
                    <li>
                        <NavLink to='./contact'>contact</NavLink>
                    </li>
                </ul>
            </Navigation>
        </Container>
    )
}