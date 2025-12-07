import { motion } from "framer-motion";
import { Target, Users, BarChart, CheckCircle2 } from "lucide-react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-hero-content"
          >
            <span className="about-badge">Brand Philosophy</span>
            <h1>
              진정성으로 승부하는
              <br />
              <span className="gradient-text">유니버랩 미디어</span>
            </h1>
            <p className="about-hero-desc">
              단순히 예쁘기만한 디자인이 아닌
              <br />
              소비자의 관점에서 원하는 콘텐츠를 제작합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2 className="section-title">우리는 오로지 <span className="gradient-text">진정성</span>으로만 승부를 봅니다.</h2>
            <p className="philosophy-text">
              간절함을 가진 사람은 판단력이 좋지 않을 수 있습니다.
              하지만 우리는 그런 갈림을 가진 사람들이 세상을 바꿀 수 있다고 생각합니다.
              안타깝게도 간절함을 이용하는 사기 업체들이 판을 치고 있습니다.
              사람들의 진실된 마음을 이용하는 이들을 이겨내기 위해 유니버랩 미디어는 존재합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section why-us-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              유니버랩 미디어의 <span className="gradient-text">자신감</span>
            </h2>
          </div>

          <div className="secrets-grid">
            <div className="secret-card">
              <div className="secret-icon">
                <Target size={32} />
              </div>
              <h3>유튜브 성장만을 추구합니다</h3>
              <p>
                11만, 3만, 1만 유튜브 채널을 직접 운영하며 얻은 노하우로
                시청자에게 도움이 되는 콘텐츠를 기획합니다.
              </p>
            </div>
            <div className="secret-card">
              <div className="secret-icon">
                <BarChart size={32} />
              </div>
              <h3>논리적인 편집 프로세스</h3>
              <p>
                단순히 눈에 즐거운 편집이 아닌, 프레임마다 명확한 기획 의도를 반영하여
                심리학적 요소를 기반으로 컷을 구성합니다.
              </p>
            </div>
            <div className="secret-card">
              <div className="secret-icon">
                <Users size={32} />
              </div>
              <h3>책임감 있는 사후 관리</h3>
              <p>
                영상 완성 후 끝이 아닙니다. 이전 영상의 문제를 복기하고
                개선점을 연구하는 체계적인 사후 관리 시스템을 도입했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section className="section guarantee-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>2가지 <span className="gradient-text">안심제도</span></h2>
          </div>
          <div className="guarantee-grid">
            <div className="guarantee-card">
              <div className="card-header">
                <CheckCircle2 size={24} className="text-primary" />
                <h3>투명 프로세스 보증제</h3>
              </div>
              <p>
                '자동화된 투명 프로세스'로 클라이언트의 불안을 잠재우는 구조를 만듭니다.
                1:1 피드백 전용 시스템까지 구축하였습니다.
              </p>
            </div>
            <div className="guarantee-card">
              <div className="card-header">
                <CheckCircle2 size={24} className="text-primary" />
                <h3>시안 확정 후 집중제</h3>
              </div>
              <p>
                '집중 구간'을 명확히 하여 무한 수정 루프를 방지하고
                품질을 최고 수준으로 높입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
