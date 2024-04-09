import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsHeadset } from "react-icons/bs";
import { FaLaptopCode, FaRegClock, FaRegTrashAlt } from "react-icons/fa";

const IconBoxData = [
  {
    classOption: "bg-primary",
    icon: "fal fa-layer-group fa-2x text-white",
    title: "Good Performance",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state .",
  },
  {
    id: 2,
    classOption: "bg-danger",
    icon: "fal fa-shield-check fa-2x text-white",
    title: "Highly Secure",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state.",
  },
  {
    id: 3,
    classOption: "bg-dark",
    icon: "fal fa-code fa-2x text-white",
    title: "Fast Development",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state.",
  },
];
const FaqOneData = [
  {
    faqTitle: "How does back pricing work?",
    faqDesc:
      "Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.",
  },
  {
    id: 2,
    faqTitle: "How do I calculate how much price?",
    faqDesc:
      "Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.",
  },
  {
    id: 3,
    faqTitle: "Can you show me an example?",
    faqDesc:
      "Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.",
  },
];

const TestimonialData = [
  {
    authorImg: "/testimonial/woman.jpeg",
    authorName: "Mr.Rupan Oberoi",
    authorTitle: "Founder and CEO at Amaara Herbs",
    quoteTitle: "The Best Template You Got to Have it!",
    authorQuote:
      "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical",
  },
  {
    id: 2,
    authorImg: "/testimonial/woman.jpeg",
    authorName: "Joan Dho",
    authorTitle: "Founder and CTO",
    quoteTitle: "Best Template for SAAS Company!",
    authorQuote:
      "Dynamically create innovative core competencies with effective best practices promote innovative infrastructures.",
  },
  {
    id: 3,
    authorImg: "/testimonial/woman.jpeg",
    authorName: "Ranu Mondal",
    authorTitle: "Lead Developer",
    quoteTitle: "It is undeniably good!",
    authorQuote:
      "Rapidiously supply client-centric e-markets and maintainable processes progressively engineer",
  },
  {
    id: 4,
    authorImg: "/testimonial/woman.jpeg",
    authorName: "Mr.Rupan Oberoi",
    authorTitle: "Founder and CEO at Amaara Herbs",
    quoteTitle: "The Best Template You iop to Have it!",
    authorQuote:
      "schemas vis-a-vis distinctive e-commerce cross-media than ethical",
  },
];

const TestimonialOneData = [
  {
    id: "#testimonial-tab-1",
    activeClass: "active",
    title: "The Best Daily Care You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-1.jpg",
    authorAvatar: "/testimonial/1.jpg",
  },
  {
    id: "#testimonial-tab-2",
    title: "Embarrassed by the First Version.",
    desc: "Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leveraother backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
    authorName: "Rupan Oberoi",
    authorDesn: "Web Designer",
    authorThumb: "/testimonial/t-2.jpg",
    authorAvatar: "/testimonial/2.jpg",
  },
  {
    id: "#testimonial-tab-3",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-3.jpg",
    authorAvatar: "/testimonial/3.jpg",
  },
  {
    id: "#testimonial-tab-4",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-4.jpg",
    authorAvatar: "/testimonial/4.jpg",
  },
  {
    id: "#testimonial-tab-5",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-5.jpg",
    authorAvatar: "/testimonial/5.jpg",
  },
];

const registerTestimonial = [
  {
    active: "active show",
    target: "testimonial-tab-1",
    header: "Change Lives and Make a Difference. Join Our Care Team!",
    info: "We're searching for compassionate and dedicated individuals to join our growing team of caregivers Here, you'll play a vital role in helping people maintain their independence and well-being in the comfort of their own homes.",
  
  },
  {
    target: "testimonial-tab-2",
    header: "Amazing Quiety template!",
    info: "Distinctively engineer client-centered information. Progressively customize client-centered repurpose viral e-services whereas before 24/7 total linkage.",
    name: "Oberoi R.",
    title: "CEO at Herbs",
  },
  {
    target: "testimonial-tab-3",
    header: "Embarrassed by the First Version!",
    info: " Efficiently whiteboard cross-unit meta-services. Quickly transition standardized schemas via leveraged users. Assertively actualize mission-critical supply chains through.",
    name: "Joan Dho",
    title: "Founder and CTO",
  },
];
const registerTestimonialTarget = [
  {
    active: "active",
    target: "#testimonial-tab-1",
    image: "/909.png",
  },
  {
    target: "#testimonial-tab-2",
    image: "/903.png",
  },
  {
    target: "#testimonial-tab-3",
    image: "/face4.png",
  },
];

///footer data
const footerPrimaryPages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Career",
    href: "/career",
  }
];

const footerPages = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
  {
    title: "Blog Details",
    href: "/blog-single",
  },
  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Career Single",
    href: "/career-single",
  },
  {
    title: "Services Single",
    href: "/single-service",
  },
];



const serviceOne = [
  {
    title: "Autism Spectrum Disorder",
   
  },
  {
    title: "Behavioral Problems",
   
  },
  {
    title: "Blindness/Severe Visual Impairment",

  },
  {
    title: "Cerebral Palsy",
    
  },
  {
    title: "Chemical Dependency",
   
  },
  {
    title: "Cystic Fibrosis",
   
  },
  {
    title: "Deafness/Severe Hearing Impairment",
    
  },
];

const serviceTwo = [
  {
    title: "Epilepsy/Seizure Disorder",
  },
  {
    title: "Head Injury",
  },
  {
    title: "Mental Disorder",
  },
  {
    title: "Intellectual Disability",
  },
  {
    title: "Multiple Sclerosis",
  },
  {
    title: "Muscular Dystrophy",
  },
  {
    title: "Orthopedic Impairment",
  }
];
const serviceThree = [
  
   
    
    {
      title: "Specific Learning Disability",
    },
    {
      title: "Speech/Language Impairment",
    },
    {
      title: "Spina Bifida",
    },
    {
      title: "Spinal Cord Injury",
    },
    {
      title: "Other Neurological Impairment",
    },
    {
      title: "And More",
    }

  
];


const footerTemplate = [
  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Support",
    href: "/help-center",
  },
  {
    title: "Career",
    href: "/career",
  }
];

//navbar data
const navHomeOne = [
  {
    title: "Sass Company 1",
    info: "It's for SaaS Software Company",
    href: "/",
  },
  {
    title: "Sass Company 2",
    info: " Modern Sass agency",
    href: "sass-company-two",
  },
  {
    title: "Desktop App",
    info: "Web Software Company",
    href: "desktop-app",
  },

  {
    title: "App Landing",
    info: " App and Software Landing",
    href: "app-landing",
  },
  {
    title: "Software Application",
    info: "IT solutions and SaaS Application",
    href: "software-application",
  },
  {
    title: "Startup Agency",
    info: "Different type of Agency",
    href: "startup-agency",
  },
  {
    title: "Data Analysis",
    info: " Software & Data Analysis",
    href: "data-analysis",
  },
  {
    title: "App Landing Two",
    info: "Software & Data Analysis",
    href: "app-landing-two",
  },
  {
    title: "IT Solution",
    info: "IT Solution and Sass Application",
    href: "it-solution",
  },
];

const navHomeTwo = [
  {
    title: "Cyber Security",
    info: "Cyber Security Landing Page",
    href: "cyber-security",
  },
  {
    title: "Crypto Currency",
    info: "Crypto Currency Landing Page",
    href: "crypto-currency",
  },
  {
    title: "Game Solution",
    info: "Crypto Server Landing Page",
    href: "game-solution",
  },
  {
    title: "Payment Gatway",
    info: "Payment Landing Page",
    href: "payment-gateway",
  },
  {
    title: "Digital Marketing",
    info: "Digital Landing Page",
    href: "digital-marketing",
  },
  {
    title: "Conference",
    info: "Conference Landing Page",
    href: "conference",
  },

  {
    title: "Quiety Insurance",
    info: "Quiety Landing Page",
    href: "quiety-insurance",
  },

  {
    title: "Sass Marketing",
    info: "Sass Marketing Landing Page",
    href: "sass-marketing",
  },
];

