import { Burger, Container, Logo, Menu, Navigation } from "../../styles/final-project/header-styles.css";
import logo from '../../assets/images/final-project/logo.png'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [switchMenu, setSwitchMenu] = useState(false);

    return (
        <Container>
            <Link to='.'>
                <Logo>
                    <img alt="logo" src={logo} />
                </Logo>
            </Link>
            <Menu onClick={() => setSwitchMenu(!switchMenu)}>
                <Burger $switchmenu={switchMenu.toString()} ></Burger>
            </Menu>
            <Navigation $switchmenu={switchMenu.toString()}>
                <ul>
                    <li>
                        <NavLink to='.' end onClick={() => setSwitchMenu(!switchMenu)}>home</NavLink>
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