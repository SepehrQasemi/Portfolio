(() => {
  const STORAGE_KEY = "portfolio-language";
  const SUPPORTED_LANGUAGES = ["en", "fr"];
  const DEFAULT_LANGUAGE = "en";

  const translations = {
    en: {
      common: {
        nav: {
          home: "Home",
          projects: "Projects",
          work: "Work",
          certificates: "Certificates",
          mainNavigation: "Main navigation",
        },
        language: "Language",
        languageSwitcher: "Switch language",
        buttons: {
          exploreProjects: "Explore Projects",
          openCourseWork: "Open Coursework",
          openAtaProfile: "Open ATA CRM Profile",
          portfolioRepository: "Portfolio Repository",
          viewProjectProfile: "View Project Profile",
          viewWorkProfile: "View Work Profile",
          viewCertificate: "View Certificate",
          backToWork: "Back to Work",
          downloadAll: "Download All",
          downloadFile: "Download File",
          openAnalysisPdf: "Open Analysis PDF",
          openScreenshotPack: "Open Screenshot Pack",
          openPdf: "Open PDF",
          openDocx: "Open DOCX",
          openLiveDemo: "Open Live Demo",
          openRepository: "Open Repository",
        },
        labels: {
          email: "Email",
          linkedin: "LinkedIn",
          issuer: "Issuer",
          date: "Date",
        },
        footer: {
          repo: "Portfolio Repository",
        },
      },
      pages: {
        home: {
          meta: {
            title: "Home - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Software Portfolio",
            title: "Clean projects, clear outcomes.",
            intro:
              "I build practical software for real workflows. This portfolio highlights ATA CRM, my production CRM project, alongside selected MIAGE coursework deliverables.",
          },
          featured: {
            kicker: "Featured",
            title: "ATA CRM",
            description:
              "B2B CRM for food products and additives trading, covering companies, contacts, leads, tasks, emails, and analytics.",
            tag1: "Next.js",
            tag2: "Supabase",
            tag3: "Production Demo",
          },
          contact: {
            kicker: "Contact",
            title: "Get in touch",
          },
        },
        projects: {
          meta: {
            title: "Projects - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Project Library",
            title: "Projects",
            intro:
              "Focused project profiles with live links, architecture notes, and supporting proof documents.",
          },
          card: {
            kicker: "Project 01",
            title: "ATA CRM v2",
            description:
              "End-to-end CRM platform for B2B sales operations in the food ingredients trade.",
            tag1: "Version 2",
            tag2: "Live Demo",
            tag3: "RBAC",
            tag4: "Email Workflows",
          },
        },
        work: {
          meta: {
            title: "Work - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Work Library",
            title: "Work",
            intro:
              "Dedicated work profiles with context, deliverables, and supporting files for each coursework submission.",
          },
          session7: {
            kicker: "Assignment",
            title: "Session 7: Security and Digital Communication",
            description:
              "Session notes focused on digital communication security, cyber risks, phishing, account protection, GDPR, and secure communication practices.",
            tag1: "Cybersecurity",
            tag2: "Communication",
            tag3: "DOCX Pack",
          },
          session6: {
            kicker: "Assignment",
            title: "Session 6: Funnel Marketing and Performance Indicators (KPI)",
            description:
              "Session pack covering funnel marketing theory, KPI concepts, practice material, the student exercise, spreadsheet work, and the corrected subject.",
            tag1: "Digital Marketing",
            tag2: "Course Pack",
            tag3: "PDF + ODS",
          },
          odoo: {
            kicker: "Assignment",
            title: "Odoo Workflow Assignment",
            description:
              "Practical work on procurement, inventory, sales process flow, and invoicing logic.",
            tag1: "ERP Workflow",
            tag2: "Business Process",
            tag3: "PDF + DOCX",
          },
          hubspot: {
            kicker: "Assignment",
            title: "HubSpot CRM Discovery Assignment",
            description:
              "CRM discovery task documented with screenshot evidence and concise process analysis.",
            tag1: "CRM Practice",
            tag2: "Process Analysis",
            tag3: "Screenshots",
          },
        },
        certificates: {
          meta: {
            title: "Certificates - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Credentials",
            title: "Certificates",
            intro:
              "A curated record of technical training, English proficiency, and competition distinctions, organized as portfolio-ready proof documents with direct certificate access.",
          },
          sections: {
            oneEyebrow: "Section 1",
            oneTitle: "Digital and Technical Certificates",
            twoEyebrow: "Section 2",
            twoTitle: "Language Certificate",
            threeEyebrow: "Section 3",
            threeTitle: "Competitions and Distinctions",
          },
          instagram: {
            kicker: "Digital Certificate",
            title: "Specialized Instagram Admin",
            description:
              "Certificate of completion for a 30-hour training course focused on Instagram administration, account management, and practical social media usage. Completed with a final score of 100/100.",
            tag1: "Instagram administration",
            tag2: "Social media management",
            tag3: "Digital communication",
            tag4: "Online presence",
          },
          network: {
            kicker: "Technical Certificate",
            title: "Network+",
            description:
              "Certificate of completion for a 30-hour Network+ training course, completed with a final score of 92/100. The course strengthened my understanding of networking fundamentals and technical infrastructure.",
            tag1: "Networking fundamentals",
            tag2: "IT infrastructure",
            tag3: "Technical systems",
            tag4: "Network basics",
          },
          ielts: {
            kicker: "Language Certificate",
            title: "IELTS Academic - Band 7.0 (C1)",
            description:
              "Official English language proficiency certificate with an Overall Band Score of 7.0 and CEFR level C1.",
            tag1: "English proficiency",
            tag2: "Academic English",
            tag3: "Communication",
          },
          modcup: {
            kicker: "Competition Award",
            title: "1st Place: Innovative Ideas Category, MODCUP Festival",
            description:
              "Awarded first place in the Innovative Ideas category during the MODCUP student competition festival held at Iran University of Science and Technology.",
            tag1: "Innovation",
            tag2: "Competition experience",
            tag3: "Creative problem-solving",
            tag4: "Project presentation",
          },
          aerospace7: {
            kicker: "Competition Award",
            title: "2nd Place: 7th Aerospace National Student Competitions",
            description:
              "Awarded second place in the Model Hovercraft League during the 7th Aerospace National Student Competitions.",
            tag1: "Teamwork",
            tag2: "Technical problem-solving",
            tag3: "Competition experience",
          },
          aerospace8: {
            kicker: "Competition Participation",
            title: "Participation: 8th Aerospace National Student Competitions",
            description:
              "Certificate of participation in the 8th Aerospace National Student Competitions in the hovercraft category.",
            tag1: "Participation",
            tag2: "Engineering competition",
            tag3: "Teamwork",
          },
          sharif: {
            kicker: "Competition Award",
            title: "3rd Place: Sharif / CEAS Aerospace Competition",
            description:
              "Translated certificate documenting third place in a student aerospace systems competition.",
            tag1: "Competition experience",
            tag2: "Teamwork",
            tag3: "Technical engagement",
          },
        },
        "project-ata-crm": {
          meta: {
            title: "ATA CRM v2 - Project Profile",
          },
          hero: {
            eyebrow: "Project Profile",
            title: "ATA CRM v2",
            intro:
              "Production-oriented CRM for food ingredients trading, built to manage companies, contacts, products, leads, tasks, and controlled email workflows.",
            tag1: "Version 2",
            tag2: "Next.js 16",
            tag3: "Supabase",
            tag4: "Vercel",
            tag5: "GitHub Actions",
          },
          problem: {
            kicker: "Problem",
            title: "Fragmented sales operations",
            description:
              "Commercial teams needed one reliable workspace for lead follow-up, profile-level customer data, and role-based collaboration without manual spreadsheets.",
          },
          solution: {
            kicker: "Solution",
            title: "Unified CRM workflow",
            description:
              "ATA CRM centralizes pipeline flow, product-company relationships, scoped user permissions, and daily execution tooling in a single interface.",
          },
          features: {
            kicker: "Core Features",
            title: "What is implemented",
            item1: "Lead pipeline with weighted forecast and negotiation outcomes",
            item2: "Company, contact, product, and category profile pages",
            item3: "Task visibility model with private and shared tasks",
            item4: "Manual email with recipient suggestions and analytics scopes",
            item5: "Role-based controls for standard, manager, and admin users",
          },
          demo: {
            kicker: "Demo Flow",
            title: "Suggested walkthrough",
            item1: "Open company and contact profiles.",
            item2: "Create a lead, move stages, and finalize win or loss.",
            item3: "Create a linked task and validate visibility.",
            item4: "Send a manual email and inspect personal analytics.",
            item5: "Review dashboard forecast and KPI updates.",
          },
          screenshots: {
            title: "Screenshots",
            dashboard: "Dashboard",
            dashboardAlt: "ATA CRM version 2 dashboard screen",
            leads: "Leads and Pipeline",
            leadsAlt: "ATA CRM version 2 leads screen",
            companies: "Companies",
            companiesAlt: "ATA CRM version 2 companies screen",
            products: "Products",
            productsAlt: "ATA CRM version 2 products screen",
            emails: "Emails",
            emailsAlt: "ATA CRM version 2 emails screen",
            login: "Login",
            loginAlt: "ATA CRM version 2 login screen in English",
          },
          docs: {
            kicker: "Technical Docs",
            title: "Documentation",
            architecture: "Architecture diagram",
            domain: "Domain UML",
            useCase: "Use-case UML",
          },
        },
        "work-hubspot": {
          meta: {
            title: "HubSpot CRM Discovery Assignment - Work Profile",
          },
          hero: {
            eyebrow: "Work Profile",
            title: "HubSpot CRM Discovery Assignment",
            intro:
              "CRM exploration assignment documented with screenshot evidence and a concise written analysis of the observed workflow and interface structure.",
            tag1: "CRM Practice",
            tag2: "Process Analysis",
            tag3: "Screenshot Evidence",
          },
          focus: {
            kicker: "Assignment Focus",
            title: "CRM discovery through observation",
            description:
              "The work captures a guided exploration of HubSpot features, screens, and process cues to understand how CRM activity is structured in practice.",
          },
          evidence: {
            kicker: "Evidence Set",
            title: "Analysis plus visual proof",
            description:
              "The profile combines the short analysis PDF with the screenshot trail, so the written observations stay linked to the actual interface evidence.",
          },
          documented: {
            kicker: "What Is Documented",
            title: "Observed workflow elements",
            item1: "CRM screens used during the practical exercise",
            item2: "Navigation flow and interface observations",
            item3: "Evidence-based notes from the analysis document",
            item4: "Concrete screenshots tied to the task sequence",
          },
          files: {
            kicker: "Included Files",
            title: "Coursework package",
            item1: "Analysis PDF",
            item2: "HTML screenshot pack",
            item3: "Nine screenshot files stored in the same deliverable folder",
          },
          screenshots: {
            title: "Screenshot Highlights",
            shot1: "Screenshot 1",
            shot1Alt: "HubSpot assignment screenshot 1",
            shot2: "Screenshot 2",
            shot2Alt: "HubSpot assignment screenshot 2",
            shot3: "Screenshot 3",
            shot3Alt: "HubSpot assignment screenshot 3",
            shot4: "Screenshot 4",
            shot4Alt: "HubSpot assignment screenshot 4",
            shot5: "Screenshot 5",
            shot5Alt: "HubSpot assignment screenshot 5",
            shot6: "Screenshot 6",
            shot6Alt: "HubSpot assignment screenshot 6",
            shot7: "Screenshot 7",
            shot7Alt: "HubSpot assignment screenshot 7",
            shot8: "Screenshot 8",
            shot8Alt: "HubSpot assignment screenshot 8",
            shot9: "Screenshot 9",
            shot9Alt: "HubSpot assignment screenshot 9",
          },
        },
        "work-odoo": {
          meta: {
            title: "Odoo Workflow Assignment - Work Profile",
          },
          hero: {
            eyebrow: "Work Profile",
            title: "Odoo Workflow Assignment",
            intro:
              "Practical ERP coursework focused on procurement, inventory operations, sales flow, and invoicing logic inside an integrated business process.",
            tag1: "ERP Workflow",
            tag2: "Business Process",
            tag3: "PDF + DOCX",
          },
          scope: {
            kicker: "Business Scope",
            title: "Operational workflow mapping",
            description:
              "The work follows how a company moves from procurement to stock control, sales execution, and invoice generation in one ERP environment.",
          },
          deliverables: {
            kicker: "Deliverables",
            title: "Submission and editable source",
            description:
              "Both the exported PDF and the original DOCX file are kept together to preserve the submitted version and the underlying editable document.",
          },
          topics: {
            kicker: "Topics Covered",
            title: "Functional areas",
            item1: "Procurement and purchasing workflow",
            item2: "Inventory movement and stock visibility",
            item3: "Sales order progression and process logic",
            item4: "Invoice generation within the ERP cycle",
          },
          value: {
            kicker: "Assignment Value",
            title: "What the work demonstrates",
            item1: "Understanding of end-to-end ERP process chaining",
            item2: "Ability to connect business actions to system modules",
            item3: "Clear documentation of operational and accounting steps",
            item4: "Course-aligned reasoning around enterprise workflow structure",
          },
          files: {
            kicker: "Included Files",
            title: "Coursework package",
            item1: "PDF submission",
            item2: "Editable DOCX source",
          },
        },
        "work-session-6": {
          meta: {
            title: "Session 6 - Work Profile",
          },
          hero: {
            eyebrow: "Work Profile",
            title: "Session 6: Funnel Marketing and Performance Indicators (KPI)",
            intro:
              "Session 6 resource pack bringing together the course sheet, funnel marketing notes, KPI material, the student TD and QCM, the spreadsheet exercise, and the corrected subject.",
            tag1: "Digital Marketing",
            tag2: "Course Materials",
            tag3: "TD + QCM",
            tag4: "PDF + ODS",
          },
          scope: {
            kicker: "Session Scope",
            title: "Funnel theory and performance measurement",
            description:
              "This session combines conceptual material on funnel marketing with KPI-focused documents, hands-on practice, and the final corrected subject.",
          },
          deliverables: {
            kicker: "Deliverables",
            title: "Complete session bundle",
            description:
              "All supporting files for Session 6 are grouped in one place so the course notes, exercise files, spreadsheet, and correction stay connected inside the portfolio.",
          },
          content: {
            kicker: "Included Content",
            title: "What the session covers",
            item1: "Course sheet and explanation of why funnel marketing matters",
            item2: "Funnel creation material and KPI reference documents",
            item3: "Student TD and QCM support file for Session 6",
            item4: "KPI spreadsheet work in editable ODS format",
          },
          package: {
            kicker: "Work Package",
            title: "How the resources are organized",
            item1: "Theoretical PDFs support the conceptual side of the session",
            item2: "The TD and spreadsheet provide the practical execution layer",
            item3: "The corrected subject closes the loop with a reference answer set",
            item4: "All files are linked directly from this profile for quick review",
          },
          files: {
            title: "Session Files",
            fiche: {
              kicker: "Theory",
              title: "Course Sheet V_E",
              description:
                "Core course sheet for Session 6, useful as a compact reference for the main funnel marketing and KPI concepts discussed in class.",
              tag1: "PDF",
              tag2: "Course Sheet",
            },
            why: {
              kicker: "Theory",
              title: "Why Study Funnel Marketing",
              description:
                "Explanatory support document focused on why funnel thinking matters for acquisition, qualification, conversion, and customer retention.",
              tag1: "PDF",
              tag2: "Concept Note",
            },
            creation: {
              kicker: "Method",
              title: "Funnel Marketing Creation",
              description:
                "Practical document dedicated to constructing a funnel marketing flow and understanding how stages are organized from visibility to conversion.",
              tag1: "PDF",
              tag2: "Workflow Design",
            },
            kpi: {
              kicker: "Reference",
              title: "KPI Indicators V_E",
              description:
                "KPI reference material covering the main performance indicators used to evaluate campaign quality, efficiency, and profitability.",
              tag1: "PDF",
              tag2: "KPI Reference",
            },
            td: {
              kicker: "Practice",
              title: "TD and QCM for Students",
              description:
                "Student exercise sheet combining guided work and QCM practice for applying the theory from the session in a structured format.",
              tag1: "PDF",
              tag2: "Student Exercise",
            },
            ods: {
              kicker: "Practice",
              title: "TP KPI V_E Spreadsheet",
              description:
                "Editable spreadsheet file for hands-on KPI work, intended for calculations, testing assumptions, and working through the practical exercise.",
              tag1: "ODS",
              tag2: "Editable File",
            },
            correction: {
              kicker: "Correction",
              title: "Corrected Subject",
              description:
                "Corrected subject used as the reference answer set for Session 6, useful for checking expected reasoning and validating the practical output.",
              tag1: "PDF",
              tag2: "Answer Key",
            },
          },
        },
        "work-session-7": {
          meta: {
            title: "Session 7 - Work Profile",
          },
          hero: {
            eyebrow: "Work Profile",
            title: "Session 7: Security and Digital Communication",
            intro:
              "Session 7 notes on secure digital communication, covering phishing, social engineering, account protection, legal obligations, and practical security habits for digital communication channels.",
            tag1: "Cybersecurity",
            tag2: "Digital Communication",
            tag3: "GDPR",
            tag4: "DOCX",
          },
          scope: {
            kicker: "Session Scope",
            title: "Security inside digital communication",
            description:
              "The document explains how everyday communication tools such as email, social networks, collaborative platforms, and messaging apps create concrete cybersecurity exposure for organizations.",
          },
          deliverable: {
            kicker: "Deliverable",
            title: "Session notes and reference material",
            description:
              "The attached DOCX acts as the core session resource, combining theory, threats, good practices, legal context, a case study, and certification ideas.",
          },
          themes: {
            kicker: "Covered Themes",
            title: "Core security topics",
            item1: "Phishing, social engineering, and account hijacking risks",
            item2: "Password hygiene, 2FA, secure networks, and software updates",
            item3: "Protection of sensitive information and least-privilege access",
            item4: "Digital communication tools as an organizational attack surface",
          },
          strategy: {
            kicker: "Strategic Angle",
            title: "Why the session matters",
            item1: "Links cybersecurity directly to brand image and communication trust",
            item2: "Introduces GDPR obligations and organizational accountability",
            item3: "Includes a phishing case study for classroom discussion",
            item4: "Ends with certification ideas that can be added to the portfolio",
          },
          files: {
            title: "Session Files",
            primary: {
              kicker: "Primary File",
              title: "Security and Digital Communication",
              description:
                "Main Session 7 document covering digital communication security, phishing detection, secure practices, legal context, and recommended certifications.",
              tag1: "DOCX",
              tag2: "Session Notes",
            },
          },
        },
        "hubspot-pack": {
          meta: {
            title: "HubSpot Assignment - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Course Deliverable",
            title: "HubSpot Discovery Assignment",
            intro:
              "Screenshot sequence and short analysis from the practical CRM exercise.",
          },
          screenshots: {
            title: "Screenshots",
            shot1: "Screenshot 1",
            shot1Alt: "HubSpot screenshot 1",
            shot2: "Screenshot 2",
            shot2Alt: "HubSpot screenshot 2",
            shot3: "Screenshot 3",
            shot3Alt: "HubSpot screenshot 3",
            shot4: "Screenshot 4",
            shot4Alt: "HubSpot screenshot 4",
            shot5: "Screenshot 5",
            shot5Alt: "HubSpot screenshot 5",
            shot6: "Screenshot 6",
            shot6Alt: "HubSpot screenshot 6",
            shot7: "Screenshot 7",
            shot7Alt: "HubSpot screenshot 7",
            shot8: "Screenshot 8",
            shot8Alt: "HubSpot screenshot 8",
            shot9: "Screenshot 9",
            shot9Alt: "HubSpot screenshot 9",
          },
        },
      },
    },
    fr: {
      common: {
        nav: {
          home: "Accueil",
          projects: "Projets",
          work: "Travaux",
          certificates: "Certificats",
          mainNavigation: "Navigation principale",
        },
        language: "Langue",
        languageSwitcher: "Changer de langue",
        buttons: {
          exploreProjects: "Explorer les projets",
          openCourseWork: "Ouvrir les travaux du cours",
          openAtaProfile: "Ouvrir la fiche ATA CRM",
          portfolioRepository: "Dépôt du portfolio",
          viewProjectProfile: "Voir la fiche projet",
          viewWorkProfile: "Voir la fiche de travail",
          viewCertificate: "Voir le certificat",
          backToWork: "Retour aux travaux",
          downloadAll: "Tout télécharger",
          downloadFile: "Télécharger le fichier",
          openAnalysisPdf: "Ouvrir l'analyse PDF",
          openScreenshotPack: "Ouvrir la galerie de captures",
          openPdf: "Ouvrir le PDF",
          openDocx: "Ouvrir le DOCX",
          openLiveDemo: "Ouvrir la démo en ligne",
          openRepository: "Ouvrir le dépôt",
        },
        labels: {
          email: "E-mail",
          linkedin: "LinkedIn",
          issuer: "Organisme",
          date: "Date",
        },
        footer: {
          repo: "Dépôt du portfolio",
        },
      },
      pages: {
        home: {
          meta: {
            title: "Accueil - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Portfolio logiciel",
            title: "Des projets propres, des résultats clairs.",
            intro:
              "Je conçois des logiciels pratiques pour des usages réels. Ce portfolio met en avant ATA CRM, mon projet CRM en production, ainsi qu'une sélection de livrables de cours du master MIAGE.",
          },
          featured: {
            kicker: "À la une",
            title: "ATA CRM",
            description:
              "CRM B2B pour le commerce de produits et d'additifs alimentaires, avec gestion des entreprises, contacts, prospects, tâches, e-mails et analyses.",
            tag1: "Next.js",
            tag2: "Supabase",
            tag3: "Démo en production",
          },
          contact: {
            kicker: "Contact",
            title: "Me contacter",
          },
        },
        projects: {
          meta: {
            title: "Projets - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Bibliothèque de projets",
            title: "Projets",
            intro:
              "Des fiches projet ciblées avec liens en ligne, notes d'architecture et documents de preuve.",
          },
          card: {
            kicker: "Projet 01",
            title: "ATA CRM v2",
            description:
              "Plateforme CRM de bout en bout pour les opérations commerciales B2B dans le secteur des ingrédients alimentaires.",
            tag1: "Version 2",
            tag2: "Démo en ligne",
            tag3: "RBAC",
            tag4: "Workflows e-mail",
          },
        },
        work: {
          meta: {
            title: "Travaux - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Bibliothèque des travaux",
            title: "Travaux",
            intro:
              "Des fiches de travaux dédiées avec contexte, livrables et fichiers d'appui pour chaque remise de cours.",
          },
          session7: {
            kicker: "Devoir",
            title: "Séance 7 : Sécurité et communication digitale",
            description:
              "Notes de séance centrées sur la sécurité de la communication digitale, les cyber-risques, le phishing, la protection des comptes, le RGPD et les bonnes pratiques de communication sécurisée.",
            tag1: "Cybersécurité",
            tag2: "Communication",
            tag3: "Pack DOCX",
          },
          session6: {
            kicker: "Devoir",
            title: "Séance 6 : Funnel marketing et indicateurs de performance (KPI)",
            description:
              "Pack de séance couvrant la théorie du funnel marketing, les concepts KPI, les supports pratiques, l'exercice étudiant, le travail sur tableur et le sujet corrigé.",
            tag1: "Marketing digital",
            tag2: "Pack de cours",
            tag3: "PDF + ODS",
          },
          odoo: {
            kicker: "Devoir",
            title: "Travail sur le workflow Odoo",
            description:
              "Travail pratique sur l'approvisionnement, l'inventaire, le flux de vente et la logique de facturation.",
            tag1: "Workflow ERP",
            tag2: "Processus métier",
            tag3: "PDF + DOCX",
          },
          hubspot: {
            kicker: "Devoir",
            title: "Travail de découverte du CRM HubSpot",
            description:
              "Travail de découverte CRM documenté par des captures d'écran et une analyse concise du processus.",
            tag1: "Pratique CRM",
            tag2: "Analyse de processus",
            tag3: "Captures d'écran",
          },
        },
        certificates: {
          meta: {
            title: "Certificats - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Références",
            title: "Certificats",
            intro:
              "Une sélection structurée de formations techniques, de preuve de niveau d'anglais et de distinctions en concours, organisée comme un ensemble de justificatifs prêts pour un portfolio.",
          },
          sections: {
            oneEyebrow: "Section 1",
            oneTitle: "Certificats numériques et techniques",
            twoEyebrow: "Section 2",
            twoTitle: "Certificat de langue",
            threeEyebrow: "Section 3",
            threeTitle: "Concours et distinctions",
          },
          instagram: {
            kicker: "Certificat numérique",
            title: "Administrateur Instagram spécialisé",
            description:
              "Certificat de réussite pour une formation de 30 heures consacrée à l'administration d'Instagram, à la gestion de compte et aux usages pratiques des réseaux sociaux. Formation validée avec la note finale de 100/100.",
            tag1: "Administration Instagram",
            tag2: "Gestion des réseaux sociaux",
            tag3: "Communication digitale",
            tag4: "Présence en ligne",
          },
          network: {
            kicker: "Certificat technique",
            title: "Network+",
            description:
              "Certificat de réussite pour une formation Network+ de 30 heures, validée avec la note finale de 92/100. Cette formation a renforcé ma compréhension des fondamentaux réseau et de l'infrastructure technique.",
            tag1: "Fondamentaux réseau",
            tag2: "Infrastructure IT",
            tag3: "Systèmes techniques",
            tag4: "Bases réseau",
          },
          ielts: {
            kicker: "Certificat de langue",
            title: "IELTS Academic - Band 7.0 (C1)",
            description:
              "Certificat officiel de maîtrise de l'anglais avec un score global de 7.0 et un niveau C1 selon le CECRL.",
            tag1: "Maîtrise de l'anglais",
            tag2: "Anglais académique",
            tag3: "Communication",
          },
          modcup: {
            kicker: "Distinction en concours",
            title: "1re place : catégorie idées innovantes, festival MODCUP",
            description:
              "Récompense de première place dans la catégorie Idées innovantes lors du festival de concours étudiant MODCUP organisé à l'Université iranienne des sciences et technologies.",
            tag1: "Innovation",
            tag2: "Expérience de concours",
            tag3: "Résolution créative de problèmes",
            tag4: "Présentation de projet",
          },
          aerospace7: {
            kicker: "Distinction en concours",
            title: "2e place : 7es compétitions nationales étudiantes d'aérospatiale",
            description:
              "Récompense de deuxième place dans la ligue Model Hovercraft lors des 7es compétitions nationales étudiantes d'aérospatiale.",
            tag1: "Travail en équipe",
            tag2: "Résolution technique de problèmes",
            tag3: "Expérience de concours",
          },
          aerospace8: {
            kicker: "Participation à un concours",
            title: "Participation : 8es compétitions nationales étudiantes d'aérospatiale",
            description:
              "Certificat de participation aux 8es compétitions nationales étudiantes d'aérospatiale dans la catégorie hovercraft.",
            tag1: "Participation",
            tag2: "Concours d'ingénierie",
            tag3: "Travail en équipe",
          },
          sharif: {
            kicker: "Distinction en concours",
            title: "3e place : concours aérospatial Sharif / CEAS",
            description:
              "Certificat traduit attestant une troisième place dans un concours étudiant de systèmes aérospatiaux.",
            tag1: "Expérience de concours",
            tag2: "Travail en équipe",
            tag3: "Implication technique",
          },
        },
        "project-ata-crm": {
          meta: {
            title: "ATA CRM v2 - Fiche projet",
          },
          hero: {
            eyebrow: "Fiche projet",
            title: "ATA CRM v2",
            intro:
              "CRM orienté production pour le commerce d'ingrédients alimentaires, conçu pour gérer les entreprises, contacts, produits, prospects, tâches et workflows e-mail contrôlés.",
            tag1: "Version 2",
            tag2: "Next.js 16",
            tag3: "Supabase",
            tag4: "Vercel",
            tag5: "GitHub Actions",
          },
          problem: {
            kicker: "Problème",
            title: "Des opérations commerciales fragmentées",
            description:
              "Les équipes commerciales avaient besoin d'un espace fiable pour le suivi des prospects, les données clients au niveau du profil et la collaboration par rôles, sans dépendre de tableurs manuels.",
          },
          solution: {
            kicker: "Solution",
            title: "Un workflow CRM unifié",
            description:
              "ATA CRM centralise le flux du pipeline, les relations produits-entreprises, les permissions utilisateurs ciblées et les outils d'exécution quotidienne dans une seule interface.",
          },
          features: {
            kicker: "Fonctionnalités clés",
            title: "Ce qui est implémenté",
            item1: "Pipeline de prospects avec prévision pondérée et issues de négociation",
            item2: "Pages de profil pour entreprises, contacts, produits et catégories",
            item3: "Modèle de visibilité des tâches avec tâches privées et partagées",
            item4: "E-mail manuel avec suggestions de destinataires et périmètres analytiques",
            item5: "Contrôles par rôle pour les utilisateurs standard, manager et administrateur",
          },
          demo: {
            kicker: "Parcours de démo",
            title: "Visite conseillée",
            item1: "Ouvrir les profils entreprise et contact.",
            item2: "Créer un prospect, déplacer les étapes et finaliser un gain ou une perte.",
            item3: "Créer une tâche liée et vérifier sa visibilité.",
            item4: "Envoyer un e-mail manuel et consulter les analyses personnelles.",
            item5: "Vérifier les prévisions du tableau de bord et les mises à jour KPI.",
          },
          screenshots: {
            title: "Captures d'écran",
            dashboard: "Tableau de bord",
            dashboardAlt: "Écran tableau de bord ATA CRM version 2",
            leads: "Prospects et pipeline",
            leadsAlt: "Écran prospects ATA CRM version 2",
            companies: "Entreprises",
            companiesAlt: "Écran entreprises ATA CRM version 2",
            products: "Produits",
            productsAlt: "Écran produits ATA CRM version 2",
            emails: "E-mails",
            emailsAlt: "Écran e-mails ATA CRM version 2",
            login: "Connexion",
            loginAlt: "Écran de connexion ATA CRM version 2 en anglais",
          },
          docs: {
            kicker: "Documentation technique",
            title: "Documentation",
            architecture: "Diagramme d'architecture",
            domain: "UML du domaine",
            useCase: "UML des cas d'usage",
          },
        },
        "work-hubspot": {
          meta: {
            title: "Travail de découverte du CRM HubSpot - Fiche de travail",
          },
          hero: {
            eyebrow: "Fiche de travail",
            title: "Travail de découverte du CRM HubSpot",
            intro:
              "Travail d'exploration CRM documenté par des captures d'écran et une analyse écrite concise du workflow observé et de la structure de l'interface.",
            tag1: "Pratique CRM",
            tag2: "Analyse de processus",
            tag3: "Preuves visuelles",
          },
          focus: {
            kicker: "Angle du devoir",
            title: "Découverte CRM par observation",
            description:
              "Le travail capture une exploration guidée des fonctionnalités, des écrans et des repères de processus de HubSpot afin de comprendre comment l'activité CRM est structurée en pratique.",
          },
          evidence: {
            kicker: "Jeu de preuves",
            title: "Analyse et preuves visuelles",
            description:
              "La fiche réunit le PDF d'analyse court et la série de captures, afin que les observations rédigées restent reliées aux preuves visibles de l'interface.",
          },
          documented: {
            kicker: "Ce qui est documenté",
            title: "Éléments de workflow observés",
            item1: "Les écrans CRM utilisés pendant l'exercice pratique",
            item2: "Le flux de navigation et les observations d'interface",
            item3: "Des notes fondées sur les preuves du document d'analyse",
            item4: "Des captures concrètes liées à la séquence de la tâche",
          },
          files: {
            kicker: "Fichiers inclus",
            title: "Pack de rendu",
            item1: "PDF d'analyse",
            item2: "Galerie HTML de captures",
            item3: "Neuf fichiers de captures stockés dans le même dossier de rendu",
          },
          screenshots: {
            title: "Captures marquantes",
            shot1: "Capture 1",
            shot1Alt: "Capture 1 du devoir HubSpot",
            shot2: "Capture 2",
            shot2Alt: "Capture 2 du devoir HubSpot",
            shot3: "Capture 3",
            shot3Alt: "Capture 3 du devoir HubSpot",
            shot4: "Capture 4",
            shot4Alt: "Capture 4 du devoir HubSpot",
            shot5: "Capture 5",
            shot5Alt: "Capture 5 du devoir HubSpot",
            shot6: "Capture 6",
            shot6Alt: "Capture 6 du devoir HubSpot",
            shot7: "Capture 7",
            shot7Alt: "Capture 7 du devoir HubSpot",
            shot8: "Capture 8",
            shot8Alt: "Capture 8 du devoir HubSpot",
            shot9: "Capture 9",
            shot9Alt: "Capture 9 du devoir HubSpot",
          },
        },
        "work-odoo": {
          meta: {
            title: "Travail sur le workflow Odoo - Fiche de travail",
          },
          hero: {
            eyebrow: "Fiche de travail",
            title: "Travail sur le workflow Odoo",
            intro:
              "Travail pratique ERP centré sur l'approvisionnement, les opérations d'inventaire, le flux de vente et la logique de facturation dans un processus métier intégré.",
            tag1: "Workflow ERP",
            tag2: "Processus métier",
            tag3: "PDF + DOCX",
          },
          scope: {
            kicker: "Périmètre métier",
            title: "Cartographie du workflow opérationnel",
            description:
              "Le travail suit la manière dont une entreprise passe de l'approvisionnement au contrôle du stock, à l'exécution des ventes puis à la génération de facture dans un même environnement ERP.",
          },
          deliverables: {
            kicker: "Livrables",
            title: "Rendu et source modifiable",
            description:
              "Le PDF exporté et le fichier DOCX d'origine sont conservés ensemble pour préserver à la fois la version remise et le document éditable sous-jacent.",
          },
          topics: {
            kicker: "Sujets couverts",
            title: "Domaines fonctionnels",
            item1: "Workflow d'approvisionnement et d'achat",
            item2: "Mouvements d'inventaire et visibilité du stock",
            item3: "Progression des commandes clients et logique de processus",
            item4: "Génération de facture dans le cycle ERP",
          },
          value: {
            kicker: "Apport du devoir",
            title: "Ce que le travail démontre",
            item1: "Compréhension de l'enchaînement des processus ERP de bout en bout",
            item2: "Capacité à relier les actions métier aux modules du système",
            item3: "Documentation claire des étapes opérationnelles et comptables",
            item4: "Raisonnement aligné sur le cours autour de la structure des workflows d'entreprise",
          },
          files: {
            kicker: "Fichiers inclus",
            title: "Pack de rendu",
            item1: "Soumission PDF",
            item2: "Source DOCX modifiable",
          },
        },
        "work-session-6": {
          meta: {
            title: "Séance 6 - Fiche de travail",
          },
          hero: {
            eyebrow: "Fiche de travail",
            title: "Séance 6 : Funnel marketing et indicateurs de performance (KPI)",
            intro:
              "Pack de ressources de la séance 6 réunissant la fiche de cours, les notes sur le funnel marketing, les supports KPI, le TD et le QCM étudiant, l'exercice sur tableur et le sujet corrigé.",
            tag1: "Marketing digital",
            tag2: "Supports de cours",
            tag3: "TD + QCM",
            tag4: "PDF + ODS",
          },
          scope: {
            kicker: "Périmètre de la séance",
            title: "Théorie du funnel et mesure de performance",
            description:
              "Cette séance combine du contenu conceptuel sur le funnel marketing avec des documents orientés KPI, de la pratique et le sujet corrigé final.",
          },
          deliverables: {
            kicker: "Livrables",
            title: "Ensemble complet de la séance",
            description:
              "Tous les fichiers d'appui de la séance 6 sont regroupés au même endroit pour garder les notes de cours, les exercices, le tableur et la correction connectés dans le portfolio.",
          },
          content: {
            kicker: "Contenu inclus",
            title: "Ce que couvre la séance",
            item1: "Fiche de cours et explication de l'intérêt du funnel marketing",
            item2: "Support de création de funnel et documents de référence KPI",
            item3: "Fichier d'appui TD et QCM étudiant pour la séance 6",
            item4: "Travail KPI sur tableur au format ODS modifiable",
          },
          package: {
            kicker: "Pack de travail",
            title: "Organisation des ressources",
            item1: "Les PDF théoriques couvrent la partie conceptuelle de la séance",
            item2: "Le TD et le tableur portent la couche d'exécution pratique",
            item3: "Le sujet corrigé ferme la boucle avec un jeu de réponses de référence",
            item4: "Tous les fichiers sont liés directement depuis cette fiche pour une revue rapide",
          },
          files: {
            title: "Fichiers de la séance",
            fiche: {
              kicker: "Théorie",
              title: "Fiche de cours V_E",
              description:
                "Fiche de cours principale de la séance 6, utile comme référence compacte pour les concepts essentiels de funnel marketing et de KPI abordés en classe.",
              tag1: "PDF",
              tag2: "Fiche de cours",
            },
            why: {
              kicker: "Théorie",
              title: "Pourquoi étudier le funnel marketing",
              description:
                "Document d'appui explicatif centré sur l'importance de la logique funnel pour l'acquisition, la qualification, la conversion et la fidélisation.",
              tag1: "PDF",
              tag2: "Note conceptuelle",
            },
            creation: {
              kicker: "Méthode",
              title: "Création de funnel marketing",
              description:
                "Document pratique consacré à la construction d'un funnel marketing et à la compréhension de l'organisation des étapes, de la visibilité à la conversion.",
              tag1: "PDF",
              tag2: "Conception de workflow",
            },
            kpi: {
              kicker: "Référence",
              title: "Les indicateurs KPI V_E",
              description:
                "Support de référence KPI couvrant les principaux indicateurs de performance utilisés pour évaluer la qualité, l'efficacité et la rentabilité d'une campagne.",
              tag1: "PDF",
              tag2: "Référence KPI",
            },
            td: {
              kicker: "Pratique",
              title: "TD + QCM pour étudiants",
              description:
                "Feuille d'exercice étudiant combinant travail guidé et pratique du QCM afin d'appliquer la théorie de la séance dans un format structuré.",
              tag1: "PDF",
              tag2: "Exercice étudiant",
            },
            ods: {
              kicker: "Pratique",
              title: "Tableur TP KPI V_E",
              description:
                "Fichier tableur modifiable pour le travail pratique sur les KPI, destiné aux calculs, au test d'hypothèses et à l'exécution de l'exercice.",
              tag1: "ODS",
              tag2: "Fichier modifiable",
            },
            correction: {
              kicker: "Correction",
              title: "Sujet corrigé",
              description:
                "Sujet corrigé servant de jeu de réponses de référence pour la séance 6, utile pour vérifier le raisonnement attendu et valider le rendu pratique.",
              tag1: "PDF",
              tag2: "Corrigé",
            },
          },
        },
        "work-session-7": {
          meta: {
            title: "Séance 7 - Fiche de travail",
          },
          hero: {
            eyebrow: "Fiche de travail",
            title: "Séance 7 : Sécurité et communication digitale",
            intro:
              "Notes de la séance 7 sur la communication digitale sécurisée, couvrant le phishing, l'ingénierie sociale, la protection des comptes, les obligations légales et les habitudes de sécurité applicables aux canaux numériques.",
            tag1: "Cybersécurité",
            tag2: "Communication digitale",
            tag3: "RGPD",
            tag4: "DOCX",
          },
          scope: {
            kicker: "Périmètre de la séance",
            title: "La sécurité dans la communication digitale",
            description:
              "Le document explique comment les outils de communication quotidiens comme l'e-mail, les réseaux sociaux, les plateformes collaboratives et les messageries créent une exposition concrète à la cybersécurité pour les organisations.",
          },
          deliverable: {
            kicker: "Livrable",
            title: "Notes de séance et support de référence",
            description:
              "Le DOCX joint constitue la ressource centrale de la séance, en combinant théorie, menaces, bonnes pratiques, contexte légal, étude de cas et pistes de certification.",
          },
          themes: {
            kicker: "Thèmes couverts",
            title: "Sujets de sécurité clés",
            item1: "Risques liés au phishing, à l'ingénierie sociale et au détournement de comptes",
            item2: "Hygiène des mots de passe, 2FA, réseaux sécurisés et mises à jour logicielles",
            item3: "Protection des informations sensibles et accès selon le moindre privilège",
            item4: "Outils de communication digitale comme surface d'attaque organisationnelle",
          },
          strategy: {
            kicker: "Angle stratégique",
            title: "Pourquoi la séance compte",
            item1: "Relie directement la cybersécurité à l'image de marque et à la confiance dans la communication",
            item2: "Introduit les obligations RGPD et la responsabilité organisationnelle",
            item3: "Inclut une étude de cas de phishing pour la discussion en cours",
            item4: "Se termine par des pistes de certifications ajoutables au portfolio",
          },
          files: {
            title: "Fichiers de la séance",
            primary: {
              kicker: "Fichier principal",
              title: "Sécurité et communication digitale",
              description:
                "Document principal de la séance 7 couvrant la sécurité de la communication digitale, la détection du phishing, les pratiques sécurisées, le cadre légal et les certifications recommandées.",
              tag1: "DOCX",
              tag2: "Notes de séance",
            },
          },
        },
        "hubspot-pack": {
          meta: {
            title: "Devoir HubSpot - Sepehr Portfolio",
          },
          hero: {
            eyebrow: "Livrable de cours",
            title: "Travail de découverte HubSpot",
            intro:
              "Suite de captures d'écran et courte analyse issues de l'exercice CRM pratique.",
          },
          screenshots: {
            title: "Captures d'écran",
            shot1: "Capture 1",
            shot1Alt: "Capture HubSpot 1",
            shot2: "Capture 2",
            shot2Alt: "Capture HubSpot 2",
            shot3: "Capture 3",
            shot3Alt: "Capture HubSpot 3",
            shot4: "Capture 4",
            shot4Alt: "Capture HubSpot 4",
            shot5: "Capture 5",
            shot5Alt: "Capture HubSpot 5",
            shot6: "Capture 6",
            shot6Alt: "Capture HubSpot 6",
            shot7: "Capture 7",
            shot7Alt: "Capture HubSpot 7",
            shot8: "Capture 8",
            shot8Alt: "Capture HubSpot 8",
            shot9: "Capture 9",
            shot9Alt: "Capture HubSpot 9",
          },
        },
      },
    },
  };

  function readStorage() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGUAGES.includes(value) ? value : null;
    } catch (error) {
      return null;
    }
  }

  function writeStorage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      return;
    }
  }

  function readUrlLanguage() {
    const url = new URL(window.location.href);
    const value = url.searchParams.get("lang");
    return SUPPORTED_LANGUAGES.includes(value) ? value : null;
  }

  function syncUrl(language) {
    const url = new URL(window.location.href);
    if (language === "fr") {
      url.searchParams.set("lang", "fr");
    } else {
      url.searchParams.delete("lang");
    }

    window.history.replaceState({}, "", url);
  }

  function getByPath(object, path) {
    return path.split(".").reduce((value, segment) => {
      if (value && Object.prototype.hasOwnProperty.call(value, segment)) {
        return value[segment];
      }

      return undefined;
    }, object);
  }

  function resolveText(language, page, key) {
    const pageText = getByPath(translations[language]?.pages?.[page], key);
    if (typeof pageText === "string") {
      return pageText;
    }

    const commonText = getByPath(translations[language]?.common, key);
    return typeof commonText === "string" ? commonText : "";
  }

  function detectInitialLanguage() {
    const urlLanguage = readUrlLanguage();
    if (urlLanguage) {
      return urlLanguage;
    }

    const storedLanguage = readStorage();
    if (storedLanguage) {
      return storedLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  function applyTranslations(language) {
    const page = document.body.dataset.page;
    if (!page || !translations[language]) {
      return;
    }

    document.documentElement.lang = language;
    document.body.dataset.language = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = resolveText(language, page, element.dataset.i18n);
      if (value) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = resolveText(language, page, element.dataset.i18nHtml);
      if (value) {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const mappings = element.dataset.i18nAttr
        .split(";")
        .map((mapping) => mapping.trim())
        .filter(Boolean);

      mappings.forEach((mapping) => {
        const separatorIndex = mapping.indexOf(":");
        if (separatorIndex === -1) {
          return;
        }

        const attribute = mapping.slice(0, separatorIndex).trim();
        const key = mapping.slice(separatorIndex + 1).trim();
        const value = resolveText(language, page, key);
        if (value) {
          element.setAttribute(attribute, value);
        }
      });
    });

    document.querySelectorAll(".lang-btn").forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    writeStorage(language);
    syncUrl(language);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }

    const initialLanguage = detectInitialLanguage();
    applyTranslations(initialLanguage);

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const language = button.dataset.lang;
        if (SUPPORTED_LANGUAGES.includes(language)) {
          applyTranslations(language);
        }
      });
    });
  });
})();
