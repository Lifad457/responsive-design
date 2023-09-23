import { Container } from "../../styles/simple-life/about-styles.css"
import life from "../../assets/images/simple-life/life.jpg"
import food from "../../assets/images/simple-life/food.jpg"
import work from "../../assets/images/simple-life/work.jpg"
import deco from "../../assets/images/simple-life/deco.jpg"
import about from "../../assets/images/simple-life/about-me.jpg"

function About() {
    const posts =[{id: 1, img: life, dt: "July 23, 2019", comments: 3, title: "Finding simplicity in life", text: "Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living."}
            , {id: 2, img: food, dt: "July 19, 2019", comments: 3, title: "Keeping cooking simple", text: "Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple."}
            , {id: 3, img: work, dt: "July 12, 2019", comments: 3, title: "Simplicity and work", text: "Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out."}
            , {id: 4, img: deco, dt: "July 3, 2019", comments: 3, title: "Simple decorations", text: "A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before."}
        ]
    
    let cpt = 0;
    const recentPostElements = posts.map(post => {
        cpt++
        if (cpt < 4) {
            return (
                <div key={post.id} className="recent-post">
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    {cpt < 3 && <div className="separator"></div>}
                </div>
            )
        }
        else {
            return null
        }
    })

    return (
        <Container>
            <img src={about} />
            <h1>My name is John and living the simple life saved my life</h1>
            <p><strong>I used to be a pack rat.</strong> I had so many things that I thought that
                I loved, but the truth was I couldn&apos;t even appreciate any of it
                because there was too much.
            </p>
            <p>
                Things were terrible. I had a job that I hated, a home that I didn&apos;t want
                to live in, and I couldn&apos;t hold a relationship.
            </p>
            <h2>How I turned things around</h2>
            <p>
                <strong>I was on the verge of a breakdown when I got rid of everything.</strong> I literally 
                put 90% of my possessions in the garbage, sold my place and appartment, and I quit my job.
            </p>
            <p>
                It wasn&apos;t easy at all, but everything around me was in such 
                a bad place, I didn&apos;t know what else to do. And it worked.
            </p>
            <h2>Now I live the simple life</h2>
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

            <div className="frame recent">
                <h1>RECENT POSTS</h1>
                { recentPostElements }
            </div>
        </Container>
    )
}
export default About