//Offcanvas Menu
const offcanvasMenuData = [
  {
    title: "Sass Company 1",
    info: "It's for SaaS Software Company",
    href: "/",
  },
  {
    title: "Sass Company 2",
    info: " Modern Sass agency",
    href: "sass-company-two",
  },
  {
    title: "Desktop App",
    info: "Web Software Company",
    href: "desktop-app",
  },

  {
    title: "App Landing",
    info: " App and Software Landing",
    href: "app-landing",
  },
  {
    title: "Software Application",
    info: "IT solutions and SaaS Application",
    href: "software-application",
  },
  {
    title: "Startup Agency",
    info: "Different type of Agency",
    href: "startup-agency",
  },
  {
    title: "Data Analysis",
    info: " Software & Data Analysis",
    href: "data-analysis",
  },
  {
    title: "App Landing Two",
    info: "Software & Data Analysis",
    href: "app-landing-two",
  },
  {
    title: "IT Solution",
    info: "IT Solution and Sass Application",
    href: "it-solution",
  },
  {
    title: "Cyber Security",
    info: "Cyber Security Landing Page",
    href: "cyber-security",
  },
  {
    title: "Crypto Currency",
    info: "Crypto Currency Landing Page",
    href: "crypto-currency",
  },
  {
    title: "Game Solution",
    info: "Crypto Server Landing Page",
    href: "game-solution",
  },
  {
    title: "Payment Gatway",
    info: "Payment Landing Page",
    href: "payment-gateway",
  },
  {
    title: "Digital Marketing",
    info: "Digital Landing Page",
    href: "digital-marketing",
  },
  {
    title: "Conference",
    info: "Conference Landing Page",
    href: "conference",
  },
  {
    title: "Quiety Insurance",
    info: "Quiety Landing Page",
    href: "quiety-insurance",
  },
  {
    title: "Sass Marketing",
    info: "Sass Marketing Landing Page",
    href: "sass-marketing",
  },
];

const navCompanyLinks = [
  {
    title: "Employee login",
    icon: <BiLogIn />,
    href: "login",
  },
  {
    title: "missedClocks",
    icon: <BiServer />,
    href: "missedClocks",
  },
 
  
 
];

const navCompanyPage = [
  

];

//
const testimonialAuthor = [
  {
    name: "Josephine Ric",
    title: "Care Giver",
    image: "/testimonial/face1.png",
    target: "#testimonial-tab-1",
  },
  {
    name: "Rupan Oberoi",
    title: "Senior citizen",
    image: "/testimonial/face4.png",
    target: "#testimonial-tab-2",
  },
  {
    name: "Jones Mary",
    title: "A Mother",
    image: "/testimonial/face3.png",
    target: "#testimonial-tab-3",
  },
  {
    name: "Hanry Luice",
    title: "Care Giver",
    image: "/testimonial/face2.png",
    target: "#testimonial-tab-4",
  },
  {
    name: "Amiee Nijai",
    title: "Senior citizen",
    image: "/testimonial/face5.png",
    target: "#testimonial-tab-5",
  },
];

const testimonialOne = [
  {
    name: "Josephine Ric",
    title: "Care giver",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/Womann-adjusted.png",
    target: "testimonial-tab-1",
    active: "active show",
  },
  {
    name: "Rupan Oberoi",
    title: "senior citizen",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/mane.png",
    target: "testimonial-tab-2",
  },
  {
    name: "Jones Mary",
    title: "A Mother ",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/lli.png",
    target: "testimonial-tab-3",
  },
  {
    name: "Hanry Luice",
    title: "Care giver",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/mano.png",
    target: "testimonial-tab-4",
  },
  {
    name: "Amiee Nijai",
    title: "Senior Citizen",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/naame.png",
    target: "testimonial-tab-5",
  },
];

