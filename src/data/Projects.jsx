export const projects = [
  {
    id: 1,
    name: "Phishing Detector",
    slug: "phishing-detector",
    description:
      "A Phishing Detector application programmed with Python.<br />Instractions: You insert the email into the machine, choose in which format to get it, and then get the result. The results show you suspicious links, urgency words, and give you score at the end if this email is phishi or not.",
    image: "/images/pd.png",
    technologies: ["Python", "TTK"],
    githubUrl: "https://github.com/Tomercio/phishing-detector",
  },
  {
    id: 2,
    name: "Malware Analysis",
    slug: "malware-analysis",
    description:
      "An interactive platform to analyze suspicious files and URLs.<br />Instractions: Inside the machine, you upload the suspicous file ( it's working with docker so it's isolated ) choose the relevant filters and run it. I suggest to give it some time, to do overall research.<br />In the end you have the option to see the result In web, or to download it to Text file.",
    image: "/images/ma.png",
    technologies: ["Python", "WatchDog", "Docker", "Psutil", "Scapy"],
    githubUrl: "https://github.com/Tomercio/malware-analysis",
  },
  {
    id: 3,
    name: "SQLi Tester",
    slug: "sqli-tester",
    description: "A playground to test SQL injection payloads safely.",
    image: "/images/sql.png",
    technologies: ["Python", "Html", "CSS"],
    githubUrl: "https://github.com/Tomercio/sqli-tester",
  },
];
