import { useState } from 'react';
import gsap from 'gsap';

export default function BestSellers() {
  const [index, setIndex] = useState(0);
  const products = ["Product A", "Product B", "Product C"];

  const handleNext = () => {
    setIndex((index + 1) % products.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + products.length) % products.length);
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Best Selling Products</h2>
      <div className="flex items-center justify-between">
        <button onClick={handlePrev} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">Prev</button>
        <div className="text-xl font-bold">{products[index]}</div>
        <button onClick={handleNext} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">Next</button>
      </div>
    </section>
  );
}