//pricing data
const pricingData = [
  {
    title: "Stater",
    price: "$25",
    time: "/month",
    bgColor: "bg-white",
    textColor: "text-primary",
    btnColor: "btn-outline-primary",
    shape: "left--40 bottom--40",
    listItem: [
      {
        li: "1 Team",
      },
      {
        li: "1 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },

  {
    title: "Advanced",
    price: "$45",
    time: "/month",
    bgColor: "bg-gradient",
    textColor: "text-warning",
    btnColor: "btn-primary",

    listItem: [
      {
        li: "5 Team",
      },
      {
        li: "3 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "24 Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },

  {
    title: "Premium",
    price: "$75",
    time: "/month",
    bgColor: "bg-white",
    textColor: "text-primary",
    btnColor: "btn-outline-primary",
    shape: "right--40 top--40",
    listItem: [
      {
        li: "6 Team",
      },
      {
        li: "8 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "40 Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },
];

//integration data
const integrationOneRight = [
  {
    image: "/face5.png",
    className: "integration-7",
  },
  {
    image: "/face2.png",
    className: "integration-8",
  },
  {
    image: "/face3.png",
    className: "integration-9",
  },
  {
    image: "/face1.png",
    className: "integration-10",
  },
  {
    image: "/face4.png",
    className: "integration-11",
  },
  {
    image: "/mansde.png",
    className: "integration-12",
  },
];

const integrationFeature = [
  {
    logo: "/integations/1.png",
    type: "Popular",
    class: "bg-primary-soft text-primary",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/2.png",
    type: "Free",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/3.png",
    type: "Advanced",
    class: "bg-success-soft text-success",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/4.png",
    type: "Premium",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/5.png",
    type: "Popular",
    class: "bg-primary-soft text-primary",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/6.png",
    type: "Basic",
    class: "bg-danger-soft text-danger",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/7.png",
    type: "Free",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/8.png",
    type: "Advanced",
    class: "bg-success-soft text-success",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/9.png",
    type: "Premium",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
];

const integrationOneLeft = [
  {
    image: "/dale.png",
    className: "integration-1",
  },
  {
    image: "/909.png",
    className: "integration-2",
  },
  {
    image: "/new.png",
    className: "integration-3",
  },
  {
    image: "/903.png",
    className: "integration-4",
  },
  {
    image: "/203.png",
    className: "integration-5",
  },
  {
    image: "/me.png",
    className: "integration-6",
  },
];

//ourTeam data
const ourTeam = [
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-1.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-2.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-3.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-4.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-5.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-6.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-7.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-8.jpg",
  },
];

//blog data
const blogFeatureData = [

  {
    id:"1",
    image: "/Residential.jpeg",
    type: "Residential services",
  
   
    info1: "Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.",
    profilePic: "/12.jpg",
    author: "Raymond H. Martin",
    data: "June 10, 2021",
    class: "bg-primary-soft",
  },
  {
    id:"2",
    image: "/personal.jpeg",
    type: "Personal support",
    
    info1: "We strive to promote health by providing support to the individuals under our care. Our caregivers are dedicated to meeting the personal needs of our clients for them to be more comfortable and safe as they do their daily living activities. We also guide the families of our clients for them to understand more about developmental disability care.",
    profilePic: "/13.jpg",
    author: "Jane Martin",
    data: "April 24, 2021",
    class: "bg-warning-soft",
  },
  {
    id:"3",
    image: "/brade.png",
    type: "Community Development Services",

    info1: `Our Community Development Services program (CDS) provides individualized service supports for program participants to be involved in integrated community settings. We provide CDS in a variety of settings in the community to support the individual’s growth and development of skills and social supports necessary to gain, retain, or advance competitive integrated employment opportunities.

    `,

    info2:`This program, designed to train and enhance competencies needed to help the individuals we support to become independent and successful, allows individuals with intellectual and developmental disabilities to familiarize themselves with and accomplish basic community-based tasks. We develop an Individual Plan that focuses on the participant’s strengths, needs, goals, and desires, helping individuals become comfortably active in their community.`,
    profilePic: "/testimonial/1.jpg",
    author: "Veronica P. Byrd",
    data: "April 24, 2021",
    class: "bg-primary-soft",
  },
  {
    id:"4",
    image: "/dtyu.png",
    type: "Respite Care",
    
    info1: "coming soon...",
    author: "Martin Gilbert",
    data: "May 20, 2021",
    class: "bg-danger-soft",
  },
  {
    id:"5",
    image: "/family.jpeg",
    type: "Family Support Waiver",
    
    info1: "coming soon...",
    profilePic: "/testimonial/3.jpg",
    author: "Martin Gilbert",
    data: "May 20, 2021",
    class: "bg-danger-soft",
  },
  {
    id:"6",
    image: "/Transport.jpeg",
    type: "Transportation services",
   
    info1: "It is our mission to break down barriers to inclusion for people with disabilities. We work hard to help those we serve to get the transportation accessibility that they need. Through our transportation services, we help our clients to have comfortable rides and transportation resources to reach employment, appointments, shopping, and other destinations. With us, you can ensure that we give the best services that will surely fit your needs.",
    profilePic: "/testimonial/3.jpg",
    author: "Martin Gilbert",
    data: "May 20, 2021",
    class: "bg-danger-soft",
  },
  {
    id:"7",
    image: "/enivironments.jpeg",
    type: "Environmental Assessment",
  
    info: "coming soon",
    author: "Martin Gilbert",
    data: "May 20, 2021",
    class: "bg-danger-soft",
  },
  {
    id:"8",
    image: "/nurse case.jpeg",
    type: "Nurse Case Management Delegation",
    
    info: "We specialized programs that serve our clients and their families. Our nurses manage and assist the individual and the family. We develop a comprehensive plan of care personalized to meet all physical, functional, psychosocial, environmental, and safety needs of the client. Our goal is to preserve the client’s health, ensure a safe environment for them, and improve the quality of life through ongoing monitoring, assessment, and advocacy.",
    profilePic: "/testimonial/3.jpg",
    author: "Martin Gilbert",
    data: "May 20, 2021",
    class: "bg-danger-soft",
  },
 

];

//career data
const careerJobCard = [
  {
    type: "Remote - Full Time",
    position: "Developer",
    title: "Jr Frontend Developer",
    className: "bg-primary-soft text-primary",
    listItem: [
      {
        media: "Google",
        location: "London, UK",
        salary: "$35-$45k",
      },
    ],
  },
  {
    type: "Remote - Full Time",
    position: "Designer",
    title: "UI/UX and Product Designer",
    className: "bg-danger-soft text-danger",
    listItem: [
      {
        media: "Figma",
        location: "San Francissco",
        salary: "$25-$35k",
      },
    ],
  },
  {
    type: "Full Time",
    position: "Manager",
    title: "Senior Office Manager",
    className: "bg-success-soft text-success",
    listItem: [
      {
        media: "Dribble",
        location: "California",
        salary: "$55-$65k",
      },
    ],
  },
  {
    type: "Remote",
    position: "Developer",
    title: "Senior Backend Developer",

    listItem: [
      {
        media: "Slack",
        location: "United State US",
        salary: "$55-$62k",
      },
    ],
  },
];

//help center data
const helpCenterFaqDetails = [
  {
    title: "INSTRUCTIONS TO APPLICATION",
    target: "support-tab-1",
    class: "show active",
    listItem: [
      {
        header: "Become a Caregiver",
        desc: `We consider applicants for all positions without regard to race, color, religion, creed,
        gender, national origin, age, disability, marital or veteran status, sexual orientation,`,
        href: "/help-center-single",
      },
      {
        header: "",
        desc: `Incomplete applications will not be considered. This company will use the or any
        other legally protected status. Reasonable accommodations may be made to enable
        individuals with disabilities to perform the essential functions of the position.`,
        href: "/help-center-single",
      },
    
      {
        header: "GUIDELINES TO APPLICATION",
        desc: ` (A) Please fully and accurately complete the Application for Employment.
        Information given in the application to verify your previous employment and
        background.`,
        href: "/help-center-single",
      },
      {
        header: "",
        desc: `(B.) The Application for Employment will be considered inactive after 90 days. If
        you wish to be considered after that time, you must complete a new
        Application for Employment.`,
        href: "/help-center-single",
      },
      {
        header: "",
        desc: `(C.) Resume will not be accepted in lieu of completed applications but will be
        considered supplemental information.`,
        href: "/help-center-single",
      },
      {
        header: "",
        desc: `(D.) If you are hired, proof of eligibility will be required to verify your lawful right
        to work in the United States. (Form I - 9 Work Eligibility)`,
        href: "/help-center-single",
      },
    
    ],
  },


 

 
     

];



//help center data
const statements = [
  {
    title: "INSTRUCTIONS TO APPLICATION",
    target: "support-tab-1",
    class: "show active",
    listItem: [
      {
        header: "SUPPORTING STATEMENT",
        desc: `Please indicate all relevant experience, skills and work history that relate to the job description for which
        you have applied. Please print clearly. All illegible entries will not be considered.`,
        href: "/help-center-single",
      },
      {
        header: "MEDICAL HISTORY",
        desc: `Incomplete applications will not be considered. This company will use the or any
        other legally protected status. Reasonable accommodations may be made to enable
        individuals with disabilities to perform the essential functions of the position.`,
        href: "/help-center-single",
      },
    
      {
        header: "CHARACTER REFERENCES",
        desc: ` Please list three-character references of which we may contact.`,
        href: "/help-center-single",
      },
      {
        header: "DECLARATION",
        desc: `By signing below, I, _ _ _, on the date of
        _ , hereby certify that all information included in the above application is true and
        valid to the best of my knowledge. I also understand that misrepresentation or falsification of the information
        provided above will result in my immediate disqualification from the selection process and dismissal from any
        position appointed to by the Agency after discovery.`,
        href: "/help-center-single",
      }
    
    
    ],
  },


 

 
     

];


//desktop app integration two
const brandName = [
  {
    image: "/integations/airbnb.png",
    brand: "Airbnb",
  },
  {
    image: "/integations/figma.png",
    brand: "Figma",
  },
  {
    image: "/integations/facebook.png",
    brand: "Facebook",
  },
  {
    image: "/integations/sales-force.png",
    brand: "Sales Force",
  },
  {
    image: "/integations/atlassian.png",
    brand: "Atlassion",
  },
  {
    image: "/integations/dropbox-2.png",
    brand: "Dropbox",
  },
  {
    image: "/integations/dynamic-365.png",
    brand: "Dynamic-365",
  },
  {
    image: "/integations/erecruiter.png",
    brand: "Erecruiter",
  },
  {
    image: "/integations/evernote.png",
    brand: "Evernote",
  },
  {
    image: "/integations/google-icon.png",
    brand: "Google",
  },
  {
    image: "/integations/slack.png",
    brand: "Slack",
  },
  {
    image: "/integations/google-analytics.png",
    brand: "Google Analytics",
  },
  {
    image: "/integations/google-drive.png",
    brand: "Google Drive",
  },
  {
    image: "/integations/hubspot.png",
    brand: "Hubspot",
  },
  {
    image: "/integations/instagram.png",
    brand: "Instagram",
  },
  {
    image: "/integations/linkedin.png",
    brand: "Linkedin",
  },
  {
    image: "/integations/mailchimp.png",
    brand: "Mailchimp",
  },
  {
    image: "/integations/marekto.png",
    brand: "Merekto",
  },
];
//Service IT
const ItServiceData = [
  {
    serviceImg: "/service/coding.png",
    serviceTitle: "Web Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom border-end",
  },
  {
    serviceImg: "/service/app-development.png",
    serviceTitle: "App Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom border-end",
  },
  {
    serviceImg: "/service/shield.png",
    serviceTitle: "Data Security",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom",
  },
  {
    serviceImg: "/service/curve.png",
    serviceTitle: "UI/UX Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-end",
  },
  {
    serviceImg: "/service/graphic-design.png",
    serviceTitle: "Graphics Design",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-end",
  },
  {
    serviceImg: "/service/promotion.png",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "",
  },
];
const testimonialFourData = [
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-1.png",
    authorName: "Noah L. Paulsen",
    quoateDate: "Feb 19, 2022",
  },
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-2.png",
    authorName: "Noah L. Paulsen",
    quoateDate: "Feb 19, 2022",
  },
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-3.png",
    authorName: "Ariya Stark",
    quoateDate: "June 24, 2022",
  },
];
const cryptoBlogData = [
  {
    blogThumb: "/cbl-1.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-1.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
  {
    blogThumb: "/cbl-2.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-2.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
  {
    blogThumb: "/cbl-3.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-3.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
];
const cyberBlogData = [
  {
    blogThumb: "/blog/c-blog-1.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "The Steps to GainingPrivileged Access Security",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-2.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Protect Your Workplace FromCyber Attacks",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-3.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Mid-Market Businesses, Don’tSmall about Security",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-3.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Mid-Market Businesses, Don’tSmall about Security",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-3.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Mid-Market Businesses, Don’tSmall about Security",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-3.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Mid-Market Businesses, Don’tSmall about Security",
    linkText: "Read more",
  },
];

const insuranceBrands = [
  {
    url: "/clients/2.svg",
  },
  {
    url: "/clients/3.svg",
  },
  {
    url: "/clients/4.svg",
  },
  {
    url: "/clients/5.svg",
  },
  {
    url: "/clients/6.svg",
  },
  {
    url: "/clients/7.svg",
  },
  {
    url: "/clients/8.svg",
  },
];

const insuranceGallery = [
  {
    url: "/lily.png",
    Name:'Respite Care'
  },
  {
    url: "/help.png",
    Name:'Personal support'
  },
  {
    url: "/residence.png",
    Name:'Residential services'
  },
  {
    url: "/brade.png",
    Name:'Community Development'
  }
];

export {
  offcanvasMenuData,
  cyberBlogData,
  cryptoBlogData,
  testimonialFourData,
  ItServiceData,
  IconBoxData,
  FaqOneData,
  TestimonialData,
  TestimonialOneData,
  registerTestimonial,
  registerTestimonialTarget,
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
  footerPrimaryPages,
  footerPages,
  footerTemplate,
  serviceOne,
  serviceTwo,
  statements,
  serviceThree,
  testimonialOne,
  testimonialAuthor,
  pricingData,
  integrationOneLeft,
  integrationOneRight,
  integrationFeature,
  ourTeam,
  blogFeatureData,
  careerJobCard,
  helpCenterFaqDetails,
  brandName,
  insuranceBrands,
  insuranceGallery,
};
