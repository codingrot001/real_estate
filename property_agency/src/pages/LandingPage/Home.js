import React from "react";
import Hero from "../../components/Hero/Hero";
import PropertyList from "../../components/PropertyList/PropertyList";
import About from "../../components/About";
import Testimonials from "../../components/Testimonials";
import NewsletterSignup from "../../components/NewsletterSignup";
import Resources from "../../components/Resources";
import CTA from "../../components/CTA";
import FAQ from "../../components/FAQ";
import LocalAreaHighlights from "../../components/LocalAreaHighlights";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import ContactInformation from "../../components/ContactInformation";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import WhatsappButton from "../../layouts/WhatsappButton";

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <About />
      <PropertyList />
      <Testimonials />
      <NewsletterSignup />
      <Resources />
      <CTA />
      <FAQ />
      <LocalAreaHighlights />
      <SocialMediaLinks />
      <ContactInformation />
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default Home;
