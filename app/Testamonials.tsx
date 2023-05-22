"use client";

import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  function showTestimonial(index: number) {
    setActiveIndex(index);
  }

  function nextTestimonial() {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }

  function previousTestimonial() {
    const previousIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(previousIndex);
  }

  const testimonials = [
    {
      name: "John Doe",
      content:
        "I had a great experience with your company. The service was excellent, and the staff was friendly and knowledgeable. I highly recommend your services.",
    },
    {
      name: "Jane Smith",
      content:
        "I'm extremely satisfied with the product I purchased from your website. It exceeded my expectations, and the delivery was prompt. Thank you!",
    },
    {
      name: "Mike Johnson",
      content:
        "Your customer support team went above and beyond to assist me with my issue. They were patient and provided a quick solution. Thank you for the outstanding service!",
    },
  ];

  return (
    <div className="flex h-64 w-full items-center justify-center text-center">
      <button
        className="bg-transparent text-4xl text-primary hover:text-white"
        onClick={previousTestimonial}
      >
        <AiOutlineArrowLeft />
      </button>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial ${
            index === activeIndex ? "active" : ""
          } card flex h-48 flex-col justify-evenly p-5 `}
        >
          <p>{testimonial.content}</p>
          <p> - {testimonial.name}</p>
        </div>
      ))}

      <button
        className="bg-transparent text-4xl text-primary hover:text-white"
        onClick={nextTestimonial}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}
