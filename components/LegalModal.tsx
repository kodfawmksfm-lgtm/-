import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, ShieldCheck, FileText, Info } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lang: 'ar' | 'en';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, lang }) => {
  
  const contentAr = `
    <div class="space-y-8 text-right font-arabic">
      
      <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6 flex gap-3">
        <div class="shrink-0 text-blue-600 mt-1"><Info class="w-5 h-5" /></div>
        <p class="text-sm text-blue-800 leading-relaxed">
          <strong>تنويه قانوني هام:</strong> تحكم هذه الشروط والأحكام العلاقة التعاقدية بين "شركة حدائق الياسمين للتجارة العامة والمقاولات" (الطرف الأول) والعميل (الطرف الثاني)، وذلك وفقاً لأحكام القانون التجاري الكويتي وقانون حماية المستهلك رقم 39 لسنة 2014 وقانون المعاملات الإلكترونية رقم 20 لسنة 2014.
        </p>
      </div>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">1.</span> نطاق الخدمات والتعاقد
        </h3>
        <p class="text-gray-600 leading-relaxed text-justify">
          يعتبر عرض السعر (Quotation) المقدم من الشركة، سواء كان ورقياً أو إلكترونياً، وثيقة رسمية ملزمة للطرفين فور الموافقة عليها ودفع العربون. يشمل التعاقد التوريد والتركيب حسب المواصفات الفنية المذكورة بدقة في العقد. أي تعديلات شفهية لا يعتد بها ما لم يتم توثيقها كتابياً.
        </p>
      </section>
      
      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">2.</span> سياسة الدفع والاسترجاع
        </h3>
        <ul class="list-disc list-inside text-gray-600 mt-2 space-y-2 mr-4">
          <li>يلتزم العميل بدفع دفعة مقدمة لا تقل عن 50% عند توقيع العقد، ودفعة ثانية عند التوريد، والدفعة النهائية فور انتهاء التركيب وقبل مغادرة الفنيين للموقع.</li>
          <li>في حال إلغاء العقد من قبل العميل بعد شراء المواد، يحق للشركة خصم قيمة المواد المشترات بنسبة 100% بالإضافة إلى 20% مصاريف إدارية.</li>
          <li>تظل المواد ملكاً للشركة حتى سداد كامل المستحقات المالية.</li>
        </ul>
      </section>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">3.</span> الضمان والمسؤولية العشرية
        </h3>
        <p class="text-gray-600 leading-relaxed mb-2">نلتزم بتقديم ضمانات حقيقية وفقاً لما ينص عليه القانون المدني الكويتي:</p>
        <ul class="list-disc list-inside text-gray-600 space-y-2 mr-4">
          <li><strong>الأعمال الإنشائية:</strong> ضمان سلامة الهيكل للمظلات والغرف الزجاجية لمدة 3 سنوات ضد عيوب التركيب واللحام.</li>
          <li><strong>العشب الصناعي:</strong> ضمان المصنع لمدة 5 سنوات ضد تغير اللون (UV Stability) وتآكل الألياف.</li>
          <li><strong>الاستثناءات:</strong> لا يشمل الضمان الأضرار الناتجة عن سوء الاستخدام، العبث، الكوارث الطبيعية (السيول، العواصف غير الاعتيادية)، أو تعديلات تمت بواسطة طرف ثالث.</li>
        </ul>
      </section>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">4.</span> سياسة الخصوصية وحماية البيانات
        </h3>
        <p class="text-gray-600 leading-relaxed text-justify">
          التزاماً بمرسوم قانون المعاملات الإلكترونية رقم 20 لسنة 2014، نتعهد بحماية بياناتك الشخصية (الاسم، الهاتف، العنوان الجغرافي) وعدم مشاركتها مع أي جهة خارجية إلا لإتمام إجراءات التوصيل والتركيب. يتم تخزين البيانات في خوادم آمنة. كما نحتفظ بحق تصوير الأعمال المنفذة لأغراض التوثيق الفني، ولا يتم نشرها إعلانياً إلا بموافقة ضمنية أو صريحة من العميل.
        </p>
      </section>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">5.</span> الاختصاص القضائي
        </h3>
        <p class="text-gray-600 leading-relaxed text-justify">
          تخضع جميع النزاعات الناشئة عن تنفيذ هذا الاتفاق لقوانين دولة الكويت، وتختص محاكم الكويت (دائرة تجاري كلي/جزئي) بالفصل في أي نزاع قضائي قد ينشأ بين الطرفين.
        </p>
      </section>
    </div>
  `;

  const contentEn = `
    <div class="space-y-8 text-left font-sans">
      
      <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6 flex gap-3">
        <div class="shrink-0 text-blue-600 mt-1"><Info class="w-5 h-5" /></div>
        <p class="text-sm text-blue-800 leading-relaxed">
          <strong>Legal Disclaimer:</strong> These terms govern the contractual relationship between "Jasmine Gardens General Trading & Contracting" (First Party) and the Client (Second Party), in accordance with Kuwaiti Commercial Law, Consumer Protection Law No. 39 of 2014, and Electronic Transactions Law No. 20 of 2014.
        </p>
      </div>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">1.</span> Scope of Contract
        </h3>
        <p class="text-gray-600 leading-relaxed text-justify">
          The official Quotation provided by the company is a binding document upon approval and deposit payment. The contract includes supply and installation as per the technical specifications listed. Oral modifications are not valid unless documented in writing.
        </p>
      </section>
      
      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">2.</span> Payment & Refund Policy
        </h3>
        <ul class="list-disc list-inside text-gray-600 mt-2 space-y-2 ml-4">
          <li>A minimum advance payment of 50% is required upon signing, followed by payments at supply and handover stages as agreed.</li>
          <li>If the contract is cancelled by the client after material procurement, the company reserves the right to deduct 100% of material costs plus 20% administrative fees.</li>
          <li>Ownership of materials remains with the company until full payment is settled.</li>
        </ul>
      </section>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">3.</span> Warranty & Liability
        </h3>
        <p class="text-gray-600 leading-relaxed mb-2">We provide genuine warranties as per the Kuwaiti Civil Code:</p>
        <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li><strong>Structural Works:</strong> 3-year warranty on welding and installation defects for shades and sunrooms.</li>
          <li><strong>Artificial Grass:</strong> 5-year manufacturer warranty against UV discoloration and fiber degradation.</li>
          <li><strong>Exclusions:</strong> Misuse, tampering, natural disasters (floods, extreme storms), or third-party alterations are not covered.</li>
        </ul>
      </section>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">4.</span> Privacy & Data Protection
        </h3>
        <p class="text-gray-600 leading-relaxed text-justify">
          In compliance with Law No. 20 of 2014 regarding Electronic Transactions, we pledge to protect your personal data (Name, Phone, Location) and not share it with third parties except for logistics purposes. We reserve the right to photograph executed works for technical documentation; marketing usage requires implied or explicit consent.
        </p>
      </section>

      <section>
        <h3 class="flex items-center gap-2 text-xl font-bold text-primary-800 mb-3">
          <span class="text-secondary text-2xl">5.</span> Governing Law & Jurisdiction
        </h3>
        <p class="text-gray-600 leading-relaxed text-justify">
          Any disputes arising from this agreement are subject to the laws of the State of Kuwait. The Courts of Kuwait shall have exclusive jurisdiction over any legal proceedings.
        </p>
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
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col border border-gray-100"
            onClick={(e) => e.stopPropagation()}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary-800">{title}</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-200">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar bg-white" dangerouslySetInnerHTML={{ __html: lang === 'ar' ? contentAr : contentEn }}>
              {/* Content Injected */}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>{lang === 'ar' ? 'متوافق مع قوانين الكويت' : 'Compliant with Kuwaiti Laws'}</span>
              </div>
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                {lang === 'ar' ? 'أقر وأوافق' : 'I Acknowledge & Agree'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;