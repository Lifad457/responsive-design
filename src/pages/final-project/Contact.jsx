import { LowerPart, UpperPart } from "../../styles/final-project/contact-styles.css";
import contact from "../../assets/images/final-project/contact.jpg";

export default function Contact() {
    return (
        <>
            <UpperPart>
                <h1>Contact.</h1>
                <p>Let us know how we can help you need and we’ll drive over to your place in our Bluesmobile the following day to discuss the deal.</p>
                <img src={contact} alt="contact" />
            </UpperPart>

            <LowerPart>
               
                <h1>Getting in touch with us</h1>
                <p>You can either use the form or <u>send us an email</u>. I'll get back in touch with you as soon as possible!</p>

                <form>
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" ></textarea>

                    <button type="submit">send</button>
                </form>
            </LowerPart>
        </>
    )
}