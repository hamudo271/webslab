import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const Pricing = () => {
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
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-6">Pricing</span>
            <h1 className="text-5xl md:text-8xl font-black text-text-primary mb-8 leading-tight">
              프리미엄<br />
              올인원 패키지
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl">
              명이 보고있어요! (매월 20건 한정)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
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
    </div>
  );
};

export default Pricing;
