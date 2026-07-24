import AFHCityHub from "@/components/AFHCityHub";

const faqs = [
  {
    question: "What Adult Family Homes are for sale in Bonney Lake, WA?",
    answer:
      "Current Bonney Lake AFH listings are shown on this page. As one of Pierce County's fastest-growing communities on the plateau east of Tacoma, Bonney Lake has seen its AFH inventory grow alongside its broader residential expansion.",
  },
  {
    question: "Is Bonney Lake a good market for buying an Adult Family Home?",
    answer:
      "Bonney Lake's newer housing stock and rapid growth mean more single-level, larger homes that convert well to AFH use, combined with pricing that remains more accessible than King County while still serving the greater Tacoma area.",
  },
  {
    question: "How much does an Adult Family Home cost in Bonney Lake?",
    answer:
      "Pricing depends on whether a listing includes the property alone, an operating licensed business, or both, along with the home's capacity and condition. Current asking prices for available Bonney Lake listings are shown above.",
  },
  {
    question: "What should I look for in a newer Bonney Lake home being considered for AFH conversion?",
    answer:
      "Beyond DSHS licensing requirements, look at single-level living space, bathroom accessibility, bedroom configuration, and whether the layout supports required staff sightlines and emergency egress. Bonney Lake's newer construction often already meets many of these criteria more easily than older housing stock elsewhere.",
  },
  {
    question: "How far is Bonney Lake from Tacoma-area medical facilities?",
    answer:
      "Bonney Lake sits roughly 20-25 minutes from central Tacoma via Highway 410 and SR-167, close enough to maintain access to hospital and specialist referral networks while offering the plateau's more suburban, lower-density setting.",
  },
  {
    question: "How do I get notified about new AFH listings in Bonney Lake?",
    answer:
      "Reach out directly — David Stein tracks AFH inventory across Pierce County, including Bonney Lake and the surrounding plateau communities, and can notify you when a matching property comes to market.",
  },
];

const AFHForSaleBonneyLake = () => (
  <AFHCityHub
    city="Bonney Lake"
    county="Pierce"
    slug="bonney-lake-wa"
    metaDescription="Adult Family Homes for sale in Bonney Lake, WA — licensed businesses, properties, or both in Pierce County. Current listings and answers to common AFH buying questions."
    intro={
      <>
        <p>
          Bonney Lake has grown quickly on the plateau east of Tacoma, and its Adult Family Home inventory has grown
          alongside it. Newer construction here tends to favor the kind of single-level, larger-lot layouts that
          convert well to AFH use, while pricing remains meaningfully more accessible than King County.
        </p>
        <p>
          As with any AFH purchase, the real estate transaction and the DSHS licensing process run on separate but
          connected tracks — understanding both from the start makes for a smoother path from offer to open doors.
        </p>
      </>
    }
    faqs={faqs}
  />
);

export default AFHForSaleBonneyLake;
