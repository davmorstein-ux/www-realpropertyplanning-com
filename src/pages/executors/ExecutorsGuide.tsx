import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";

const navy = "#1B3A6B";
const gold = "#C9A84C";
const crimson = "#8B0000";
const cream = "#FAF8F4";
const bodyGray = "#4a5568";
const lightBorder = "rgba(0,0,0,0.08)";
const raleway = "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif";
const georgia = "Georgia, 'Times New Roman', serif";

const eyebrow: React.CSSProperties = {
  fontFamily: raleway,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: gold,
  marginBottom: 10,
};

const sectionHeading: React.CSSProperties = {
  fontFamily: raleway,
  fontSize: 22,
  fontWeight: 800,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: navy,
  marginBottom: 14,
};

const bodyText: React.CSSProperties = {
  fontFamily: georgia,
  fontSize: 15,
  color: bodyGray,
  lineHeight: 1.8,
  margin: 0,
};

const firstSteps = [
  {
    number: "01",
    title: "Secure the Property Immediately",
    body: "Change the locks, forward the mail, and confirm insurance is active. An unoccupied home is a liability — vandalism, water damage, or lapse in coverage can create problems that complicate the sale later.",
  },
  {
    number: "02",
    title: "Obtain Letters Testamentary",
    body: "Before you can legally act on behalf of the estate, the probate court must issue Letters Testamentary (or Letters of Administration if there is no will). This document is what banks, title companies, and real estate agents require.",
  },
  {
    number: "03",
    title: "Commission a Date-of-Death Appraisal",
    body: "A certified appraisal establishes the property's fair market value as of the date of death. This figure is essential for the estate tax return, cost-basis calculations, and defending the sale price to beneficiaries or the IRS.",
  },
  {
    number: "04",
    title: "Decide: Sell, Transfer, or Hold",
    body: "Most estate properties are sold to close the estate and distribute cash to beneficiaries. But some families choose to transfer the home to a beneficiary or hold it temporarily. Each path has tax and timeline implications.",
  },
  {
    number: "05",
    title: "Prepare and List the Property",
    body: "Estate homes often need decluttering, cleaning, and minor repairs before going on market. Coordinate with a real estate broker experienced in estate sales — not every agent understands probate timelines, court approvals, or fiduciary constraints.",
  },
  {
    number: "06",
    title: "Close and Distribute Proceeds",
    body: "After debts, taxes, and costs of sale are satisfied, the remaining proceeds are distributed to beneficiaries according to the will or, if none exists, Washington State's intestacy laws.",
  },
];

const commonMistakes = [
  "Allowing utilities and insurance to lapse on the estate property",
  "Selling real estate without first obtaining Letters Testamentary",
  "Skipping the date-of-death appraisal and relying on Zillow estimates",
  "Making repairs or improvements that exceed what the estate can recover in sale price",
  "Distributing assets to beneficiaries before all debts and taxes are paid",
  "Failing to notify all heirs — even those not named in the will",
  "Mixing estate funds with personal accounts",
  "Accepting the first offer without understanding Washington's probate sale process",
];

const howWeHelp = [
  {
    icon: "📋",
    title: "Date-of-Death Appraisal",
    body: "A certified residential appraisal for estate and tax purposes, prepared by a Washington State Certified Residential Appraiser.",
  },
  {
    icon: "🏡",
    title: "Estate Property Sale",
    body: "Full-service real estate representation for probate and estate sales, from pricing strategy through closing — with experience navigating court timelines.",
  },
  {
    icon: "🤝",
    title: "Professional Coordination",
    body: "Connections to vetted probate attorneys, estate sale companies, property cleanout crews, and senior living specialists across Western Washington.",
  },
  {
    icon: "📞",
    title: "Out-of-State Support",
    body: "Many executors live outside Washington. We're accustomed to working remotely — handling the details on the ground while you manage from afar.",
  },
];

const ExecutorsGuide = () => (
  


    
    
    


    
      Executor's Guide

      


        

          

Washington State Personal Representatives


          


            Being named executor of an estate is an honor — and a responsibility that arrives at one of the hardest
            moments in a family's life. Washington State calls this role the Personal Representative. Whether
            the estate includes a family home, investment property, or a house full of decades of belongings, this guide
            covers what you need to know about the real estate portion of your duties.
          


        

      


      


        

          

            

              

Your Role


              

What an Executor Actually Does


              


                An executor is named in a will to administer a deceased person's estate. If there is no will — or if the
                named executor cannot serve — the court appoints an administrator. Either way, the role carries the same
                legal weight: a fiduciary duty to act in the best interests of the estate and its beneficiaries.
              


              


                For most estates, the largest and most complex asset is real property. A family home carries emotional
                weight, practical complications, and significant financial stakes. Getting it right — on timeline, on
                price, within legal bounds — is one of your most important jobs.
              


            


            

              

Washington State Note


              


                Washington uses the term Personal Representative rather than "executor." The role is
                governed by the Washington Probate Act (RCW Title 11). Washington is one of the few states that allows{" "}
                non-intervention powers, meaning most executors can act without court approval for each
                transaction — but this authority must be formally granted by the court.
              


            


          


        

      


      


        

          

            

Step by Step


            

Managing Estate Real Estate: Six Key Steps


          


          


            {firstSteps.map((step) => (
              


                


                  {step.number}
                


                


                  


                    {step.title}
                  


                  

{step.body}


                


              


            ))}
          


        

      


      


        

          

            

              

What to Avoid


              

Common Executor Mistakes


              


                Executors are held to a high standard — even when they're acting in good faith. These are the mistakes
                that most often create legal exposure, delay the estate, or damage family relationships.
              


            


            

              


                {commonMistakes.map((m) => (
                  


                    ✕
                    {m}
                  


                ))}
              


            


          


        

      


      


        

          

            

How We Can Help


            

Real Property Planning for Executors


            


              We work alongside executors throughout Western Washington — providing the appraisal work, real estate
              expertise, and professional connections you need to fulfill your responsibilities with confidence.
            


          


          


            {howWeHelp.map((item) => (
              


                

{item.icon}


                


                  {item.title}
                


                

{item.body}


              


            ))}
          


        

      


      


        

Get in Touch


        


          Ready to Talk Through the Property?
        


        


          No pressure. We're happy to walk through the situation, answer questions about timing and valuation, and help
          you understand your options — before you commit to anything.
        


        


          
            Contact Us
          
          
            ← Back to All Roles
          
        


      


      
    
    


);

export default ExecutorsGuide;