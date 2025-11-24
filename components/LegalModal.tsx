import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lang: 'ar' | 'en';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, lang }) => {
  
  const contentAr = `
    <div class="space-y-6 text-right">
      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">1. مقدمة</h3>
        <p class="text-gray-600 leading-relaxed">مرحباً بكم في موقع "حدائق الياسمين". خصوصيتكم وأمان بياناتكم هي من أولوياتنا القصوى. تم إعداد هذه السياسة والشروط وفقاً للقوانين والأنظمة المعمول بها في دولة الكويت ودول مجلس التعاون الخليجي.</p>
      </section>
      
      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">2. جمع واستخدام البيانات</h3>
        <p class="text-gray-600 leading-relaxed">نقوم بجمع المعلومات التي تقدمونها لنا طواعية (مثل الاسم، رقم الهاتف، والعنوان) عند التواصل معنا لطلب خدمة أو استشارة. نستخدم هذه البيانات حصراً لـ:</p>
        <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1 mr-4">
          <li>التواصل معكم بخصوص تفاصيل المشروع.</li>
          <li>تقديم عروض الأسعار وجدولة المواعيد.</li>
          <li>تحسين جودة خدماتنا وتجربة المستخدم.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">3. ملفات تعريف الارتباط (Cookies)</h3>
        <p class="text-gray-600 leading-relaxed">يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتحسين سرعة التصفح وتحليل حركة الزوار. هذه الملفات لا تحتوي على معلومات شخصية حساسة. الاستمرار في استخدام الموقع يعني موافقتكم الضمنية على سياسة الكوكيز.</p>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">4. حماية البيانات</h3>
        <p class="text-gray-600 leading-relaxed">نلتزم باتخاذ كافة التدابير التقنية والإدارية المعقولة لحماية بياناتكم من الوصول غير المصرح به، ولن نقوم ببيع أو تأجير بياناتكم لأي طرف ثالث دون موافقتكم المسبقة، إلا في الحالات التي يقتضيها القانون.</p>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">5. حقوق الملكية الفكرية</h3>
        <p class="text-gray-600 leading-relaxed">جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص، التصاميم، الشعارات، وصور المشاريع، هي ملكية حصرية لشركة "حدائق الياسمين". يمنع نسخها أو استخدامها لأغراض تجارية دون إذن كتابي.</p>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">6. القانون الواجب التطبيق</h3>
        <p class="text-gray-600 leading-relaxed">تخضع هذه الشروط والأحكام لقوانين دولة الكويت، وتختص محاكم الكويت بالفصل في أي نزاع ينشأ عن استخدام هذا الموقع أو خدماتنا.</p>
      </section>
    </div>
  `;

  const contentEn = `
    <div class="space-y-6 text-left">
      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">1. Introduction</h3>
        <p class="text-gray-600 leading-relaxed">Welcome to "Jasmine Gardens". Your privacy and data security are our top priorities. This policy and terms have been drafted in accordance with the laws and regulations applicable in the State of Kuwait and the GCC countries.</p>
      </section>
      
      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">2. Data Collection & Usage</h3>
        <p class="text-gray-600 leading-relaxed">We collect information you voluntarily provide (such as Name, Phone Number, and Address) when contacting us for a service or consultation. We use this data exclusively to:</p>
        <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
          <li>Communicate with you regarding project details.</li>
          <li>Provide quotations and schedule appointments.</li>
          <li>Improve our service quality and user experience.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">3. Cookies Policy</h3>
        <p class="text-gray-600 leading-relaxed">Our website uses cookies to enhance browsing speed and analyze visitor traffic. These files do not contain sensitive personal information. Continuing to browse implies your consent to our cookie policy.</p>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">4. Data Protection</h3>
        <p class="text-gray-600 leading-relaxed">We are committed to taking all reasonable technical and administrative measures to protect your data from unauthorized access. We will not sell or rent your data to any third party without your prior consent, except as required by law.</p>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">5. Intellectual Property</h3>
        <p class="text-gray-600 leading-relaxed">All content on this website, including text, designs, logos, and project images, is the exclusive property of "Jasmine Gardens". Copying or using them for commercial purposes without written permission is prohibited.</p>
      </section>

      <section>
        <h3 class="text-xl font-bold text-primary-800 mb-3">6. Governing Law</h3>
        <p class="text-gray-600 leading-relaxed">These terms and conditions are governed by the laws of the State of Kuwait, and the Kuwaiti courts shall have jurisdiction over any dispute arising from the use of this website or our services.</p>
      </section>
    </div>
  `;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
              <h2 className="text-2xl font-bold text-primary-800">{title}</h2>
              <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-200">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto custom-scrollbar" dangerouslySetInnerHTML={{ __html: lang === 'ar' ? contentAr : contentEn }}>
              {/* Content Injected */}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-between items-center">
              <p className="text-xs text-gray-400 hidden sm:block">
                {lang === 'ar' ? 'آخر تحديث: 2024' : 'Last updated: 2024'}
              </p>
              <button 
                onClick={onClose}
                className="px-8 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
              >
                {lang === 'ar' ? 'موافق وإغلاق' : 'Agree & Close'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;