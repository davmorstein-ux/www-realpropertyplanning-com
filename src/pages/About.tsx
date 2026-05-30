import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import RelatedServices from "@/components/RelatedServices";
import StatewideSupport from "@/components/StatewideSupport";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GoldCheck3D from "@/components/GoldCheck3D";
import { useReducedMotion } from "@/hooks/use-reduced-motion";


import daveHeadshot from "@/assets/david-stein-real-estate-agent-seattle.webp";
import aboutHeroImage from "@/assets/about_hero_downtown_clean_v2.webp";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";
import ParallaxHero from "@/components/ParallaxHero";


const About = () => {
  const reducedMotion = useReducedMotion();


  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Real Property Planning | Senior Transitions & Estate Hub"
        description="Real Property Planning is Washington State's resource hub for senior transitions, probate, and estate real estate — coordinating brokers, appraisers, and trusted professionals across the Puget Sound region."
        schemaJson={realEstateAgentSchema}
      />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden w-full" style={{ backgroundColor: "#f5f0e8" }}>
          <ParallaxHero src={aboutHeroImage} alt="Real Property Planning — Senior Transitions" />
          <h1 className="sr-only">About Real Property Planning</h1>
        </section>

        {/* Headshot — moved here, above Vision & Mission */}
        <section className="pt-12 pb-4 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <div className="w-[160px] h-[200px] rounded-2xl overflow-hidden border-2 border-gold/20 shadow-md">
                <img
                  src={daveHeadshot}
                  alt="David Stein licensed real estate broker and certified appraiser Kirkland Washington"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 font-serif text-4xl text-foreground font-bold leading-tight text-center">
                David Stein
              </p>
              <p className="text-muted-foreground text-sm mt-1 text-center">President, Real Property Planning</p>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* About Real Property Planning */}
        <section className="pt-8 pb-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
                About Real Property Planning
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>
                  An independent educational hub for seniors, families, and the professionals who serve them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Site Exists */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why This Site Exists</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Some of life's most consequential decisions happen during its hardest moments — when a parent passes away, when a family home needs to be sold, when a loved one can no longer live independently. These transitions involve real estate, legal paperwork, financial decisions, and family dynamics all at once. Most people have never faced any of it before.
                </p>
                <p>
                  Real Property Planning was built to help.
                </p>
                <p>
                  This site is an independent educational hub focused on probate, estate real estate, inherited property, senior housing transitions, and the many topics that intersect with them. It exists to give seniors, families, executors, and trustees plain-language guidance — and to help them understand what kinds of professionals can help, and when.
                </p>
                <p>
                  Real Property Planning does not provide services. It does not represent any professional or company featured on this site. It exists for one purpose: to make an overwhelming process feel a little more manageable for the people going through it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Who It's For</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>This resource was built for:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Seniors thinking ahead about housing, estate planning, and what comes next</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Adult children and family members helping aging parents navigate major transitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Executors and trustees managing real property as part of an estate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Professionals — attorneys, CPAs, financial planners, and care managers — looking for reliable educational resources to share with the families they serve</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Find Here */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">What You'll Find Here</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Plain-language education on probate, estate transitions, and senior housing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Guidance on what types of professionals can help and when to involve them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>A directory of independent professionals in relevant fields</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GoldCheck3D size={18} className="mt-1 shrink-0" />
                    <span>Resources to help you ask better questions and make more informed decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About the Founder */}
        <section className="py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">About the Founder</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Real Property Planning was founded by David Stein, a Washington State Licensed Real Estate Broker and Washington State Certified Residential Appraiser with over 20 years of experience in both disciplines.
                </p>
                <p>
                  David spent years working alongside families through probate sales, estate appraisals, and senior housing transitions — and kept seeing the same pattern. People weren't short on options. They were short on clarity. Executors didn't know which step came first. Adult children didn't know who to trust. Families were navigating attorneys, appraisers, real estate agents, and care professionals all separately, with no one connecting the dots.
                </p>
                <p>
                  Real Property Planning is his answer to that problem — a resource designed to fill the gap he kept encountering, and to give anyone touched by estate property, probate, or senior transitions a place to find honest guidance without feeling overwhelmed.
                </p>
                <p>
                  David's background spans construction and contracting, residential appraisal, real estate brokerage, and e-commerce — a combination that shaped both his analytical approach to property and his instinct for building systems that connect people with what they need.
                </p>
                <p>
                  He founded this site because he believes the families going through these transitions deserve better than confusion. That belief is what drives every page on it.
                </p>
                <p>
                  David Stein's real estate brokerage and appraisal services are offered separately through his own practice — not through Real Property Planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A Note on Independence */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">A Note on Independence</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  The professionals and companies referenced on this site are entirely independent. They are not employees, partners, members, or affiliates of Real Property Planning. Their inclusion on this site is not an endorsement or guarantee of their services. Always verify the credentials and suitability of any professional before engaging them.
                </p>
                <p>
                  Nothing on this site constitutes legal, financial, real estate, or any other professional advice. Always consult a qualified, licensed professional for guidance specific to your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/about" />

        <StatewideSupport background="bg-secondary" />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
