import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, Mail, MapPin, Sun, Leaf, Flower2, Umbrella, Star, CheckCircle, ZoomIn, Quote, ArrowRight, User, LogOut, Play, Video, Send, FileText, ChevronDown, Calendar, Clock, Ruler } from 'lucide-react';
import { Language, ProjectItem, Translation, ArticleItem } from './types';
import { TRANSLATIONS, IMAGES, PROJECTS_DATA, TESTIMONIALS_DATA } from './constants';
import { Logo } from './components/Logo';
import FloatingActions from './components/FloatingWhatsApp';
import LegalModal from './components/LegalModal';
import LoginModal from './components/LoginModal';
import AnimatedCounter from './components/AnimatedCounter';
import ParticleBackground from './components/ParticleBackground';
import FAQ from './components/FAQ';

// Component for smooth image loading with fallback
const FadeInImage = ({ src, alt, className, loading = "lazy" }: { src: string, alt: string, className?: string, loading?: "lazy" | "eager" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className} bg-gray-100`}>
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-300 border-t-primary-600 rounded-full animate-spin"></div>
      </div>}
      <motion.img
        src={error ? 'https://images.unsplash.com/photo-1558905540-21290104f953?q=80&w=1000' : src}
        alt={alt}
        loading={loading}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
        onLoad={() => setIsLoaded(true)}
        onError={() => { setIsLoaded(true); setError(true); }}
      />
    </div>
  );
};

// Scroll To Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="relative bg-primary-900 text-white py-24 pt-32 overflow-hidden">
    <ParticleBackground className="absolute inset-0 z-0 opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900/40 z-0"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-4 font-arabic"
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

const ArticlesSection = ({ t, lang }: { t: any, lang: Language }) => {
    const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                        {lang === 'ar' ? 'المدونة' : 'Blog'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-arabic">
                        {t.articles.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto">{t.articles.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.articles.items.map((article: ArticleItem) => (
                        <motion.div 
                            key={article.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all"
                        >
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    {article.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="text-xs text-gray-400 mr-auto">{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic leading-tight">
                                    {article.title}
                                </h3>
                                <div className="text-gray-600 leading-relaxed mb-6">
                                    {expandedArticle === article.id ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="whitespace-pre-line"
                                        >
                                            {article.content}
                                        </motion.div>
                                    ) : (
                                        <p>{article.excerpt}</p>
                                    )}
                                </div>
                                <button 
                                    onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                                    className="text-secondary font-bold hover:text-secondary-700 flex items-center gap-2 transition-colors"
                                >
                                    {expandedArticle === article.id ? (lang === 'ar' ? 'عرض أقل' : 'Show Less') : t.articles.readMore}
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedArticle === article.id ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineSection = ({ t, lang }: { t: any, lang: Language }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
            {lang === 'ar' ? 'رحلة العمل' : 'Process'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-arabic">
            {t.timeline.title}
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">{t.timeline.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          {Object.entries(t.timeline.steps).map(([key, step]: [string, any], index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border-4 border-primary-100 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-secondary transition-colors duration-300 z-10">
                <span className="text-3xl font-bold text-primary-600 group-hover:text-secondary transition-colors">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3 font-arabic">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10"></div>
          {/* Image Background */}
          <FadeInImage 
            src={IMAGES.hero}
            loading="eager"
            alt="Kuwait Garden Landscape"
            className="w-full h-full object-cover scale-105 absolute inset-0"
          />
          {/* Neural Network Overlay */}
          <ParticleBackground className="absolute inset-0 z-20 opacity-60" color="rgba(255,255,255,0.4)" connectionColor="rgba(251, 191, 36, 0.5)" />
        </motion.div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm md:text-base mb-6 font-medium text-secondary-100"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{lang === 'ar' ? 'الخيار الأول في الكويت' : '#1 Choice in Kuwait'}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl font-arabic">
              {t.hero.title}
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-primary-900/50 backdrop-blur-sm w-full sm:w-auto justify-center hover:scale-105"
                >
                {t.hero.cta}
                {lang === 'ar' ? <ArrowRight className="rotate-180 w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Link>
                <a
                href="https://wa.me/96569997026"
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primary-800 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg backdrop-blur-sm w-full sm:w-auto justify-center hover:scale-105"
                >
                <Phone className="w-5 h-5" />
                {t.hero.bookCall}
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Services Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">{t.nav.services}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-arabic">{t.services.title}</h2>
              <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-4"></div>
              <p className="text-gray-500 max-w-2xl mx-auto">{t.services.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {t.services.items.slice(0, 3).map((service: any) => (
                 <div key={service.id} className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 hover:shadow-2xl transition-all border border-gray-100 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                            {service.icon === 'Sun' && <Sun className="w-8 h-8" />}
                            {service.icon === 'Sprout' && <Leaf className="w-8 h-8" />}
                            {service.icon === 'Trees' && <Flower2 className="w-8 h-8" />}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 font-arabic">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="text-center">
              <Link to="/services" className="inline-flex items-center gap-2 text-primary-700 font-bold hover:text-primary-800 border-b-2 border-primary-200 hover:border-primary-700 pb-1 transition-all">
                 {lang === 'ar' ? 'اكتشف جميع خدماتنا' : 'Discover All Services'}
                 {lang === 'ar' ? <ArrowRight className="rotate-180 w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection t={t} lang={lang} />

      {/* Featured Video Section (Autoplay Muted) */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <ParticleBackground className="absolute inset-0 z-0 opacity-40" color="rgba(255,255,255,0.2)" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <Video className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest">{lang === 'ar' ? 'شاهد على الطبيعة' : 'Watch Live'}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-arabic leading-tight">
                {lang === 'ar' ? 'جولة في أحد مشاريعنا المميزة' : 'Tour One of Our Featured Projects'}
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {lang === 'ar' 
                  ? 'شاهد كيف نحول المساحات الفارغة إلى حدائق تنبض بالحياة. دقة في التنفيذ، جودة في المواد، واهتمام بأدق التفاصيل.' 
                  : 'See how we transform empty spaces into vibrant gardens. Precision in execution, quality materials, and attention to the smallest details.'}
              </p>
              <a 
                href="https://www.youtube.com/@JasmineGardens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-all"
              >
                <Play className="w-5 h-5 fill-current" />
                {lang === 'ar' ? 'تابعنا على يوتيوب' : 'Subscribe on YouTube'}
              </a>
            </div>
            
            {/* YouTube Shorts Embed Container */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-[300px] md:w-[340px] aspect-[9/16] rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GUJtLdJmPrs?autoplay=1&mute=1&loop=1&playlist=GUJtLdJmPrs&controls=0&showinfo=0&rel=0&background=1" 
                  title="Jasmine Gardens Project" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-900 mb-2 font-arabic">{t.faq.title}</h2>
                <p className="text-gray-500">{t.faq.subtitle}</p>
            </div>
            <FAQ items={t.faq.items} lang={lang} />
        </div>
      </section>

      {/* Articles & Expertise Section */}
      <ArticlesSection t={t} lang={lang} />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 to-secondary-500 relative overflow-hidden">
        <ParticleBackground className="absolute inset-0 z-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-arabic">{t.callAction.title}</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">{t.callAction.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-secondary-700 font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
              >
                  <Phone className="w-6 h-6" />
                  {t.callAction.button}
              </Link>
            </div>
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

  // State to track expanded service cards
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <PageHeader title={t.services.title} subtitle={t.services.subtitle} />
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.services.items.map((service: any) => (
                <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col"
                >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div>{getIcon(service.icon)}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors font-arabic">{service.title}</h3>
                    
                    <div className="text-gray-600 leading-relaxed text-base flex-grow mb-6">
                        <p>{service.description}</p>
                        {expanded === service.id && (
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                className="mt-4 pt-4 border-t border-gray-100"
                            >
                                <p className="mb-4 text-sm text-gray-500">{service.longDescription}</p>
                                <ul className="space-y-2">
                                    {service.features?.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm font-bold text-primary-700">
                                            <CheckCircle className="w-4 h-4" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                       <button 
                         onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                         className="text-gray-500 hover:text-primary-600 text-sm font-bold transition-colors"
                       >
                         {expanded === service.id ? 'عرض أقل' : 'تفاصيل أكثر'}
                       </button>
                       <Link to="/contact" className="text-secondary font-bold hover:text-secondary-600 flex items-center gap-2 text-sm">
                         <span>اطلب الخدمة</span>
                         <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                       </Link>
                    </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DATA.map((project) => (
                <motion.div
                    key={project.id}
                    layoutId={`project-card-${project.id}`}
                    whileHover={{ scale: 1.02 }}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-gray-100 border border-gray-100"
                    onClick={() => onSelectProject(project)}
                >
                    <FadeInImage
                      src={project.imageUrl}
                      alt={project.title[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <span className="text-secondary-400 text-sm font-bold tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                      <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 font-arabic">
                          {project.title[lang]}
                      </h3>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all delay-100 hover:bg-white hover:text-primary-600 text-white shadow-lg">
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
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] rotate-3"></div>
              <FadeInImage 
                src={IMAGES.about} 
                alt="About Jasmine Gardens" 
                loading="lazy"
                className="relative rounded-[2rem] shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-primary-500 max-w-xs z-20 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary-100 text-primary-600 rounded-full">
                      <Star className="w-8 h-8 fill-current" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-gray-900 flex items-center gap-1 font-sans">
                        <AnimatedCounter value={12} />+
                      </p>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.about.stats_exp}</p>
                    </div>
                  </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">{t.nav.about}</span>
              <h2 className="text-3xl font-bold text-primary-900 mb-6 font-arabic">{t.about.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                {t.about.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <h4 className="text-4xl font-bold text-primary-600 mb-2 flex items-center justify-center gap-1 font-sans">
                    <AnimatedCounter value={350} />+
                  </h4>
                  <p className="text-gray-600 font-medium text-sm">{t.about.stats_projects}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <h4 className="text-4xl font-bold text-primary-600 mb-2 flex items-center justify-center gap-1 font-sans">
                    <AnimatedCounter value={98} />%
                  </h4>
                  <p className="text-gray-600 font-medium text-sm">{t.about.stats_clients}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {['تصاميم حصرية وعصرية', 'فريق عمل محترف', 'ضمان حقيقي على التنفيذ', 'أسعار تنافسية ومدروسة'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                      <div className="bg-primary-100 p-1.5 rounded-full">
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
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="absolute top-6 left-6 text-primary-100">
                    <Quote className="w-12 h-12 transform scale-x-[-1]" />
                </div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10 flex-grow">
                  "{testimonial.content[lang]}"
                </p>
                <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold text-lg shadow-inner">
                      {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-primary-600 font-medium mt-0.5">{testimonial.role[lang]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
      </section>
    </>
);

const ContactPage = ({ t, lang, handleSubmit, formData, handleInputChange, errors, isSubmitting, submitSuccess, handleWhatsAppSubmit }: any) => (
  <>
    <PageHeader title={t.contact} subtitle={t.callAction.subtitle} />
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary-900 font-arabic">{t.hero.cta}</h2>
                <p className="text-gray-600 text-lg max-w-lg">
                  {lang === 'ar' 
                    ? 'جاهز لتحويل حديقتك؟ تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك.' 
                    : 'Ready to transform your garden? Contact us today for a free consultation and a custom quote for your project.'}
                </p>
              </div>

              <div className="space-y-6">
                <a href="tel:+96569997026" className="flex items-center gap-6 group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 bg-gray-50">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1 uppercase tracking-wider">{lang === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
                    <span className="text-xl font-bold dir-ltr text-gray-900 font-sans">+965 6999 7026</span>
                  </div>
                </a>

                <a href="mailto:info@jasminegardens.com" className="flex items-center gap-6 group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 bg-gray-50">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1 uppercase tracking-wider">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Us'}</span>
                    <span className="text-lg font-bold text-gray-900 font-sans">info@jasminegardens.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-6 group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 bg-gray-50">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1 uppercase tracking-wider">{lang === 'ar' ? 'موقعنا' : 'Location'}</span>
                    <span className="text-lg font-bold text-gray-900">
                      {lang === 'ar' ? 'دولة الكويت، جميع المناطق' : 'Kuwait State, All Areas'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-primary-500 to-secondary"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'ar' ? 'نموذج طلب عرض سعر' : 'Request a Quote'}</h3>
                
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  {submitSuccess && (
                  <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
                  >
                      <CheckCircle className="w-5 h-5" />
                      {lang === 'ar' ? 'تم استلام طلبك بنجاح! سنتواصل معك قريباً.' : 'Request received successfully! We will contact you soon.'}
                  </motion.div>
                  )}

                  <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                      {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-3.5 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-500'} focus:ring-4 outline-none transition-all bg-gray-50 focus:bg-white`} 
                      placeholder={lang === 'ar' ? 'ادخل اسمك هنا' : 'Enter your name'}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                  </div>

                  <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                      {lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-3.5 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-100 focus:border-primary-500'} focus:ring-4 outline-none transition-all bg-gray-50 focus:bg-white`} 
                      dir="ltr" 
                      placeholder="+965"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                  </div>

                  <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                      {lang === 'ar' ? 'نوع الخدمة المطلوبة' : 'Service Type'}
                  </label>
                  <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all bg-gray-50 focus:bg-white cursor-pointer"
                  >
                      {t.services.items.map((item: any) => (
                      <option key={item.id} value={item.title}>{item.title}</option>
                      ))}
                  </select>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2 text-lg"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                {lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                            </>
                        ) : (
                            lang === 'ar' ? 'إرسال الطلب الآن' : 'Send Request Now'
                        )}
                    </button>
                    
                    {/* Direct WhatsApp Send Button */}
                    <button 
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2 text-lg"
                    >
                        <Send className="w-5 h-5 rtl:-scale-x-100" />
                        {t.callAction.whatsappButton}
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  </>
);

