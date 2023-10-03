import { Link } from "react-router-dom";
import { Container } from "../../styles/final-project/footer-styles.css";
import logo from "../../assets/images/final-project/logo.png"


export default function Footer() {
    return (
        <Container>
            <ul className="social-list">
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://facebook.com">
                            <i className="fab fa-facebook"></i>
                        </Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://twitter.com">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </li>
                    <li className="social-list-item">
                        <Link className="social-list-link" to="https://instagram.com">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </li>
                </ul>

            <img src={logo} />
            <p>etus et malesuada fames ac. Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper.</p>
            <p>©coolbrandname 2019</p>
        </Container>
    )
}