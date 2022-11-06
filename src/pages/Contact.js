import ContactForm from "../components/ContactForm";
import Calendar from "../components/Calendar";
import Faq from "../components/Faq";

const Contact = () => {
    return(
        <>
            <div>
                <Calendar />
            </div>
            <div>
                <ContactForm />
            </div>
            <div>
                <Faq />
            </div>
        </>
    )
  };
  
  export default Contact;