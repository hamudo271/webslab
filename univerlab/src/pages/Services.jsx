import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Video, Zap, Sparkles, Building2, ChevronRight, CheckCircle2
} from 'lucide-react'
import './Services.css'

const services = [
  {
    id: 'youtube',
    icon: Video,
    title: '유튜브 편집 패키지',
    desc: '채널 성장을 위한 기획 기반의 전문 편집 서비스',
    features: [
      '고급 모션 영상편집 300',
      '전문 영상편집 77',
      '전문 영상편집 50'
    ],
    color: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop'
  },
  {
    id: 'shorts',
    icon: Zap,
    title: '숏폼/릴스 패키지',
    desc: '1분 안에 시선을 사로잡는 도파민 콘텐츠',
    features: [
      '브랜디드 숏폼 500',
      '브랜디드 숏폼 300',
      '전문 숏폼 200',
      '전문 숏폼 100',
      '전문 숏폼 50',
      '전문 숏폼 30'
    ],
    color: '#a855f7',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop'
  },
  {
    id: 'allinone',
    icon: Sparkles,
    title: '올인원 영상 제작',
    desc: '기획부터 촬영, 편집까지 한 번에 해결하는 솔루션',
    features: [
      '채널 기획 및 방향성 설정',
      '전문 촬영 지원',
      '고퀄리티 편집 및 디자인',
      '채널 운영 전략 컨설팅'
    ],
    color: '#f97316',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop'
  },
  {
    id: 'premium',
    icon: Building2,
    title: '프리미엄 유튜브 패키지',
    desc: '기업 및 브랜드 채널을 위한 최상위 맞춤형 서비스',
    features: [
      '전담 PD 배정',
      '정기 기획 회의',
      '데이터 분석 및 성과 보고',
      '무제한 수정 (기획 범위 내)'
    ],
    color: '#22d3ee',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'
  }
]

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-badge">SERVICES</span>
            <h1 className="page-title">
              서비스 <span className="gradient-text">소개</span>
            </h1>
            <p className="page-desc">
              고객님의 니즈에 맞는 최적의 영상 제작 서비스를 선택하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/contact`} className="service-item-link">
                  <div className="service-item-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-item-overlay">
                      <div 
                        className="service-item-icon"
                        style={{ '--service-color': service.color }}
                      >
                        <service.icon size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="service-item-content">
                    <h3 className="service-item-title">{service.title}</h3>
                    <p className="service-item-desc">{service.desc}</p>
                    <ul className="service-item-features">
                      {service.features.map((feature, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="service-item-link-text">
                      문의하기 <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>어떤 서비스가 적합할지 고민되시나요?</h2>
            <p>전문가와 상담하여 귀사에 딱 맞는 솔루션을 찾아보세요.</p>
            <Link to="/contact" className="btn btn-primary">
              무료 상담 신청
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
