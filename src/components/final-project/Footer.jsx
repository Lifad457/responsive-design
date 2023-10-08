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

            <div className="footer-desc">
                <img src={logo} alt="logo" />
                <p>Two brothers from Chicago that are just trying to pay back their debt by helping others with their SEO, SEM, and Content Marketing needs.</p>
                <p className="copyright">©coolbrandname 2019</p>
            </div>
        </Container>
    )
}