function App() {
  // Language with Persistence
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jasmine_lang');
      return (saved === 'ar' || saved === 'en') ? saved : 'ar';
    }
    return 'ar';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [modalType, setModalType] = useState<'privacy' | 'terms'>('privacy');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [scrolled, setScrolled] = useState(false);
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
    
    localStorage.setItem('jasmine_lang', lang);
  }, [lang, dir]);

  // Scroll Listener for Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = lang === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    const phoneRegex = /^[0-9+\s-]{8,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
       newErrors.phone = lang === 'ar' ? 'رقم الهاتف غير صحيح (٨ أرقام على الأقل)' : 'Invalid phone number (min 8 digits)';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    const newErrors = validateForm();

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

  // Direct WhatsApp Send Button
  const handleWhatsAppSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    const message = lang === 'ar' 
        ? `مرحباً حدائق الياسمين،%0aاسمي: ${formData.name}%0aرقم الهاتف: ${formData.phone}%0aأرغب في خدمة: ${formData.service}`
        : `Hello Jasmine Gardens,%0aName: ${formData.name}%0aPhone: ${formData.phone}%0aI am interested in: ${formData.service}`;
    
    window.open(`https://wa.me/96569997026?text=${message}`, '_blank');
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
      
      {/* Navigation - Luxury Sticky Header */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg border-gray-100 py-3' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Desktop Nav - On Right in RTL */}
            <div className="hidden lg:flex items-center gap-1">
               <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-gray-100/80' : 'bg-black/20 backdrop-blur-sm border border-white/10'}`}>
                {navLinks.map((link) => (
                    <Link 
                    key={link.key}
                    to={link.path}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        isActive(link.path)
                        ? 'bg-primary-600 text-white shadow-md scale-105'
                        : scrolled
                            ? 'text-gray-600 hover:text-primary-600 hover:bg-white'
                            : 'text-white hover:bg-white/20'
                    }`}
                    >
                    {t.nav[link.key as keyof typeof t.nav]}
                    </Link>
                ))}
               </div>

               <div className={`w-px h-8 mx-4 transition-colors ${scrolled ? 'bg-gray-300' : 'bg-white/20'}`}></div>
               
               {/* Language Toggle */}
               <button 
                 onClick={toggleLang} 
                 className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold overflow-hidden group border transition-all ${
                   scrolled 
                     ? 'bg-gray-50 text-primary-800 border-gray-200 hover:border-primary-500' 
                     : 'bg-black/20 text-white border-white/20 hover:bg-black/30'
                 }`}
               >
                 <div className={`absolute inset-0 bg-primary-600/10 transform transition-transform duration-300 ${lang === 'ar' ? 'translate-x-full' : '-translate-x-full'}`}></div>
                 <Globe className={`w-4 h-4 transition-transform duration-500 ${lang === 'ar' ? 'rotate-0' : 'rotate-180'}`} />
                 <span className="relative z-10">{t.nav.lang}</span>
               </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
                <button 
                className={`p-2 rounded-full z-50 transition-colors ${scrolled ? 'bg-gray-100 text-primary-800' : 'bg-black/20 text-white backdrop-blur-md border border-white/10'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <span className={`font-bold text-lg ${scrolled ? 'text-primary-800' : 'text-white'} lg:hidden`}>
                    {lang === 'ar' ? 'القائمة' : 'Menu'}
                </span>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group z-50">
               <div className="flex flex-col items-end">
                 <span className={`text-xl md:text-2xl font-bold leading-none transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-primary-800' : 'text-white'}`}>
                   {lang === 'ar' ? 'حدائق الياسمين' : 'Jasmine Gardens'}
                 </span>
                 <span className={`text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans mt-1 transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-secondary' : 'text-primary-100'}`}>
                   Landscape Design
                 </span>
               </div>
               <div className={`p-1 rounded-xl transition-all duration-300 ${scrolled ? 'bg-white/50' : 'bg-white/10 backdrop-blur-sm'}`}>
                 <Logo className="w-32 h-10 md:w-40 md:h-12 group-hover:scale-105 transition-transform duration-500" />
               </div>
            </Link>

          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden fixed inset-0 bg-white z-[90] pt-28 px-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-2 text-center">
                {navLinks.map((link) => (
                  <Link 
                    key={link.key} 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-xl font-bold py-4 border-b border-gray-50 ${isActive(link.path) ? 'text-primary-600' : 'text-gray-700'}`}
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                ))}
                
                <div className="mt-8 flex flex-col gap-4">
                    <button onClick={toggleLang} className="w-full bg-gray-50 text-gray-800 font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5" />
                    {t.nav.lang}
                    </button>
                    {user ? (
                    <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full bg-red-50 text-red-600 font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                        <LogOut className="w-5 h-5" />
                        {t.nav.logout}
                    </button>
                    ) : (
                    <button onClick={() => { setLoginModalOpen(true); setIsMenuOpen(false); }} className="w-full bg-primary-50 text-primary-700 font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                        <User className="w-5 h-5" />
                        {t.nav.login}
                    </button>
                    )}
                </div>
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
               handleWhatsAppSubmit={handleWhatsAppSubmit}
            />
          } />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-white pt-20 pb-8 relative z-10 border-t border-primary-800 overflow-hidden">
        <ParticleBackground className="absolute inset-0 z-0 opacity-10" color="rgba(255,255,255,0.1)" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
             <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                 <Logo className="w-40 h-12 brightness-0 invert" />
               </div>
               <p className="text-primary-200 leading-relaxed max-w-sm mb-8">
                 {t.hero.subtitle}
               </p>
               <div className="flex gap-4">
                 <a href="tel:+96569997026" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Phone className="w-5 h-5" /></a>
                 <a href="mailto:info@jasminegardens.com" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Mail className="w-5 h-5" /></a>
                 <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Globe className="w-5 h-5" /></a>
               </div>
             </div>
             
             <div>
               <h4 className="text-lg font-bold mb-6 text-secondary">{t.nav.services}</h4>
               <ul className="space-y-4 text-sm font-medium">
                 {t.services.items.slice(0, 4).map((item: any) => (
                   <li key={item.id}><Link to="/services" className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full"></div>{item.title}</Link></li>
                 ))}
               </ul>
             </div>

             <div>
               <h4 className="text-lg font-bold mb-6 text-secondary">{t.footer.contactUs}</h4>
               <ul className="space-y-4 text-sm font-medium">
                 <li className="flex items-start gap-3 text-primary-200">
                    <MapPin className="w-5 h-5 shrink-0 text-secondary" />
                    <span>{lang === 'ar' ? 'الكويت، جميع المناطق' : 'Kuwait, All Areas'}</span>
                 </li>
                 <li className="flex items-center gap-3 text-primary-200">
                    <Phone className="w-5 h-5 shrink-0 text-secondary" />
                    <span dir="ltr">+965 6999 7026</span>
                 </li>
                 <li className="flex items-center gap-3 text-primary-200">
                    <Mail className="w-5 h-5 shrink-0 text-secondary" />
                    <span>info@jasminegardens.com</span>
                 </li>
               </ul>
             </div>
           </div>
           
           <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-primary-400">
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
      
      {/* Project Detail Modal (Full Screen Viewer) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-0 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-50"
            >
                <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col md:flex-row w-full h-full" onClick={e => e.stopPropagation()}>
                {/* Image Section */}
                <div className="flex-grow relative h-[60%] md:h-full bg-black flex items-center justify-center p-4">
                    <motion.img 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title[lang]} 
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                </div>

                {/* Sidebar Info Section */}
                <div className="w-full md:w-[350px] bg-white p-8 overflow-y-auto h-[40%] md:h-full border-l border-gray-100 shadow-2xl relative z-40 flex flex-col justify-center">
                    <div className="space-y-6">
                        <div>
                            <span className="text-secondary font-bold tracking-wider text-xs uppercase mb-2 block">{selectedProject.category}</span>
                            <h3 className="text-3xl font-bold text-primary-900 font-arabic leading-tight">{selectedProject.title[lang]}</h3>
                        </div>

                        <div className="w-full h-px bg-gray-100"></div>

                        {selectedProject.details && (
                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg"><MapPin className="w-5 h-5" /></div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase font-bold">{t.projects.details.location}</p>
                                        <p className="font-bold text-gray-800">{selectedProject.details.location[lang]}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg"><Clock className="w-5 h-5" /></div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase font-bold">{t.projects.details.duration}</p>
                                        <p className="font-bold text-gray-800">{selectedProject.details.duration[lang]}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg"><Calendar className="w-5 h-5" /></div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase font-bold">{t.projects.details.year}</p>
                                        <p className="font-bold text-gray-800">{selectedProject.details.year}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg"><Ruler className="w-5 h-5" /></div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase font-bold">{t.projects.details.scope}</p>
                                        <p className="font-bold text-gray-800">{selectedProject.details.scope[lang]}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="pt-6">
                            <Link 
                                to="/contact" 
                                onClick={() => setSelectedProject(null)}
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
                            >
                                {lang === 'ar' ? 'اطلب مثل هذا المشروع' : 'Request Similar Project'}
                                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;