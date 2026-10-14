const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeLabel = document.querySelector("#themeLabel");

const languageToggle = document.querySelector("#languageToggle");

const profileImage = document.querySelector("#profileImage");
const photoToggle = document.querySelector("#photoToggle");

const contactForm = document.querySelector("#contactForm");
const formFeedback = document.querySelector("#formFeedback");


// =========================
// 2. Theme switcher
// =========================

themeToggle.addEventListener("click", function () {
    // Toggle the light-theme class on the body.
    document.body.classList.toggle("light-theme");

    // Check whether light mode is active.
    const isLightMode = document.body.classList.contains("light-theme");

    // Update the button icon and text.
    if (isLightMode) {
        themeIcon.textContent = "☀";
        themeLabel.textContent =
            document.documentElement.lang === "ar" ? "فاتح" : "Light";
    } else {
        themeIcon.textContent = "☾";
        themeLabel.textContent =
            document.documentElement.lang === "ar" ? "داكن" : "Dark";
    }
});


// =========================
// 3. Profile photo switcher
// =========================

const profilePhotos = [
    {
        src: "assets/profile1.jpeg",
        alt: "Portrait of Shahad"
    },
    {
        src: "assets/profile2.jpeg",
        alt: "Second portrait of Shahad"
    }
];

let currentPhotoIndex = 0;

photoToggle.addEventListener("click", function () {
    // Move to the next photo.
    currentPhotoIndex = (currentPhotoIndex + 1) % profilePhotos.length;

    // Get the selected photo.
    const selectedPhoto = profilePhotos[currentPhotoIndex];

    // Update the image without reloading the page.
    profileImage.style.opacity = "0";

    window.setTimeout(function () {
        profileImage.src = selectedPhoto.src;
        profileImage.alt = selectedPhoto.alt;
        profileImage.style.opacity = "1";
    }, 150);
});


// =========================
// 4. Translation dictionary
// =========================

