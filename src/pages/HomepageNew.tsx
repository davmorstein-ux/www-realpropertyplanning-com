import { Link } from "react-router-dom";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const tiles = [
  { imgSrc: tilePlanning, imgAlt: "Older couple reviewing an estate plan together at home", title: "I Want to Plan Ahead", href: "/planning-before-a-crisis", bgColor: "#8b2e2e" },
  { imgSrc: tileHelping, imgAlt: "Adult daughter hugging her senior mother on a couch", title: "I'm Helping an Aging Parent", href: "/helping-aging-parents", bgColor: "#c47c2b" },
  { imgSrc: tileEstate, imgAlt: "Family reviewing an estate property plan with documents", title: "I'm Handling an Estate", href: "/estate-probate-inherited-property", bgColor: "#5c6e9e" },
  { imgSrc: tileProfessionals, imgAlt: "Man at a laptop browsing trusted professional resources", title: "I Need a Professional", href: "/building-your-trusted-professional-team", bgColor: "#7a4f8a" },
];

const HomepageNew = () => (
  <>
    
    


    

      {/* Hero Image */}
      


        
      



      {/* Orientation */}
      


        


          


            


              Welcome to Real Property Planning
            


            


              A Free-To-Use Hub · Built For Families · Trusted By Professionals
            


            


              Connecting families, seniors, and professionals with the right people and resources.
            


          


        


      


      {/* Funnel Tiles */}
      


        


          


            

What brings you here today?


          


          


            {tiles.map(({ imgSrc, imgAlt, title, href, bgColor }) => (
              
                


                  
                  


                    {title}
                    
                  


                


              
            ))}
          


          
            


              
              


                

AFH Club


                

The ultimate resource network for buying, selling, managing and learning about Adult Family Homes.


              


            


            
              Explore AFH Club
              
            
          
        


      


    
    


  
);

export default HomepageNew;