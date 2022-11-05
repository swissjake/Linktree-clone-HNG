import React, { useState } from "react";
import Input from "../../components/input/Input";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    checkBox: false,
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.firstName.length === 0 ||
      form.lastName.length === 0 ||
      form.email.length === 0 ||
      form.message.length === 0
    ) {
      setError(true);
    }
    console.log(form);
  };

  return (
    <section className="mainContact__container">
      <div className="contact__container">
        <header>Contact Me</header>
        <p className="contact__text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form onSubmit={handleSubmit} className="">
          <div className="inputs__container">
            <div className="second__input">
              <Input
                label="First name"
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                handleChange={handleChange}
                name="firstName"
              />
              {error && form.firstName.length <= 0 ? (
                <p className="error__message">Please enter your firstname</p>
              ) : null}
            </div>
            <div className="second__input">
              <Input
                label="Last name"
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                handleChange={handleChange}
                name="lastName"
              />

              {error && form.lastName.length <= 0 ? (
                <p className="error__message">Please enter your lastname</p>
              ) : null}
            </div>
          </div>
          {/* EMAIL */}
          <div>
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="yourname@email.com"
              handleChange={handleChange}
              name="email"
            />
            {error && form.email.length <= 0 ? (
              <p className="error__message">Please enter your email</p>
            ) : null}
          </div>

          <div className="textArea__container">
            <label className="textArea__label">Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              onChange={handleChange}
              name="message"
            />
            {error && form.message.length <= 0 ? (
              <p className="error__message">Please enter a message</p>
            ) : null}
          </div>

          <div className="checkbox__container">
            <input type="checkbox" name="check" className="checkbox__resize" />
            <label className="checkbox__text">
              You agree to providing your data to &#123;name&#125; who may
              contact you.
            </label>
          </div>
          <button type="submit" id="btn_submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
