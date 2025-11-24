import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, Mail, MapPin, Sun, Leaf, Flower2, Umbrella, Star, CheckCircle, ZoomIn, Quote, ArrowRight, User, LogOut } from 'lucide-react';
import { Language, ProjectItem, Translation } from './types';
import { TRANSLATIONS, IMAGES, PROJECTS_DATA, TESTIMONIALS_DATA } from './constants';
import { Logo } from './components/Logo';
import FloatingActions from './components/FloatingWhatsApp';
import LegalModal from './components/LegalModal';
import LoginModal from './components/LoginModal';
import AnimatedCounter from './components/AnimatedCounter';

// Component for smooth image loading
const FadeInImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: isLoaded ? 1 : 0, filter: isLoaded ? "blur(0px)" : "blur(10px)" }}
        transition={{ duration: 0.7 }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

// Scroll To Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Use 'instant' to prevent fighting with CSS scroll-behavior: smooth during page transitions
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

interface NavButtonProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

// Navigation Link Component with Animation
const NavButton: React.FC<NavButtonProps> = ({ to, label, isActive, onClick }) => (
  <Link to={to} onClick={onClick} className="relative inline-block">
    <motion.div
      className={`px-4 py-2 rounded-full font-medium transition-colors ${
        isActive 
          ? 'text-primary-700 bg-primary-50 font-bold' 
          : 'text-gray-600'
      }`}
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: isActive ? undefined : '#f0fdf4', // primary-50
        color: '#15803d' // primary-700
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {label}
    </motion.div>
  </Link>
);

// --- Page Components ---

const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="relative bg-primary-900 text-white py-24 pt-32 overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    <div className="absolute -right-20 top-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary-100 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);

