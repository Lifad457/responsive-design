import { Link } from "react-router-dom";
import { LowerPart, UpperPart } from "../../styles/final-project/home-style.css";

export default function Home() {
    return (
        <>
            <UpperPart>
                <h1>Nisl suscipit <span>adipiscing bibendum</span> est ultricies integer quis auctor.</h1>
                <p>Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. <strong>Elementum integer enim neque</strong> volutpat ac tincidunt vitae semper.</p>
                <Link to="contact">contact us</Link>
            </UpperPart>
            <LowerPart>
                <h2>Lower</h2>
            </LowerPart>
        </>
    )
}