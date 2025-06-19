import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { color: '#ccc' },
      {
        color: '#000',
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Luxury</h1>
      <p className="text-lg md:text-xl space-x-1" ref={textRef}>
        {"Experience the premium touch in every scroll".split(" ").map((word, i) => (
          <span key={i} className="inline-block">{word} </span>
        ))}
      </p>
    </section>
  );
}
