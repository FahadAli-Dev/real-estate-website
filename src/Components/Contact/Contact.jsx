import contactData from "../../data/contactData";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container padding">
        {/* Left Side */}
        <div className="contact-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondary-text">
            We are always ready to help by providing the best service. We
            believe that a good place to live can make your life better
          </span>

          <div className="callOptions">
            {contactData.map((item, idx) => {
              return (
                <div className="option" key={idx}>
                  <span>
                    <span className="iCon">{item.icon}</span>
                    <span>
                      <span className="primaryText">{item.title}</span>
                      <span className="secondary-text">{item.phone}</span>
                    </span>
                  </span>

                  <button>{item.actionText}</button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <div className="img-container">
            <img src="/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
