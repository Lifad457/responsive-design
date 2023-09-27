import GlobalStyle from "../../styles/bbq/global-styles.css"
import { Container, LeftCol, RightCol } from "../../styles/bbq/home-styles.css"

export default function Home () {
    return (
        <>
            <GlobalStyle />
            <Container>
                <div className="strip"></div>
                <LeftCol>
                    <p className="left-col-desc">Mouthwateringly delicious</p>
                    <h1 className="left-col-title">Learn how to make<br /><strong>the best BBQ ribs</strong><br />in town</h1>
                    <p className="left-col-subtitle">Join us for this live webinar</p>
                </LeftCol>

                <RightCol>
                    <h1 className="right-col-title">Become a BBQ master!</h1>
                    <h2 className="right-col-subtitle">REGISTER TODAY</h2>
                    <p className="right-col-desc">BBQ isn&apos;t just standing in front of your grill with it on full blast and hoping for the best. It&apos;s an art! One way to speed up the process is to learn from the best. You can do just that by signing up for this free webinar!</p>
                    <div className="form">
                        <input placeholder="first name" type="text" className="f-name" />
                        <input placeholder="email" type="text" className="email" />
                        <button className="register">register</button>
                    </div>
                    <p className="disclaimer">We&apos;ll never share your information<br />>without your permission</p>
                </RightCol>
            </Container>
        </>
    )
}