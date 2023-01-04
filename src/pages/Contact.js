import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import Biodata from "../components/Biodata";
import Monitor from "../components/Monitoring";
import Risk from "../components/RiskAssessment";
import Consent from "../components/Consent";

const Contact = () => {
    return(
        <>
            <div>
                <ContactForm />
            </div>
            <div>
                <Consent />
            </div>
            <div>
                <Biodata />
            </div>
            <div>
                <Monitor />
            </div>
            <div>
                <Risk />
            </div>
            <div>
                <Faq />
            </div>
        </>
    )
  };
  
  export default Contact;