import { useForm } from "react-hook-form";
import { json } from "react-router-dom";
import { useState } from "react";

const Subscription = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubscribe = async (data) => {
    const response = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
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

    // const result = await response.json();
    if (!response.ok) {
      setError("email", {
        type: "custom",
        message: "Error while posting email, try again later.",
      });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section className="subscribe_container">
      <div className="subscribe_upper_content">
        <img
          src="assets/notification-icon-1.svg.png"
          alt="Notifications logo"
        />
        <h3 className="subscribe_title">Subscribe to our newsletter</h3>
        <h3 className="subscribe_title_large">
          Subscribe to our newsletter to <br /> stay informed about latest
          updates
        </h3>
      </div>

      <div className="subscribe_lower_content">
        {submitted ? (
          <div className="subscription_success_container">
            <p className="subscription_success_text">
              Thank you for subscribing to our newsletter!
            </p>
            <button
              onClick={() => setSubmitted(!submitted)}
              className="subscription_success_button"
            >
              OK
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubscribe)} noValidate action="submit">
            <div style={{ display: "flex", width: "100%" }}>
              <input
                {...register("email", {
                  required: "Email is required to subscribe",
                  pattern: {
                    value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid Email",
                  },
                })}
                className="subscription_input"
                placeholder=" &#9993; Your Email"
              />
              <button className="subscribe_button" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        )}
        <span className="subscription_error_message">
          {errors?.email?.message}
        </span>
      </div>
    </section>
  );
};

export default Subscription;
