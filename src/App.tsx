import React from 'react';
import { Phone, Mail, MapPin, Scale, BookOpen, Shield, Users, ArrowLeft, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const phoneNumber = "97447080";
  const whatsappLink = `https://wa.me/965${phoneNumber}`; // Assuming Kuwait based on 8 digits starting with 9
  const instagramLink = "https://instagram.com/lawyer.yasmeenaltayyar";

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-gold-400/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-gold-500" />
              <div>
                <h1 className="text-xl font-bold text-navy-900 leading-tight">المحامية</h1>
                <h2 className="text-lg font-semibold text-gold-500 leading-tight">ياسمين الطيار</h2>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-stone-600 hover:text-gold-500 transition-colors font-medium">نبذة عني</a>
              <a href="#services" className="text-stone-600 hover:text-gold-500 transition-colors font-medium">مجالات التخصص</a>
              <a href="#contact" className="text-stone-600 hover:text-gold-500 transition-colors font-medium">تواصل معنا</a>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000" 
            alt="Legal Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/95 to-stone-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 text-gold-600 font-medium mb-6">
                <Scale className="w-4 h-4" />
                <span>مكتب محاماة واستشارات قانونية</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
                نحو عدالة ناجزة <br/>
                <span className="text-gold-500">وحقوق محفوظة</span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl">
                نقدم خدمات قانونية متكاملة باحترافية وموثوقية عالية. نلتزم بالدفاع عن حقوق موكلينا وتقديم أفضل الاستشارات القانونية التي تضمن حماية مصالحهم.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl font-medium text-lg"
                >
                  احجز استشارتك
                  <ArrowLeft className="w-5 h-5" />
                </a>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-navy-900 border border-stone-200 px-8 py-4 rounded-full transition-all shadow-sm hover:shadow font-medium text-lg"
                >
                  <Phone className="w-5 h-5 text-gold-500" />
                  <span dir="ltr">{phoneNumber}</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-stone-200">
                <div className="absolute inset-0 bg-navy-900/10 z-10"></div>
                {/* 
                  ملاحظة: قمت بتغيير مسار الصورة إلى /yasmeen.jpg
                  يرجى رفع صورة المحامية الحقيقية إلى مجلد public وتسميتها yasmeen.jpg
                */}
                <img 
                  src="/yasmeen.jpg" 
                  alt="المحامية ياسمين الطيار" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback image if the user hasn't uploaded their image yet
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-900/90 to-transparent p-8 z-20">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shrink-0 shadow-lg">
                      <Scale className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">المحامية ياسمين الطيار</h3>
                      <p className="text-gold-400 font-medium">خبرة وكفاءة في العمل القانوني</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-navy-900/10 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">مجالات التخصص</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-stone-600 text-lg">
              نقدم مجموعة واسعة من الخدمات القانونية المتخصصة لتلبية كافة احتياجاتكم القانونية بكفاءة عالية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "قضايا الأحوال الشخصية",
                desc: "الطلاق، النفقة، الحضانة، المواريث، وكافة القضايا الأسرية بسرية تامة واحترافية."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "القضايا المدنية والتجارية",
                desc: "المنازعات المدنية، القضايا العمالية، تأسيس الشركات، والمنازعات التجارية."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "القضايا الجنائية",
                desc: "الدفاع في كافة القضايا الجنائية والجنح، ومتابعة التحقيقات أمام النيابة العامة."
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "الاستشارات القانونية",
                desc: "تقديم الرأي القانوني السديد في مختلف المسائل القانونية للأفراد والشركات."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "صياغة العقود",
                desc: "صياغة ومراجعة كافة أنواع العقود المدنية والتجارية لضمان حقوق الموكل."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "التحكيم والتسويات",
                desc: "تمثيل الموكلين في جلسات التحكيم والوساطة للوصول إلى تسويات ودية."
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-gold-500/30 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">لماذا تختار مكتب المحامية ياسمين الطيار؟</h2>
              <div className="w-20 h-1 bg-gold-500 mb-8 rounded-full"></div>
              
              <div className="space-y-8">
                {[
                  { title: "الخبرة والاحترافية", desc: "نمتلك خبرة واسعة في التعامل مع مختلف القضايا القانونية المعقدة." },
                  { title: "السرية التامة", desc: "نلتزم بأعلى معايير السرية والخصوصية في التعامل مع بيانات وقضايا موكلينا." },
                  { title: "الشفافية والوضوح", desc: "نبقي موكلينا على اطلاع دائم بمستجدات قضاياهم بكل شفافية ووضوح." },
                  { title: "السرعة في الإنجاز", desc: "نحرص على إنجاز المعاملات والقضايا في أسرع وقت ممكن دون الإخلال بالجودة." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gold-400 mb-2">{item.title}</h3>
                      <p className="text-stone-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full border border-stone-800 p-4">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=1000" 
                    alt="Justice" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -right-4 sm:-right-10 bg-white text-navy-900 p-6 rounded-2xl shadow-2xl max-w-[200px]">
                <div className="text-4xl font-bold text-gold-500 mb-2">+100</div>
                <div className="font-semibold">قضية ناجحة</div>
                <div className="text-sm text-stone-500 mt-1">نفخر بثقة موكلينا</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 bg-navy-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
                
                <h2 className="text-3xl font-bold mb-4 relative z-10">تواصل معنا</h2>
                <p className="text-stone-300 mb-12 relative z-10">
                  نحن هنا للإجابة على استفساراتكم وتقديم الدعم القانوني اللازم. لا تترددوا في التواصل معنا.
                </p>
                
                <div className="space-y-8 relative z-10">
                  <a href={`tel:${phoneNumber}`} className="flex items-center gap-4 hover:text-gold-400 transition-colors group">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400 mb-1">رقم الهاتف</div>
                      <div className="text-xl font-semibold" dir="ltr">{phoneNumber}</div>
                    </div>
                  </a>
                  
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-green-400 transition-colors group">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400 mb-1">واتساب</div>
                      <div className="text-xl font-semibold" dir="ltr">{phoneNumber}</div>
                    </div>
                  </a>
                  
                  <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-pink-400 transition-colors group">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400 mb-1">انستغرام</div>
                      <div className="text-xl font-semibold" dir="ltr">@lawyer.yasmeenaltayyar</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="p-10 lg:p-16">
                <h3 className="text-2xl font-bold text-navy-900 mb-8">احجز موعداً للاستشارة</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-stone-50 focus:bg-white"
                      placeholder="أدخل اسمك الكريم"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-stone-50 focus:bg-white"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">نوع القضية / الاستشارة</label>
                    <select className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-stone-50 focus:bg-white appearance-none">
                      <option>أحوال شخصية</option>
                      <option>قضايا مدنية وتجارية</option>
                      <option>قضايا جنائية</option>
                      <option>استشارة قانونية</option>
                      <option>أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">تفاصيل إضافية</label>
                    <textarea 
                      rows={4}
                      className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
                  >
                    إرسال الطلب
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-stone-800 py-8 text-center text-stone-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="w-6 h-6 text-gold-500" />
            <span className="text-xl font-bold text-white">المحامية ياسمين الطيار</span>
          </div>
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة للمحامية ياسمين الطيار.</p>
        </div>
      </footer>
    </div>
  );
}
