import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Ionos",
        "template_baahlri",
        formRef.current,
        "user_8q29l7q1v0a0YLtGdlYL9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's talk about your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <MdOutlineMail className="c-icon" />
              <a
                href="mailto:da.b@dabmartinez.com"
                className="c-link"
                target="_blank"
                rel="noreferrer"
                style={{color: !darkMode ? "#222" : "white"}}
              >
                E-mail
              </a>
            </div>
            <div className="c-info-item">
              <AiOutlineInstagram className="c-icon" />
              <a
                href="https://www.instagram.com/dabeat360"
                target="_blank"
                rel="noreferrer"
                className="c-link"
                style={{color: !darkMode ? "#222" : "white"}}
              >
                Instagram
              </a>
            </div>
            <div className="c-info-item">
              <AiOutlineLinkedin className="c-icon" />
              <a
                href="https://www.linkedin.com/in/dabmartinez/"
                className="c-link"
                target="_blank"
                rel="noreferrer"
                style={{color: !darkMode ? "#222" : "white"}}
              >
                {" "}
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
            { done && "Thank you, I will contact you back soon"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
