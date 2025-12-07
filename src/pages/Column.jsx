import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../components/common/TextReveal';

const Column = () => {
  const columns = [
    {
      id: 1,
      title: "유튜브 알고리즘의 비밀",
      desc: "조회수가 폭발하는 영상들의 공통점은 무엇일까요? 알고리즘의 핵심 원리를 파헤쳐봅니다.",
      date: "2024.03.15"
    },
    {
      id: 2,
      title: "성공적인 기업 유튜브 채널 운영 전략",
      desc: "브랜드 인지도를 높이고 잠재 고객을 확보하는 기업 채널 운영 노하우를 공개합니다.",
      date: "2024.03.10"
    },
    {
      id: 3,
      title: "숏폼 콘텐츠가 대세인 이유",
      desc: "짧은 영상이 소비자의 지갑을 연다? 숏폼 마케팅의 효과와 활용법에 대해 알아봅니다.",
      date: "2024.03.05"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-bg-primary min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <TextReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">Column</h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              미디어 트렌드와 인사이트를 공유합니다.
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-bg-secondary rounded-2xl overflow-hidden mb-6 border border-border-primary group-hover:border-accent-primary/50 transition-colors">
                <div className="w-full h-full bg-bg-secondary group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-3">
                <span className="text-accent-primary text-sm font-bold uppercase tracking-wider">Trend Report</span>
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                  2024년 영상 콘텐츠 트렌드 분석 리포트 Vol.{item}
                </h3>
                <p className="text-text-secondary line-clamp-2">
                  숏폼 콘텐츠의 부상과 AI 기술의 발전이 미디어 산업에 미치는 영향에 대해 심도있게 분석해봅니다.
                </p>
                <div className="pt-4 flex items-center justify-between text-sm text-text-secondary/60">
                  <span>2024.03.{10 + item}</span>
                  <span>Read More →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
