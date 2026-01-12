import { Routes, Route } from 'react-router-dom'

import SiteLayout from './layouts/SiteLayout.jsx'

import HomePage from './pages/HomePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import OnlinePlatformPage from './pages/OnlinePlatformPage.jsx'
import CertificationsPage from './pages/CertificationsPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}> 
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/online" element={<OnlinePlatformPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
