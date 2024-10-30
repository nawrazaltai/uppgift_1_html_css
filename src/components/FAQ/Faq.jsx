import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import Accordion from "./Accordion";
import FAQContact from "./FAQContact";

const Faq = () => {
  const { data, error, loading } = useFetch(
    "https://win24-assignment.azurewebsites.net/api/faq"
  );

  const [faqList, setFaqList] = useState(null);
  useEffect(() => {
    const result = data?.map((i) => Object.assign(i, { isOpen: false }));
    setFaqList(result);
  }, [data]);

  const onToggle = (id) => {
    const result = faqList.map((f) => {
      if (f.id == id) {
        return { ...f, isOpen: !f.isOpen };
      }
      return f;
    });
    setFaqList(result);
  };

  return (
    <>
      <section className="faq_container">
        <h2 className="faq_title">Any questions? Check out the FAQs</h2>
        <p className="faq_description">
          Still have unanswered questions and need to get in touch?
        </p>
        <Accordion />
        <FAQContact />
      </section>
    </>
  );
};

export default Faq;
