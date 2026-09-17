// Direct asset imports to guarantee 100% Vite bundling & zero broken image paths
import logoImg from "../assets/images/cropped-cropped-IRS-LOGO.png";
import logoThumbImg from "../assets/images/cropped-cropped-IRS-LOGO-104x80.png";
import heroIllustrationImg from "../assets/images/solar-design-team-bgr.png";
import officeTeamImg from "../assets/images/solar-office-team.png";
import groundMountImg from "../assets/images/american-public-power-association-fm5_vCUa-Bc-unsplash-1-1024x731.jpg";
import preDesignImg from "../assets/images/pre-design-new.jpg";
import approvalDrawingsImg from "../assets/images/Approval-drawings_Page1-scaled.jpg";
import structureDesignImg from "../assets/images/structure-design_Page1-1024x723.jpg";
import executionDrawingsImg from "../assets/images/execuation-drawings_Page1-1024x725.jpg";
import pvsystImg from "../assets/images/pvsyst_Page7.jpg";

export const irsAssets = {
  logo: logoImg,
  logoThumb: logoThumbImg,
  heroIllustration: heroIllustrationImg,
  officeTeam: officeTeamImg,
  groundMount: groundMountImg,
  preDesign: preDesignImg,
  approvalDrawings: approvalDrawingsImg,
  structureDesign: structureDesignImg,
  executionDrawings: executionDrawingsImg,
  pvsyst: pvsystImg
};

