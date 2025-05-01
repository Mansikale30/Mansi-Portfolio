import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you have any inquiries, suggestions, or would like to</p>
        <p>discuss potential opportunities, feel free to reach out.</p>
        <p>I’m happy to assist.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:mansikale3007@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mansikale3007@gmail.com">mansikale3007@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919359624324"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919359624324">(+91) 9359624324</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}