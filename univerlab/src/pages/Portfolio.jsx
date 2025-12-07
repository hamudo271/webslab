import { motion } from 'framer-motion'
import { Play, Star, TrendingUp } from 'lucide-react'
import './Portfolio.css'

const portfolioItems = [
  {
    id: 1,
    title: '구독자 11만 달성 유튜브 채널',
    category: '유튜브 편집',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    desc: '기획부터 편집까지 전담하여 6개월 만에 급성장',
    stats: '구독자 11만'
  },
  {
    id: 2,
    title: '조회수 100만 숏폼 바이럴',
    category: '숏폼/릴스',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    desc: '트렌디한 밈 활용으로 알고리즘 최적화 성공',
    stats: '조회수 100만+'
  },
  {
    id: 3,
    title: '대기업 신제품 런칭 홍보영상',
    category: '기업 홍보',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    desc: '시네마틱한 연출로 브랜드 고급화 전략 수행',
    stats: '매출 200% 상승'
  },
  {
    id: 4,
    title: '앱 서비스 소개 모션그래픽',
    category: '모션그래픽',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop',
    desc: '복잡한 기능을 직관적인 인포그래픽으로 표현',
    stats: '다운로드 5만+'
  },
  {
    id: 5,
    title: '웹예능 시리즈 제작',
    category: '브랜디드',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    desc: '자연스러운 PPL 노출로 브랜드 호감도 상승',
    stats: '시청시간 1위'
  },
  {
    id: 6,
    title: '교육용 강의 영상 패키지',
    category: '편집',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    desc: '학습 효율을 높이는 깔끔한 자막과 구성',
    stats: '수강생 만족도 4.9'
  }
]

function Portfolio() {
  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="portfolio-hero-content"
          >
            <span className="portfolio-badge">Success Stories</span>
            <h1>
              결과로 증명하는<br />
              <span className="gradient-text">성공 사례</span>
            </h1>
            <p>
              유니버랩 미디어와 함께 성장한<br />
              크리에이터와 기업들의 이야기입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">700+</div>
              <div className="stat-label">누적 프로젝트</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0건</div>
              <div className="stat-label">저작권 문제 발생</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">재계약율</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="portfolio-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.category}</span>
                    <h4 className="portfolio-title">{item.title}</h4>
                    <p className="portfolio-desc">{item.desc}</p>
                    <div className="portfolio-stats">
                      <TrendingUp size={16} />
                      {item.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
