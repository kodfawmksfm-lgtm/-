import { Translation, ProjectItem, TestimonialItem } from './types';

export const IMAGES = {
  // Main Hero: High-quality garden landscape or pergola
  hero: 'https://images.unsplash.com/photo-1621871868682-e44043951844?q=80&w=2070&auto=format&fit=crop',
  // About Section: Team or detailed work
  about: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2070&auto=format&fit=crop',
};

export const TRANSLATIONS: Record<'ar' | 'en', Translation> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      testimonials: 'آراء العملاء',
      about: 'عن الشركة',
      contact: 'تواصل معنا',
      lang: 'English',
      login: 'تسجيل الدخول',
      logout: 'خروج',
    },
    hero: {
      title: 'حدائق الياسمين',
      subtitle: 'نحول مساحتك الخارجية إلى واحة خضراء تنبض بالحياة. خبراء تنسيق الحدائق، المظلات، والعشب الصناعي في الكويت.',
      cta: 'اطلب استشارة مجانية',
      bookCall: 'احجز مكالمة الآن',
    },
    about: {
      title: 'من نحن',
      desc: 'شركة حدائق الياسمين هي الشركة الرائدة في الكويت لخدمات تنسيق الحدائق والمقاولات الخارجية. نجمع بين الإبداع في التصميم والدقة في التنفيذ، مستخدمين أجود الخامات المقاومة للظروف المناخية في الخليج. فريقنا متخصص في تحويل الأفكار إلى واقع ملموس يضفي الجمال والراحة على منزلك.',
      stats_clients: 'عميل سعيد',
      stats_projects: 'مشروع ناجح',
      stats_exp: 'سنوات خبرة',
    },
    services: {
      title: 'خدماتنا الاحترافية',
      subtitle: 'حلول هندسية وجمالية متكاملة للمساحات الخارجية',
      items: [
        { id: 1, title: 'مظلات وسواتر حديثة', description: 'تصميم وتنفيذ مظلات سيارات وحدائق (K-Span، قماش، خشب معالج) بأحدث التصاميم المقاومة للحرارة.', icon: 'Sun' },
        { id: 2, title: 'عشب صناعي وتنسيق', description: 'توريد وتركيب العشب الصناعي 3D عالي الكثافة، وتصميم ممرات حجرية وعشبية جذابة.', icon: 'Sprout' },
        { id: 3, title: 'تصميم حدائق لاندسكيب', description: 'تخطيط هندسي شامل للنباتات، شبكات الري، والإضاءة الخارجية لتناغم مثالي مع الطبيعة.', icon: 'Trees' },
        { id: 4, title: 'ديكورات خشبية وبرجولات', description: 'جلسات خارجية فاخرة، برجولات خشبية، وأرضيات باركيه خارجي WPC مقاوم للماء.', icon: 'Ruler' },
        { id: 5, title: 'ملاعب وتجهيزات رياضية', description: 'إنشاء ملاعب كرة قدم وبادل وملاعب متعددة الأغراض بمواصفات قياسية عالمية.', icon: 'Car' },
        { id: 6, title: 'غرف زجاجية خارجية', description: 'تصميم وتنفيذ غرف زجاجية (Sunrooms) بإطلالات بانورامية مكيفة للحدائق والأسطح.', icon: 'Paintbrush' },
      ],
    },
    projects: {
      title: 'معرض مشاريعنا',
      subtitle: 'جولة في أحدث أعمالنا المنفذة في مناطق الكويت',
      viewMore: 'شاهد المزيد من الأعمال',
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'نفخر بثقة عملائنا ونسعى دائماً لتجاوز توقعاتهم',
    },
    callAction: {
      title: 'هل تفضل التحدث معنا مباشرة؟',
      subtitle: 'احجز مكالمة هاتفية فورية مع أحد خبرائنا لمناقشة تفاصيل مشروعك والحصول على استشارة سريعة.',
      button: 'اتصل بنا الآن',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة لشركة حدائق الياسمين 2024',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      contactUs: 'اتصل بنا',
    },
    legal: {
      privacyTitle: 'سياسة الخصوصية',
      termsTitle: 'الشروط والأحكام',
      content: '', 
      close: 'إغلاق',
    },
    login: {
      title: 'تسجيل الدخول',
      username: 'اسم المستخدم',
      password: 'كلمة المرور',
      submit: 'دخول',
      welcome: 'مرحباً',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      testimonials: 'Testimonials',
      about: 'About Us',
      contact: 'Contact',
      lang: 'العربية',
      login: 'Login',
      logout: 'Logout',
    },
    hero: {
      title: 'Jasmine Gardens',
      subtitle: 'Transforming your outdoor space into a vibrant living oasis. Experts in landscaping, shades, and artificial grass in Kuwait.',
      cta: 'Get Free Consultation',
      bookCall: 'Book a Call Now',
    },
    about: {
      title: 'About Us',
      desc: 'Jasmine Gardens is the leading landscaping and outdoor contracting company in Kuwait. We combine creativity in design with precision in execution, using the finest materials resistant to Gulf weather conditions. Our team specializes in turning ideas into reality.',
      stats_clients: 'Happy Clients',
      stats_projects: 'Projects Completed',
      stats_exp: 'Years Exp.',
    },
    services: {
      title: 'Professional Services',
      subtitle: 'Integrated engineering and aesthetic solutions for outdoor spaces',
      items: [
        { id: 1, title: 'Modern Shades & Pergolas', description: 'Design and execution of car and garden shades (K-Span, Fabric, Treated Wood) with heat-resistant designs.', icon: 'Sun' },
        { id: 2, title: 'Artificial Grass & Landscaping', description: 'Supply and installation of high-density 3D artificial grass, and attractive stone pathway designs.', icon: 'Sprout' },
        { id: 3, title: 'Landscape Design', description: 'Comprehensive engineering planning for plants, irrigation networks, and outdoor lighting.', icon: 'Trees' },
        { id: 4, title: 'Wooden Decor & Decking', description: 'Luxury outdoor seating, wooden pergolas, and water-resistant WPC outdoor parquet flooring.', icon: 'Ruler' },
        { id: 5, title: 'Sports Fields', description: 'Construction of football, padel, and multi-purpose courts with international standards.', icon: 'Car' },
        { id: 6, title: 'Glass Garden Rooms', description: 'Design and execution of panoramic glass rooms (Sunrooms) for gardens and rooftops.', icon: 'Paintbrush' },
      ],
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'A tour of our latest works executed across Kuwait',
      viewMore: 'View More Projects',
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'We take pride in our clients\' trust and always strive to exceed their expectations',
    },
    callAction: {
      title: 'Prefer to speak with us directly?',
      subtitle: 'Book an instant phone call with one of our experts to discuss your project details and get quick advice.',
      button: 'Call Us Now',
    },
    footer: {
      rights: 'All rights reserved to Jasmine Gardens 2024',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      contactUs: 'Contact Us',
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms & Conditions',
      content: '',
      close: 'Close',
    },
    login: {
      title: 'Login',
      username: 'Username',
      password: 'Password',
      submit: 'Sign In',
      welcome: 'Welcome',
    },
  },
};

