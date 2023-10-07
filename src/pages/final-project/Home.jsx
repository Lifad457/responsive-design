import { Link } from "react-router-dom";
import { LowerPart, UpperPart } from "../../styles/final-project/home-styles.css";

export default function Home() {
    return (
        <>
            <UpperPart>
                <h1>Nisl suscipit <span>adipiscing bibendum</span> est ultricies integer quis auctor.</h1>
                <p>Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. <strong>Elementum integer enim neque</strong> volutpat ac tincidunt vitae semper.</p>
                <Link to="contact">contact us</Link>
            </UpperPart>
            <LowerPart>
                <article>
                    <h1>About Me</h1>
                    <p>Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper.</p>
                </article>
                <article>
                    <h1>Our skills</h1>
                    <p>Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper.</p>
                </article>
                <article>
                    <h1>Get in touch</h1>
                    <p>Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper.</p>
                </article>
            </LowerPart>
        </>
    )
}