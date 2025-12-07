import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Building2, Trophy, Users, GraduationCap, Mic2, PartyPopper,
  Landmark, Presentation, Check, ArrowRight, Phone,
  Video, Zap, Sparkles, Target
} from 'lucide-react'
import './ServiceDetail.css'

const servicesData = {
  youtube: {
    icon: Video,
    title: '유튜브 편집 패키지',
    subtitle: '채널 성장을 위한 전략적 편집',
    desc: '단순히 컷만 편집하는 것이 아닙니다. 시청 지속 시간을 늘리는 기획, 클릭을 부르는 썸네일, 몰입감을 높이는 사운드 디자인까지 유튜브 채널 성장에 필요한 모든 요소를 고려하여 편집합니다.',
    color: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
    features: [
      '채널 방향성 기획 및 컨설팅',
      '시청 지속 시간을 고려한 컷 편집',
      '몰입감을 높이는 BGM 및 효과음',
      '가독성 높은 자막 디자인',
      '클릭률(CTR)을 높이는 썸네일',
      '저작권 문제 없는 소스 사용'
    ],
    programs: [
      {
        name: '고급 모션 영상편집 300',
        desc: '참여 인원: 에디터 1인 / 전문 기획 1인 / 분석가 1인',
        details: ['심리학 기반 기획안', '고도화 된 영상 편집', '고급 모션그래픽', '타이포그래피', '최첨단 AI 기술 접목']
      },
      {
        name: '전문 영상편집 77',
        desc: '참여 인원: 에디터 1인 / 전문 기획 1인 / 분석가 1인',
        details: ['심리학 기반 기획안', '색채학 기반 영상 효과', 'SNS 조회수 최적화', '간단 모션그래픽']
      },
      {
        name: '전문 영상편집 50',
        desc: '참여 인원: 에디터 1인 / 전문 기획 1인 / 디자이너 1인',
        details: ['심리학 기반 기획안', '단순 컷편집', 'BGM/효과음', '디자인 강조자막']
      }
    ]
  },
  shorts: {
    icon: Zap,
    title: '숏폼/릴스 패키지',
    subtitle: '1분 안에 사로잡는 도파민 콘텐츠',
    desc: '유튜브 쇼츠, 인스타그램 릴스, 틱톡 등 숏폼 플랫폼에 최적화된 세로형 영상을 제작합니다. 초반 3초에 시선을 사로잡는 후킹 요소와 트렌디한 편집으로 조회수와 도달률을 극대화합니다.',
    color: '#a855f7',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=600&fit=crop',
    features: [
      '트렌디한 밈(Meme) 활용',
      '빠른 템포의 다이내믹 편집',
      '시선을 끄는 강조 자막',
      '바이럴 요소 기획',
      '플랫폼별 최적화 규격',
      '음원 트렌드 반영'
    ],
    programs: [
      {
        name: '브랜디드 숏폼 500',
        desc: '촬영감독 3인 / 에디터 2인 / 전문 기획 3인',
        details: ['고급 시네마틱 촬영', '전담 브랜딩 디자인', '고급 컷편집', '모션그래픽']
      },
      {
        name: '브랜디드 숏폼 300',
        desc: '촬영감독 1인 / 에디터 2인 / 전문 기획 1인',
        details: ['고급 시네마틱 촬영', '샷리스트 제공', '중급 모션그래픽', '바이럴 요소 기획']
      },
      {
        name: '전문 숏폼 200',
        desc: '에디터 2인 / 전문 기획 1인 / 분석가 1인',
        details: ['고급 컷편집', '디자인 강조자막', 'SNS 조회수 최적화', '모션그래픽']
      },
      {
        name: '전문 숏폼 50',
        desc: '에디터 1인 / 전문 기획 1인 / 분석가 1인',
        details: ['단순 컷편집', 'BGM 삽입', '디자인 강조자막', '간단 모션그래픽']
      }
    ]
  },
  motion: {
    icon: Sparkles,
    title: '모션그래픽',
    subtitle: '상상을 현실로 만드는 시각적 경험',
    desc: '정보 전달력을 높이는 인포그래픽부터 화려한 비주얼의 2D/3D 모션그래픽까지, 영상의 퀄리티를 한 단계 높여주는 전문 모션그래픽 서비스를 제공합니다.',
    color: '#f97316',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=600&fit=crop',
    features: [
      '2D/3D 모션그래픽',
      '키네틱 타이포그래피',
      '인포그래픽 영상',
      '로고 인트로/아웃트로',
      'VFX 특수효과',
      '캐릭터 애니메이션'
    ],
    programs: [
      { name: '제품 홍보 모션', desc: '제품의 특징을 시각적으로 강조', details: ['3D 모델링', '텍스처링', '라이팅'] },
      { name: '서비스 소개 영상', desc: '무형의 서비스를 알기 쉽게 설명', details: ['인포그래픽', '아이콘 애니메이션'] },
      { name: '타이틀 시퀀스', desc: '영상의 시작을 알리는 강렬한 오프닝', details: ['키네틱 타이포', '로고 모션'] }
    ]
  },
  corporate: {
    icon: Building2,
    title: '기업 홍보영상',
    subtitle: '브랜드의 가치를 담은 프리미엄 영상',
    desc: '기업의 아이덴티티와 비전을 효과적으로 전달하는 고퀄리티 홍보영상을 제작합니다. 기획부터 촬영, 편집까지 기업 맞춤형 올인원 솔루션을 제공합니다.',
    color: '#22d3ee',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=600&fit=crop',
    features: [
      '기업 스토리텔링 기획',
      '전문 촬영팀 현장 촬영',
      '드론 항공 촬영',
      '인터뷰 영상 제작',
      '다국어 자막 지원',
      '다양한 포맷 변환'
    ],
    programs: [
      { name: '회사 소개 영상', desc: '기업의 비전과 가치 전달', details: ['기획', '촬영', '편집', '성우 녹음'] },
      { name: 'CEO/임직원 인터뷰', desc: '진정성 있는 메시지 전달', details: ['인터뷰 연출', '조명/음향', '자막 디자인'] },
      { name: '행사 스케치', desc: '현장의 생생함을 기록', details: ['하이라이트 편집', '뮤직비디오 형식'] }
    ]
  },
  branded: {
    icon: Target,
    title: '브랜디드 콘텐츠',
    desc: '단순 광고를 넘어 소비자가 찾아보는 콘텐츠를 만듭니다. 브랜드의 메시지를 자연스럽게 녹여낸 예능형, 드라마형 콘텐츠로 거부감 없이 브랜드 호감도를 높입니다.',
    subtitle: '팬덤을 만드는 콘텐츠 마케팅',
    color: '#fbbf24',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
    features: [
      '예능형 콘텐츠 기획',
      '웹드라마/스토리텔링',
      '유튜버/인플루언서 협업',
      '시리즈물 제작',
      'PPL 자연스러운 노출',
      '채널 브랜딩 패키지'
    ],
    programs: [
      { name: '웹예능 제작', desc: '재미와 정보를 동시에', details: ['예능 자막', '효과음', '빠른 호흡'] },
      { name: '웹드라마', desc: '스토리텔링 기반 브랜딩', details: ['시나리오', '배우 섭외', '연출'] }
    ]
  }
}

