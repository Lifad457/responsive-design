import { Container } from "../../styles/simple-life/home-styles.css"
import about from "../../assets/images/simple-life/about-me.jpg"
import Posts from "../../components/simple-life/Posts"
import RecentPosts from "../../components/simple-life/RecentPosts"

function Home() {
    return (
        <Container>
            <Posts className="col-1" />

            <div className="col-2">
                <div className="frame">
                    <h1 className="h1-me">ABOUT ME</h1>
                    <img className="img-me" src={about} />
                    <p className="desc-me">I find life better, and I&apos;m happier, when things are nice and simple.</p>
                </div>

                <div className="frame recent">
                    <RecentPosts />
                </div>
            </div>
        </Container>
    )
}
export default Home
