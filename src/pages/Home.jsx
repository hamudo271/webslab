import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, CheckCircle2, TrendingUp, Zap, Users, ShieldCheck, Clock, MonitorPlay, Video, Share2, Smartphone, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/common/TextReveal';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleOnHover = {
  hover: { 
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// --- Components ---

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary transition-colors duration-500 border-b border-black/10 dark:border-white/10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-20 mix-blend-overlay" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 inline-block px-6 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-accent-primary font-bold tracking-widest uppercase text-sm"
        >
          Video Editing Agency
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-black text-text-primary mb-8 leading-[0.9] tracking-tighter">
          <TextReveal delay={0.4}>
            UNIVERLAB <br />
          </TextReveal>
          <TextReveal delay={0.6}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">MEDIA.</span>
          </TextReveal>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium mb-12"
        >
          영상 편집 대행: 영상은 이미 찍어뒀는데, 편집이랑 디자인만 전문적으로 맡기고 싶을 때 선택하시면 되십니다.<br className="hidden md:block" />
          단순 편집이 아니라 성과에 초점을 맞춰서 진행해 드립니다.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-text-primary text-bg-primary rounded-full font-bold text-lg hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Start Project <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const clients = ['Samsung', 'LG', 'Hyundai', 'SK', 'Naver', 'Kakao', 'Coupang', 'Woowa Bros', 'Toss', 'Krafton'];
  return (
    <div className="py-8 bg-black text-white overflow-hidden border-y border-white/10">
      <motion.div 
        className="flex whitespace-nowrap gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {[...clients, ...clients, ...clients].map((client, i) => (
          <span key={i} className="text-3xl font-bold text-white/30 uppercase tracking-tighter hover:text-white transition-colors cursor-default">
            {client}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SecretsSection = () => {
  const secrets = [
    {
      title: "잘팔리는 영상만 취급합니다",
      desc: "단순히 예쁜 영상이 아닌, 시청자의 행동을 유도하고 구매로 이어지는 '성과 중심'의 영상을 제작합니다."
    },
    {
      title: "유니버랩 미디어와 함께합니다",
      desc: "11만, 3만, 1만 유튜브 채널을 직접 운영하며 얻은 노하우로 클라이언트의 성장을 함께 고민합니다."
    },
    {
      title: "실제 후기입니다",
      desc: "소비자 중심 경영철칙을 바탕으로 수많은 클라이언트와 신뢰를 쌓아가고 있습니다."
    }
  ];

  return (
    <section className="py-32 bg-bg-primary border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <motion.span 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-accent-primary font-bold tracking-widest uppercase block mb-4"
          >
            Why Us
          </motion.span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-7xl font-black text-text-primary mb-8"
          >
            유니버랩 미디어의<br />
            비결은 무엇일까요?
          </motion.h2>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {secrets.map((secret, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover="hover"
              className="p-10 border border-black/10 dark:border-white/10 rounded-3xl hover:bg-bg-secondary transition-colors duration-300 bg-bg-primary"
            >
              <motion.div variants={scaleOnHover} className="w-full h-full">
                <div className="w-12 h-12 bg-accent-primary/10 text-accent-primary rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{secret.title}</h3>
                <p className="text-text-secondary leading-relaxed">{secret.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GrowthStepsSection = () => {
  const steps = [
    {
      step: "Step 1",
      title: "유튜브의 채널 자체를 직접 기획합니다.",
      desc: [
        "11만, 3만, 1만 유튜브 채널을 직접 피드백하여 높은 성과 도출",
        "자기계발, 뷰티, 패션, 요리, 유튜브 등 다양한 카테고리 직접 운영",
        "최고의 퀄리티를 위한 시행착오를 현재에도 지속적으로 경험 중"
      ]
    },
    {
      step: "Step 2",
      title: "유튜브 성장의 코어 영상 마다의 목적을 둡니다.",
      desc: [
        "유튜브 성공의 핵심은 ‘영상의 목적’ 설정",
        "시청자에게 도움이 되는 콘텐츠가 구독으로 연결",
        "영상의 목적을 기반으로 한 유니버랩 기획안으로 최적화된 방향 제시"
      ]
    },
    {
      step: "Step 3",
      title: "논리적인 편집 프로세스.",
      desc: [
        "단순히 눈에 즐거운 편집이 아닌, 프레임마다 명확한 기획 의도 반영",
        "컷 구성과 디자인 방향을 심리학적 요소 기반으로 판단",
        "트렌디한 트랜지션과 맞춤형 디자인으로 완성도 높은 결과 제공"
      ]
    },
    {
      step: "Step 4",
      title: "영상을 완성했다고, '띡' 하고 끝내지 않습니다.",
      desc: [
        "영상 완성 후 책임 없는 작업 종료가 대부분인 기존 편집 시스템",
        "이를 보완하기 위해 '사후 관리 시스템' 도입",
        "이전 영상의 문제를 복기하고 개선점을 연구하는 체계적 접근"
      ]
    },
    {
      step: "Step 5",
      title: "쿼터제로 협업합니다.",
      desc: [
        "유튜브는 양보다 ‘영상 하나의 완성도’가 더욱 중요시",
        "매출보다 사람을 남기는 것이 유니버랩 미디어 제 1원칙",
        "기존 고객 품질 유지를 위해 월 제한된 수량만 제작 진행"
      ]
    }
  ];

  return (
    <section className="py-32 bg-bg-secondary border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <motion.span 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-accent-primary font-bold tracking-widest uppercase block mb-4"
          >
            Growth Strategy
          </motion.span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-7xl font-black text-text-primary mb-8"
          >
            유튜브 성장만을<br />
            추구합니다.
          </motion.h2>
        </div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              className="group bg-bg-primary p-10 md:p-14 rounded-3xl border border-black/10 dark:border-white/10 hover:border-accent-primary transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="shrink-0">
                  <span className="text-6xl font-black text-black/5 dark:text-white/5 group-hover:text-accent-primary/20 transition-colors">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.desc.map((line, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary text-lg">
                        <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2.5 shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SafetySection = () => {
  return (
    <section className="py-32 bg-bg-primary border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-6xl font-black text-text-primary mb-6"
          >
            2가지 안심제도를 운영합니다.
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-xl text-text-secondary"
          >
            돈을 지불하고 나면 불안해.. 의견이 잘 반영 안되던데...?
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="p-12 bg-bg-secondary rounded-3xl border border-black/10 dark:border-white/10">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">투명 프로세스 보증제</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              우리는 ‘자동화된 투명 프로세스’로 클라이언트의 “불안을 잠재우는 구조” 를 만듭니다.<br />
              1 : 1 피드백 전용까지 시스템화를 구축하였습니다.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="p-12 bg-bg-secondary rounded-3xl border border-black/10 dark:border-white/10">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-8">
              <Clock size={32} />
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">시안 확정 후 집중제</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              유니버랩은 “집중 구간”을 명확히 합니다.<br />
              이를 통해 무한 수정 루프를 방지하고 품질을 최고 수준으로 높입니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { step: "01", title: "상담", desc: "조회수의 비결이 담긴 전문 상담을 진행합니다." },
    { step: "02", title: "전문 기획안 제작", desc: "구매자 맞춤 전문 기획안을 제공합니다." },
    { step: "03", title: "일정 조율", desc: "초안 영상 작업 일정을 조율합니다." },
    { step: "04", title: "촬영 진행", desc: "촬영을 원하시는 분에 한해 촬영을 진행합니다." },
    { step: "05", title: "디자인 착수 및 편집", desc: "자사 내에서 디자인, 편집 작업을 진행합니다." },
    { step: "06", title: "피드백 및 수정작업", desc: "검수 작업 및 수정작업을 진행합니다." },
    { step: "07", title: "완성", desc: "최종본을 전달하고 업로드를 진행합니다." }
  ];

  return (
    <section className="py-32 bg-bg-secondary border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.span 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-accent-primary font-bold tracking-widest uppercase block mb-4"
          >
            Workflow
          </motion.span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-6xl font-black text-text-primary"
          >
            작업 프로세스
          </motion.h2>
        </div>
        
        <div className="border-t-2 border-black dark:border-white">
          {steps.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group border-b border-black/10 dark:border-white/10 hover:bg-bg-primary transition-all duration-500"
            >
              <div className="py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-24 px-4 md:px-8">
                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-black/20 to-black/0 dark:from-white/20 dark:to-white/0 group-hover:from-accent-primary group-hover:to-accent-primary/50 transition-all duration-500 w-32 shrink-0 leading-none">
                  {item.step}
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl md:text-4xl font-black text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed font-medium group-hover:text-text-primary transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const videoPackages = [
    { title: "고급 모션 영상편집 300", staff: "에디터 1인 / 전문 기획 1인 / 분석가 1인", period: "14일 이내", features: ["심리학 기반 기획안", "고도화 된 영상 편집 프로세스", "단순 컷편집", "BGM 삽입", "말자막", "디자인 강조자막", "색채학 기반 영상 효과", "고급 모션그래픽 디자인", "타이포그래피"] },
    { title: "전문 영상편집 77", staff: "에디터 1인 / 전문 기획 1인 / 분석가 1인", period: "14일 이내", features: ["심리학 기반 기획안", "고도화 된 영상 편집 프로세스", "단순 컷편집", "BGM 삽입", "말자막", "디자인 강조자막", "색채학 기반 영상 효과", "간단 모션그래픽 디자인"] },
    { title: "전문 영상편집 50", staff: "에디터 1인 / 전문 기획 1인 / 디자이너 1인", period: "10일 이내", features: ["심리학 기반 기획안", "고도화 된 영상 편집 프로세스", "단순 컷편집", "BGM 삽입", "말자막", "디자인 강조자막", "색채학 기반 영상 효과"] },
  ];

  const shortformPackages = [
    { title: "브랜디드 숏폼 500", staff: "촬영감독 3인 / 에디터 2인 / 전문 기획 3인 / 전문 분석 1인", period: "한 달 이내", features: ["고급 시네마틱 영상촬영", "기업 전문 샷리스트 제작", "전담 숏폼 브랜딩 디자인", "고급 컷편집", "모션그래픽", "부가 촬영 서비스"] },
    { title: "브랜디드 숏폼 300", staff: "촬영감독 1인 / 에디터 2인 / 전문 기획 1인 / 분석가 1인", period: "한 달 이내", features: ["고급 시네마틱 영상촬영", "샷리스트 제공", "단순 컷편집", "중급 모션그래픽"] },
    { title: "전문 숏폼 200", staff: "에디터 2인 / 전문 기획 1인 / 분석가 1인", period: "14일 이내", features: ["고급 컷편집", "모션그래픽", "부가 촬영 서비스"] },
    { title: "전문 숏폼 100", staff: "에디터 2인 / 전문 기획 1인 / 분석가 1인", period: "14일 이내", features: ["고급 컷편집", "중급 모션그래픽"] },
    { title: "전문 숏폼 50", staff: "에디터 1인 / 전문 기획 1인 / 분석가 1인", period: "10일 이내", features: ["단순 컷편집", "간단 모션그래픽 디자인"] },
    { title: "전문 숏폼 30", staff: "에디터 1인 / 전문 기획 1인", period: "7일 이내", features: ["단순 컷편집", "BGM/자막/효과음"] },
  ];

  return (
    <section className="py-32 bg-bg-primary border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <motion.span 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-accent-primary font-bold tracking-widest uppercase block mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-7xl font-black text-text-primary mb-8"
          >
            프리미엄 올인원 패키지
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-xl text-text-secondary"
          >
            명이 보고있어요! (매월 20건 한정)
          </motion.p>
        </div>

        <div className="space-y-20">
          {/* Video Editing */}
          <div>
            <motion.h3 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-3xl font-bold text-text-primary mb-8 border-l-4 border-accent-primary pl-4"
            >
              영상 편집 패키지
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {videoPackages.map((pkg, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-bg-secondary p-8 rounded-3xl border border-black/10 dark:border-white/10 hover:border-accent-primary transition-colors"
                >
                  <h4 className="text-2xl font-bold text-text-primary mb-4">{pkg.title}</h4>
                  <div className="text-sm text-text-secondary mb-6 space-y-1">
                    <p>참여 인원: {pkg.staff}</p>
                    <p>제작 기간: {pkg.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-text-secondary text-sm">
                        <CheckCircle2 size={16} className="text-accent-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Shortform */}
          <div>
            <motion.h3 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-3xl font-bold text-text-primary mb-8 border-l-4 border-accent-primary pl-4"
            >
              숏폼 패키지
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {shortformPackages.map((pkg, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-bg-secondary p-8 rounded-3xl border border-black/10 dark:border-white/10 hover:border-accent-primary transition-colors"
                >
                  <h4 className="text-2xl font-bold text-text-primary mb-4">{pkg.title}</h4>
                  <div className="text-sm text-text-secondary mb-6 space-y-1">
                    <p>참여 인원: {pkg.staff}</p>
                    <p>제작 기간: {pkg.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-text-secondary text-sm">
                        <CheckCircle2 size={16} className="text-accent-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "영상이 마음에 들지 않으면 어떡하나요?", a: "걱정하지 마세요! 작업이 진행된 3달간 아무런 유튜브 성과가 없을 시 100% 환불을 보장합니다." },
    { q: "작업절차를 알고 싶어요", a: "유니버랩 미디어는 총 8개의 작업 절차가 있습니다.\n1. 전문 설문지 작성\n2. 상담\n3. 전문 기획안 제작\n4. 일정 조율\n5. 촬영 진행\n6. 디자인 착수 및 편집 진행\n7. 피드백 및 수정 작업\n8. 완성" },
    { q: "기한은 얼마나 걸리나요?", a: "원하시는 서비스에 따라 기간은 다르게 책정됩니다. 편집 영업일 기준 평균 7-10일 소요. 촬영 포함 영업일 기준 평균 20일 소요.\n상위에 기재되어 있는 기한은 평균적인 수치입니다.\n고객사의 피드백 속도에 따라 더 당겨지거나, 늘어날 수 있는 점 참고 부탁드립니다" },
    { q: "저작권은 어떻게 관리하시나요?", a: "영상의 경우 엄중한 저작권 관리가 필수입니다.\n이에 유니버랩 미디어는 300여종의 유료 폰트와 3800건이 넘는 이미지, 영상, 음원 등도 직접 계약하여 사용합니다.\n700건 이상의 프로젝트 중 저작권 문제 발생은 0건입니다." },
    { q: "서비스 종류랑 범위는 어떻게 되나요?", a: "저희는 고객님이 원하는 깊이에 따라 크게 세 가지로 나눠서 도와드입니다.\n- 종합 운영 대행 (올인원/프리미엄 패키지): 이건 채널 기획부터 촬영, 편집, 그리고 채널 운영 전략까지 싹 다 맡기시는 서비스입니다.\n- 전문 숏폼 영상 제작: 요즘 대세인 틱톡, 인스타그램 릴스, 유튜브 쇼츠 같은 짧은 영상만 전문적으로 제작합니다.\n- 영상 편집 대행: 영상은 이미 찍어뒀는데, 편집이랑 디자인만 전문적으로 맡기고 싶을 때 선택하시면 되십니다." },
    { q: "채널 성장이나 성과를 보장해 주시나요?", a: "솔직하게 말씀드리면, 유튜브 알고리즘은 변수가 많고 고객사별 성향이 다르기 때문에 ‘구독자 몇 명 달성!’이라고 수치로 보장해 드리긴 어렵습니다.\n하지만 저희의 강점은 ‘성과를 만드는 전략’에 있습니다. 단순히 예쁜 영상이 아니라, ‘시청자가 원하는 영상’과 ‘유튜브가 원하는 영상’이라는 두 가지 핵심에 집중해서 기획합니다. 이에 성장할 수밖에 없는 구조를 만들어 드리는 데 초점을 맞추고 있습니다.\n그리고 이렇게 기획 된 채널은 평균적으로 6개월 안에 큰 효과를 보십니다." },
    { q: "영상 수정은 몇 번까지 가능하고, 추가 비용은 없나요?", a: "저희 프로세스에 피드백 및 수정 작업은 기본으로 들어가 있습니다.일반적으로 계약하실 때 수정 횟수(1~2회 정도)를 정하고 진행하며, 이 횟수 내에서는 추가 비용이 발생하지 않습니다.다만, 이미 편집이 거의 끝났는데 ‘처음 기획했던 내용과 완전히 다르게 바꿔주세요’ 같은 대대적인 수정을 요청하시면, 추가 비용이 발생할 수 있으니 참고바랍니다." },
    { q: "돈되는 유튜브, 그 비결을 알고 싶으신가요?", a: "상세하고 정확하게 문의 폼을 작성해주셔야 정확한 상담이 가능합니다.\n문의 및 작업량이 많아 순차적으로 답변을 진행하고 있습니다.\n레퍼런스 채널들을 미리 준비해주세요.\n유니버랩 미디어의 모든 연구 성과, 이제는 당신이 주인공이 될 차례입니다." }
  ];

  return (
    <section className="py-32 bg-bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-20 text-center">
          <motion.span 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-accent-primary font-bold tracking-widest uppercase block mb-4"
          >
            Q&A
          </motion.span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-6xl font-black text-text-primary"
          >
            자주 묻는 질문
          </motion.h2>
        </div>
        
        <div className="border-t border-black/10 dark:border-white/10">
          {faqs.map((item, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border-b border-black/10 dark:border-white/10 last:border-none"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                  {item.q}
                </span>
                <span className={`p-2 rounded-full border border-black/10 dark:border-white/10 transition-colors ${openIndex === index ? 'bg-accent-primary text-white border-accent-primary' : 'group-hover:bg-black/5 dark:group-hover:bg-white/5'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg text-text-secondary leading-relaxed pl-4 border-l-2 border-accent-primary ml-2 whitespace-pre-line">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      <HeroSection />
      <Marquee />
      <SecretsSection />
      <GrowthStepsSection />
      <SafetySection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Home;
