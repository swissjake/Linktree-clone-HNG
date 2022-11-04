import React from "react";
import Input from "../../components/input/Input";
import "./contact.css";

const Contact = () => {
  return (
    <section className="mainContact__container">
      <div className="contact__container">
        <header>Contact Me</header>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form className="">
          {/* <div>
            <label htmlFor="">First name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input type="text" placeholder="Enter your first name" />
          </div> */}
          <div className="inputs__container">
            <Input
              label="First name"
              type="text"
              placeholder="Enter your first name"
            />
            <Input
              label="Last name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          {/* EMAIL */}
          <div>
            <Input
              label="Email"
              type="email"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="textArea__container">
            <label className="textArea__label">Message</label>
            <textarea
              rows={7}
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>

          <div className="checkbox__container">
            <input type="checkbox" />
            <p className="checkbox__text">
              You agree to providing your data to name who may contact you.
            </p>
          </div>
          <button>Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
