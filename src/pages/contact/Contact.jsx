import React from "react";
import Input from "../../components/input/Input";
import "./contact.css";

const Contact = () => {
  return (
    <section className="mainContact__container">
      <div className="contact__container">
        <header>Contact Me</header>
        <p className="contact__text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="">
          <div className="inputs__container">
            <Input
              label="First name"
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
            <Input
              label="Last name"
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
          {/* EMAIL */}
          <div>
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="textArea__container">
            <label className="textArea__label">Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>

          <div className="checkbox__container">
            <input type="checkbox" />
            <label className="checkbox__text">
              You agree to providing your data to name who may contact you.
            </label>
          </div>
          <button type="sunmit" id="btn_submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