function ServiceDetail() {
  const { serviceId } = useParams()
  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="not-found">
        <h1>서비스를 찾을 수 없습니다</h1>
        <Link to="/services" className="btn btn-primary">
          서비스 목록으로
        </Link>
      </div>
    )
  }

  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="hero-image">
          <img src={service.image} alt={service.title} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="hero-icon"
              style={{ '--service-color': service.color }}
            >
              <service.icon size={40} />
            </div>
            <h1 className="hero-title">{service.title}</h1>
            <p className="hero-subtitle">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <motion.div
              className="service-detail-main"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>서비스 소개</h2>
              <p className="service-description">{service.desc}</p>

              <h3>주요 특징</h3>
              <ul className="features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3>프로그램 종류</h3>
              <div className="programs-grid">
                {service.programs.map((program, index) => (
                  <div key={index} className="program-item">
                    <h4>{program.name}</h4>
                    <p className="program-desc">{program.desc}</p>
                    <div className="program-details">
                      {program.details.map((detail, idx) => (
                        <span key={idx} className="program-detail-tag">{detail}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="service-detail-sidebar"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sidebar-card">
                <h4>빠른 상담 신청</h4>
                <p>전문 컨설턴트가 맞춤 상담을 도와드립니다</p>
                <a href="tel:010-3433-1282" className="btn btn-primary">
                  <Phone size={18} />
                  010-3433-1282
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  온라인 문의하기
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="sidebar-card">
                <h4>다른 서비스 보기</h4>
                <ul className="other-services">
                  {Object.entries(servicesData)
                    .filter(([key]) => key !== serviceId)
                    .slice(0, 4)
                    .map(([key, s]) => (
                      <li key={key}>
                        <Link to={`/services/${key}`}>
                          <s.icon size={16} />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail

