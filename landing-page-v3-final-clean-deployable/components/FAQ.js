import { useState, useRef } from 'react';
import gsap from 'gsap';

const faqData = [
  { question: "What is the return policy?", answer: "You can return products within 30 days." },
  { question: "Do you ship internationally?", answer: "Yes, we ship worldwide." },
];

export default function FAQ() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      {faqData.map((faq, i) => (
        <FAQItem key={i} faq={faq} />
      ))}
    </section>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef(null);

  const toggle = () => {
    setOpen(!open);
    gsap.to(answerRef.current, {
      height: open ? 0 : 'auto',
      duration: 0.4,
      ease: 'power1.inOut'
    });
  };

  return (
    <div className="mb-4 border-b">
      <button onClick={toggle} className="w-full text-left text-lg font-medium py-2">
        {faq.question}
      </button>
      <div ref={answerRef} className="overflow-hidden h-0">
        <p className="py-2 text-gray-700">{faq.answer}</p>
      </div>
    </div>
  );
}
