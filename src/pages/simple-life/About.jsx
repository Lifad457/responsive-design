import { Container } from "../../styles/simple-life/about-styles.css"
import about from "../../assets/images/simple-life/about-me.jpg"
import RecentPosts from "../../components/simple-life/RecentPosts"

function About() {
    return (
        <Container>
            <div className="col-1">
                <img src={about} className="about-img" />
                <h1 className="about-h1">My name is John and living the simple life saved my life</h1>
                <p><strong>I used to be a pack rat.</strong> I had so many things that I thought that
                    I loved, but the truth was I couldn&apos;t even appreciate any of it
                    because there was too much.
                </p>
                <p>
                    Things were terrible. I had a job that I hated, a home that I didn&apos;t want
                    to live in, and I couldn&apos;t hold a relationship.
                </p>
                <h2 className="about-h2">How I turned things around</h2>
                <p>
                    <strong>I was on the verge of a breakdown when I got rid of everything.</strong> I literally 
                    put 90% of my possessions in the garbage, sold my place and appartment, and I quit my job.
                </p>
                <p>
                    It wasn&apos;t easy at all, but everything around me was in such 
                    a bad place, I didn&apos;t know what else to do. And it worked.
                </p>
                <h2 className="about-h2">Now I live the simple life</h2>
                <p>
                    Now that I&apos;m living a simple life, things are so much better.
                    I&apos;m less stressed, enjoy life and work more, and I have more
                    free time to enjoy.
                </p>
                <p>
                    With how much it turned my life around, <strong>I felt like
                    I had no choice but to start sharing how I did it,</strong> 
                    and how others can benefit from living a simple life
                    as well, which is why I started this site!
                </p>
            </div>
            <div className="col-2">
                <div className="frame recent">
                    <RecentPosts />
                </div>
            </div>

        </Container>
    )
}
export default About