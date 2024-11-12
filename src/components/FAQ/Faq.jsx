import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import Accordion from "./Accordion";
import FAQContact from "./FAQContact";

const Faq = () => {
  const { data, error, loading } = useFetch(
    "https://win24-assignment.azurewebsites.net/api/faq"
  );

  return (
    <>
      <section className="faq_container">
        <h2 className="faq_title">Any questions? Check out the FAQs</h2>
        <p className="faq_description">
          Still have unanswered questions and need to get in touch?
        </p>
        <Accordion data={data} />
        <FAQContact />
      </section>

      <section className="faq_container_large">
        <div className="faq_left_container">
          <h2 className="faq_title">
            Any questions? <br /> Check out the FAQs
          </h2>
          <p className="faq_description">
            Still have unanswered questions and need to get in touch?
          </p>
          <FAQContact />
        </div>

        <div className="faq_right_container">
          <Accordion data={data} />
        </div>
      </section>
    </>
  );
};

export default Faq;
