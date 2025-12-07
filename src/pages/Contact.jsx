import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import TextReveal from '../components/common/TextReveal';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-bg-primary min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <TextReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">Contact Us</h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              성공적인 프로젝트의 시작, 유니버랩 미디어와 함께하세요.
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-text-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: "Email", value: "contact@univerlabmedia.co.kr" },
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "010-2339-9321" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Address", value: "서울 성동구 뚝섬로13길 38 KT&G상상플래닛 6층" },
                  { icon: <Clock className="w-6 h-6" />, title: "Business Hours", value: "Mon - Fri, 10:00 - 19:00" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start space-x-4 p-6 rounded-2xl bg-bg-secondary border border-border-primary hover:border-accent-primary/50 transition-colors"
                  >
                    <div className="p-3 bg-bg-primary rounded-xl text-accent-primary border border-border-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
                      <p className="text-text-secondary">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-bg-secondary p-8 md:p-10 rounded-3xl border border-border-primary"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-primary ml-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all"
                    placeholder="홍길동"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-primary ml-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all"
                    placeholder="회사명"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-primary ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all"
                    placeholder="example@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-primary ml-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-primary ml-1">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all appearance-none">
                    <option value="">선택해주세요</option>
                    <option value="youtube">유튜브 채널 운영</option>
                    <option value="corporate">기업 홍보 영상</option>
                    <option value="viral">바이럴/광고 영상</option>
                    <option value="shortform">숏폼 콘텐츠</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-primary ml-1">Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all appearance-none">
                    <option value="">선택해주세요</option>
                    <option value="under_5m">500만원 미만</option>
                    <option value="5m_10m">500만원 ~ 1,000만원</option>
                    <option value="10m_30m">1,000만원 ~ 3,000만원</option>
                    <option value="over_30m">3,000만원 이상</option>
                    <option value="undecided">미정</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary ml-1">Reference URL (Optional)</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all"
                  placeholder="참고할 만한 영상이나 웹사이트 주소가 있다면 남겨주세요."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary ml-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all resize-none"
                  placeholder="프로젝트 내용, 목표, 일정 등 자세한 내용을 적어주시면 정확한 상담이 가능합니다."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-accent-primary text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-accent-primary/30"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