export const irsCompanyData = {
  name: "Instant Renewable Solution",
  shortName: "IRS",
  logoUrl: logoImg,
  logoThumbUrl: logoThumbImg,
  tagline: "Outsourced Solar Design & Engineering Support",
  headline: "Solar Design & Engineering Support for EPC Companies",
  subheadline: "IRS operates as an extension of your engineering team. We help Solar EPC companies manage peak workloads, shorten design cycles and deliver coordinated engineering packages without increasing permanent headcount.",
  bannerText: "Expand Your Engineering Capacity Without Expanding Your Team",
  bannerSubtext: "Designed for commercial, industrial, rooftop, ground-mounted and utility-scale solar projects",
  
  contact: {
    address: "143 Dwarkesh Nagar Godadra Surat, Gujarat, India",
    phone: "+91 78745 37206",
    phoneClean: "+917874537206",
    email: "instantrenewablesolution@gmail.com",
    whatsappUrl: "https://wa.me/917874537206?text=Hello,%20I%20would%20like%20a%20solar%20quote",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
  },

  stats: [
    {
      value: "800+",
      unit: "MW",
      label: "MW of Solar Designs Delivered",
      description: "Delivered across utility, commercial, industrial and rooftop solar projects."
    },
    {
      value: "200+",
      unit: "Projects",
      label: "Residential & Commercial Projects",
      description: "Turnkey layouts, 3D simulations and permit drawings successfully delivered."
    },
    {
      value: "98%",
      unit: "Retention",
      label: "Client Retention Rate",
      description: "EPC partners relying on IRS as their continuous remote solar engineering desk."
    },
    {
      value: "India & ME",
      unit: "Experience",
      label: "India & Middle East Project Experience",
      description: "Deep expertise in statutory compliance and regional design standards."
    }
  ],

  aboutPillars: [
    { title: "Certified Company", desc: "Standardized engineering compliant with national and international standards." },
    { title: "Satisfied Guaranteed", desc: "98% client retention through precision drafting, reliability, and timely handover." },
    { title: "Precise Builder", desc: "Detailed execution drawings and accurate BOQ for constructible site implementation." },
    { title: "Excellence Support", desc: "Continuous revision support and dedicated design coordination for Solar EPCs." }
  ],

  aboutUs: {
    title: "About Us",
    subtitle: "A Solar Design & Engineering Partner for EPC Companies",
    description: "Instant Renewable Solution provides outsourced solar design and engineering support to EPC companies, developers, installers and consultants working across commercial, industrial and utility-scale projects. Our multidisciplinary support covers PVsyst simulation, electrical design, structural engineering, CEIG documentation, execution drawings and project-specific design coordination.",
    mission: "To deliver fast, precise, and innovative solar design solutions that empower clients to adopt clean energy and reduce their carbon footprint.",
    vision: "To be a leading solar design company recognized for excellence, sustainability, and technology-driven renewable energy solutions worldwide.",
    coreValues: [
      {
        name: "Integrity",
        desc: "We maintain transparency and honesty in every project."
      },
      {
        name: "Innovation",
        desc: "We embrace new technology to design smarter solar solutions."
      },
      {
        name: "Quality",
        desc: "We ensure accuracy, reliability, and compliance in all our designs."
      },
      {
        name: "Sustainability",
        desc: "We are committed to promoting a cleaner, greener future."
      },
      {
        name: "Customer Focus",
        desc: "We prioritize client satisfaction through timely and tailored solutions."
      }
    ]
  },

  services: [
    {
      id: "gmspd",
      slug: "ground-mount-solar-project-design",
      number: "01",
      title: "Ground Mount Solar Project Design",
      shortDesc: "Design and layout of ground-mounted solar PV systems for optimal performance and land use.",
      longDesc: "Comprehensive civil, structural, and electrical engineering for ground-mount solar power plants, maximizing generation while minimizing balance-of-system (BOS) capital costs.",
      badge: "Utility & Multi-MW",
      image: groundMountImg,
      keyHighlights: [
        "Optimized System Layout",
        "Load Analysis & Structural Safety",
        "Electrical Single Line Diagrams (SLD)",
        "Cost-Effective Engineering",
        "Shading & 3D Simulation (PVsyst)",
        "Customized Mounting Solutions",
        "Regulatory & Compliance Ready",
        "Scalable for MW Projects"
      ],
      objectives: [
        "We deliver optimized solar layouts for maximum energy output.",
        "CEIG-approved electrical drawings and compliance support included.",
        "3D shading analysis for accurate yield and ROI forecasts.",
        "Custom mounting solutions for rooftops and open land.",
        "Cost-effective, scalable designs for MW-scale projects."
      ]
    },
    {
      id: "spd",
      slug: "solar-pre-design",
      number: "02",
      title: "Solar Pre-Design",
      shortDesc: "Initial layout and simulation of solar systems before execution using 3D tools and site data.",
      longDesc: "Our Solar Pre-Design service provides a strong foundation for your project. We begin with a site feasibility study to assess solar potential, preliminary layout, yield forecasts, early cost and ROI estimates.",
      badge: "Pre-Bid & Proposals",
      image: preDesignImg,
      keyHighlights: [
        "Site feasibility analysis",
        "Preliminary layout planning",
        "Initial energy yield calculations",
        "Early cost and ROI assessment",
        "3D visualization",
        "Risk identification",
        "Regulatory & Compliance Ready",
        "Scalable for MW Projects"
      ],
      objectives: [
        "Our Solar Pre-Design service provides a strong foundation for your project.",
        "We begin with a site feasibility study to assess solar potential.",
        "A preliminary system layout is developed for optimal space use.",
        "Using simulation tools, we deliver accurate yield forecasts.",
        "We also provide early cost and ROI estimates, helping you make informed decisions.",
        "With 3D visualization and risk assessment, we ensure your project is ready for the next stage."
      ]
    },
    {
      id: "edaa",
      slug: "electrical-ceig-drawings-approval",
      number: "03",
      title: "Electrical (CEIG) Drawings & Approval",
      shortDesc: "Preparation of CEIG-compliant electrical drawings for state approval and safe system integration.",
      longDesc: "Strict statutory and technical electrical schematics formulated to meet Chief Electrical Inspector to Government (CEIG) regulations, CEA guidelines, and state utility interconnections.",
      badge: "Statutory Approval",
      image: approvalDrawingsImg,
      keyHighlights: [
        "Optimized System Layout",
        "Load Analysis & Structural Safety",
        "Electrical Single Line Diagrams (SLD)",
        "Cost-Effective Engineering",
        "Shading & 3D Simulation (PVsyst)",
        "Customized Mounting Solutions",
        "Regulatory & Compliance Ready",
        "Scalable for MW Projects"
      ],
      objectives: [
        "We deliver optimized solar layouts for maximum energy output.",
        "Every design ensures structural safety and reliability.",
        "CEIG-approved electrical drawings and compliance support included.",
        "3D shading analysis for accurate yield and ROI forecasts.",
        "Custom mounting solutions for rooftops and open land.",
        "Cost-effective, scalable designs for MW-scale projects."
      ]
    },
    {
      id: "sd",
      slug: "structure-design",
      number: "04",
      title: "Structure Design",
      shortDesc: "Design of mounting structures considering wind loads, soil conditions, and panel orientation.",
      longDesc: "Our Structure Design service focuses on building safe and durable solar mounting systems. We provide customized designs considering rooftop, shed, or ground conditions.",
      badge: "Civil & Structural",
      image: structureDesignImg,
      keyHighlights: [
        "Custom structural designs",
        "Wind load and seismic calculations",
        "Material optimization",
        "3D structural modeling",
        "Compliance with IS codes and standards"
      ],
      objectives: [
        "Our Structure Design service focuses on building safe and durable solar mounting systems.",
        "We provide customized designs considering rooftop, shed, or ground conditions.",
        "Using wind load and seismic calculations, we ensure strength and stability.",
        "Our optimized designs and 3D models reduce costs while maintaining compliance with industry standards."
      ]
    },
    {
      id: "pedac",
      slug: "project-execution-drawings-calculations",
      number: "05",
      title: "Project Execution Drawings & Calculations",
      shortDesc: "Detailed execution-level electrical and civil drawings with calculations for implementation.",
      longDesc: "Our Project Execution Drawings & Calculations service ensures your project runs smoothly on-site with detailed layouts, routing plans, and BOQs for accurate construction.",
      badge: "Site Construction",
      image: executionDrawingsImg,
      keyHighlights: [
        "Detailed construction drawings",
        "Cable routing and trench layout plans",
        "Earthing and lightning protection designs",
        "Precise BOQ (Bill of Quantities)",
        "On-site execution support"
      ],
      objectives: [
        "Our Project Execution Drawings & Calculations service ensures your project runs smoothly on-site.",
        "We prepare detailed layouts, routing plans, and BOQs for accurate construction.",
        "Our designs include earthing, lightning protection, and safety measures.",
        "With professional documentation, we provide seamless execution and reliable results."
      ]
    },
    {
      id: "ppgr",
      slug: "pvsyst-power-generation-report",
      number: "06",
      title: "PVsyst Power Generation Report",
      shortDesc: "Simulation and performance forecasting using PVSyst software to estimate annual energy yield.",
      longDesc: "Our PVsyst Power Generation Report service delivers accurate insights into your project's performance with detailed simulations to calculate energy yield and system efficiency.",
      badge: "Yield & Simulation",
      image: pvsystImg,
      keyHighlights: [
        "Accurate energy yield simulations",
        "Shading and irradiation analysis",
        "Performance ratio (PR) calculations",
        "Financial analysis with ROI & payback period",
        "Comparison of design alternatives"
      ],
      objectives: [
        "Our PVsyst Power Generation Report service delivers accurate insights into your project’s performance.",
        "We run detailed simulations to calculate energy yield and system efficiency.",
        "With shading analysis and PR calculations, we provide reliable forecasts.",
        "Our reports also include ROI and financial analysis, helping you make informed investment decisions."
      ]
    }
  ],

  workingProcess: [
    {
      step: "01",
      title: "Requirement Review",
      description: "Share the project location, capacity, available inputs, required deliverables and expected timeline."
    },
    {
      step: "02",
      title: "Scope and Proposal",
      description: "IRS confirms the engineering scope, exclusions, dependencies, delivery schedule and commercial terms."
    },
    {
      step: "03",
      title: "Data Collection",
      description: "Your team provides the required site, equipment, survey and technical information."
    },
    {
      step: "04",
      title: "Engineering and Coordination",
      description: "Our specialists prepare the agreed electrical, civil, structural or simulation deliverables."
    },
    {
      step: "05",
      title: "Quality Review",
      description: "Each submission undergoes an internal technical and documentation review."
    },
    {
      step: "06",
      title: "Submission and Revision Support",
      description: "Drawings and reports are issued according to the agreed schedule, followed by defined revision support and final handover."
    }
  ]
};
