export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string[];
  features: string[];
  benefits: string[];
  industries: string[];
  image: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "unarmed-security-services": {
    slug: "unarmed-security-services",
    title: "Unarmed Security Services",
    category: "Guarding & Patrol",
    subtitle: "When is an Unarmed Security Officer the Best Option?",
    description: [
      "Unarmed security officers are a popular choice when the threat level is low, and the use of an armed security officer may cause undo concern or excitement. Client activities and situations that may dictate the use of an unarmed security officer include more relaxed environments.",
      "While the threat level at your location and surrounding area may have the most impact on your decision to hire either armed or unarmed security services, you must take into consideration the perceived threat that often accompanies the presence of an armed security officer. Employees, clients, visitors, and customers may question you as to your reason for hiring an armed security officer. For this reason, an unarmed security officer is often the best choice.",
      "Unarmed security officers are considered to be less of a liability. Although Act Right Security takes all necessary steps and precautions to reduce your liability exposure, armed security officers inherently present a higher level of liability exposure. If the threat level on your property is low and you have no reason to fear for the safety of your staff or visitors, an unarmed security officer is best suited for your security needs."
    ],
    features: [
      "Vetted & Certified Guard Staff",
      "Visitor Logging & Access Control",
      "Conflict De-escalation Expertise",
      "Regular Foot Patrol & Door Checks",
      "Daily Activity Reports (DAR)"
    ],
    benefits: [
      "Substantially lower liability profile",
      "Welcoming and approachable customer-service presence",
      "Cost-effective continuous site monitoring",
      "Immediate reporting of maintenance & safety hazards"
    ],
    industries: [
      "Commercial Office Buildings",
      "Residential & HOA Communities",
      "Corporate Headquarters",
      "Retail Centers & Malls",
      "Schools & Libraries"
    ],
    image: "/image/securtiy.jpg"
  },
  "armed-security-service": {
    slug: "armed-security-service",
    title: "Armed Security Services",
    category: "Guarding & Patrol",
    subtitle: "When to Choose Armed over Unarmed Security Personnel",
    description: [
      "Although all our security officers are licensed, insured and well-trained, our armed security officers receive additional training in firearms, procedures and laws pertaining to armed personnel, and the use of force. A good majority of our armed security officers have military and/or law enforcement experience.",
      "Depending on the circumstances of your situation, an armed security officer may be the best choice for your medium to high-risk security needs. Generally speaking, an armed officer will act as a greater deterrent than an unarmed officer will. This is because an armed security officer is seen by most as having a higher degree of authority, which in turn demands greater respect and compliance.",
      "If your security needs and expectations are based on a perceived or actual threat to life and/or you are worried about the safety of high-value assets, staff, patients, and visitors, armed security services from Act Right Security provide total peace of mind."
    ],
    features: [
      "Firearms & Lethal/Non-Lethal Certifications",
      "Prior Military & Law Enforcement Personnel",
      "High-Threat Deterrence & Asset Protection",
      "Continuous Tactical Recertification",
      "Tactical Radio & Dispatch Interop"
    ],
    benefits: [
      "Maximum visual & physical crime deterrence",
      "Rapid threat neutralization capability",
      "Protection for high-value cash & electronics",
      "Full indemnification & licensing compliance"
    ],
    industries: [
      "Financial Institutions & Banks",
      "Jewelry & High-Value Retail Stores",
      "VIP Events & High-Profile Gatherings",
      "Executive & Employee Termination Events",
      "Critical Infrastructure Sites"
    ],
    image: "/image/armed-security-guards-manchester-nh_edited_edited_edited.webp"
  },
  "mobile-patrol": {
    slug: "mobile-patrol",
    title: "Mobile Vehicle Patrol",
    category: "Guarding & Patrol",
    subtitle: "High-Visibility Marked Vehicle Inspections & Response",
    description: [
      "Act Right Security's mobile vehicle patrol service provides randomized, highly visible marked vehicle inspections across large properties, commercial parks, and multi-unit residential communities.",
      "Equipped with GPS tracking and digital checkpoint scanning, our mobile patrol drivers perform physical lock-ups, exterior lighting checks, parking enforcement, and immediate response to alarm triggers.",
      "Mobile patrols deliver the security presence of dedicated guarding at a fraction of the cost, making them ideal for multi-location businesses and nighttime property monitoring."
    ],
    features: [
      "Marked Security Patrol Vehicles",
      "GPS Time-Stamped Electronic Reports",
      "Randomized Lock-Up & Door Security Checks",
      "Alarm Trigger First-Responder Capability",
      "Parking & Trespass Enforcement"
    ],
    benefits: [
      "Cost-effective alternative to fixed guards",
      "Deters nighttime vandalism & vehicle break-ins",
      "Covers expansive geographical acreage efficiently",
      "Instant notification of property damage or leaks"
    ],
    industries: [
      "Industrial Parks & Warehouses",
      "Apartment Complexes & HOAs",
      "Shopping Plazas & Auto Dealerships",
      "Construction Facilities & Storage Yards"
    ],
    image: "/image/patrol.webp"
  },
  "event-security": {
    slug: "event-security",
    title: "Event Security & Crowd Control",
    category: "Specialized Operations",
    subtitle: "Crowd Management, Bag Screening & VIP Protection",
    description: [
      "From large-scale outdoor festivals and concerts to intimate corporate galas, Act Right Security delivers seamless crowd control, access point management, and emergency evacuation protocols.",
      "Our event security personnel are trained in diplomatic guest management, bag inspection, metal detection wanding, stage protection, and backstage credential verification.",
      "We coordinate closely with local law enforcement and venue managers to ensure your event runs smoothly without safety incidents."
    ],
    features: [
      "Access Control & Bag Check Wanding",
      "Stage & Backstage VIP Guarding",
      "Alcohol & Crowd Flow Monitoring",
      "Emergency Evacuation Coordination",
      "Uniformed or Suit & Tie Attire Options"
    ],
    benefits: [
      "Smooth guest entry and exit flow",
      "Zero disruption to event programming",
      "Proactive de-escalation of guest conflicts",
      "Complete liability protection for venue hosts"
    ],
    industries: [
      "Concerts & Music Festivals",
      "Corporate Conventions & Trade Shows",
      "Sporting Tournaments & Arenas",
      "Private Parties & Weddings"
    ],
    image: "/image/1.webp"
  },
  "residential-security": {
    slug: "residential-security",
    title: "Residential & HOA Security",
    category: "Property & Facility",
    subtitle: "Gated Community Gatehouse & Neighborhood Watch",
    description: [
      "Protect your neighborhood, HOA, or apartment complex with Act Right Security's dedicated residential guards and gatehouse monitoring.",
      "Our guards manage visitor logs, enforce parking regulations, conduct foot patrols of amenities (pools, clubhouses), and respond to noise complaints or suspicious activity.",
      "A friendly yet vigilant presence reassures residents and deters porch pirating, vandalism, and unauthorized vehicle entry."
    ],
    features: [
      "Gatehouse Visitor Screening & Log",
      "Amenity & Pool Security Patrols",
      "Parking & Towing Enforcement",
      "Resident Assistance & Package Control",
      "Nighttime Perimeter Inspections"
    ],
    benefits: [
      "Increased property values and tenant satisfaction",
      "Deterrence of package theft & auto break-ins",
      "24/7 accountability with GPS reporting",
      "Friendly neighbor-oriented officer demeanor"
    ],
    industries: [
      "Gated Communities & HOAs",
      "Luxury Multi-Family Complexes",
      "Student Housing",
      "Condominium Associations"
    ],
    image: "/image/apartment-security-manchester-nh-securti.webp"
  },
  "construction-sites": {
    slug: "construction-sites",
    title: "Construction Site Security",
    category: "Property & Facility",
    subtitle: "Equipment, Material & Vandalism Prevention",
    description: [
      "Construction sites are prime targets for copper theft, heavy machinery vandalism, and trespass injury lawsuits. Act Right Security provides round-the-clock site watchmen and access logging.",
      "We secure perimeters, log contractor vehicles entering and leaving, inspect fencing, and perform overnight foot patrols to prevent catastrophic project delays.",
      "Our detailed logs provide insurers and project managers with verified proof of active loss prevention."
    ],
    features: [
      "Material & Tool Theft Deterrence",
      "Contractor Vehicle Entry Logging",
      "Hazard & Fire Watch Monitoring",
      "Overnight Foot & Vehicle Patrols",
      "High-Visibility Signage & Lights"
    ],
    benefits: [
      "Prevents costly project delays and insurance claims",
      "Protects expensive heavy machinery and copper wire",
      "Eliminates unauthorized trespassers and scrap thieves",
      "Satisfies site insurance safety mandates"
    ],
    industries: [
      "Commercial Construction Projects",
      "Residential Subdivisions in Build",
      "Infrastructure & Highway Works",
      "Demolition Sites"
    ],
    image: "/image/18.webp"
  },
  "retail-stores": {
    slug: "retail-stores",
    title: "Retail Loss Prevention",
    category: "Property & Facility",
    subtitle: "Uniformed & Plainclothes Shoplifting Deterrence",
    description: [
      "Organized retail crime and shoplifting cause billions in losses annually. Act Right Security provides uniformed store guards and undercover loss prevention agents to protect retail merchandise.",
      "Our guards maintain high visibility at store entrances, assist with customer service, conduct receipt checks, and defuse aggressive shoplifting incidents legally and safely.",
      "We tailor loss prevention strategies for luxury boutiques, department stores, grocery chains, and shopping malls."
    ],
    features: [
      "Entrance/Exit High-Visibility Guarding",
      "Undercover Plainclothes Loss Prevention",
      "Receipt & Shopping Bag Verification",
      "De-escalation of Hostile Customers",
      "Civil Recovery & Police Report Support"
    ],
    benefits: [
      "Direct reduction in inventory shrinkage",
      "Safer shopping environment for customers & staff",
      "Immediate response to active theft attempts",
      "Professional representation of your store brand"
    ],
    industries: [
      "Luxury Apparel & Jewelry Boutiques",
      "Electronics & Appliance Retailers",
      "Supermarkets & Pharmacy Chains",
      "Shopping Malls & Outlets"
    ],
    image: "/image/14.webp"
  },
  "executive-protection": {
    slug: "executive-protection",
    title: "Executive Protection & VIP Escort",
    category: "Specialized Operations",
    subtitle: "Discreet Personal Bodyguards & Route Security",
    description: [
      "Act Right Security offers discreet, elite close protection bodyguards for executives, celebrities, dignitaries, and high-net-worth individuals.",
      "Our protection details perform advance threat assessments, secure motorcade routes, manage crowd interactions, and provide 24/7 personal security.",
      "Officers are trained in tactical driving, emergency medical response, and low-profile protection techniques that balance maximum safety with personal privacy."
    ],
    features: [
      "Advance Intelligence & Route Planning",
      "Discreet Armed Bodyguards (Plainclothes/Suits)",
      "Secure Airport Transfers & Transportation",
      "Threat Assessment & Stalker Management",
      "Emergency Evacuation Readiness"
    ],
    benefits: [
      "Uncompromising safety without intrusive disruption",
      "Highly experienced ex-military & federal personnel",
      "Seamless integration with executive schedules",
      "Global mobility and multi-state protection capability"
    ],
    industries: [
      "Corporate C-Suite Executives",
      "Entertainment & High-Profile Celebrities",
      "Visiting Foreign Dignitaries",
      "Witnesses & High-Profile Legal Clients"
    ],
    image: "/image/11.webp"
  },
  "access-control": {
    slug: "access-control",
    title: "Access Control & Gatekeeping",
    category: "Property & Facility",
    subtitle: "Strict Visitor Screening, Badge Verification & Logs",
    description: [
      "Controlling who enters and exits your facility is the first line of defense. Act Right Security provides professional gatekeepers and lobby reception officers trained in badge verification and credential logging.",
      "We operate electronic badge systems, issue visitor passes, inspect delivery trucks, and enforce facility safety compliance rules.",
      "Our officers combine sharp security vigilance with polite, helpful front-desk receptionist etiquette."
    ],
    features: [
      "Badge & ID Credential Verification",
      "Visitor Pass Issuance & Logbook Management",
      "Vendor & Delivery Truck Inspection",
      "Emergency Lock-Down Execution",
      "Integrated CCTV & Barrier Control"
    ],
    benefits: [
      "Prevents unauthorized entry of unvetted individuals",
      "Maintains clean digital audit trail of site visitors",
      "Professional front-desk customer service image",
      "Instant facility lockdown in emergency events"
    ],
    industries: [
      "Corporate Office Towers",
      "Manufacturing & Industrial Facilities",
      "Data Centers & Research Labs",
      "Government Buildings"
    ],
    image: "/image/file.png"
  },
  "alarm-response": {
    slug: "alarm-response",
    title: "Alarm Response Services",
    category: "Guarding & Patrol",
    subtitle: "Rapid First-Responder Guard Dispatch to Triggers",
    description: [
      "Avoid false alarm fines and dangerous nighttime site visits with Act Right Security's 24/7 mobile alarm response service.",
      "When your security system triggers, our 24/7 dispatch immediately sends a armed mobile patrol officer to inspect the premises, verify intrusions, and liaise with local police.",
      "If a breach occurs, our officer remains on-site until the building is secured and keyholders arrive."
    ],
    features: [
      "24/7 Dispatch Center Monitoring",
      "Rapid On-Site Patrol Guard Deployment",
      "Exterior & Interior Perimeter Inspection",
      "Police & Keyholder Coordination",
      "Full Incident & Damage Documentation"
    ],
    benefits: [
      "Eliminates keyholder danger during midnight alarms",
      "Reduces municipal false-alarm penalty fees",
      "Ensures immediate physical guard guard presence",
      "Comprehensive incident reporting for insurers"
    ],
    industries: [
      "Commercial Warehouses",
      "Retail Stores & Banks",
      "Schools & Community Centers",
      "Vacant Properties & Estates"
    ],
    image: "/image/alarm-response-security-services-security-guards-new-hampshire-security-guard-service-manc.webp"
  },
  "bank-protection-services": {
    slug: "bank-protection-services",
    title: "Bank & Financial Protection",
    category: "Specialized Operations",
    subtitle: "High-Deterrence Armed Banking & Vault Security",
    description: [
      "Financial institutions demand the highest level of vigilance. Act Right Security provides specialized armed guards for bank lobbies, teller windows, vaults, and ATM servicing.",
      "Our guards are trained specifically in financial robbery deterrence, hostage protocol, suspicious behavior detection, and secure vault transfers.",
      "We maintain a calm, authoritative presence that instills customer confidence while neutralizing security threats."
    ],
    features: [
      "Armed Vault & Lobby Security Guards",
      "ATM Cash Courier Security Escort",
      "Suspicious Behavior & Threat Detection",
      "Opening & Closing High-Risk Protocols",
      "Direct Emergency Silent Alarm Interop"
    ],
    benefits: [
      "Maximum robbery deterrence for branches",
      "Enhanced safety for tellers, staff, and depositors",
      "Immediate response to robbery or active threats",
      "Compliance with financial safety regulations"
    ],
    industries: [
      "Commercial Banks & Credit Unions",
      "Vault & Coin Storage Depots",
      "Check Cashing & Money Transfers",
      "Fintech & Investment Firms"
    ],
    image: "/image/17.webp"
  },
  "campgrounds-parks": {
    slug: "campgrounds-parks",
    title: "Campgrounds & Parks Security",
    category: "Public & Consulting",
    subtitle: "Outdoor Recreational Facility Patrols & Safety",
    description: [
      "Maintain family-friendly environments across public parks, private campgrounds, and outdoor recreational areas with Act Right Security.",
      "Our officers conduct mobile ATV/utility patrols, enforce quiet hours, monitor campfires, prevent underage drinking, and ensure campground rules are followed.",
      "We serve as friendly guardians who handle disturbances diplomatically while protecting natural amenities and guest safety."
    ],
    features: [
      "ATV & Foot Patrols of Trails & Sites",
      "Curfew & Quiet Hours Enforcement",
      "Fire Safety & Hazard Inspections",
      "Wildlife Hazard & Trespass Response",
      "Family Assistance & First Aid Support"
    ],
    benefits: [
      "Safer environment for families & campers",
      "Prevents vandalism of park structures & restrooms",
      "Quick resolution of noise complaints & disputes",
      "Continuous site presence throughout season"
    ],
    industries: [
      "RV Parks & Camping Grounds",
      "Public Parks & Nature Reserves",
      "Marinas & Waterfront Facilities",
      "Summer Camps & Outdoor Venues"
    ],
    image: "/image/16.webp"
  },
  "campus-safety": {
    slug: "campus-safety",
    title: "Campus & Educational Safety",
    category: "Public & Consulting",
    subtitle: "K-12 & University Campus Security Solutions",
    description: [
      "Creating a safe learning environment is essential for students, faculty, and administrative staff. Act Right Security offers comprehensive campus security guards and safety escorts.",
      "We manage main gate access, conduct residence hall checks, patrol sports fields, monitor parking structures, and provide student night escorts.",
      "Our guards are trained in active shooter response, trauma emergency protocols, and youth-friendly community engagement."
    ],
    features: [
      "Student & Visitor Gate Screening",
      "Nighttime Campus Escort Services",
      "Residence Hall & Library Patrols",
      "Active Threat & Emergency Drills",
      "Event & Athletic Game Security"
    ],
    benefits: [
      "Safe, supportive environment for education",
      "Rapid containment of campus safety threats",
      "24/7 visibility across dorms and parking lots",
      "Strong partnership with local emergency services"
    ],
    industries: [
      "Universities & Colleges",
      "K-12 Private & Public Schools",
      "Trade & Vocational Schools",
      "Educational Dormitories"
    ],
    image: "/image/saint-.webp"
  },
  "cash-transport": {
    slug: "cash-transport",
    title: "Cash & Valuable Transport",
    category: "Specialized Operations",
    subtitle: "Armed Courier & High-Asset Escort Protection",
    description: [
      "Transporting large sums of cash, jewelry, or sensitive data requires uncompromising security. Act Right Security provides armed courier escorts and secure transport logistics.",
      "We utilize covert or high-visibility armed guards equipped with armored protocols to protect deposits between retail locations, banks, and vault depositories.",
      "Every transport is tracked via real-time satellite GPS and backed by comprehensive transit insurance."
    ],
    features: [
      "Armed Courier Escort Personnel",
      "Point-to-Point Secure Cash Transfers",
      "Satellite GPS Real-Time Fleet Tracking",
      "Jewelry, Gold & Precious Metals Escort",
      "Strict Chain-of-Custody Documentation"
    ],
    benefits: [
      "Zero risk to store employees carrying deposits",
      "Insured, bulletproof protection protocols",
      "Verified digital proof of transfer receipt",
      "Tailored schedules for daily or weekly drops"
    ],
    industries: [
      "Retail Chains & Supermarkets",
      "Jewelers & Diamond Brokers",
      "Cannabis Dispensaries & Operations",
      "Event Organizers & Ticket Gates"
    ],
    image: "/image/20.webp"
  },
  "commercial-properties": {
    slug: "commercial-properties",
    title: "Commercial Properties Security",
    category: "Property & Facility",
    subtitle: "Corporate Office Towers & Business Park Protection",
    description: [
      "Act Right Security safeguards commercial office buildings, corporate headquarters, and multi-tenant business parks with premium lobby guards and roving patrols.",
      "We manage elevator access systems, inspect loading docks, enforce tenant safety rules, and project an immaculate corporate image.",
      "Our officers seamlessly combine white-glove tenant assistance with sharp perimeter security."
    ],
    features: [
      "Concierge Lobby Desk Security",
      "Elevator & Floor Access Control",
      "Loading Dock & Vendor Logging",
      "After-Hours Tenant escorts",
      "Fire Life-Safety Inspections"
    ],
    benefits: [
      "Elevates tenant satisfaction and retention",
      "Deters unauthorized solicitors and trespassers",
      "Maintains clean safety audit compliance",
      "Professional uniform presentation matching corporate standards"
    ],
    industries: [
      "High-Rise Office Towers",
      "Corporate Campuses & Technology Parks",
      "Medical Office Complexes",
      "Mixed-Use Urban Developments"
    ],
    image: "/image/10.webp"
  },
  "concierge-services": {
    slug: "concierge-services",
    title: "Concierge & Front Desk Security",
    category: "Public & Consulting",
    subtitle: "White-Glove Reception & Security Desk Guards",
    description: [
      "First impressions matter. Act Right Security's concierge officers deliver polished customer service alongside vigilant front-desk access control.",
      "Our concierge guards welcome visitors, manage package deliveries, answer tenant inquiries, log contractors, and monitor security cameras simultaneously.",
      "Ideal for luxury high-rise condominiums, corporate headquarters, and boutique hotels requiring a sophisticated security presence."
    ],
    features: [
      "Polished Suit & Tie or Blazer Attire",
      "Package Delivery Log & Resident Notification",
      "Guest Credential Checking & Key Control",
      "Emergency Alarm Panel Supervision",
      "Tenant Relations & Visitor Greeting"
    ],
    benefits: [
      "Combines luxury reception with active security",
      "Eliminates package theft in lobby areas",
      "Provides reassurance to high-profile tenants",
      "Immediate management of lobby disturbances"
    ],
    industries: [
      "Luxury High-Rise Condominiums",
      "Corporate Executive Headquarters",
      "Boutique Hotels",
      "Private Member Clubs"
    ],
    image: "/image/addministrator.jpg"
  },
  "consulting-services": {
    slug: "consulting-services",
    title: "Security Risk Consulting",
    category: "Public & Consulting",
    subtitle: "Vulnerability Assessments, Site Surveys & Protocols",
    description: [
      "Before deploying security measures, you need an accurate assessment of your risks. Act Right Security offers expert security risk consulting led by veteran law enforcement and military security analysts.",
      "We conduct physical site surveys, audit camera placement and access points, evaluate emergency action plans, and author customized standing operating procedures (SOPs).",
      "Our actionable recommendations help organizations eliminate security blind spots and optimize safety budgets."
    ],
    features: [
      "Comprehensive Threat & Vulnerability Audits",
      "CCTV & Access Control System Design",
      "Emergency Action Plan (EAP) Authoring",
      "Active Shooter & Crisis Training Drills",
      "Security Policy & SOP Creation"
    ],
    benefits: [
      "Identifies hidden facility vulnerabilities before incidents occur",
      "Optimizes guard deployment for maximum cost efficiency",
      "Ensures regulatory and OSHA safety compliance",
      "Provides authoritative documentation for insurers"
    ],
    industries: [
      "Corporate Enterprises & Warehouses",
      "Schools & Educational Institutions",
      "Places of Worship & Community Centers",
      "Municipal Buildings & Government Facilities"
    ],
    image: "/image/15.webp"
  },
  "employee-terminations": {
    slug: "employee-terminations",
    title: "Employee Termination Protection",
    category: "Public & Consulting",
    subtitle: "Standby Guard Support for High-Risk Discharges",
    description: [
      "Terminating hostile or volatile employees can pose severe workplace violence risks. Act Right Security provides discrete armed or unarmed standby officers during sensitive employee discharges.",
      "Our guards maintain a discreet, calm presence near the HR office, escort the former employee off premises safely, and monitor company parking lots afterward.",
      "We prevent workplace retaliation, destruction of company property, and physical altercations."
    ],
    features: [
      "Discreet Standby Guards outside HR/Meeting Room",
      "Escort of Discharged Personnel to Vehicle",
      "Company Property & Laptop Recovery Witness",
      "Post-Termination Site & Parking Patrols",
      "Threat Assessment of Terminated Employee"
    ],
    benefits: [
      "Protects HR staff, managers, and remaining employees",
      "Prevents physical altercations & property sabotage",
      "Maintains professional decorum during stressful events",
      "Provides legal proof of safe departure protocol"
    ],
    industries: [
      "Corporate HR Departments",
      "Manufacturing & Industrial Facilities",
      "Retail Chains & Call Centers",
      "Financial & Legal Firms"
    ],
    image: "/image/13.webp"
  },
  "healthcare-institutions": {
    slug: "healthcare-institutions",
    title: "Healthcare & Hospital Safety",
    category: "Property & Facility",
    subtitle: "ER Room, Patient & Medical Staff Guarding",
    description: [
      "Hospitals and medical centers require security personnel trained in compassionate patient interaction alongside firm threat management.",
      "Act Right Security provides guards trained in HIPAA privacy, psychiatric hold assistance, emergency room crowd management, and drug locker protection.",
      "We ensure medical staff can focus on healthcare without fear of assault or unauthorized intrusion."
    ],
    features: [
      "Emergency Department High-Vigilance Guards",
      "Psychiatric Patient Companion Watch",
      "Pharmaceutical Locker & Vault Security",
      "De-escalation & Restraint Support",
      "Visitor Badge & ICU Access Control"
    ],
    benefits: [
      "Protects doctors, nurses, and medical staff from assault",
      "Maintains strict HIPAA patient confidentiality",
      "Secures controlled substance inventories",
      "Ensures 24/7 safe emergency room operations"
    ],
    industries: [
      "Hospitals & Medical Centers",
      "Urgent Care Clinics",
      "Behavioral Health Facilities",
      "Senior Living & Nursing Homes"
    ],
    image: "/image/19.webp"
  },
  "hotel-security": {
    slug: "hotel-security",
    title: "Hotel & Hospitality Security",
    category: "Property & Facility",
    subtitle: "Guest Safety, Lobby Guarding & Floor Patrols",
    description: [
      "Guest satisfaction and safety are paramount in hospitality. Act Right Security provides courteous, vigilant guards for hotels, resorts, and convention centers.",
      "Our officers patrol guest floors, monitor lobby activities, assist with guest disputes, inspect emergency exits, and deter unauthorized party crashers.",
      "We safeguard hotel reputation while protecting guest privacy and property."
    ],
    features: [
      "Polished Lobby & Guest Escort Guards",
      "Overnight Guest Floor Patrols",
      "Banquet & Conference Room Security",
      "Pool Area & Lounge Supervision",
      "Noise Complaint Resolution"
    ],
    benefits: [
      "Protects hotel reputation and online reviews",
      "Deters room break-ins and luggage theft",
      "Maintains peaceful atmosphere for sleeping guests",
      "Professional coordination with hotel management"
    ],
    industries: [
      "Luxury Hotels & Resorts",
      "Boutique Hospitality Properties",
      "Extended Stay Facilities",
      "Convention Hotels"
    ],
    image: "/image/21.webp"
  },
  "private-investigations": {
    slug: "private-investigations",
    title: "Private Investigations",
    category: "Specialized Operations",
    subtitle: "Covert Surveillance, Background Checks & Asset Discovery",
    description: [
      "Uncover facts with Act Right Security's licensed private investigation team. We specialize in corporate surveillance, background verification, insurance fraud detection, and missing person locates.",
      "Our investigators utilize modern surveillance technology, deep database research, and field intelligence to deliver court-admissible evidence reports.",
      "All investigations are conducted with strict confidentiality and legal precision."
    ],
    features: [
      "Covert Video & Photo Field Surveillance",
      "Comprehensive Criminal & Financial Background Checks",
      "Workers' Compensation & Insurance Fraud Checks",
      "Asset & Account Locates",
      "Court-Admissible Evidence Reports"
    ],
    benefits: [
      "Uncovers actionable, court-ready evidence",
      "Protects businesses against fraudulent claims",
      "100% confidential and discreet execution",
      "Conduct by licensed master investigators"
    ],
    industries: [
      "Insurance Agencies & Claims Adjusters",
      "Law Firms & Attorneys",
      "Corporate Executive Boards",
      "Private Individuals & Estates"
    ],
    image: "/image/lens.jpg"
  },
  "covid-19": {
    slug: "covid-19",
    title: "COVID-19 Safety & Health Compliance",
    category: "Public & Consulting",
    subtitle: "Screening, Thermal Checks & Capacity Monitoring",
    description: [
      "Act Right Security provides specialized safety officers trained in health screening protocols, temperature checking, social distance enforcement, and capacity limit control.",
      "We assist facilities in maintaining clean, compliant environments during health crises while managing guest entry smoothly.",
      "Our officers combine public health protocol enforcement with respectful, diplomatic customer service."
    ],
    features: [
      "Thermal Camera & Handheld Temp Checks",
      "Capacity Counting & Line Queue Management",
      "PPE Compliance & Hand Sanitizer Stations",
      "Health Questionnaire Verification",
      "Sanitizing Inspection Logs"
    ],
    benefits: [
      "Ensures business operations remain compliant with health guidelines",
      "Protects staff and customers from exposure risks",
      "Maintains organized queues at store entrances",
      "Reduces employer liability during health emergencies"
    ],
    industries: [
      "Retail Malls & Grocery Stores",
      "Manufacturing Plants & Office Buildings",
      "Government Facilities",
      "Medical Outpatient Centers"
    ],
    image: "/image/security-companies-nashua-nh-covid-19-security-guards-security-services-manchester-nh.webp"
  }
};
