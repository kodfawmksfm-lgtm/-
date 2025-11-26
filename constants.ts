import { Translation, ProjectItem, TestimonialItem, ServiceItem } from './types';

// Helper to convert Drive links to viewable URLs - Switched to uc?export=view for better compatibility
const getDriveImg = (id: string) => `https://drive.google.com/uc?export=view&id=${id}`;

export const IMAGES = {
  hero: getDriveImg('1gcFPuTkQ01TQN11bb4G2kuRDy5nZJDY0'), 
  about: getDriveImg('1TeTlU7Pz0vYPK_dRN1YHmTpoBuCeDoR2'),
};

export const TRANSLATIONS: Record<'ar' | 'en', Translation & { faq: { title: string; subtitle: string; items: {question: string; answer: string}[] } }> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      projects: 'معرض الأعمال',
      testimonials: 'آراء العملاء',
      about: 'عن الشركة',
      contact: 'اتصل بنا',
      lang: 'English',
      login: 'بوابة العملاء',
      logout: 'تسجيل خروج',
    },
    hero: {
      title: 'حدائق الياسمين',
      subtitle: 'نحول منزلك إلى تحفة فنية. رواد تصميم الحدائق، المظلات العصرية، والعشب الصناعي في الكويت.',
      cta: 'اطلب معاينة مجانية',
      bookCall: 'تواصل معنا واتساب',
    },
    about: {
      title: 'الريادة في التنسيق الخارجي',
      desc: 'نحن في حدائق الياسمين لا نقوم فقط بزراعة النباتات أو تركيب المظلات؛ نحن نصنع تجربة حياة خارجية متكاملة. بصفتنا شركة كويتية متخصصة، نفهم تماماً تحديات المناخ الخليجي، ولذلك نستخدم مواد أولية مصممة خصيصاً لتحمل الحرارة العالية مع الحفاظ على جمالها ورونقها لسنوات طويلة.',
      stats_clients: 'عميل يثق بنا',
      stats_projects: 'مشروع تم تنفيذه',
      stats_exp: 'سنوات من الخبرة',
    },
    timeline: {
      title: 'رحلة تحول حديقتك',
      subtitle: 'خطوات مدروسة لضمان الدقة والجودة من الفكرة إلى التنفيذ',
      steps: {
        step1: { title: 'المعاينة والاستشارة', desc: 'زيارة ميدانية مجانية لرفع القياسات ومناقشة الأفكار.' },
        step2: { title: 'التصميم الهندسي 3D', desc: 'تقديم مخطط ثلاثي الأبعاد لرؤية الشكل النهائي قبل البدء.' },
        step3: { title: 'التنفيذ والتركيب', desc: 'فريق فني محترف يبدأ العمل باستخدام أفضل المواد.' },
        step4: { title: 'التسليم والضمان', desc: 'تسليم المشروع نظيفاً مع شهادة ضمان معتمدة.' },
      }
    },
    services: {
      title: 'خدماتنا المتكاملة',
      subtitle: 'كل ما تحتاجه لمساحتك الخارجية تحت سقف واحد',
      items: [
        { 
          id: 1, 
          title: 'مظلات وسواتر', 
          description: 'تصميم وتركيب مظلات السيارات والحدائق (خشب، قماش، كيربي، K-Span) بأحدث التصاميم الهندسية.', 
          icon: 'Sun',
          longDescription: 'نقدم حلولاً متكاملة للتظليل تشمل مظلات الكيربي المعزولة، مظلات القماش الأسترالي (HDPE) المقاومة للأشعة فوق البنفسجية، ومظلات الكي سبان (K-Span) التي توفر حماية قصوى للسيارات. هياكلنا الحديدية معالجة ضد الصدأ ومصبوغة بأفران حرارية.',
          features: ['عزل حراري 100%', 'ضمان 10 سنوات على الكي سبان', 'تصاميم عصرية تناسب واجهة المنزل']
        },
        { 
          id: 2, 
          title: 'عشب صناعي وجداري', 
          description: 'توريد وتركيب عشب صناعي عالي الكثافة (50مم - 40مم) وتكسيات خضراء للجدران بمظهر طبيعي.', 
          icon: 'Sprout',
          longDescription: 'عشبنا الصناعي مصمم خصيصاً ليحاكي العشب الطبيعي في الملمس واللون، مع كثافة عالية تصل إلى 18,000 غرزة للمتر. يحتوي على ثقوب تصريف للمياه لمنع الروائح ومقاوم لدرجات الحرارة حتى 60 درجة مئوية.',
          features: ['لا يحتاج ري أو قص', 'آمن للأطفال والحيوانات الأليفة', 'مقاوم لتغير اللون']
        },
        { 
          id: 3, 
          title: 'لاندسكيب وتصاميم 3D', 
          description: 'تخطيط هندسي كامل للحديقة قبل التنفيذ وتوزيع النباتات والإضاءة وشبكات الري الحديثة.', 
          icon: 'Trees',
          longDescription: 'قبل البدء بأي عمل، يقوم مهندسونا برسم مخطط ثلاثي الأبعاد (3D) لحديقتك، مما يتيح لك رؤية النتيجة النهائية وتعديلها. نختار نباتات ملائمة للبيئة الكويتية ونوزع الإضاءة بشكل يبرز جمالية المكان ليلاً.',
          features: ['معاينة مجانية', 'تصميم واقعي', 'توزيع مدروس للإضاءة']
        },
        { 
          id: 4, 
          title: 'جلسات خارجية وبرجولات', 
          description: 'برجولات خشبية وحديد (WPC) وجلسات مودرن تخلق جواً عائلياً دافئاً في حديقتك.', 
          icon: 'Ruler',
          longDescription: 'نصمم وننفذ جلسات خارجية فاخرة باستخدام خشب WPC المعالج الذي يقاوم الرطوبة والنمل الأبيض، أو الحديد المشغول بتصاميم ليزر عصرية. تشمل الجلسات تمديدات كهربائية مخفية للمراوح والإضاءة.',
          features: ['مقاومة للماء والشمس', 'تصاميم حسب الطلب', 'إمكانية إضافة ستائر جانبية']
        },
        { 
          id: 5, 
          title: 'ملاعب رياضية', 
          description: 'تجهيز ملاعب كرة القدم والبادل والتنس بأرضيات معتمدة ومواصفات قياسية.', 
          icon: 'Car',
          longDescription: 'نقوم بتجهيز الملاعب الرياضية (كرة قدم، بادل، سلة) بدءاً من الأعمال الترابية والخرسانية وصولاً إلى فرش الأرضيات المطاطية (EPDM) أو العشب المعتمد من الفيفا، مع تركيب الشبك والإنارة.',
          features: ['مواصفات قانونية', 'أرضيات ممتصة للصدمات', 'إنارة كاشفة للملاعب']
        },
        { 
          id: 6, 
          title: 'غرف زجاجية (Sunroom)', 
          description: 'تحويل المساحات الخارجية إلى غرف زجاجية مكيفة صالحة للاستخدام طوال العام.', 
          icon: 'Paintbrush',
          longDescription: 'الغرف الزجاجية هي الحل الأمثل للاستمتاع بالحديقة في صيف الكويت الحار. نستخدم زجاج مزدوج (Double Glazing) عازل للحرارة وهياكل ألمنيوم متينة، مع إمكانية تكييف المكان بالكامل.',
          features: ['عزل حراري ممتاز', 'إطلالة بانورامية', 'زيادة مساحة المنزل']
        },
      ],
    },
    articles: {
      title: 'مقالات وخبرات هندسية',
      subtitle: 'رؤية تقنية حول أفضل الممارسات في تصميم الحدائق في الكويت',
      readMore: 'اقرأ المقال كاملاً',
      items: [
        {
          id: 1,
          title: 'منهجية البحث العلمي في تصميم الحدائق المستدامة',
          excerpt: 'كيف نستخدم تحليل التربة ومسارات الشمس لضمان استدامة حديقتك في مناخ الكويت الحار.',
          date: 'أكتوبر 2024',
          tags: ['منهجية', 'بحث', 'استدامة'],
          content: `تعتمد فلسفة التصميم في حدائق الياسمين على منهجية بحثية دقيقة (Research Methodology) تراعي الظروف المناخية القاسية لدولة الكويت. نبدأ كل مشروع بدراسة تحليلية متكاملة:

1. تحليل مسار الشمس (Sun Path Analysis):
نقوم بمحاكاة حركة الشمس فوق موقع الحديقة لتحديد مناطق الظل الطبيعي والمناطق المعرضة للشمس المباشرة. يساعدنا هذا في تحديد الأماكن المثالية للجلسات الخارجية (Seating Areas) واتجاه المظلات لتقليل الحمل الحراري بنسبة تصل إلى 40%.

2. استدامة المواد (Material Sustainability):
نظراً لارتفاع درجات الحرارة، نعتمد على مواد صديقة للبيئة ومقاومة للظروف القاسية، مثل الأخشاب المعالجة (WPC) التي لا تتأثر بالرطوبة أو التمدد الحراري، واستخدام أصباغ عاكسة للحرارة في المظلات المعدنية.

3. كفاءة الري (Water Efficiency):
نستخدم أحدث أنظمة الري الذكية (Smart Irrigation) التي تعتمد على حساسات الرطوبة لتوفير المياه، مع اختيار نباتات محلية ملائمة للتربة الكويتية تتطلب صيانة أقل.`
        },
        {
          id: 2,
          title: 'دليل اختيار العشب الصناعي والمظلات (SEO Guide)',
          excerpt: 'كل ما تحتاج معرفته عن أفضل أنواع العشب الصناعي ومظلات السيارات المناسبة لمنازل الكويت.',
          date: 'نوفمبر 2024',
          tags: ['عشب صناعي', 'مظلات', 'كي سبان'],
          content: `يعتبر العشب الصناعي (Artificial Grass) ومظلات الحدائق (Pergolas) من العناصر الأساسية لتحسين جودة الحياة في المنازل الكويتية. إليك أهم النصائح الهندسية للاختيار:

1. العشب الصناعي (Artificial Grass):
للحصول على مظهر طبيعي وديمومة طويلة، ننصح باختيار عشب بكثافة لا تقل عن 18,000 غرزة/متر مربع وارتفاع شعرة يتراوح بين 40-50 ملم. من الضروري جداً التأكد من جودة طبقة الظهر (Backing) ووجود ثقوب تصريف (Drainage Holes) فعالة لتصريف مياه الأمطار والغسيل، مما يمنع الروائح الكريهة.

2. مظلات الكيربي والكي سبان (K-Span):
تعتبر مظلات الكي سبان (K-Span) الخيار الأمثل لمواقف السيارات في الكويت نظراً لقدرتها العالية على العزل الحراري ومقاومة الرياح الشديدة. هي حل اقتصادي وعملي مقارنة بالمظلات الخشبية التي تتطلب صيانة دورية.

3. البرجولات (Pergolas):
للحدائق، نفضل استخدام البرجولات المصنوعة من الألمنيوم (Aluminum) بتصميم خشبي، حيث تجمع بين جمال الخشب وقوة المعدن، ولا تتطلب أي صيانة سنوية ضد الرمة أو التآكل.`
        }
      ]
    },
    projects: {
      title: 'من أعمالنا',
      subtitle: 'صور حقيقية لمشاريع قمنا بتنفيذها في مناطق الكويت المختلفة',
      viewMore: 'تحميل المزيد',
      details: {
        location: 'الموقع:',
        duration: 'مدة التنفيذ:',
        year: 'السنة:',
        scope: 'نطاق العمل:',
      }
    },
    testimonials: {
      title: 'قالوا عنا',
      subtitle: 'شهادات نعتز بها من عملائنا الكرام',
    },
    faq: {
      title: 'أسئلة شائعة',
      subtitle: 'إجابات على استفساراتكم المتكررة حول خدماتنا',
      items: [
        {
          question: 'كم مدة كفالة العشب الصناعي؟',
          answer: 'نقدم كفالة تصل إلى 5 سنوات على العشب الصناعي ضد تغير اللون وتآكل الشعيرات، مع ضمان جودة التركيب.'
        },
        {
          question: 'هل تقومون بتركيب مظلات الكي سبان (K-Span)؟',
          answer: 'نعم، نحن متخصصون في توريد وتركيب مظلات الكي سبان المعزولة وبدون أعمدة للمساحات الكبيرة ومواقف السيارات.'
        },
        {
          question: 'هل المعاينة والتصميم مجاني؟',
          answer: 'نعم، نقوم بزيارة الموقع ورفع القياسات وتقديم الاستشارة المبدئية مجاناً لجميع مناطق الكويت.'
        },
        {
          question: 'كيف يتم حساب تكلفة تنسيق الحديقة؟',
          answer: 'تعتمد التكلفة على المساحة بالمتر المربع، نوع المواد المختارة (عشب، بلاط، مظلات)، وتعقيد التصميم. نقدم عرض سعر تفصيلي بعد المعاينة.'
        }
      ]
    },
    callAction: {
      title: 'هل لديك مشروع في بالك؟',
      subtitle: 'لا تتردد في الاتصال بنا. فريقنا الهندسي جاهز لزيارة موقعك وتقديم الاستشارة والتصميم المناسب.',
      button: 'اتصل الآن',
      whatsappButton: 'أرسل الطلب واتساب',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة لشركة حدائق الياسمين للتجارة العامة والمقاولات © 2024',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      contactUs: 'بيانات التواصل',
    },
    legal: {
      privacyTitle: 'سياسة الخصوصية وحماية البيانات',
      termsTitle: 'الشروط والأحكام وعقد الخدمة',
      content: '', 
      close: 'أوافق وأغلق',
    },
    login: {
      title: 'بوابة الدخول',
      username: 'اسم المستخدم / رقم الملف',
      password: 'كلمة المرور',
      submit: 'تسجيل دخول',
      welcome: 'أهلاً بك،',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Gallery',
      testimonials: 'Reviews',
      about: 'About Us',
      contact: 'Contact Us',
      lang: 'العربية',
      login: 'Client Portal',
      logout: 'Logout',
    },
    hero: {
      title: 'Jasmine Gardens',
      subtitle: 'Turning your home into a masterpiece. Leaders in landscape design, modern pergolas, and artificial grass in Kuwait.',
      cta: 'Free Consultation',
      bookCall: 'WhatsApp Us',
    },
    about: {
      title: 'Pioneers in Outdoor Design',
      desc: 'At Jasmine Gardens, we don\'t just plant trees or install shades; we create complete outdoor living experiences. As a specialized Kuwaiti company, we fully understand the challenges of the Gulf climate, so we use raw materials specifically designed to withstand high heat while maintaining their beauty and elegance for years.',
      stats_clients: 'Trusted Clients',
      stats_projects: 'Projects Done',
      stats_exp: 'Years Experience',
    },
    timeline: {
      title: 'Our Working Process',
      subtitle: 'Calculated steps to ensure precision and quality from concept to execution',
      steps: {
        step1: { title: 'Consultation', desc: 'Free site visit to take measurements and discuss ideas.' },
        step2: { title: '3D Design', desc: 'Providing a 3D visualization to see the final look before starting.' },
        step3: { title: 'Execution', desc: 'Professional technical team starts work using the best materials.' },
        step4: { title: 'Handover', desc: 'Clean project handover with a certified warranty certificate.' },
      }
    },
    services: {
      title: 'Our Integrated Services',
      subtitle: 'Everything you need for your outdoor space under one roof',
      items: [
        { 
          id: 1, 
          title: 'Shades & Pergolas', 
          description: 'Design and installation of car and garden shades (Wood, Fabric, Kirby, K-Span).', 
          icon: 'Sun',
          longDescription: 'We provide complete shading solutions including insulated Kirby shades, UV-resistant Australian HDPE fabric shades, and K-Span shades offering maximum car protection. Our steel structures are anti-rust treated and thermal oven painted.',
          features: ['100% Heat Insulation', '10-Year Warranty on K-Span', 'Modern Designs matching home facade']
        },
        { 
          id: 2, 
          title: 'Artificial Grass & Walls', 
          description: 'Supply and installation of high-density artificial grass (50mm - 40mm) and green walls.', 
          icon: 'Sprout',
          longDescription: 'Our artificial grass is designed to mimic natural grass in texture and color, with high density up to 18,000 stitches/m. It features drainage holes to prevent odors and withstands heat up to 60°C.',
          features: ['No watering or mowing', 'Safe for kids & pets', 'Color fade resistant']
        },
        { 
          id: 3, 
          title: 'Landscaping & 3D Design', 
          description: 'Complete engineering planning for the garden before execution, including plants and lighting.', 
          icon: 'Trees',
          longDescription: 'Before starting any work, our engineers create a 3D plan for your garden, allowing you to visualize and adjust the final result. We select plants suitable for the Kuwaiti environment and distribute lighting to enhance nighttime aesthetics.',
          features: ['Free Site Visit', 'Realistic Design', 'Strategic Lighting Layout']
        },
        { 
          id: 4, 
          title: 'Outdoor Seating & Decking', 
          description: 'Wooden and iron pergolas (WPC) and modern seating areas for a warm family atmosphere.', 
          icon: 'Ruler',
          longDescription: 'We design and execute luxury outdoor seating using treated WPC wood that resists humidity and termites, or wrought iron with modern laser designs. Seating includes hidden electrical wiring for fans and lighting.',
          features: ['Water & Sun Resistant', 'Custom Designs', 'Optional Side Curtains']
        },
        { 
          id: 5, 
          title: 'Sports Courts', 
          description: 'Equipping football, padel, and tennis courts with certified flooring and standard specifications.', 
          icon: 'Car',
          longDescription: 'We equip sports courts (Football, Padel, Basketball) starting from earthworks and concrete to laying EPDM rubber flooring or FIFA-certified grass, including netting and lighting installation.',
          features: ['Legal Specifications', 'Shock-Absorbing Flooring', 'Floodlights for Courts']
        },
        { 
          id: 6, 
          title: 'Glass Rooms (Sunrooms)', 
          description: 'Transforming outdoor spaces into air-conditioned glass rooms suitable for year-round use.', 
          icon: 'Paintbrush',
          longDescription: 'Sunrooms are the ideal solution to enjoy the garden during Kuwait\'s hot summer. We use heat-insulated Double Glazing and durable aluminum structures, with full air-conditioning capability.',
          features: ['Excellent Heat Insulation', 'Panoramic View', 'Increased Home Space']
        },
      ],
    },
    articles: {
      title: 'Insights & Expertise',
      subtitle: 'Technical vision on best practices in garden design in Kuwait',
      readMore: 'Read Full Article',
      items: [
        {
          id: 1,
          title: 'Scientific Methodology in Sustainable Garden Design',
          excerpt: 'How we use soil analysis and sun paths to ensure your garden sustainability in Kuwait\'s hot climate.',
          date: 'October 2024',
          tags: ['Methodology', 'Research', 'Sustainability'],
          content: `The design philosophy at Jasmine Gardens relies on a precise Research Methodology that considers the harsh climatic conditions of Kuwait. We begin every project with an analytical study of the site:

1. Sun Path Analysis:
We simulate the sun's movement over the site during summer and winter to identify natural shade areas and direct sunlight exposure. This helps us determine the optimal locations for seating areas and shade orientation to reduce heat load by up to 40%.

2. Material Sustainability:
Due to high temperatures, we rely on eco-friendly materials resistant to harsh conditions, such as treated Wood Plastic Composite (WPC) that is unaffected by humidity or thermal expansion, and heat-reflective coatings for metal structures.

3. Water Efficiency:
We utilize the latest Smart Irrigation systems that rely on moisture sensors to conserve water, while selecting native plants suitable for Kuwaiti soil that require less maintenance.`
        },
        {
          id: 2,
          title: 'Guide to Artificial Grass & Shades (SEO Guide)',
          excerpt: 'Everything you need to know about the best types of artificial grass and car shades suitable for Kuwaiti homes.',
          date: 'November 2024',
          tags: ['Artificial Grass', 'Shades', 'K-Span'],
          content: `Artificial Grass and Garden Pergolas are essential elements for improving quality of life in Kuwaiti homes. Here are the top engineering tips for selection:

1. Artificial Grass:
For a natural look and long durability, we recommend choosing grass with a density of no less than 18,000 stitches/sqm and a pile height of 40-50mm. It is crucial to ensure the quality of the backing material and the presence of effective drainage holes to drain rain and wash water, preventing bad odors.

2. K-Span & Kirby Shades:
K-Span shades are the ideal choice for car parking in Kuwait due to their high thermal insulation capacity and resistance to strong winds. They are an economical and practical solution compared to wooden shades that require periodic maintenance.

3. Pergolas:
For gardens, we prefer using Aluminum pergolas with a wood-effect finish, combining the beauty of wood with the strength of metal, requiring no annual maintenance against termites or corrosion.`
        }
      ]
    },
    projects: {
      title: 'Our Portfolio',
      subtitle: 'Real photos of projects we have executed across Kuwait',
      viewMore: 'Load More',
      details: {
        location: 'Location:',
        duration: 'Execution Time:',
        year: 'Year:',
        scope: 'Work Scope:',
      }
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'Feedback we are proud of from our valued clients',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to your common inquiries about our services',
      items: [
        {
          question: 'How long is the artificial grass warranty?',
          answer: 'We offer a warranty of up to 5 years on artificial grass against color fading and fiber degradation, along with an installation quality guarantee.'
        },
        {
          question: 'Do you install K-Span shades?',
          answer: 'Yes, we specialize in supplying and installing insulated K-Span shades without columns for large areas and car parks.'
        },
        {
          question: 'Is the consultation and design free?',
          answer: 'Yes, we visit the site, take measurements, and provide initial consultation free of charge for all areas in Kuwait.'
        },
        {
          question: 'How is landscaping cost calculated?',
          answer: 'Cost depends on area per sqm, selected materials (grass, tiles, shades), and design complexity. We provide a detailed quotation after the site visit.'
        }
      ]
    },
    callAction: {
      title: 'Have a project in mind?',
      subtitle: 'Do not hesitate to contact us. Our engineering team is ready to visit your site and provide the appropriate consultation and design.',
      button: 'Call Now',
      whatsappButton: 'Send via WhatsApp',
    },
    footer: {
      rights: 'All rights reserved to Jasmine Gardens General Trading & Contracting © 2024',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      contactUs: 'Contact Details',
    },
    legal: {
      privacyTitle: 'Privacy Policy & Data Protection',
      termsTitle: 'Terms & Conditions & Service Agreement',
      content: '',
      close: 'Agree & Close',
    },
    login: {
      title: 'Login Portal',
      username: 'Username / File No.',
      password: 'Password',
      submit: 'Login',
      welcome: 'Welcome,',
    },
  },
};

