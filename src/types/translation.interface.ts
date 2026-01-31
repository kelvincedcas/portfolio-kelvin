export interface Translations {
  // Header
  nav: {
    about: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
    getInTouch: string;
  };
  // Hero
  hero: {
    available: string;
    greeting: string;
    roles: string[];
    description: string;
    exploreWork: string;
    letsConnect: string;
    stats: { value: string; label: string }[];
    scroll: string;
  };
  // About
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    photoPlaceholder: string;
    coding: string;
    paragraphs: string[];
    highlights: { title: string; description: string }[];
  };
  // Skills
  skills: {
    badge: string;
    title: string;
    titleHighlight: string;
    categories: { title: string; skills: { name: string; level: number }[] }[];
  };
  // Education
  education: {
    badge: string;
    title: string;
    titleHighlight: string;
    formalEducation: string;
    coursesTitle: string;
    educationData: {
      title: string;
      institution: string;
      period: string;
      description: string;
      highlights: string[];
    }[];
    coursesData: {
      title: string;
      platform: string;
      year: string;
    }[];
  };
  // Projects
  projects: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    filters: string[];
    projectPreview: string;
    viewLive: string;
    sourceCode: string;
    moreProjects: string;
    projectsData: {
      title: string;
      subtitle: string;
      description: string;
      imageURL: string;
      projectURL: string;
      gitHubURL: string;
    }[];
  };
  // Contact
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    formTitle: string;
    errorForm: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    emailTitle: string;
    locationTitle: string;
    location: string;
    available: string;
    availableText: string;
    scheduleCall: string;
    connectWithMe: string;
    downloadResume: string;
    resumeSize: string;
  };
  // Footer
  footer: {
    craftedWith: string;
    andCoffee: string;
    backToTop: string;
  };
  sonner: {
    successfulMessage: string;
    errorMessage: string;
  };
}
