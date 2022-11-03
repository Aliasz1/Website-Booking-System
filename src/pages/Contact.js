import BookForm from "../components/BookForm";
import ContactForm from "../components/ContactForm";
import Calendar from "../components/Calendar";

const Contact = () => {
    return(
        <>
            <div>
                <Calendar />
            </div>
            <div className="grid grid-cols-2">
                <ContactForm />
                <BookForm />
            </div>

        </>
    )
  };
  
  export default Contact;