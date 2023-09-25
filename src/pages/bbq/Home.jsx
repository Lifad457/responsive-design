export default function Home () {
    return (
        <div className="container">
            <div className="left-col">
                <div className="strip"></div>
                <p className="left-col-desc">Mouthwateringly delicious</p>
                <h1 className="left-col-title">Learn how to make\n<strong>the best BBQ ribs</strong>\nin town</h1>
                <h2 className="left-col-subtitle">Join us for this live webinar</h2>
            </div>
            <div className="right-col">
                <h1 className="right-col-title">Become a BBQ master!</h1>
                <h2 className="right-col-subtitle">REGISTER TODAY</h2>
                <p className="right-col-desc">BBQ isn&apos;t just standing in front of your grill with it on full blast and hoping for the best. It&apos;s an art! One way to speed up the process is to learn from the best. You can do just that by signing up for this free webinar!</p>
                <div className="form">
                    <div className="f-name">first name</div>
                    <div className="email">email</div>
                    <div className="register">register</div>
                </div>
                <p className="disclaimer">We&apos;ll never share your information\nwithout your permission</p>
            </div>
        </div>
    )
}