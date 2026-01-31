import type { Translations } from '@/types/translation.interface';
import { createContext, useState, type PropsWithChildren } from 'react';

type Language = 'en' | 'es';

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
    },
    hero: {
      available: 'Available for new projects',
      greeting: "Hi, I'm",
      roles: ['Frontend Developer', 'UI/UX Designer', 'Problem Solver'],
      description:
        'I craft exceptional digital experiences that combine stunning visuals with seamless functionality. Specialized in building modern web applications that users love.',
      exploreWork: 'Explore My Work',
      letsConnect: "Let's Connect",
      stats: [
        { value: '1+', label: 'Years Experience' },
        { value: '5+', label: 'Projects Completed' },
        { value: '1+', label: 'Companies worked' },
      ],
      scroll: 'Scroll',
    },
    about: {
      badge: 'About Me',
      title: 'Passionate About Creating',
      titleHighlight: 'Digital Excellence',
      photoPlaceholder: 'Kelvin.dev { }',
      coding: 'Coding...',
      paragraphs: [
        "Hello! I'm a Systems Engineer and Frontend Developer with over 2 years of experience building modern, high-performance web applications using React. I’m passionate about creating clean, intuitive user interfaces that not only look great but are built on solid, scalable foundations.",
        'Throughout my career, I’ve expanded my skill set beyond frontend development, gaining experience in UI/UX design, backend development, and application architecture. This allows me to approach projects from a holistic perspective, ensuring every detail contributes to a seamless user experience.',
        'I’m driven by the challenge of solving complex problems with efficient, scalable solutions. I enjoy turning ideas into reliable digital products and continuously pushing myself to learn, improve, and build things that truly make an impact.',
      ],
      highlights: [
        {
          title: 'Clean Code',
          description:
            'Writing maintainable, scalable code that stands the test of time',
        },
        {
          title: 'Design Focused',
          description:
            'Creating interfaces that are both beautiful and intuitive',
        },
        {
          title: 'Problem Solver',
          description: 'Turning complex challenges into elegant solutions',
        },
        {
          title: 'Always Learning',
          description:
            'Constantly exploring new technologies and methodologies',
        },
      ],
    },
    skills: {
      badge: 'Skills & Expertise',
      title: 'Technologies I',
      titleHighlight: ' Master',
      categories: [
        {
          title: 'Frontend',
          skills: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 95 },
          ],
        },
        {
          title: 'Backend',
          skills: [
            { name: 'Node.js', level: 88 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'GraphQL', level: 78 },
          ],
        },
        {
          title: 'Design',
          skills: [
            { name: 'Figma', level: 90 },
            { name: 'UI/UX Design', level: 88 },
            { name: 'Prototyping', level: 85 },
          ],
        },
        {
          title: 'Tools & Others',
          skills: [
            { name: 'Git / GitHub', level: 95 },
            { name: 'Docker', level: 75 },
            { name: 'CI/CD', level: 80 },
          ],
        },
      ],
    },
    education: {
      badge: 'Background',
      title: 'Education &',
      titleHighlight: ' Learning Journey',
      formalEducation: 'Formal Education',
      coursesTitle: 'Courses & Certifications',
      educationData: [
        {
          title: 'Computer Systems Engineer',
          institution: 'Technical University of Manabi',
          period: '2018 - 2023',
          description:
            'Focused on software engineering, scalable web application development, database modeling, and software architecture, with a strong foundation in algorithms and system design.',
          highlights: ['Web project for faculty'],
        },
      ],
      coursesData: [
        {
          title: 'React expert',
          platform: 'Dev/talles',
          year: '2025',
        },
        {
          title: 'React with TypeScript - the complete guide',
          platform: 'Udemy',
          year: '2025',
        },
        {
          title: 'Full Stack Node.js - React - TypeScript, Express',
          platform: 'Udemy',
          year: '2025',
        },
        {
          title: 'Modern JavaScript',
          platform: 'Udemy',
          year: '2024',
        },
        {
          title: 'UI/UX Design Specialization',
          platform: 'Udemy',
          year: '2023',
        },
        {
          title: 'AWS Certified Developer Associate DVA-C02',
          platform: 'Udemy',
          year: '2023',
        },
      ],
    },
    projects: {
      badge: 'Portfolio',
      title: 'Featured',
      titleHighlight: ' Projects',
      description:
        'A collection of projects that showcase my skills in design, development, and problem-solving across various domains.',
      filters: ['All', 'Web', 'Mobile', 'AI/ML'],
      projectPreview: 'League of Legends SoloQ Challenge',
      viewLive: 'View Live',
      sourceCode: 'Source Code',
      moreProjects: 'More Projects',
      projectsData: [
        {
          title: 'LoL Tournament Website',
          subtitle: 'Full-Stack Development',
          description:
            "A modern website designed to track the progress of a local League of Legends tournament step by step. It connects to Riot's official API and obtains real-time player data.",
          imageURL: '/images/soloQ.webp',
          projectURL: 'https://www.soloq2026.lol/',
          gitHubURL: 'https://github.com/kelvincedcas/lol-tournament',
        },
        {
          title: 'Patient Management Dashboard',
          subtitle: 'Full-Stack Development',
          description:
            'A full-stack veterinary patient management system built with the MERN stack, featuring authentication, email-based password recovery, account confirmation, and more.',
          imageURL: '/images/APV_Mern.webp',
          projectURL: 'https://apv-mern-kelvindev.netlify.app/',
          gitHubURL: 'https://github.com/kelvincedcas/apv_frontend_deploy',
        },
        // {
        //   title: 'E-commerce Platform',
        //   subtitle: 'Frontend Development',
        //   description:
        //     'A modern and scalable e-commerce solution that offers inventory management through an administrative dashboard, query parameter handling, and utilizes Zustand, etc.',
        //   imageURL: '/images/APV_Mern.webp',
        //   projectURL: 'https://apv-mern-kelvindev.netlify.app/',
        //   gitHubURL: 'https://github.com/kelvincedcas/apv_frontend_deploy',
        // },
        {
          title: 'My personal Portfolio',
          subtitle: 'Website',
          description:
            'A modern frontend-focused portfolio that showcases my profile through clean, intuitive, and visually engaging interfaces, focused on delivering an optimal user experience. Email delivery is handled through a custom function running on Vercel Serverless.',
          imageURL: '/images/portfolio.webp',
          projectURL: 'https://portfolio-kelvin-vert.vercel.app/',
          gitHubURL: 'https://github.com/kelvincedcas/portfolio-kelvin',
        },
        {
          title: 'Calendar App',
          subtitle: 'Full-Stack Development',
          description:
            'A modern application designed to help you organize your events and pending tasks. Calendar App is built using the MERN stack and leverages libraries such as Flowbite React, Schedule Calendar, and more.',
          imageURL: '/images/calendarApp.webp',
          projectURL: 'https://calendarapp-kelvindev.netlify.app/auth/login',
          gitHubURL: 'https://github.com/kelvincedcas/CalendarApp-Frontend',
        },
        {
          title: 'Journal App',
          subtitle: 'Full-Stack Development',
          description:
            'A modern application designed to keep track of everything you need to note on a daily basis. The backend uses Firebase services for authentication and data storage.',
          imageURL: '/images/journal_App.webp',
          projectURL: 'https://journal-app-kelvindev.netlify.app/auth/login',
          gitHubURL: 'https://github.com/kelvincedcas/react_journal_app',
        },
        {
          title: 'Mobile App UI/UX Redesign',
          subtitle: 'Figma prototype',
          description:
            'A complete redesign of all user interfaces for the Elize CL educational assistant app. The project was developed using Figma, featuring a fully interactive prototype that demonstrates the complete app flow, along with the use of informative and preventive modal dialogs.',
          imageURL: '/images/figma_redesign.webp',
          projectURL:
            'https://www.figma.com/proto/y5tC3ZrgcP6AhSXCiJsl6V/Elize-UI%2FUX?node-id=0-1&t=Julo5qNGsSdzCRx0-1',
          gitHubURL:
            'https://www.figma.com/design/y5tC3ZrgcP6AhSXCiJsl6V/Elize-UI%2FUX?node-id=0-1&t=Julo5qNGsSdzCRx0-1',
        },
        {
          title: 'Weather App',
          subtitle: 'Frontend Development',
          description:
            'A small practice project that consumes the OpenWeather API. It requests the user’s location using the native JavaScript Geolocation API, sends the latitude and longitude, and retrieves relevant weather information for the user’s location.',
          imageURL: '/images/weather_App.webp',
          projectURL: 'https://weatherapp-kelvin.netlify.app/',
          gitHubURL: '',
        },
      ],
    },
    contact: {
      badge: 'Get in Touch',
      title: "Let's Create Something",
      titleHighlight: ' Amazing Together',
      description:
        "I'm always excited to connect with new people, discuss ideas, and explore opportunities. Whether you have a project in mind or just want to say hello, feel free to reach out!",
      formTitle: 'Send a Message',
      errorForm: 'All fields are required',
      nameLabel: 'Your Name',
      namePlaceholder: 'Kelvin Cedeño',
      emailLabel: 'Email Address',
      emailPlaceholder: 'kelvin@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Project inquiry',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendButton: 'Send Message',
      spinnerButton: 'Sending Message...',
      emailTitle: 'Email',
      locationTitle: 'Location',
      location: 'Bahía de Caráquez, Ecuador',
      available: 'Currently Available',
      availableText:
        "Open to freelance projects, consulting, and full-time opportunities. Let's discuss how I can help bring your ideas to life.",
      scheduleCall: 'Schedule a Call',
      connectWithMe: 'Connect with me',
      downloadResume: 'Download Resume',
      resumeSize: 'PDF • 1.4 MB',
    },
    footer: {
      craftedWith: 'Crafted with',
      andCoffee: 'and lots of coffee',
      backToTop: 'Back to top',
    },
    sonner: {
      successfulMessage: 'Message sended correctly 🚀',
      errorMessage: 'Error sending',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      education: 'Educación',
      projects: 'Proyectos',
      contact: 'Contacto',
      getInTouch: 'Contactar',
    },
    hero: {
      available: 'Disponible para nuevos proyectos',
      greeting: 'Hola, soy',
      roles: [
        'Desarrollador Frontend',
        'Diseñador UI/UX',
        'Solucionador de Problemas',
      ],
      description:
        'Creo experiencias digitales excepcionales que combinan visuales atractivos con una funcionalidad fluida. Especializado en construir aplicaciones web modernas que los usuarios disfrutan.',
      exploreWork: 'Explorar mi trabajo',
      letsConnect: 'Conectemos',
      stats: [
        { value: '1+', label: 'Años de Experiencia' },
        { value: '5+', label: 'Proyectos Completados' },
        { value: '1+', label: 'Empresas en las que trabajé' },
      ],
      scroll: 'Deslizar',
    },
    about: {
      badge: 'Sobre mí',
      title: 'Apasionado por Crear',
      titleHighlight: 'Excelencia Digital',
      photoPlaceholder: 'Kelvin.dev { }',
      coding: 'Coding...',
      paragraphs: [
        '¡Hola! Soy Ingeniero en Sistemas y Desarrollador Frontend con más de 2 años de experiencia creando aplicaciones web modernas y de alto rendimiento usando React. Me apasiona construir interfaces limpias e intuitivas que no solo se vean bien, sino que también estén basadas en fundamentos sólidos y escalables.',
        'A lo largo de mi carrera, he ampliado mis habilidades más allá del frontend, adquiriendo experiencia en diseño UI/UX, desarrollo backend y arquitectura de aplicaciones. Esto me permite abordar los proyectos desde una perspectiva integral, asegurando que cada detalle contribuya a una experiencia de usuario fluida.',
        'Me motiva el desafío de resolver problemas complejos con soluciones eficientes y escalables. Disfruto transformar ideas en productos digitales confiables y mejorar constantemente para crear soluciones que realmente generen impacto.',
      ],
      highlights: [
        {
          title: 'Código Limpio',
          description:
            'Escribiendo código mantenible y escalable que perdura en el tiempo',
        },
        {
          title: 'Enfocado en el Diseño',
          description:
            'Creando interfaces que son tanto atractivas como intuitivas',
        },
        {
          title: 'Solucionador de Problemas',
          description:
            'Transformando desafíos complejos en soluciones elegantes',
        },
        {
          title: 'Aprendizaje Constante',
          description:
            'Explorando continuamente nuevas tecnologías y metodologías',
        },
      ],
    },
    skills: {
      badge: 'Habilidades y Experiencia',
      title: 'Tecnologías que',
      titleHighlight: ' Domino',
      categories: [
        {
          title: 'Frontend',
          skills: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 95 },
          ],
        },
        {
          title: 'Backend',
          skills: [
            { name: 'Node.js', level: 88 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'GraphQL', level: 78 },
          ],
        },
        {
          title: 'Diseño',
          skills: [
            { name: 'Figma', level: 90 },
            { name: 'Diseño UI/UX', level: 88 },
            { name: 'Prototipado', level: 85 },
          ],
        },
        {
          title: 'Herramientas y Otros',
          skills: [
            { name: 'Git / GitHub', level: 95 },
            { name: 'Docker', level: 75 },
            { name: 'CI/CD', level: 80 },
          ],
        },
      ],
    },
    education: {
      badge: 'Formación',
      title: 'Educación y',
      titleHighlight: ' Trayectoria de Aprendizaje',
      formalEducation: 'Educación Formal',
      coursesTitle: 'Cursos y Certificaciones',
      educationData: [
        {
          title: 'Ingeniero en Sistemas Informáticos',
          institution: 'Universidad Técnica de Manabí',
          period: '2018 - 2023',
          description:
            'Enfocado en ingeniería de software, desarrollo de aplicaciones web escalables, modelado de bases de datos y arquitectura de software, con una sólida base en algoritmos y diseño de sistemas.',
          highlights: ['Proyecto web para facultad'],
        },
      ],
      coursesData: [
        {
          title: 'React experto',
          platform: 'Dev/talles',
          year: '2025',
        },
        {
          title: 'React con TypeScript – Guía completa',
          platform: 'Udemy',
          year: '2025',
        },
        {
          title: 'Full Stack Node.js – React – TypeScript, Express',
          platform: 'Udemy',
          year: '2025',
        },
        {
          title: 'JavaScript Moderno',
          platform: 'Udemy',
          year: '2024',
        },
        {
          title: 'Especialización en Diseño UI/UX',
          platform: 'Udemy',
          year: '2023',
        },
        {
          title: 'AWS Certified Developer Associate DVA-C02',
          platform: 'Udemy',
          year: '2023',
        },
      ],
    },
    projects: {
      badge: 'Portafolio',
      title: 'Proyectos',
      titleHighlight: ' Destacados',
      description:
        'Una colección de proyectos que muestran mis habilidades en diseño, desarrollo y resolución de problemas en distintos dominios.',
      filters: ['Todos', 'Web', 'Móvil', 'IA/ML'],
      projectPreview: 'League of Legends SoloQ Challenge',
      viewLive: 'Ver en vivo',
      sourceCode: 'Código fuente',
      moreProjects: 'Más proyectos',
      projectsData: [
        {
          title: 'Sitio Web de Torneo LoL',
          subtitle: 'Desarrollo Full-Stack',
          description:
            'Un sitio web moderno diseñado para seguir paso a paso el progreso de un torneo local de League of Legends. Se conecta con la API oficial de Riot y obtiene datos de jugadores en tiempo real.',
          imageURL: '/images/soloQ.webp',
          projectURL: 'https://www.soloq2026.lol/',
          gitHubURL: 'https://github.com/kelvincedcas/lol-tournament',
        },
        {
          title: 'Panel de Gestión de Pacientes',
          subtitle: 'Desarrollo Full-Stack',
          description:
            'Un sistema completo de gestión de pacientes veterinarios desarrollado con el stack MERN, que incluye autenticación, recuperación de contraseña por correo, confirmación de cuentas y más.',
          imageURL: '/images/APV_Mern.webp',
          projectURL: 'https://apv-mern-kelvindev.netlify.app/',
          gitHubURL: 'https://github.com/kelvincedcas/apv_frontend_deploy',
        },
        {
          title: 'Plataforma E-commerce',
          subtitle: 'Desarrollo Frontend',
          description:
            'Una solución de comercio electrónico moderna y escalable que ofrece gestión de inventario mediante un panel administrativo, manejo de parámetros de consulta y uso de Zustand, entre otros.',
          imageURL: '/images/APV_Mern.webp',
          projectURL: 'https://apv-mern-kelvindev.netlify.app/',
          gitHubURL: 'https://github.com/kelvincedcas/apv_frontend_deploy',
        },
        {
          title: 'Calendar App',
          subtitle: 'Desarrollo Full-Stack',
          description:
            'Una aplicación moderna diseñada para ayudarte a organizar tus eventos y tareas pendientes. Calendar App está construida con el stack MERN y utiliza librerías como Flowbite React, Schedule Calendar y más.',
          imageURL: '/images/calendarApp.webp',
          projectURL: 'https://calendarapp-kelvindev.netlify.app/auth/login',
          gitHubURL: 'https://github.com/kelvincedcas/CalendarApp-Frontend',
        },
        {
          title: 'Journal App',
          subtitle: 'Desarrollo Full-Stack',
          description:
            'Una aplicación moderna diseñada para llevar un registro de todo lo que necesitas anotar a diario. El backend utiliza servicios de Firebase para autenticación y almacenamiento de datos.',
          imageURL: '/images/journal_App.webp',
          projectURL: 'https://journal-app-kelvindev.netlify.app/auth/login',
          gitHubURL: 'https://github.com/kelvincedcas/react_journal_app',
        },
        {
          title: 'Rediseño UI/UX de App Móvil',
          subtitle: 'Prototipo en Figma',
          description:
            'Un rediseño completo de todas las interfaces de usuario de la app del asistente educativo Elize CL. El proyecto fue desarrollado en Figma, con un prototipo totalmente interactivo que muestra el flujo completo de la aplicación e incluye modales informativos y preventivos.',
          imageURL: '/images/figma_redesign.webp',
          projectURL:
            'https://www.figma.com/proto/y5tC3ZrgcP6AhSXCiJsl6V/Elize-UI%2FUX',
          gitHubURL:
            'https://www.figma.com/design/y5tC3ZrgcP6AhSXCiJsl6V/Elize-UI%2FUX',
        },
        {
          title: 'Weather App',
          subtitle: 'Desarrollo Frontend',
          description:
            'Un pequeño proyecto de práctica que consume la API de OpenWeather. Utiliza la API nativa de geolocalización de JavaScript para obtener la ubicación del usuario y mostrar información relevante del clima según la latitud y longitud.',
          imageURL: '/images/weather_App.webp',
          projectURL: 'https://weatherapp-kelvin.netlify.app/',
          gitHubURL: '',
        },
      ],
    },
    contact: {
      badge: 'Contacto',
      title: 'Creemos Algo',
      titleHighlight: ' Increíble Juntos',
      description:
        'Siempre estoy entusiasmado por conectar con nuevas personas, compartir ideas y explorar oportunidades. Ya sea que tengas un proyecto en mente o solo quieras saludar, ¡no dudes en contactarme!',
      formTitle: 'Enviar un Mensaje',
      errorForm: 'Todos los campos son obligatorios',
      nameLabel: 'Tu Nombre',
      namePlaceholder: 'Kelvin Cedeño',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'kelvin@ejemplo.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Consulta de proyecto',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      sendButton: 'Enviar Mensaje',
      spinnerButton: 'Enviando Mensaje...',
      emailTitle: 'Correo',
      locationTitle: 'Ubicación',
      location: 'Bahía de Caráquez, Ecuador',
      available: 'Actualmente Disponible',
      availableText:
        'Disponible para proyectos freelance, consultoría y oportunidades de tiempo completo. Hablemos de cómo puedo ayudarte a hacer realidad tus ideas.',
      scheduleCall: 'Agendar una Llamada',
      connectWithMe: 'Conecta conmigo',
      downloadResume: 'Descargar CV',
      resumeSize: 'PDF • 1.4 MB',
    },
    footer: {
      craftedWith: 'Hecho con',
      andCoffee: 'y mucho café',
      backToTop: 'Volver arriba',
    },
    sonner: {
      successfulMessage: 'Mensaje enviado correctamente 🚀',
      errorMessage: 'Error al enviar',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
