/**
 * =============================================================================
 * App.jsx - 앱의 메인 컴포넌트 (라우팅 설정)
 * =============================================================================
 * 
 * 이 파일은 앱의 전체 페이지 구조와 URL 경로를 정의합니다.
 * 
 * 📌 주요 역할:
 * 1. URL에 따라 어떤 페이지를 보여줄지 결정 (라우팅)
 * 2. 모든 페이지에 공통 레이아웃 적용 (Header, Footer)
 * 3. 페이지 전환 시 애니메이션 효과 적용
 * 
 * 📂 페이지 구조:
 * / (홈)
 * ├── /about (회사소개)
 * │   ├── /about/greeting (인사말)
 * │   ├── /about/organization (조직도)
 * │   ├── /about/history (주요실적)
 * │   └── /about/notice (공지사항)
 * ├── /services (사업분야)
 * │   └── /services/:serviceId (각 서비스 상세)
 * ├── /portfolio (포트폴리오)
 * │   ├── /portfolio/videos (행사영상)
 * │   └── /portfolio/photos (행사스케치)
 * ├── /booking (섭외 및 대여)
 * │   └── /booking/:categoryId (카테고리별 상세)
 * └── /contact (고객센터/문의)
 * 
 * =============================================================================
 */

// 라우팅 관련 - URL 경로에 따라 다른 컴포넌트를 보여줌
import { Routes, Route, useLocation } from 'react-router-dom'

// 페이지 전환 시 부드러운 애니메이션 효과
import { AnimatePresence } from 'framer-motion'

// ============================================
// 공통 레이아웃 컴포넌트 (Header + Footer 포함)
// ============================================
import Layout from './components/Layout'

// ============================================
// 페이지 컴포넌트들
// ============================================

// 메인 홈페이지
import Home from './pages/Home'

// 회사소개 페이지들
import About from './pages/About'

// 사업분야 페이지들
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'       // 서비스 상세 (동적 라우팅)

// 포트폴리오 페이지들
import Portfolio from './pages/Portfolio'

// 고객센터
import Contact from './pages/Contact'

/**
 * App 컴포넌트
 * 
 * 모든 페이지의 라우팅(URL 경로 매핑)을 담당합니다.
 * Layout으로 감싸서 모든 페이지에 Header와 Footer가 표시됩니다.
 */
function App() {
  const location = useLocation()

  return (
    // Layout: 모든 페이지에 공통으로 적용되는 Header, Footer를 포함
    <Layout>
      {/* AnimatePresence: 페이지가 바뀔 때 부드러운 전환 애니메이션 */}
      <AnimatePresence mode="wait">
        {/* Routes: URL 경로에 따라 해당 컴포넌트를 렌더링 */}
        <Routes location={location} key={location.pathname}>
          {/* 메인 홈페이지 */}
          <Route path="/" element={<Home />} />
          
          {/* ========== 회사소개 ========== */}
          <Route path="/about" element={<About />} />
          
          {/* ========== 사업분야 ========== */}
          <Route path="/services" element={<Services />} />
          {/* :serviceId는 동적 파라미터 - 예: /services/corporate, /services/sports 등 */}
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          
          {/* ========== 포트폴리오 ========== */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* ========== 고객센터 ========== */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

// 다른 파일에서 이 컴포넌트를 사용할 수 있도록 내보내기
export default App