const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",

        darkMode: "Dark",

        
        heroEyebrow: "HELLO, I'M SHAHAD",
        heroLine1: "Computer Engineer",
        heroLine2: "Exploring the World of Technology.",
        heroDescription: "I'm a Computer Engineering graduate with a background in software development, IT support, and computer networks. I'm building my skills in web development, cybersecurity,with an interest in      creating practical and reliable technology solutions.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        heroGreeting: "Hi, my name is",
        heroRole: "Computer Engineer",
        changePhoto: "Change Photo",

        aboutEyebrow: "GET TO KNOW ME",
        aboutTitle: "About Me",
        aboutDescription: "A little introduction about who I am and what I do.",
        aboutSubtitle: "Learning, building, and growing.",
        aboutParagraph1: "I am a Computer Engineering graduate from Yarmouk University with a strong foundation in programming, software engineering, databases, and computer networks. I enjoy solving problems, exploring new technologies, and developing practical software solutions through academic projects using Python, C#, .NET, SQL Server, and web technologies.",
        aboutParagraph2: "Through my internship in IT Service Management and Application Support at SITA, I gained practical exposure to IT systems, application support, troubleshooting, and system monitoring. I am also expanding my skills in web development, ASP.NET, Linux, and cybersecurity. I am passionate about continuous learning and eager to grow as an engineer while contributing to meaningful technology projects.",
        aboutFact1: "Always Learning",
        aboutFact2: "Creative Thinking",
        aboutFact3: "Problem Solving",


        skillsEyebrow: "MY TOOLKIT",
        skillsTitle: "Skills & Technologies",
        skillsDescription:
            "The tools I'm using to develop my web skills.",
        
       htmlDescription: "Building the structure of web pages.",
       htmlTag: "Structure",

       cssDescription: "Styling pages and creating responsive layouts.",
       cssTag: "Design",

       jsDescription: "Adding interaction and dynamic behavior.",
       jsTag: "Interaction",

       gitDescription: "Tracking changes and managing project versions.",
       gitTag: "Version Control",

       csharpDescription: "Writing programs and implementing programming logic.",
       csharpTag: "Programming",

       aspnetDescription: "Learning to build web applications using .NET.",
       aspnetTag: "Web Framework",

       sqlDescription: "Working with databases, queries, and data." ,
       sqlTag: "Databases",

       linuxDescription: "Using the Linux command line and system tools.",
       linuxTag: "Operating System",


        projectsEyebrow: "SELECTED WORK",
        projectsTitle: "Featured Projects",
        projectsDescription:
            "A selection of projects from my learning journey.",
        project1Title: "Personal Portfolio",
        project1Description:
            "A personal website showcasing my skills and work.",
        project2Title: "Electricity Meter Portal",
        project2Description:
            "A web application for submitting, tracking, and managing electricity meter requests.",
        project3Title: "HTML Fundamentals — Practical Exercises",
        project3Description:
            "Six practical exercises covering HTML structure, text hierarchy, links and images, lists and tables, accessible forms, and semantic page architecture.",
        project4Title: "CSS Layout & Visual Design",
        project4Description:
            "A CSS-focused project showcasing responsive layouts, positioning, visual design, box modeling, and interactive animations.",
       project5Title: "JavaScript & Interactive Applications",
       project5Description:
        
             "A JavaScript project covering programming logic, DOM manipulation, event handling, and dynamic task management.",

        project6Title: "CV Fitboard — AI Recruitment Platform",
        project6Description:
            "An AI-powered recruitment platform for CV analysis, job matching, candidate ranking, and personalized training recommendations.",
            
        projectLink: "View Project",

        hobbiesEyebrow: "LIFE BEYOND CODE",
        hobbiesTitle: "My Hobbies",
        hobbiesDescription:
            "Things that inspire me outside of programming.",
        hobby1Title: "Learning",
        hobby1Description:
            "Discovering new ideas and developing my knowledge.",
        hobby2Title: "Coding",
        hobby2Description:
            "Practicing programming and building small projects.",
        hobby3Title: "Creativity",
        hobby3Description:
            "Exploring creative ideas and visual inspiration.",
        hobby4Title: "Music",
        hobby4Description:
            "Listening to music and relaxing in my free time.",

        contactEyebrow: "HAVE A PROJECT IN MIND?",
        contactTitle: "Let's work together.",
        contactDescription:
            "Have a question or want to connect? Send me a message.",
        emailLabel: "Email",
        contactNote: "I'd be happy to hear from you!",
        nameLabel: "Your Name",
        emailFieldLabel: "Your Email",
        messageLabel: "Your Message",
        namePlaceholder: "Enter your name",
        emailPlaceholder: "Enter your email",
        messagePlaceholder: "Write your message here...",
        sendMessage: "Send Message",

        footerText: "Designed and built with HTML, CSS, and JavaScript.",
        backToTop: "Back to top ↑",
        rights: "All rights reserved.",
        footerMade: "Made with care.",

        successMessage:
            "Thank you! Your form has been checked successfully.",
        emptyMessage:
            "Please complete all fields before submitting."
    },

    ar: {
        navHome: "الرئيسية",
        navAbout: "من أنا",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "تواصل معي",

        darkMode: "داكن",

       
        heroEyebrow: "مرحباً، أنا شهد",
        heroLine1: "مهندسة حاسوب",
        heroLine2: "أستكشف عالم التكنولوجيا.",
        heroDescription: "أنا خريجة هندسة حاسوب، ولدي خلفية في تطوير البرمجيات ودعم تقنية المعلومات وشبكات الحاسوب. أعمل على تطوير مهاراتي في تطوير الويب والأمن السيبراني, وأسعى إلى بناء حلول تقنية عملية وموثوقة.",
        viewProjects: "مشاريعي",
        contactMe: "تواصلي معي",
        heroGreeting: "مرحباً، اسمي",
        heroRole: "مهندسة حاسوب",
        changePhoto: "تغيير الصورة",

        aboutEyebrow: "تعرّفي عليّ",
        aboutTitle: "نبذة عني",
        aboutDescription: "تعريف بسيط عني وعن مجالات عملي واهتماماتي.",
        aboutSubtitle: "أتعلم، وأبني، وأتطور.",
        aboutParagraph1: "أنا خريجة هندسة حاسوب من جامعة اليرموك، وأمتلك أساساً معرفياً في البرمجة وهندسة البرمجيات وقواعد البيانات وشبكات الحاسوب. أستمتع بحل المشكلات واستكشاف التقنيات الجديدة وتطوير حلول برمجية عملية من خلال المشاريع الأكاديمية باستخدام Python وC# و.NET وSQL Server وتقنيات الويب.",
        aboutParagraph2: "خلال تدريبي في إدارة خدمات تقنية المعلومات ودعم التطبيقات لدى SITA، اكتسبت خبرة عملية في التعامل مع أنظمة تقنية المعلومات ودعم التطبيقات واستكشاف الأخطاء ومراقبة الأنظمة. كما أواصل تطوير مهاراتي في تطوير الويب وASP.NET وLinux والأمن السيبراني. أؤمن بأهمية التعلم المستمر، وأسعى إلى تطوير نفسي كمهندسة والمساهمة في مشاريع تقنية مفيدة.",
        aboutFact1: "التعلم المستمر",
        aboutFact2: "التفكير الإبداعي",
        aboutFact3: "حل المشكلات",


        skillsEyebrow: "أدواتي",
        skillsTitle: "المهارات والتقنيات",
        skillsDescription:
            "الأدوات التي أستخدمها لتطوير مهاراتي في الويب.",
        
        htmlDescription: "بناء هيكل صفحات الويب.",
        htmlTag: "هيكلة الصفحات",

        cssDescription: "تنسيق الصفحات وإنشاء تصاميم متجاوبة.",
        cssTag: "التصميم",

        jsDescription: "إضافة التفاعل والسلوك الديناميكي للصفحات.",
        jsTag: "التفاعل",

        gitDescription: "تتبع التعديلات وإدارة إصدارات المشاريع.",
        gitTag: "إدارة الإصدارات",

        csharpDescription: "كتابة البرامج وتطبيق منطق البرمجة.",
        csharpTag: "البرمجة",

        aspnetDescription: "التعرّف على بناء تطبيقات الويب باستخدام .NET.",
        aspnetTag: "إطار عمل للويب",

        sqlDescription: "التعامل مع قواعد البيانات والاستعلامات.",
        sqlTag: "قواعد البيانات",

        linuxDescription: "استخدام سطر الأوامر وأدوات نظام Linux.",
        linuxTag: "نظام التشغيل",


        projectsEyebrow: "أعمال مختارة",
        projectsTitle: "أبرز المشاريع",
        projectsDescription:
            "مجموعة من المشاريع التي أنجزتها خلال رحلة التعلم.",
        project1Title: "الموقع الشخصي",
        project1Description:
            "موقع شخصي يعرض مهاراتي وأعمالي.",
        project2Title: "بوابة طلبات عدادات الكهرباء",
        project2Description:
    "تطبيق ويب لتقديم طلبات عدادات الكهرباء ومتابعتها وإدارتها.",
        project3Title: "أساسيات HTML — تمارين عملية",
        project3Description:
    "ستة تمارين عملية تغطي بنية HTML، وتنسيق النصوص، والروابط والصور، والقوائم والجداول، والنماذج سهلة الاستخدام، وبنية الصفحات الدلالية.",
       project4Title: "تنسيق الصفحات والتصميم باستخدام CSS",
       project4Description:
    "مشروع يركز على تصميم التخطيطات، وتحديد المواقع، ونموذج الصندوق، والألوان، والحركات التفاعلية باستخدام CSS.",
       project5Title: "JavaScript والتطبيقات التفاعلية",
       project5Description:
    "مشروع يركز على منطق البرمجة، والتعامل مع عناصر الصفحة، والأحداث التفاعلية، وإدارة المهام ديناميكيًا.",
       project6Title: "CV Fitboard — منصة توظيف ذكية",
       project6Description:
    "منصة توظيف مدعومة بالذكاء الاصطناعي لتحليل السير الذاتية، ومطابقة الوظائف، وترتيب المرشحين، وتقديم توصيات تدريبية مخصصة.",
        projectLink: "عرض المشروع",

        hobbiesEyebrow: "حياتي خارج البرمجة",
        hobbiesTitle: "هواياتي",
        hobbiesDescription:
            "أشياء تلهمني وأستمتع بها بعيدًا عن البرمجة.",
        hobby1Title: "التعلم",
        hobby1Description:
            "اكتشاف أفكار جديدة وتطوير معرفتي.",
        hobby2Title: "البرمجة",
        hobby2Description:
            "التدرب على البرمجة وبناء مشاريع صغيرة.",
        hobby3Title: "الإبداع",
        hobby3Description:
            "استكشاف الأفكار الإبداعية والإلهام البصري.",
        hobby4Title: "الموسيقى",
        hobby4Description:
            "الاستماع إلى الموسيقى والاسترخاء بوقت الفراغ.",

        contactEyebrow: "هل لديك فكرة لمشروع؟",
        contactTitle: "لنعمل معًا.",
        contactDescription:
            "إذا كان لديك سؤال أو رغبت بالتواصل، أرسلي لي رسالة.",
        emailLabel: "البريد الإلكتروني",
        contactNote: "يسعدني أن أسمع منك!",
        nameLabel: "اسمك",
        emailFieldLabel: "بريدك الإلكتروني",
        messageLabel: "رسالتك",
        namePlaceholder: "اكتبي اسمك",
        emailPlaceholder: "اكتبي بريدك الإلكتروني",
        messagePlaceholder: "اكتبي رسالتك هنا...",
        sendMessage: "إرسال الرسالة",

        footerText: "تم تصميم الموقع باستخدام HTML وCSS وJavaScript.",
        backToTop: "العودة للأعلى ↑",
        rights: "جميع الحقوق محفوظة.",
        footerMade: "صُنع بكل عناية.",

        successMessage:
            "شكرًا لك! تم التحقق من بيانات النموذج بنجاح.",
        emptyMessage:
            "يرجى تعبئة جميع الحقول قبل الإرسال."
    }
};


