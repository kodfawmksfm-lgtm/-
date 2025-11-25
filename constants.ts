import { Translation, ProjectItem, TestimonialItem } from './types';

// Helper to convert Drive links to viewable URLs
const getDriveImg = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const IMAGES = {
  hero: getDriveImg('1gcFPuTkQ01TQN11bb4G2kuRDy5nZJDY0'), 
  about: getDriveImg('1TeTlU7Pz0vYPK_dRN1YHmTpoBuCeDoR2'),
};

export const TRANSLATIONS: Record<'ar' | 'en', Translation> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      projects: 'معرض الأعمال',
      testimonials: 'آراء العملاء',
      about: 'عن الشركة',
      contact: 'اتصل بنا',
      lang: 'English',
      login: 'دخول الموظفين',
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
    services: {
      title: 'خدماتنا المتكاملة',
      subtitle: 'كل ما تحتاجه لمساحتك الخارجية تحت سقف واحد',
      items: [
        { id: 1, title: 'مظلات وسواتر', description: 'تصميم وتركيب مظلات السيارات والحدائق (خشب، قماش، كيربي، K-Span) بأحدث التصاميم الهندسية المقاومة للرياح والشمس.', icon: 'Sun' },
        { id: 2, title: 'عشب صناعي وجداري', description: 'توريد وتركيب عشب صناعي عالي الكثافة (50مم - 40مم) وتكسيات خضراء للجدران بمظهر طبيعي 100% وكفالة حقيقية.', icon: 'Sprout' },
        { id: 3, title: 'لاندسكيب وتصاميم 3D', description: 'تخطيط هندسي كامل للحديقة قبل التنفيذ وتوزيع النباتات والإضاءة وشبكات الري الحديثة بأحدث التقنيات.', icon: 'Trees' },
        { id: 4, title: 'جلسات خارجية وبرجولات', description: 'برجولات خشبية وحديد (WPC) وجلسات مودرن تخلق جواً عائلياً دافئاً في حديقتك مع إضاءة مخفية.', icon: 'Ruler' },
        { id: 5, title: 'ملاعب رياضية', description: 'تجهيز ملاعب كرة القدم والبادل والتنس بأرضيات معتمدة ومواصفات قياسية عالمية.', icon: 'Car' },
        { id: 6, title: 'غرف زجاجية (Sunroom)', description: 'تحويل المساحات الخارجية إلى غرف زجاجية مكيفة صالحة للاستخدام طوال العام بإطلالة بانورامية.', icon: 'Paintbrush' },
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
    },
    testimonials: {
      title: 'قالوا عنا',
      subtitle: 'شهادات نعتز بها من عملائنا الكرام',
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
      title: 'نظام إدارة المشاريع',
      username: 'اسم المستخدم',
      password: 'كلمة المرور',
      submit: 'دخول',
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
      login: 'Staff Login',
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
    services: {
      title: 'Our Integrated Services',
      subtitle: 'Everything you need for your outdoor space under one roof',
      items: [
        { id: 1, title: 'Shades & Pergolas', description: 'Design and installation of car and garden shades (Wood, Fabric, Kirby, K-Span) with modern engineering designs resistant to wind and sun.', icon: 'Sun' },
        { id: 2, title: 'Artificial Grass & Walls', description: 'Supply and installation of high-density artificial grass (50mm - 40mm) and natural-looking green wall cladding with real warranty.', icon: 'Sprout' },
        { id: 3, title: 'Landscaping & 3D Design', description: 'Complete engineering planning for the garden before execution, including plant distribution, lighting, and modern irrigation systems.', icon: 'Trees' },
        { id: 4, title: 'Outdoor Seating & Decking', description: 'Wooden and iron pergolas (WPC) and modern seating areas that create a warm family atmosphere in your garden.', icon: 'Ruler' },
        { id: 5, title: 'Sports Courts', description: 'Equipping football, padel, and tennis courts with certified flooring and standard specifications.', icon: 'Car' },
        { id: 6, title: 'Glass Rooms (Sunrooms)', description: 'Transforming outdoor spaces into air-conditioned glass rooms suitable for year-round use with panoramic views.', icon: 'Paintbrush' },
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
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'Feedback we are proud of from our valued clients',
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
      title: 'Project Management System',
      username: 'Username',
      password: 'Password',
      submit: 'Login',
      welcome: 'Welcome,',
    },
  },
};

// Mapped Google Drive Images
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 100,
    imageUrl: getDriveImg('1oEl3kMLZEJS-i0zd8wRjh4HMs1eH8RkI'),
    category: 'Outdoor Seating',
    title: { ar: 'جلسة خارجية مميزة', en: 'Premium Outdoor Seating' },
  },
  {
    id: 1,
    imageUrl: getDriveImg('1I_XZ5GABNEKd1Xf4Tdedoz1OLzLyMltu'),
    category: 'Pergolas',
    title: { ar: 'مظلة حدائق مودرن', en: 'Modern Garden Pergola' },
  },
  {
    id: 2,
    imageUrl: getDriveImg('1TeTlU7Pz0vYPK_dRN1YHmTpoBuCeDoR2'),
    category: 'Landscaping',
    title: { ar: 'تنسيق حديقة منزلية', en: 'Home Garden Landscaping' },
  },
  {
    id: 3,
    imageUrl: getDriveImg('1ynRdmuRZSJeXyEaL4BVPw-HbfBLkqRPx'),
    category: 'Wall Cladding',
    title: { ar: 'ديكورات خشبية للجدران', en: 'Wooden Wall Decor' },
  },
  {
    id: 4,
    imageUrl: getDriveImg('1q9B0_YK10nxFf-ksma7UULly4dAY42L_'),
    category: 'Green Walls',
    title: { ar: 'تكسيات عشب جداري', en: 'Green Wall Cladding' },
  },
  {
    id: 5,
    imageUrl: getDriveImg('1rsX8h33PZXUoO1oY2hgaesvLSkhD1dt8'),
    category: 'Pergolas',
    title: { ar: 'جلسة خارجية فخمة', en: 'Luxury Outdoor Seating' },
  },
  {
    id: 6,
    imageUrl: getDriveImg('14uuXR1d5mgvkH2EPxlmTCBiNHYmBUUSU'),
    category: 'Car Shades',
    title: { ar: 'مظلات سيارات', en: 'Car Parking Shades' },
  },
  {
    id: 7,
    imageUrl: getDriveImg('1yHXRmlRIN4HLr7vzdgyZIkq43Ax58KdE'),
    category: 'Walkways',
    title: { ar: 'ممرات حجرية وعشب', en: 'Stone Walkways' },
  },
  {
    id: 8,
    imageUrl: getDriveImg('1u3MmlV5iwr7-m2Thjr7aDgNn44MBT9o_'),
    category: 'Landscaping',
    title: { ar: 'تصميم ممرات حدائق', en: 'Garden Path Design' },
  },
  {
    id: 9,
    imageUrl: getDriveImg('1pUA0ylTG3prVeM1qrR7uk5rfF_dyMtxt'),
    category: 'Pergolas',
    title: { ar: 'برجولة ألمنيوم', en: 'Aluminum Pergola' },
  },
  {
    id: 10,
    imageUrl: getDriveImg('10Fhi5I-_KUJA71boueANcPtS6JadtCMa'),
    category: 'Seating',
    title: { ar: 'جلسة أرضية خارجية', en: 'Outdoor Floor Seating' },
  },
  {
    id: 11,
    imageUrl: getDriveImg('1y7rcLrhzQ9xNiSbpxHp2nXvLmsfoVhot'),
    category: 'Decor',
    title: { ar: 'ديكورات خارجية', en: 'Outdoor Decorations' },
  },
  {
    id: 12,
    imageUrl: getDriveImg('1AfdBqqXbUqPGwr9gFXTyQHs7uqn2_9BR'),
    category: 'Landscaping',
    title: { ar: 'تنسيق عشب صناعي', en: 'Artificial Grass Layout' },
  },
  {
    id: 13,
    imageUrl: getDriveImg('1jBnFZT0Ym3d2G-hH2DtFMzz7t8vOqz1v'),
    category: 'Structures',
    title: { ar: 'أعمال حدادة ومظلات', en: 'Steel & Shade Works' },
  },
  {
    id: 14,
    imageUrl: getDriveImg('1EkBS_TGq780N0gd2do-kiWmgMH5xCI2f'),
    category: 'Green Walls',
    title: { ar: 'جدار أخضر صناعي', en: 'Artificial Green Wall' },
  },
  {
    id: 15,
    imageUrl: getDriveImg('16Le8RTIH9ReQ6breOPA7BVK3RYUifMCI'),
    category: 'Walkways',
    title: { ar: 'بلاط متداخل وممرات', en: 'Interlock & Walkways' },
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