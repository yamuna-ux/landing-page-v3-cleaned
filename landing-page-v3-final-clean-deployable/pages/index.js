import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Home() {
  useEffect(() => {
    gsap.from(".page", { opacity: 0, duration: 1.5, ease: "power2.out" });
  }, []);

  return (
    <div className="page">
      <Head>
        <title>Landing Page</title>
      </Head>
      <Header />
      <Hero />
      <BestSellers />
      <FAQ />
      <Footer />
    </div>
  );
}
