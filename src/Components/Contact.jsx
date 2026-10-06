import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_wrlsezh",
        "template_pqqdoos",
        formRef.current,
        {
          publicKey: "VvyCLCj9AnQ6_hjgj",
        }
      )
      .then(
        () => {
          setStatus("success");
          event.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">CONTACT</p>

        <h2>
          Let's start a <span>conversation.</span>
        </h2>

        <p>
          Have a question, opportunity, or project in mind?
          Feel free to send me a message.
        </p>
      </motion.div>

      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-info">
          <div className="contact-icon">
            <FiMail />
          </div>

          <h3>Get in touch</h3>

          <p>
            I'm always open to discussing development opportunities,
            projects, and new ideas.
          </p>

          <div className="contact-details">
            <a
              href="mailto:poojam0650@gmail.com"
              className="contact-detail"
            >
              <span>EMAIL</span>
              <strong>poojam0650@gmail.com</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/pooja0309"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <span>LINKEDIN</span>
              <strong>www.linkedin.com/in/pooja0309</strong>
            </a>

            <div className="contact-detail">
              <span>LOCATION</span>
              <strong>Chennai, Tamil Nadu, India</strong>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Subject</label>

            <input
              type="text"
              id="title"
              name="title"
              placeholder="What would you like to discuss?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <FiSend />
          </button>

          {status === "success" && (
            <p className="form-success">
              Message sent successfully! Thank you for reaching out.
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;