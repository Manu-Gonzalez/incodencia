// changeLanguage.js
const translations = {
    es: {
      nav_home: "Inicio",
      nav_services: "Servicios",
      nav_about: "Nosotros",
      nav_contact: "Contacto",
      work_with_us: "Trabajemos juntos",
      hero_subtitle: "Desarrollamos soluciones digitales a medida para negocios y empresas que quieren crecer.",
      btn_services: "Descubre nuestros servicios",
      services_title: "Nuestros Servicios",
      service_mobile: "Aplicaciones Móviles",
      service_mobile_desc: "Desarrollo de apps nativas y multiplataforma para iOS y Android.",
      service_web: "Sitios Web",
      service_web_desc: "Sitios modernos, rápidos y responsivos adaptados a tus necesidades.",
      service_desktop: "Apps de Escritorio",
      service_desktop_desc: "Aplicaciones de escritorio robustas y eficientes para Windows, Mac y Linux.",
      service_business: "Sistemas para Empresas",
      service_business_desc: "Proyectos y sistemas a medida aplicados a la gestión y operación de negocios.",
      service_maintenance: "Seguimiento y Mantenimiento",
      service_maintenance_desc: "Soporte continuo, actualizaciones y optimización de tus sistemas.",
      service_digital: "Digitalización de Negocios",
      service_digital_desc: "Transformamos tu negocio llevando sus procesos al mundo digital.",
      about_title: "Sobre Incodencia",
      about_text: "En Incodencia trabajamos con negocios y empresas medianas y pequeñas que buscan dar el salto digital. Diseñamos y desarrollamos soluciones tecnológicas a medida: desde sitios web y aplicaciones móviles hasta sistemas de gestión que optimizan el día a día de tu negocio.",
      contact_us: "Contáctanos",
      contact_sub: "¿Listo para llevar tu idea al siguiente nivel? Escribinos.",
      btn_contact: "Enviar mensaje",
      footer_text: "Soluciones digitales para tu negocio",
      typewriter_words: "Innovación,Soluciones,Tecnología"
    },
    en: {
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About Us",
      nav_contact: "Contact",
      work_with_us: "Work with us",
      hero_subtitle: "We build custom digital solutions for businesses that want to grow.",
      btn_services: "Discover our services",
      services_title: "Our Services",
      service_mobile: "Mobile Applications",
      service_mobile_desc: "Native and cross-platform app development for iOS and Android.",
      service_web: "Websites",
      service_web_desc: "Modern, fast, and responsive websites tailored to your needs.",
      service_desktop: "Desktop Apps",
      service_desktop_desc: "Robust and efficient desktop applications for Windows, Mac and Linux.",
      service_business: "Business Systems",
      service_business_desc: "Custom projects and systems applied to business management and operations.",
      service_maintenance: "Support & Maintenance",
      service_maintenance_desc: "Continuous support, updates and optimization of your systems.",
      service_digital: "Business Digitalization",
      service_digital_desc: "We transform your business by taking its processes to the digital world.",
      about_title: "About Incodencia",
      about_text: "At Incodencia we work with small and medium-sized businesses looking to make the digital leap. We design and develop custom tech solutions: from websites and mobile apps to management systems that streamline your day-to-day operations.",
      contact_us: "Contact Us",
      contact_sub: "Ready to take your idea to the next level? Write to us.",
      btn_contact: "Send message",
      footer_text: "Digital solutions for your business",
      typewriter_words: "Innovation,Solutions,Technology"
    },
    pt: {
      nav_home: "Início",
      nav_services: "Serviços",
      nav_about: "Sobre nós",
      nav_contact: "Contato",
      work_with_us: "Trabalhe conosco",
      hero_subtitle: "Desenvolvemos soluções digitais sob medida para negócios que querem crescer.",
      btn_services: "Descubra nossos serviços",
      services_title: "Nossos Serviços",
      service_mobile: "Aplicativos Móveis",
      service_mobile_desc: "Desenvolvimento de apps nativos e multiplataforma para iOS e Android.",
      service_web: "Sites Web",
      service_web_desc: "Sites modernos, rápidos e responsivos, adaptados às suas necessidades.",
      service_desktop: "Apps de Desktop",
      service_desktop_desc: "Aplicações desktop robustas e eficientes para Windows, Mac e Linux.",
      service_business: "Sistemas para Empresas",
      service_business_desc: "Projetos e sistemas sob medida para gestão e operação de negócios.",
      service_maintenance: "Suporte e Manutenção",
      service_maintenance_desc: "Suporte contínuo, atualizações e otimização dos seus sistemas.",
      service_digital: "Digitalização de Negócios",
      service_digital_desc: "Transformamos seu negócio levando seus processos ao mundo digital.",
      about_title: "Sobre a Incodencia",
      about_text: "Na Incodencia trabalhamos com pequenas e médias empresas que buscam dar o salto digital. Desenvolvemos soluções tecnológicas sob medida: de sites e apps móveis a sistemas de gestão que otimizam o dia a dia do seu negócio.",
      contact_us: "Contate-nos",
      contact_sub: "Pronto para levar sua ideia ao próximo nível? Escreva para nós.",
      btn_contact: "Enviar mensagem",
      footer_text: "Soluções digitais para o seu negócio",
      typewriter_words: "Inovação,Soluções,Tecnologia"
    },
    fr: {
      nav_home: "Accueil",
      nav_services: "Services",
      nav_about: "À propos",
      nav_contact: "Contact",
      work_with_us: "Travaillons ensemble",
      hero_subtitle: "Nous développons des solutions numériques sur mesure pour les entreprises qui veulent grandir.",
      btn_services: "Découvrez nos services",
      services_title: "Nos Services",
      service_mobile: "Applications Mobiles",
      service_mobile_desc: "Développement d'apps natives et multiplateformes pour iOS et Android.",
      service_web: "Sites Web",
      service_web_desc: "Sites modernes, rapides et réactifs, adaptés à vos besoins.",
      service_desktop: "Apps Bureau",
      service_desktop_desc: "Applications bureau robustes et efficaces pour Windows, Mac et Linux.",
      service_business: "Systèmes pour Entreprises",
      service_business_desc: "Projets et systèmes sur mesure pour la gestion et l'exploitation des entreprises.",
      service_maintenance: "Suivi et Maintenance",
      service_maintenance_desc: "Support continu, mises à jour et optimisation de vos systèmes.",
      service_digital: "Digitalisation des Entreprises",
      service_digital_desc: "Nous transformons votre entreprise en portant ses processus dans le monde numérique.",
      about_title: "À propos d'Incodencia",
      about_text: "Chez Incodencia, nous travaillons avec des petites et moyennes entreprises qui souhaitent franchir le cap du numérique. Nous concevons des solutions technologiques sur mesure : sites web, applications mobiles et systèmes de gestion adaptés à votre activité.",
      contact_us: "Contactez-nous",
      contact_sub: "Prêt à faire passer votre idée au niveau supérieur ? Écrivez-nous.",
      btn_contact: "Envoyer un message",
      footer_text: "Solutions numériques pour votre entreprise",
      typewriter_words: "Innovation,Solutions,Technologie"
    },
    ar: {
      nav_home: "الرئيسية",
      nav_services: "الخدمات",
      nav_about: "معلومات عنا",
      nav_contact: "اتصال",
      work_with_us: "اعمل معنا",
      hero_subtitle: "نطور حلولاً رقمية مخصصة للشركات والأعمال التي تريد النمو.",
      btn_services: "اكتشف خدماتنا",
      services_title: "خدماتنا",
      service_mobile: "تطبيقات الجوال",
      service_mobile_desc: "تطوير تطبيقات أصلية ومتعددة المنصات لـ iOS وAndroid.",
      service_web: "المواقع الإلكترونية",
      service_web_desc: "مواقع حديثة وسريعة ومتجاوبة تلبي احتياجاتك.",
      service_desktop: "تطبيقات سطح المكتب",
      service_desktop_desc: "تطبيقات سطح مكتب قوية وفعالة لـ Windows وMac وLinux.",
      service_business: "أنظمة الأعمال",
      service_business_desc: "مشاريع وأنظمة مخصصة لإدارة وتشغيل الشركات.",
      service_maintenance: "المتابعة والصيانة",
      service_maintenance_desc: "دعم مستمر وتحديثات وتحسين لأنظمتك.",
      service_digital: "رقمنة الأعمال",
      service_digital_desc: "نحول أعمالك بنقل عملياتها إلى العالم الرقمي.",
      about_title: "حول Incodencia",
      about_text: "في Incodencia نعمل مع الشركات الصغيرة والمتوسطة التي تسعى للتحول الرقمي. نصمم ونطور حلولاً تقنية مخصصة: من المواقع والتطبيقات إلى أنظمة الإدارة التي تُحسّن عمليات عملك اليومية.",
      contact_us: "اتصل بنا",
      contact_sub: "هل أنت مستعد للارتقاء بفكرتك إلى المستوى التالي؟ راسلنا.",
      btn_contact: "أرسل الرسالة",
      footer_text: "حلول رقمية لعملك",
      typewriter_words: "الابتكار,الحلول,التكنولوجيا"
    },
    zh: {
      nav_home: "首页",
      nav_services: "服务",
      nav_about: "关于我们",
      nav_contact: "联系",
      work_with_us: "与我们合作",
      hero_subtitle: "我们为希望成长的中小企业打造量身定制的数字化解决方案。",
      btn_services: "探索我们的服务",
      services_title: "我们的服务",
      service_mobile: "移动应用",
      service_mobile_desc: "为 iOS 和 Android 开发原生及跨平台应用。",
      service_web: "网站建设",
      service_web_desc: "现代、快速、响应式的网站，满足您的需求。",
      service_desktop: "桌面应用",
      service_desktop_desc: "适用于 Windows、Mac 和 Linux 的强大高效桌面应用。",
      service_business: "企业系统",
      service_business_desc: "为企业管理和运营量身定制的项目和系统。",
      service_maintenance: "跟踪与维护",
      service_maintenance_desc: "持续支持、更新和优化您的系统。",
      service_digital: "业务数字化",
      service_digital_desc: "将您的业务流程带入数字世界，实现转型。",
      about_title: "关于 Incodencia",
      about_text: "在 Incodencia，我们服务于希望实现数字化转型的中小型企业。我们量身打造技术解决方案：从网站和移动应用到优化日常运营的管理系统。",
      contact_us: "联系我们",
      contact_sub: "准备好将你的想法提升到新高度了吗？给我们写信。",
      btn_contact: "发送信息",
      footer_text: "为您的企业提供数字化解决方案",
      typewriter_words: "创新,解决方案,技术"
    }
  };
  
  function changeLanguage(lang) {
    if (!translations[lang]) lang = "es";
    localStorage.setItem("language", lang);
  
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    if (window.startTypewriter) window.startTypewriter(lang);
  }
  
  function initLanguage() {
    const savedLang = localStorage.getItem("language") || "es";
    document.getElementById("language-select").value = savedLang;
    changeLanguage(savedLang);
  
    document.getElementById("language-select").addEventListener("change", (e) => {
      changeLanguage(e.target.value);
    });
  }
  
  document.addEventListener("DOMContentLoaded", initLanguage);
