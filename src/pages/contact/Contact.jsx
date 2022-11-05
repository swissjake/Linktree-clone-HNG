import React, { useState } from "react";
import Input from "../../components/input/Input";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import "./contact.css";

const Contact = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("This field is required").email(),
    message: Yup.string().required("Required"),
    rememberMe: Yup.boolean(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    rememberMe: false,
  };

  return (
    <section className="mainContact__container">
      <div className="contact__container">
        <header>Contact Me</header>
        <p className="contact__text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={({ firstName, lastName, message, email, rememberMe }) => {
              // same shape as initial values
              console.log(firstName, lastName, message, email, rememberMe);
            }}
          >
            {({ values, errors, handleSubmit, handleChange, touched }) => (
              <>
                <div className="inputs__container">
                  <div className="second__input">
                    <Input
                      label="First name"
                      type="text"
                      id="first_name"
                      setInput={handleChange("firstName")}
                      errors={errors.firstName}
                      input={values.firstName}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName ? (
                      <p className="error__message">
                        Please enter your firstname
                      </p>
                    ) : null}
                  </div>
                  <div className="second__input">
                    <Input
                      label="Last name"
                      type="text"
                      id="last_name"
                      setInput={handleChange("lastName")}
                      errors={errors.lastName}
                      input={values.lastName}
                      placeholder="Enter your last name"
                    />

                    {errors.lastName ? (
                      <p className="error__message">
                        Please enter your lastname
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    setInput={handleChange("email")}
                    errors={errors.email}
                    input={values.email}
                    placeholder="yourname@email.com"
                  />
                  {errors.email ? (
                    <p className="error__message">Please enter your email</p>
                  ) : null}
                </div>

                <div className="textArea__container">
                  <label className="textArea__label">Message</label>
                  <textarea
                    id="message"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    setInput={handleChange("message")}
                    value={values.message}
                    onChange={handleChange}
                  />
                  {errors.message ? (
                    <p className="error__message">Please enter a message</p>
                  ) : null}
                </div>

                <div className="checkbox__container">
                  <input
                    type="checkbox"
                    name="check"
                    className="checkbox__resize"
                  />
                  <label className="checkbox__text">
                    You agree to providing your data to &#123;name&#125; who may
                    contact you.
                  </label>
                </div>
                <button onClick={handleSubmit} type="submit" id="btn_submit">
                  Send message
                </button>
              </>
            )}
          </Formik>
        </form>
      </div>
    </section>
  );
};

export default Contact;
