import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const {
    data: testimonials,
    error,
    loading,
  } = useFetch("https://win24-assignment.azurewebsites.net/api/testimonials");

  console.log(testimonials);

  return (
    <section className="clients_container">
      <div className="clients_left_content">
        <h3 className="clients_title">
          Clients are <br /> Loving Our App
        </h3>
      </div>

      <div className="clients_right_content">
        {testimonials?.map((t) => {
          return <TestimonialCard key={t.id} testimonial={t} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;