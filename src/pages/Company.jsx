import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, BarChart3, ArrowRight } from 'lucide-react';
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

const Company = () => {
  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-6">About Us</span>
            <h1 className="text-5xl md:text-8xl font-black text-text-primary mb-8 leading-tight">
              과하게 포장된<br />
              말이 아닌,
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl">
              유니버랩 미디어는 유튜브 플랫폼의 분석과 콘텐츠 제작, 관리까지 각 분야별 세부적인 부분을 다룹니다.<br className="hidden md:block" />
              단순하게 시간을 녹여 낸 작업이 아닌, 항상 소비자의 시선을 생각해서 콘텐츠를 제작합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Obsessed Section */}
      <section className="py-32 border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-20">
             <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-4">왜 그렇게 집착할까요?</h2>
             <p className="text-xl text-text-secondary">유니버랩 미디어의 핵심 가치</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-text-primary">01. Authenticity</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                <strong className="text-text-primary block mb-2">우리는 거짓이 아닌 진짜 도움이 되는 콘텐츠를 만들고 싶습니다.</strong>
                주변에서 말렸습니다. 시장에서 살아남을 수 없을 것이라고 했습니다.
                하지만 우리는 '단순하게 사고하기'로 했습니다. 과장하지 않고 겸손하게 본질만 생각하기로 했습니다.
                우리는 단순함이라는 무기를 가진, 본질과 기본에 충실한 팀입니다.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-text-primary">02. We are Young</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                <strong className="text-text-primary block mb-2">우리는 젊습니다.</strong>
                우리가 생각하는 트렌드는 "돈의 흐름과 사람들의 심리를 파악하고 가장 우리의 것을 제작하는 것"입니다.
                젊지만 수많은 경험으로 다져진 감각으로 브랜드 가치를 만드는 것, 그것이 유니버랩 미디어만의 차별점입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teamwork Section */}
      <section className="py-32 bg-bg-secondary border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="max-w-4xl mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-6">우리는 함께 언제나 도전합니다.</h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              1인 기업으로 시작했던 유니버랩 미디어이지만, 지금은 뜻을 함께하는 동료들이 있습니다.<br />
              혼자의 힘으로는 모든 사람들을 만족시킬 수 없었지만, 팀원의 힘으로 광고주분들이 추구하는 가치를 전달할 수 있었습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-32 border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-4">Our Team</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary">당신을 위한 최고의 팀</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target size={32} />, role: "콘텐츠 기획자", desc: "클라이언트의 요구를 뛰어넘는 최고의 기획을 목표로 합니다. 브랜드 특성과 트렌드에 맞는 마케팅 전략을 세워 새로운 소재를 기획합니다." },
              { icon: <Zap size={32} />, role: "콘텐츠 디자이너", desc: "색채 심리학과 논리적인 근거를 바탕으로 디자인을 진행합니다. 눈에 보기 예쁜 디자인이 아닌, 팔리는 디자인을 추구합니다." },
              { icon: <Users size={32} />, role: "콘텐츠 마케터", desc: "다양한 마케팅 매체를 활용합니다. 목표에 따른 퍼널 구조를 계획 후 함께 의논하여 광고의 효율을 극대화합니다." },
              { icon: <BarChart3 size={32} />, role: "수치 분석가", desc: "모든 마케팅 중 분석이 가장 중요합니다. 유니버랩 미디어는 분석에 큰 비중을 두어 철저히 분석하여 간단한 지표로 그립니다." }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: index * 0.1 }}
                className="p-8 border border-black/10 dark:border-white/10 rounded-2xl hover:bg-bg-secondary transition-colors"
              >
                <div className="w-12 h-12 bg-accent-primary/10 text-accent-primary rounded-xl flex items-center justify-center mb-6">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">{member.role}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
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

export default Company;
