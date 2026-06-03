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
    body: "Change the locks, forward the mail, and confirm insurance is active. An unoccupied home is a liability — vandalism, water damage, or a lapsed policy can create problems that complicate the sale later.",
  },
  {
    number: "02",
    title: "Obtain Letters Testamentary",
    body: "Before acting on behalf of the estate, the probate court must issue Letters Testamentary (or Letters of Administration if there is no will). Banks, title companies, and real estate agents all require this document.",
  },
  {
    number: "03",
    title: "Commission a Date-of-Death Appraisal",
    body: "A certified appraisal establishes the property's fair market value as of the date of death. This figure is essential for the estate tax return, cost-basis calculations, and defending the sale price to beneficiaries or the IRS.",
  },
  {
    number: "04",
    title: "Decide: Sell, Transfer, or Hold",
    body: "Most estate properties are sold to close the estate and distribute cash to beneficiaries. Some families choose to transfer the home to a beneficiary or hold it temporarily. Each path has tax and timeline implications.",
  },
  {
    number: "05",
    title: "Prepare and List the Property",
    body: "Estate homes often need decluttering, cleaning, and minor repairs before going on market. Work with a real estate broker experienced in estate sales — not every agent understands probate timelines, court approvals, or fiduciary constraints.",
  },
  {
    number: "06",
    title: "Close and Distribute Proceeds",
    body: "After debts, taxes, and costs of sale are satisfied, remaining proceeds are distributed to beneficiaries according to the will — or, if none exists, Washington State's intestacy laws.",
  },
];

const commonMistakes = [
  "Allowing utilities and insurance to lapse on the estate property",
  "Selling real estate without first obtaining Letters Testamentary",
  "Skipping the date-of-death appraisal and relying on Zillow estimates",
  "Making repairs that exceed what the estate can recover in sale price",
  "Distributing assets to beneficiaries before all debts and taxes are paid",
  "Failing to notify all heirs — even those not named in the will",
  "Mixing estate funds with personal accounts",
  "Accepting the first offer without understanding Washington's probate sale process",
];

const professionals = [
  {
    title: "Probate Attorney",
    body: "A probate attorney guides the legal process — filing with the court, obtaining Letters Testamentary, and ensuring distributions are made correctly. This is the most important professional to engage first.",
    link: "/professionals/probate-attorneys",
    label: "Find Probate Attorneys",
  },
  {
    title: "Certified Real Estate Appraiser",
    body: "A Washington State certified residential appraiser provides the date-of-death valuation required for tax purposes. This must be an independent, certified appraisal — not an online estimate.",
    link: "/resources/probate-estate-attorneys",
    label: "Find Appraisers",
  },
  {
    title: "Estate-Experienced Real Estate Broker",
    body: "Not every agent understands the constraints of a probate sale. Look for a broker with specific experience handling estate properties, court timelines, and fiduciary requirements.",
    link: "/professionals/probate-attorneys",
    label: "Find Real Estate Brokers",
  },
  {
    title: "Estate Sale Company",
    body: "Before the property can be sold, the contents often need to be cleared. An estate sale company handles pricing, marketing, and selling personal property — saving the executor significant time and effort.",
    link: "/resources/estate-sale-companies",
    label: "Find Estate Sale Companies",
  },
];

const ExecutorsGuide = () => (
  


    
    
    


    
      Executor's Guide

      


        


          


            Being named executor of an estate is an honor — and a responsibility that arrives at one of the hardest
            moments in a family's life. Washington State calls this role the Personal Representative. Whether
            the estate includes a family home, investment property, or a house full of decades of belongings, this guide
            covers what to know about the real estate portion of the role.
          


        


      


      


        


          


            


              

What an Executor Actually Does


              


                An executor is named in a will to administer a deceased person's estate. If there is no will — or if
                the named executor cannot serve — the court appoints an administrator. Either way, the role carries the
                same legal weight: a fiduciary duty to act in the best interests of the estate and its beneficiaries.
              


              


                For most estates, the largest and most complex asset is real property. A family home carries emotional
                weight, practical complications, and significant financial stakes. Getting it right — on timeline, on
                price, within legal bounds — is one of the executor's most important responsibilities.
              


            


            


              


                Washington State Note
              


              


                Washington uses the term Personal Representative rather than "executor." The role is
                governed by the Washington Probate Act (RCW Title 11). Washington allows non-intervention
                powers, meaning most executors can act without court approval for each transaction — but this
                authority must be formally granted by the court.
              


            


          


        


      


      


        


          


            

Managing Estate Real Estate: Six Key Steps


          


          


            {firstSteps.map((step) => (
              


                


                  {step.number}
                


                


                  


                    {step.title}
                  


                  

{step.body}


                


              


            ))}
          


        


      


      


        


          


            


              

Common Executor Mistakes


              


                Executors are held to a high standard — even when acting in good faith. These are the mistakes that most
                often create legal exposure, delay the estate, or damage family relationships.
              


            


            


              


                {commonMistakes.map((m) => (
                  


                    ✕
                    {m}
                  


                ))}
              


            


          


        


      


      


        


          


            

Professionals an Executor Will Need


            


              Executors are not expected to handle everything alone. These are the key professionals involved in most
              Washington State estate real estate situations.
            


          


          


            {professionals.map((item) => (
              


                


                  {item.title}
                


                

{item.body}


                

                  {item.label} →
                
              


            ))}
          


        


      


      


        


          Find the Right Professionals
        


        


          The Real Property Planning network connects executors with experienced probate attorneys, appraisers, estate
          sale companies, and real estate brokers across Washington State.
        


        


          
            Browse Professionals
          
          
            ← Back to All Roles
          
        


      


      
    
    


);

export default ExecutorsGuide;