// =========================
// 5. Language switcher
// =========================

let currentLanguage = "en";

function changeLanguage(language) {
    // Save the selected language.
    currentLanguage = language;

    // Update the page language and direction.
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    // Update all translated text elements.
    const translatedElements = document.querySelectorAll("[data-i18n]");

    translatedElements.forEach(function (element) {
        const translationKey = element.dataset.i18n;

        if (translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });

    // Update input and textarea placeholders.
    const placeholderElements = document.querySelectorAll(
        "[data-i18n-placeholder]"
    );

    placeholderElements.forEach(function (element) {
        const translationKey = element.dataset.i18nPlaceholder;

        if (translations[language][translationKey]) {
            element.placeholder = translations[language][translationKey];
        }
    });

    // Update the language button.
    languageToggle.textContent = language === "en" ? "عربي" : "English";

    // Keep the theme button label consistent with the selected language.
    const isLightMode = document.body.classList.contains("light-theme");

    if (isLightMode) {
        themeLabel.textContent = language === "ar" ? "فاتح" : "Light";
    } else {
        themeLabel.textContent = language === "ar" ? "داكن" : "Dark";
    }

    // Clear old form feedback when changing language.
    formFeedback.textContent = "";
}

languageToggle.addEventListener("click", function () {
    if (currentLanguage === "en") {
        changeLanguage("ar");
    } else {
        changeLanguage("en");
    }
});


// =========================
// 6. Contact form
// =========================

contactForm.addEventListener("submit", function (event) {
    // Prevent the browser from reloading the page.
    event.preventDefault();

    // Check whether the form fields are valid.
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    // Show a translated confirmation message.
    formFeedback.textContent =
        translations[currentLanguage].successMessage;

    // Clear the form fields.
    contactForm.reset();
});
