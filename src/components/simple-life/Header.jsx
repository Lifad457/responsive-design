import { NavLink } from "react-router-dom"
import { Container } from "../../styles/simple-life/header-styles.css"

function Header() {
    return (
        <Container>
            <div className="logo">
                <h1>Living the simple life</h1>
                <p>A BLOG EXPLORING MINIMALISM IN LIFE</p>
            </div>
            <nav>
                <ul>
                    <li><NavLink to='.' end>HOME</NavLink></li>
                    <li><NavLink to='about'>ABOUT ME</NavLink></li>
                    <li><NavLink to='recent-posts'>RECENT POSTS</NavLink></li>
                </ul>
            </nav>
        </Container>
    )
}
export default Header