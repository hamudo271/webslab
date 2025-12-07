import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, Zap, ShieldCheck, BarChart3 } from 'lucide-react';
import TextReveal from '../components/common/TextReveal';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const ServiceDetail = () => {
  const { id } = useParams();

  const serviceData = {
    'service-1': {
      title: "프리미엄 유튜브 패키지",
      subtitle: "SNS Channel Management",
      desc: "기획, 촬영, 편집은 물론, 영상 제작의 모든 과정을 올인원으로 제공합니다.",
      heroImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "마케팅 흐름에 올라탈 수 있다면?",
          text: "혹시 그거 아시나요? 인스타그램으로 팔로워 수십만을 달성해도 유튜브로 성공하기는 하늘에 별따기입니다. 이유는 각 플랫폼마다 원하는 바가 다르기 때문입니다. 인스타의 핵심은 소통이지만, 유튜브의 핵심은 콘텐츠입니다. 이를 판별할 줄 아는 힘만이 미래에 살아남습니다. 우리의 목적은 간단합니다. 오로지 “유튜브 채널 성공”입니다."
        },
        pricing: [
          { name: "종합관리형 250", price: "2,500,000", vat: "VAT별도", features: ["전담 에디터 1인", "전문 기획 1인", "디자이너 1인", "분석 1인", "촬영 1인"] },
          { name: "프리미엄 종합관리형 350", price: "3,500,000", vat: "VAT별도", features: ["전담 에디터 1인", "전문 기획 1인", "디자이너 1인", "분석 1인", "촬영 1인", "고급 퀄리티 보장"] },
          { name: "초격차 종합관리형 550", price: "5,500,000", vat: "VAT별도", features: ["대표 참여", "전담 에디터 1인", "전문 기획 1인", "디자이너 1인", "분석 1인", "촬영 1인", "최상위 퀄리티"] }
        ]
      }
    },
    'service-2': {
      title: "숏폼 영상 제작",
      subtitle: "Short Form Video Production",
      desc: "SNS에서 살아남는 숏폼 영상 제작, 핵심인 거 모르는 사람도 있나요?",
      heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "핵심인 거 모르는 사람도 있나요..?",
          text: "혹시 그거 아시나요? 짧은 영상은 이제 인스타그램에서만 사용하고 있지 않습니다. 네이버, 유튜브, 틱톡 등 현재 SNS에서 가장 큰 영향력을 가지고 있습니다. 숏폼 제작 서비스는 유니버랩 미디어에서 릴스를 직접 기획부터 편집까지 진행하는 서비스입니다. 소비자의 구매 포인트 분석을 통해 구매전환이 이루어질 수 있도록 제작해 드립니다."
        },
        pricing: [
          { name: "전문 숏폼 30", price: "330,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인"] },
          { name: "전문 숏폼 50", price: "550,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인 / 분석가 1인"] },
          { name: "전문 숏폼 100", price: "1,100,000", vat: "VAT포함", features: ["에디터 2인 / 전문 기획 1인 / 분석가 1인"] },
          { name: "전문 숏폼 200", price: "2,200,000", vat: "VAT포함", features: ["에디터 2인 / 전문 기획 3인 / 전문 분석 1인"] },
          { name: "브랜디드 숏폼 300", price: "3,300,000", vat: "VAT포함", features: ["촬영감독 1인 / 에디터 2인 / 전문 기획 1인 / 분석가 1인"] },
          { name: "브랜디드 숏폼 500", price: "5,500,000", vat: "VAT포함", features: ["촬영감독 3인 / 에디터 2인 / 전문 기획 3인 / 전문 분석 1인"] }
        ]
      }
    },
    'service-3': {
      title: "전문 영상 편집",
      subtitle: "Professional Video Editing",
      desc: "신뢰와 이미지를 함께 담은 영상, 고객의 첫인상부터 다르게 만듭니다.",
      heroImage: "https://images.unsplash.com/photo-1574717432707-c25c8587a3ea?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "전문가의 편집스타일은 뭐가 다를까요?",
          text: "혹시 그거 아시나요? 요즘 영상 하나 잘 만들면, 브랜드 인지도가 확 올라갑니다. 지금 유행하는 편집 스타일, 그 흐름을 정확히 읽고 있어야 가능한 이야기죠. 유니버랩 미디어는 트렌디한 영상미와 빠른 전달력을 갖춘 전문 영상 편집 대행 서비스를 제공합니다. 기획부터 편집, 자막 디자인까지 “딱 요즘 스타일”이 필요하다면, 바로 저희입니다."
        },
        pricing: [
          { name: "전문 영상편집 50", price: "550,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인 / 디자이너 1인"] },
          { name: "전문 영상편집 77", price: "770,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인 / 분석가 1인"] },
          { name: "고급 모션 영상편집 300", price: "3,300,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인 / 분석가 1인", "고급 모션그래픽"] }
        ]
      }
    },
    'service-4': {
      title: "올인원 영상 제작",
      subtitle: "All-in-One Production",
      desc: "영상 제작의 모든 과정을 한번에 제공합니다.",
      heroImage: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "프로덕션을 거쳐 수치 분석까지",
          text: "혹시 그거 아시나요? 요즘 영상은 그냥 ‘예쁘게’만 만들면 안 됩니다. 기획부터 촬영, 편집, 자막, 음악, 콘텐츠 전략까지 요즘 유행하는 영상 제작의 모든 과정, 유니버랩 미디어에서 올인원으로 제공합니다. 콘텐츠 하나를 만들더라도 브랜드의 목적, 고객의 반응, SNS 알고리즘까지 전부 고려해서 제작해야 제대로 퍼질 수 있습니다."
        },
        pricing: [
          { name: "영상 제작 110", price: "1,100,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인 / 디자이너 1인 / 카메라 1대"] },
          { name: "영상 제작 220", price: "2,200,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인 / 분석가 1인 / 카메라 2대"] },
          { name: "브랜드 광고 영상", price: "11,000,000", vat: "VAT포함", features: ["에디터 1인 / 전문 기획 1인 / 분석가 1인", "CF급 퀄리티"] }
        ]
      }
    }
  };

  const data = serviceData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary text-text-primary">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
          <Link to="/service" className="text-accent-primary hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-10 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 to-bg-primary" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-6">{data.subtitle}</span>
            <h1 className="text-5xl md:text-8xl font-black text-text-primary mb-8 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl">
              {data.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
                {data.content.intro.title}
              </h2>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                {data.content.intro.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-4">Pricing</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary">가격 안내</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.content.pricing.map((plan, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-bg-primary p-10 rounded-3xl border border-black/10 dark:border-white/10 hover:border-accent-primary transition-colors flex flex-col"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                <span className="text-sm text-text-secondary mb-8 block">{plan.vat}</span>
                
                <div className="mb-8">
                  <span className="text-3xl font-bold text-text-primary">₩{plan.price}</span>
                  <span className="text-text-secondary"> / 건</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-secondary">
                      <CheckCircle2 size={18} className="text-accent-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className="w-full py-4 rounded-xl font-bold text-center bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
                >
                  문의하기
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-black mb-8">돈되는 유튜브,<br/>그 비결을 알고 싶으신가요?</h2>
           <p className="text-xl text-white/70 mb-12">유니버랩 미디어의 모든 연구 성과, 이제는 당신이 주인공이 될 차례입니다.</p>
           <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-accent-primary hover:text-white transition-all duration-300">
             전문상담 받기 <ArrowRight size={20} />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