// IMPORTANT: To use your attached images, ensure they are in the `public/` folder
// and replace the URLs below with your local paths (e.g., '/image_01.jpg').
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    category: 'Glass Rooms',
    title: { ar: 'غرف زجاجية خارجية بانورامية', en: 'Modern Panoramic Glass Room' },
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=1200&auto=format&fit=crop',
    category: 'Walkways',
    title: { ar: 'ممرات حجرية مودرن', en: 'Modern Stone Pathways' },
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?q=80&w=1200&auto=format&fit=crop',
    category: 'Green Walls',
    title: { ar: 'تكسيات عشب جداري مع إضاءة', en: 'Green Wall with Lighting' },
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1632212896963-261235c46d89?q=80&w=1200&auto=format&fit=crop',
    category: 'Pergolas',
    title: { ar: 'برجولات ومظلات جلسات', en: 'Garden Pergola & Seating' },
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1635327692140-715cbfe20e22?q=80&w=1200&auto=format&fit=crop',
    category: 'Car Shades',
    title: { ar: 'مظلات سيارات كابولي', en: 'Cantilever Car Shades' },
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1600210491892-03d54db8d96e?q=80&w=1200&auto=format&fit=crop',
    category: 'Glass Rooms',
    title: { ar: 'مجالس زجاجية للأسطح', en: 'Rooftop Glass Majlis' },
  },
  {
    id: 7,
    imageUrl: 'https://images.unsplash.com/photo-1598560083773-267751d1cb96?q=80&w=1200&auto=format&fit=crop',
    category: 'Decking',
    title: { ar: 'أرضيات خشبية وجلسات', en: 'Wooden Decking Area' },
  },
  {
    id: 8,
    imageUrl: 'https://images.unsplash.com/photo-1533628635777-112b2239b1c7?q=80&w=1200&auto=format&fit=crop',
    category: 'Green Walls',
    title: { ar: 'سياج أخضر وتنسيق سور', en: 'Green Fence Design' },
  },
  {
    id: 9,
    imageUrl: 'https://images.unsplash.com/photo-1595658630309-784b220a7352?q=80&w=1200&auto=format&fit=crop',
    category: 'Landscaping',
    title: { ar: 'تنسيق حدائق متكامل', en: 'Full Landscape Project' },
  },
  {
    id: 10,
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
    category: 'Patios',
    title: { ar: 'جلسات خارجية فخمة', en: 'Luxury Outdoor Patio' },
  },
  {
    id: 11,
    imageUrl: 'https://images.unsplash.com/photo-1628744448839-2832a20c2069?q=80&w=1200&auto=format&fit=crop',
    category: 'Shades',
    title: { ar: 'مظلات حدائق قماشية', en: 'Fabric Garden Shades' },
  },
  {
    id: 12,
    imageUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop',
    category: 'Lighting',
    title: { ar: 'توزيع إضاءة الحدائق', en: 'Garden Lighting Distribution' },
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: 'Abdullah Al-Mutairi',
    role: { ar: 'صاحب فيلا - جنوب السرة', en: 'Villa Owner - South Surra' },
    content: {
      ar: 'تعامل راقي وشغل محترف جداً. حولوا حديقة منزلي المهملة إلى مكان رائع للجلوس والاستجمام. المظلات جودتها ممتازة.',
      en: 'Classy dealing and very professional work. They transformed my neglected garden into a wonderful place for sitting and relaxation. The shades quality is excellent.'
    },
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Al-Sabah',
    role: { ar: 'مهندسة ديكور', en: 'Interior Designer' },
    content: {
      ar: 'بصفتي مصممة، أدقق في التفاصيل، وفريق حدائق الياسمين كان على قدر المسؤولية. العشب الصناعي وتوزيع الإضاءة كان مثالياً.',
      en: 'As a designer, I pay attention to details, and the Jasmine Gardens team was up to the responsibility. The artificial grass and lighting distribution were perfect.'
    },
    rating: 5
  },
  {
    id: 3,
    name: 'Mohammad Al-Kandari',
    role: { ar: 'صاحب شاليه - الخيران', en: 'Chalet Owner - Khiran' },
    content: {
      ar: 'ركبوا لي برجولات خشبية وممرات حجرية في الشاليه. سرعة في الإنجاز ونظافة في العمل. أنصح بالتعامل معهم.',
      en: 'They installed wooden pergolas and stone pathways in my chalet. Fast completion and clean work. I recommend dealing with them.'
    },
    rating: 4
  }
];