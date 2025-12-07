import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, MonitorPlay, Share2, Smartphone, CheckCircle2, ArrowRight, Plus, Minus, AlertCircle, Lightbulb } from 'lucide-react';
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

const ServiceHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-bg-primary transition-colors duration-500 border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-accent-primary"></span>
            <span className="text-accent-primary font-bold tracking-widest uppercase">Our Strategy</span>
          </motion.div>
          
          <TextReveal>
            <h1 className="text-6xl md:text-8xl font-black text-text-primary mb-8 leading-[0.9] tracking-tighter">
              콘텐츠 기획형 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">PDCA</span>
            </h1>
          </TextReveal>
          
          <TextReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed font-medium">
              영상 업계의 판도를 바꾸는 유니버랩 미디어의 전략<br />
              우리는 모든 기술력을 귀사의 성과에만 집중합니다.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

const FailureAnalysisSection = () => {
  const reasons = [
    { title: "콘텐츠가 재미없습니다.", desc: "하고 싶은 말만 구구절절 하는 대부분의 콘텐츠들은 사람들이 원하지 않기 때문에 체류 시간이 떨어집니다." },
    { title: "기획에 대해 1도 모르는 편집자", desc: "한 명의 영상 편집자가 영상을 편집하면 유튜브에 지식은 일체 없이 작업을 끝내기에 급합니다. 따라서 마케팅에 대한 전문성이 떨어질 수밖에 없습니다." },
    { title: "채널 방향성 부재", desc: "예쁜 영상에 현혹되면 안 됩니다. 운전할 때, 내가 어디로 가야 할지 목적지를 정확하게 설정하는 것이 중요합니다." },
    { title: "브랜드의 특징을 살리지 못하는 영상", desc: "조회수와 구독자가 많다고 해서 매출이 올라가는 것이 아닙니다. 중요한 것은 “어떤 방법으로 우리 브랜드의 특징을 유튜브로 녹여낼 것인가”입니다." }
  ];

  return (
    <section className="py-32 border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent-primary font-bold tracking-widest uppercase block mb-4">Problem</span>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-4">왜 지금까지 실패했을까요?</h2>
          <p className="text-xl text-text-secondary">귀사의 콘텐츠 마케팅이 실패한 이유를 알려드립니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: index * 0.1 }}
              className="p-10 bg-bg-secondary rounded-3xl border border-black/10 dark:border-white/10"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-6">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrinciplesSection = () => {
  const principles = [
    { num: "01", title: "글 (Fundamentals)", desc: "유튜브의 기초는 '글'입니다. 사람들이 원하는 정보로 이루어진 글이 시청 체류시간을 늘립니다." },
    { num: "02", title: "기획 (Direction)", desc: "기획은 방향성입니다. 우리 채널이 추구하는 가치를 찾고, 마케팅이 기업에 줄 수 있는 도움을 파악합니다." },
    { num: "03", title: "컷 편집 (The Core)", desc: "컷 편집이 영상 완성도의 80%를 좌우합니다. 기본에 충실한 편집만이 성공 확률을 200% 높입니다." },
    { num: "04", title: "알고리즘 (Human Context)", desc: "알고리즘은 사람을 공부하는 것입니다. '사람들이 원하는가?'와 '유튜브가 원하는가?' 두 가지를 충족시킵니다." }
  ];

  return (
    <section className="py-32 bg-bg-secondary border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent-primary font-bold tracking-widest uppercase block mb-4">Principles</span>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-4">소비자 중심 경영철칙</h2>
          <p className="text-xl text-text-secondary">유니버랩 미디어는 고객사의 매출 성장만을 추구합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {principles.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group"
            >
              <span className="text-6xl font-black text-black/5 dark:text-white/5 group-hover:text-accent-primary/20 transition-colors block mb-4">
                {item.num}
              </span>
              <h3 className="text-3xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">{item.title}</h3>
              <p className="text-lg text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { step: "01", title: "전문 설문지 작성", desc: "설문지를 작성하여 니즈와 원츠를 파악합니다." },
    { step: "02", title: "상담", desc: "조회수의 비결이 담긴 전문 상담을 진행합니다." },
    { step: "03", title: "전문 기획안 제작", desc: "구매자 맞춤 전문 기획안을 제공합니다." },
    { step: "04", title: "일정 조율", desc: "초안 영상 작업 일정을 조율합니다." },
    { step: "05", title: "촬영 진행", desc: "촬영을 원하시는 분에 한해 촬영을 진행합니다." },
    { step: "06", title: "디자인 착수 및 편집", desc: "자사 내에서 디자인, 편집 작업을 진행합니다." },
    { step: "07", title: "피드백 및 수정작업", desc: "검수 작업 및 수정작업을 진행합니다." },
    { step: "08", title: "완성", desc: "최종본을 전달하고 업로드를 진행합니다." }
  ];

  return (
    <section className="py-32 border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent-primary font-bold tracking-widest uppercase block mb-4">Workflow</span>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary">작업 프로세스</h2>
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

const Service = () => {
  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      <ServiceHero />
      <FailureAnalysisSection />
      <PrinciplesSection />
      <ProcessSection />
    </div>
  );
};

export default Service;
