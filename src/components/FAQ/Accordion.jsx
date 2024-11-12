import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";

const Accordion = ({ data }) => {
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
    <div className="accordion_container">
      {faqList?.map((f) => {
        return (
          <div key={f.id} className="faq_card">
            <div className="faq_card_header">
              <h4 className="faq_card_title">{f?.title}</h4>
              <button
                className={
                  f?.isOpen ? "faq_card_button_open" : "faq_card_button_closed"
                }
                onClick={() => onToggle(f?.id)}
              >
                ⌵
              </button>
            </div>

            <div
              className={
                f?.isOpen ? "faq_content_visible" : "faq_content_hidden"
              }
              id={f?.id}
            >
              <p>{f?.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