const Home = ({ t, lang }: { t: any, lang: Language }) => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <FadeInImage 
            src={IMAGES.hero}
            alt="Kuwait Garden Landscape"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block py-1 px-3 rounded-full bg-primary-500/30 backdrop-blur-sm border border-primary-400/50 text-sm md:text-base mb-4 font-medium"
            >
              {lang === 'ar' ? 'الخيار الأول في الكويت' : '#1 Choice in Kuwait'}
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-primary-900/50 backdrop-blur-sm w-full sm:w-auto justify-center hover:scale-105"
                >
                {t.hero.cta}
                {lang === 'ar' ? <ArrowRight className="rotate-180 w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Link>
                <a
                href="tel:+96569997026"
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primary-700 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg backdrop-blur-sm w-full sm:w-auto justify-center hover:scale-105"
                >
                <Phone className="w-5 h-5" />
                {t.hero.bookCall}
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">{t.services.title}</h2>
              <p className="text-gray-500">{t.services.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {t.services.items.slice(0, 3).map((service: any) => (
                 <div key={service.id} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                        {service.icon === 'Sun' && <Sun className="w-8 h-8" />}
                        {service.icon === 'Sprout' && <Leaf className="w-8 h-8" />}
                        {service.icon === 'Trees' && <Flower2 className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                 </div>
               ))}
            </div>
            <div className="text-center">
              <Link to="/services" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700">
                 {lang === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
                 {lang === 'ar' ? <ArrowRight className="rotate-180 w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-600 mix-blend-multiply opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.callAction.title}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{t.callAction.subtitle}</p>
            <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-secondary font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
                <Phone className="w-6 h-6" />
                {t.callAction.button}
            </Link>
        </div>
      </section>
    </>
  );
};

const ServicesPage = ({ t }: { t: any }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-10 h-10 text-white" />;
      case 'Sprout': return <Leaf className="w-10 h-10 text-white" />;
      case 'Trees': return <Flower2 className="w-10 h-10 text-white" />;
      case 'Ruler': return <Umbrella className="w-10 h-10 text-white" />;
      case 'Car': return <Star className="w-10 h-10 text-white" />;
      case 'Paintbrush': return <CheckCircle className="w-10 h-10 text-white" />;
      default: return <Star className="w-10 h-10 text-white" />;
    }
  };

  return (
    <>
      <PageHeader title={t.services.title} subtitle={t.services.subtitle} />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.services.items.map((service: any) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12 }}
                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div>{getIcon(service.icon)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{service.description}</p>
                </motion.div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

const ProjectsPage = ({ t, lang, onSelectProject }: { t: any, lang: Language, onSelectProject: (p: ProjectItem) => void }) => {
  return (
    <>
      <PageHeader title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DATA.map((project) => (
                <motion.div
                    key={project.id}
                    layoutId={`project-card-${project.id}`}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-gray-200"
                    onClick={() => onSelectProject(project)}
                >
                    <FadeInImage
                    src={project.imageUrl}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary-300 text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                    <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {project.title[lang]}
                    </h3>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all delay-100 hover:bg-white hover:text-primary-600 text-white">
                        <ZoomIn className="w-5 h-5" />
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
         </div>
      </div>
    </>
  );
};

const AboutPage = ({ t, lang }: { t: any, lang: Language }) => (
  <>
    <PageHeader title={t.about.title} />
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl rotate-3"></div>
              <FadeInImage 
                src={IMAGES.about} 
                alt="About Jasmine Gardens" 
                className="relative rounded-3xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-primary-500 max-w-xs z-20 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary-100 text-primary-600 rounded-full">
                      <Star className="w-8 h-8 fill-current" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-gray-900 flex items-center gap-1">
                        <AnimatedCounter value={10} />+
                      </p>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.about.stats_exp}</p>
                    </div>
                  </div>
              </div>
            </div>
            
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t.about.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md transition-all">
                  <h4 className="text-4xl font-bold text-primary-600 mb-2 flex items-center gap-1">
                    <AnimatedCounter value={500} />+
                  </h4>
                  <p className="text-gray-600 font-medium">{t.about.stats_projects}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-md transition-all">
                  <h4 className="text-4xl font-bold text-primary-600 mb-2 flex items-center gap-1">
                    <AnimatedCounter value={100} />%
                  </h4>
                  <p className="text-gray-600 font-medium">{t.about.stats_clients}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {['تصاميم حصرية وعصرية', 'فريق عمل محترف', 'ضمان على التنفيذ', 'أسعار تنافسية'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="bg-primary-100 p-1 rounded-full">
                        <CheckCircle className="w-5 h-5 text-primary-600" />
                      </div>
                      <span>{lang === 'ar' ? item : 'Professional Service Point'}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  </>
);

const TestimonialsPage = ({ t, lang }: { t: any, lang: Language }) => (
    <>
      <PageHeader title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-shadow"
              >
                <Quote className="absolute top-8 right-8 text-primary-100 w-10 h-10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content[lang]}"
                </p>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                      {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-primary-600">{testimonial.role[lang]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
      </section>
    </>
);

const ContactPage = ({ t, lang, handleSubmit, formData, handleInputChange, errors, isSubmitting, submitSuccess }: any) => (
  <>
    <PageHeader title={t.contact} subtitle={t.callAction.subtitle} />
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">{t.hero.cta}</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                {lang === 'ar' 
                  ? 'جاهز لتحويل حديقتك؟ تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك.' 
                  : 'Ready to transform your garden? Contact us today for a free consultation and a custom quote for your project.'}
              </p>
              <div className="space-y-6">
                <a href="tel:+96569997026" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all transform shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-semibold dir-ltr text-gray-800">+965 6999 7026</span>
                </a>
                <a href="mailto:info@jasminegardens.com" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all transform shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">info@jasminegardens.com</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">
                    {lang === 'ar' ? 'الكويت، جميع المناطق' : 'Kuwait, All Areas'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  {submitSuccess && (
                  <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2"
                  >
                      <CheckCircle className="w-5 h-5" />
                      {lang === 'ar' ? 'تم استلام طلبك بنجاح! سنتواصل معك قريباً.' : 'Request received successfully! We will contact you soon.'}
                  </motion.div>
                  )}

                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-500'} focus:ring-2 focus:border-transparent outline-none transition-all bg-white`} 
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-500'} focus:ring-2 focus:border-transparent outline-none transition-all bg-white`} 
                      dir="ltr" 
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-500'} focus:ring-2 focus:border-transparent outline-none transition-all bg-white`} 
                      dir="ltr" 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === 'ar' ? 'نوع الخدمة' : 'Service Type'}
                  </label>
                  <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                      {t.services.items.map((item: any) => (
                      <option key={item.id} value={item.title}>{item.title}</option>
                      ))}
                  </select>
                  </div>

                  <button 
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2"
                  >
                      {isSubmitting ? (
                          <>
                              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              {lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                          </>
                      ) : (
                          lang === 'ar' ? 'إرسال الطلب' : 'Send Request'
                      )}
                  </button>
              </form>
            </div>
          </div>
        </div>
    </section>
  </>
);

// --- Main App Component ---

function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [modalType, setModalType] = useState<'privacy' | 'terms'>('privacy');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });
  const [errors, setErrors] = useState<{name?: string, phone?: string, email?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const t = TRANSLATIONS[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.dir = dir;
    document.title = lang === 'ar' 
      ? 'حدائق الياسمين | تصميم وتنسيق حدائق في الكويت' 
      : 'Jasmine Gardens | Landscape Design in Kuwait';
  }, [lang, dir]);

  // Reset service when language changes
  useEffect(() => {
    if (t.services.items.length > 0) {
        setFormData(prev => ({...prev, service: t.services.items[0].title}));
    }
  }, [lang, t.services.items]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
    setIsMenuOpen(false);
  };

  const openLegal = (type: 'privacy' | 'terms') => {
    setModalType(type);
    setLegalModalOpen(true);
  };

  const handleLogin = (username: string) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = lang === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = lang === 'ar' ? 'الاسم يجب أن يكون ٣ أحرف على الأقل' : 'Name must be at least 3 characters';
    }

    const phoneRegex = /^[0-9+\s-]{8,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
       newErrors.phone = lang === 'ar' ? 'رقم الهاتف غير صحيح (٨ أرقام على الأقل)' : 'Invalid phone number (min 8 digits)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
       newErrors.email = lang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
       newErrors.email = lang === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: t.services.items[0].title });
      setErrors({});
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const navLinks = [
    { key: 'home', path: '/' },
    { key: 'services', path: '/services' },
    { key: 'projects', path: '/projects' },
    { key: 'testimonials', path: '/testimonials' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`min-h-screen bg-white relative ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <ScrollToTop />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white"></div>
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"
          />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen || (typeof window !== 'undefined' && window.scrollY > 50) ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-50">
               <Logo className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-12 transition-transform duration-500" />
               <div className="flex flex-col">
                 <span className={`text-xl md:text-2xl font-bold leading-none ${isMenuOpen || (typeof window !== 'undefined' && window.scrollY > 50) ? 'text-primary-800' : 'text-primary-800 lg:text-white'}`}>
                   {lang === 'ar' ? 'حدائق الياسمين' : 'Jasmine Gardens'}
                 </span>
                 <span className={`text-[10px] md:text-xs tracking-widest uppercase ${isMenuOpen || (typeof window !== 'undefined' && window.scrollY > 50) ? 'text-secondary' : 'text-secondary lg:text-primary-200'}`}>
                   Landscape Design
                 </span>
               </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-sm">
               {navLinks.map((link) => (
                 <NavButton 
                   key={link.key} 
                   to={link.path} 
                   label={t.nav[link.key as keyof typeof t.nav]} 
                   isActive={isActive(link.path)} 
                 />
               ))}
               <div className="w-px h-6 bg-gray-300 mx-2"></div>
               <button onClick={toggleLang} className="px-4 py-2 text-sm font-bold text-primary-700 hover:bg-primary-50 rounded-full transition-colors flex items-center gap-1">
                 <Globe className="w-4 h-4" />
                 {t.nav.lang}
               </button>
               {user ? (
                 <button onClick={handleLogout} className="px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1">
                   <LogOut className="w-4 h-4" />
                   {t.nav.logout}
                 </button>
               ) : (
                 <button onClick={() => setLoginModalOpen(true)} className="px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-1">
                   <User className="w-4 h-4" />
                   {t.nav.login}
                 </button>
               )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-full bg-white/20 backdrop-blur-md text-primary-800 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <Link 
                    key={link.key} 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-bold py-3 border-b border-gray-100 ${isActive(link.path) ? 'text-primary-600' : 'text-gray-800'}`}
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                ))}
                <button onClick={toggleLang} className="text-xl font-bold text-primary-600 py-3 flex items-center justify-center gap-2">
                  <Globe className="w-5 h-5" />
                  {t.nav.lang}
                </button>
                 {user ? (
                   <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="text-xl font-bold text-red-600 py-3 flex items-center justify-center gap-2">
                     <LogOut className="w-5 h-5" />
                     {t.nav.logout}
                   </button>
                 ) : (
                   <button onClick={() => { setLoginModalOpen(true); setIsMenuOpen(false); }} className="text-xl font-bold text-gray-600 py-3 flex items-center justify-center gap-2">
                     <User className="w-5 h-5" />
                     {t.nav.login}
                   </button>
                 )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-0">
        <Routes>
          <Route path="/" element={<Home t={t} lang={lang} />} />
          <Route path="/services" element={<ServicesPage t={t} />} />
          <Route path="/projects" element={<ProjectsPage t={t} lang={lang} onSelectProject={setSelectedProject} />} />
          <Route path="/about" element={<AboutPage t={t} lang={lang} />} />
          <Route path="/testimonials" element={<TestimonialsPage t={t} lang={lang} />} />
          <Route path="/contact" element={
            <ContactPage 
               t={t} 
               lang={lang} 
               handleSubmit={handleSubmit} 
               formData={formData} 
               handleInputChange={handleInputChange} 
               errors={errors} 
               isSubmitting={isSubmitting} 
               submitSuccess={submitSuccess} 
            />
          } />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-white pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
             <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                 <Logo className="w-10 h-10" />
                 <h3 className="text-2xl font-bold">{lang === 'ar' ? 'حدائق الياسمين' : 'Jasmine Gardens'}</h3>
               </div>
               <p className="text-primary-200 leading-relaxed max-w-sm mb-6">
                 {t.hero.subtitle}
               </p>
               <div className="flex gap-4">
                 <a href="#" className="p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"><Phone className="w-5 h-5" /></a>
                 <a href="#" className="p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"><Mail className="w-5 h-5" /></a>
                 <a href="#" className="p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"><Globe className="w-5 h-5" /></a>
               </div>
             </div>
             
             <div>
               <h4 className="text-lg font-bold mb-6 text-secondary">{t.nav.services}</h4>
               <ul className="space-y-3">
                 {t.services.items.slice(0, 4).map((item: any) => (
                   <li key={item.id}><Link to="/services" className="text-primary-200 hover:text-white transition-colors">{item.title}</Link></li>
                 ))}
               </ul>
             </div>

             <div>
               <h4 className="text-lg font-bold mb-6 text-secondary">{t.footer.contactUs}</h4>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3 text-primary-200">
                    <MapPin className="w-5 h-5 shrink-0 mt-1" />
                    <span>{lang === 'ar' ? 'الكويت، جميع المناطق' : 'Kuwait, All Areas'}</span>
                 </li>
                 <li className="flex items-center gap-3 text-primary-200">
                    <Phone className="w-5 h-5 shrink-0" />
                    <span dir="ltr">+965 6999 7026</span>
                 </li>
                 <li className="flex items-center gap-3 text-primary-200">
                    <Mail className="w-5 h-5 shrink-0" />
                    <span>info@jasminegardens.com</span>
                 </li>
               </ul>
             </div>
           </div>
           
           <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-300">
             <p>{t.footer.rights}</p>
             <div className="flex gap-6">
               <button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors">{t.footer.privacy}</button>
               <button onClick={() => openLegal('terms')} className="hover:text-white transition-colors">{t.footer.terms}</button>
             </div>
           </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActions />

      {/* Modals */}
      <LegalModal 
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        title={modalType === 'privacy' ? t.legal.privacyTitle : t.legal.termsTitle}
        lang={lang}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
        t={t.login}
        dir={dir}
      />
      
      {/* Project Detail Modal (Simple Image Viewer) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedProject.imageUrl} alt={selectedProject.title[lang]} className="w-full h-full object-contain" />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <span className="text-secondary font-medium mb-1 block">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold">{selectedProject.title[lang]}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;