// Mapped Google Drive Images with enhanced details
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 100,
    imageUrl: getDriveImg('1oEl3kMLZEJS-i0zd8wRjh4HMs1eH8RkI'),
    category: 'Outdoor Seating',
    title: { ar: 'جلسة خارجية مميزة', en: 'Premium Outdoor Seating' },
    details: {
      location: { ar: 'المسايل', en: 'Al-Masayel' },
      duration: { ar: '10 أيام', en: '10 Days' },
      year: '2024',
      scope: { ar: 'تصميم وتنفيذ جلسة خارجية مع عشب', en: 'Design and execution of outdoor seating with grass' }
    }
  },
  {
    id: 1,
    imageUrl: getDriveImg('1I_XZ5GABNEKd1Xf4Tdedoz1OLzLyMltu'),
    category: 'Pergolas',
    title: { ar: 'مظلة حدائق مودرن', en: 'Modern Garden Pergola' },
    details: {
      location: { ar: 'الزهراء', en: 'Al-Zahra' },
      duration: { ar: 'أسبوع واحد', en: '1 Week' },
      year: '2023',
      scope: { ar: 'مظلة خشبية مع إضاءة مخفية', en: 'Wooden pergola with hidden lighting' }
    }
  },
  {
    id: 2,
    imageUrl: getDriveImg('1TeTlU7Pz0vYPK_dRN1YHmTpoBuCeDoR2'),
    category: 'Landscaping',
    title: { ar: 'تنسيق حديقة منزلية', en: 'Home Garden Landscaping' },
    details: {
      location: { ar: 'جنوب السرة', en: 'South Surra' },
      duration: { ar: '15 يوم', en: '15 Days' },
      year: '2024',
      scope: { ar: 'لاندسكيب كامل مع شبكة ري', en: 'Full landscape with irrigation system' }
    }
  },
  {
    id: 3,
    imageUrl: getDriveImg('1ynRdmuRZSJeXyEaL4BVPw-HbfBLkqRPx'),
    category: 'Wall Cladding',
    title: { ar: 'ديكورات خشبية للجدران', en: 'Wooden Wall Decor' },
    details: {
      location: { ar: 'القرين', en: 'Al-Qurain' },
      duration: { ar: '5 أيام', en: '5 Days' },
      year: '2023',
      scope: { ar: 'تكسيات خشب WPC للجدران', en: 'WPC wooden wall cladding' }
    }
  },
  {
    id: 4,
    imageUrl: getDriveImg('1q9B0_YK10nxFf-ksma7UULly4dAY42L_'),
    category: 'Green Walls',
    title: { ar: 'تكسيات عشب جداري', en: 'Green Wall Cladding' },
    details: {
      location: { ar: 'السالمية', en: 'Salmiya' },
      duration: { ar: '3 أيام', en: '3 Days' },
      year: '2023',
      scope: { ar: 'عشب جداري كثيف مع زهور', en: 'Dense green wall with flowers' }
    }
  },
  {
    id: 5,
    imageUrl: getDriveImg('1rsX8h33PZXUoO1oY2hgaesvLSkhD1dt8'),
    category: 'Pergolas',
    title: { ar: 'جلسة خارجية فخمة', en: 'Luxury Outdoor Seating' },
    details: {
      location: { ar: 'الشامية', en: 'Shamiya' },
      duration: { ar: '20 يوم', en: '20 Days' },
      year: '2024',
      scope: { ar: 'جلسة متكاملة مع برجولة وممرات', en: 'Complete seating with pergola and walkways' }
    }
  },
  {
    id: 6,
    imageUrl: getDriveImg('14uuXR1d5mgvkH2EPxlmTCBiNHYmBUUSU'),
    category: 'Car Shades',
    title: { ar: 'مظلات سيارات', en: 'Car Parking Shades' },
    details: {
      location: { ar: 'العبدلي', en: 'Abdali' },
      duration: { ar: 'أسبوعين', en: '2 Weeks' },
      year: '2023',
      scope: { ar: 'مظلات كي سبان لمواقف المزرعة', en: 'K-Span shades for farm parking' }
    }
  },
  {
    id: 7,
    imageUrl: getDriveImg('1yHXRmlRIN4HLr7vzdgyZIkq43Ax58KdE'),
    category: 'Walkways',
    title: { ar: 'ممرات حجرية وعشب', en: 'Stone Walkways' },
    details: {
      location: { ar: 'قرطبة', en: 'Qortuba' },
      duration: { ar: 'أسبوع', en: '1 Week' },
      year: '2023',
      scope: { ar: 'تركيب ممرات حجر طبيعي', en: 'Natural stone walkway installation' }
    }
  },
  {
    id: 8,
    imageUrl: getDriveImg('1u3MmlV5iwr7-m2Thjr7aDgNn44MBT9o_'),
    category: 'Landscaping',
    title: { ar: 'تصميم ممرات حدائق', en: 'Garden Path Design' },
    details: {
      location: { ar: 'الروضة', en: 'Rawda' },
      duration: { ar: '4 أيام', en: '4 Days' },
      year: '2024',
      scope: { ar: 'تصميم ممرات ديكورية', en: 'Decorative path design' }
    }
  },
  {
    id: 9,
    imageUrl: getDriveImg('1pUA0ylTG3prVeM1qrR7uk5rfF_dyMtxt'),
    category: 'Pergolas',
    title: { ar: 'برجولة ألمنيوم', en: 'Aluminum Pergola' },
    details: {
      location: { ar: 'الخيران', en: 'Khiran' },
      duration: { ar: '10 أيام', en: '10 Days' },
      year: '2023',
      scope: { ar: 'برجولة ألمنيوم مقاومة للصدأ', en: 'Rust-proof aluminum pergola' }
    }
  },
  {
    id: 10,
    imageUrl: getDriveImg('10Fhi5I-_KUJA71boueANcPtS6JadtCMa'),
    category: 'Seating',
    title: { ar: 'جلسة أرضية خارجية', en: 'Outdoor Floor Seating' },
    details: {
      location: { ar: 'كبد', en: 'Kabuhd' },
      duration: { ar: 'أسبوع', en: '1 Week' },
      year: '2024',
      scope: { ar: 'جلسة شعبية مطورة', en: 'Modernized traditional seating' }
    }
  },
  {
    id: 11,
    imageUrl: getDriveImg('1y7rcLrhzQ9xNiSbpxHp2nXvLmsfoVhot'),
    category: 'Decor',
    title: { ar: 'ديكورات خارجية', en: 'Outdoor Decorations' },
    details: {
      location: { ar: 'مشرف', en: 'Mishref' },
      duration: { ar: '3 أيام', en: '3 Days' },
      year: '2023',
      scope: { ar: 'تزيين السور الخارجي', en: 'Outer fence decoration' }
    }
  },
  {
    id: 12,
    imageUrl: getDriveImg('1AfdBqqXbUqPGwr9gFXTyQHs7uqn2_9BR'),
    category: 'Landscaping',
    title: { ar: 'تنسيق عشب صناعي', en: 'Artificial Grass Layout' },
    details: {
      location: { ar: 'صباح الأحمد', en: 'Sabah Al-Ahmad' },
      duration: { ar: 'يومين', en: '2 Days' },
      year: '2024',
      scope: { ar: 'فرش عشب صناعي 50مم', en: '50mm artificial grass installation' }
    }
  },
  {
    id: 13,
    imageUrl: getDriveImg('1jBnFZT0Ym3d2G-hH2DtFMzz7t8vOqz1v'),
    category: 'Structures',
    title: { ar: 'أعمال حدادة ومظلات', en: 'Steel & Shade Works' },
    details: {
      location: { ar: 'الوفرة', en: 'Wafra' },
      duration: { ar: 'شهر', en: '1 Month' },
      year: '2023',
      scope: { ar: 'مظلات سيارات ومخازن', en: 'Car shades and storage covers' }
    }
  },
  {
    id: 14,
    imageUrl: getDriveImg('1EkBS_TGq780N0gd2do-kiWmgMH5xCI2f'),
    category: 'Green Walls',
    title: { ar: 'جدار أخضر صناعي', en: 'Artificial Green Wall' },
    details: {
      location: { ar: 'بيان', en: 'Bayan' },
      duration: { ar: 'يومين', en: '2 Days' },
      year: '2024',
      scope: { ar: 'تركيب عشب جداري', en: 'Wall grass installation' }
    }
  },
  {
    id: 15,
    imageUrl: getDriveImg('16Le8RTIH9ReQ6breOPA7BVK3RYUifMCI'),
    category: 'Walkways',
    title: { ar: 'بلاط متداخل وممرات', en: 'Interlock & Walkways' },
    details: {
      location: { ar: 'الفردوس', en: 'Firdous' },
      duration: { ar: 'أسبوع', en: '1 Week' },
      year: '2023',
      scope: { ar: 'توريد وتركيب كاشي متداخل', en: 'Supply and install interlocking tiles' }
    }
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: 'أبو فهد العازمي',
    role: { ar: 'منطقة صباح الأحمد', en: 'Sabah Al-Ahmad Area' },
    content: {
      ar: 'شغل مرتب ونظيف، والعمالة محترفة جداً. ركبوا لي مظلات الكيربي والعشب الصناعي في وقت قياسي. الله يبارك لهم في رزقهم.',
      en: 'Neat and clean work, very professional labor. They installed Kirby shades and artificial grass in record time. God bless them.'
    },
    rating: 5
  },
  {
    id: 2,
    name: 'مهندس / خالد المطيري',
    role: { ar: 'استشاري مشاريع', en: 'Projects Consultant' },
    content: {
      ar: 'تعاملت مع شركات كثيرة، لكن حدائق الياسمين يتميزون بالدقة في المواعيد وجودة المواد المستخدمة خصوصاً في الأعمال الخشبية.',
      en: 'I dealt with many companies, but Jasmine Gardens is distinguished by punctuality and quality of materials, especially in woodwork.'
    },
    rating: 5
  },
  {
    id: 3,
    name: 'أم عبد الله',
    role: { ar: 'الرميثية', en: 'Rumaithiya' },
    content: {
      ar: 'حولوا الحوش عندي من مكان مهمل إلى حديقة تشرح الصدر. تصميم الممرات والإضاءة كان ذوق جداً.',
      en: 'They transformed my backyard from a neglected place into a delightful garden. The design of walkways and lighting was very tasteful.'
    },
    rating: 4
  }
];