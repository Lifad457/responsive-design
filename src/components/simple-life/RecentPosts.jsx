import life from "../../assets/images/simple-life/life.jpg"
import food from "../../assets/images/simple-life/food.jpg"
import work from "../../assets/images/simple-life/work.jpg"
import deco from "../../assets/images/simple-life/deco.jpg"
import { Container } from "../../styles/simple-life/recent-posts-styles.css"

export default function RecentPosts() {
    const posts =[{id: 1, img: life, dt: "July 23, 2019", comments: 3, title: "Finding simplicity in life", text: "Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living."}
            , {id: 2, img: food, dt: "July 19, 2019", comments: 3, title: "Keeping cooking simple", text: "Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple."}
            , {id: 3, img: work, dt: "July 12, 2019", comments: 3, title: "Simplicity and work", text: "Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out."}
            , {id: 4, img: deco, dt: "July 3, 2019", comments: 3, title: "Simple decorations", text: "A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before."}
        ]

    let cpt = 0
    const recentPostElements = posts.map(post => {
        cpt++
        if (cpt < 4) {
            return (
                <div key={post.id} className="recent-post">
                    <img src={post.img} alt="" className="recent-post-img" />
                    <h2 className="recent-post-h2">{post.title}</h2>
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
            <h1 className="recent-post-h1">RECENT POSTS</h1>
            { recentPostElements }
        </Container>
    )
}