import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const contactFields = [
  { label: "Full name", name: "full_name", type: "text" },
  { label: "Email address", name: "email", type: "email" },
  //   { label: "Specialist", name: "specialist", type: "select" },
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      specialist: "advisor",
    },
  });

  const onSubscribe = async (data) => {
    const response = await fetch(
      `https://win24-assignment.azurewebsites.net/api/forms/contact`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      setError("serverError", {
        type: "manual",
        message: response.message || "Error while posting, try again later.",
      });
    } else {
      setSubmitted(true);
      clearErrors();
      reset();
    }
  };

  useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [submitted]);

  return (
    <form
      className="contact_form"
      onSubmit={handleSubmit(onSubscribe)}
      noValidate
      //   action="submit"
    >
      <h5 className="contact_form_title">Get Online Consultation</h5>

      <div className="contact_field_container">
        <label className="contact_field_label" htmlFor="fullName">
          Full name
        </label>
        <input
          {...register("fullName", {
            required: "This field is required",
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/,
              message: "Name must be at least 2 characters long.",
            },
          })}
          className="contact_input_field"
        />
        {errors.fullName?.message && (
          <span className="subscription_error_message">
            {errors?.fullName?.message}
          </span>
        )}
      </div>

      <div className="contact_field_container">
        <label className="contact_field_label" htmlFor="fullName">
          Email
        </label>
        <input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email.",
            },
          })}
          className="contact_input_field"
        />
        {errors.email?.message && (
          <span className="subscription_error_message">
            {errors?.email?.message}
          </span>
        )}
      </div>

      <div style={{ display: "grid" }}>
        <label className="contact_field_label" htmlFor="specialist">
          Specialist
        </label>

        <select
          className="contact_input_field"
          name="specialist"
          {...register("specialist", { required: "select one option" })}
        >
          <option value="advisor">Advisor</option>
          <option value="consultant">Consultant</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <button className="contact_form_button">Make an appointment</button>
      {submitted && (
        <p className="contact_success_message">
          Thank you for contacting us, we will reach out to you soon!
        </p>
      )}
      {errors?.serverError && (
        <p className="subscription_error_message">
          {errors.serverError.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
