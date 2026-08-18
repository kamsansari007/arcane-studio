import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OurExperience from './pages/OurExperience.jsx'
import ServicesLayout from './pages/Services.jsx'
import ServicesIndex from './pages/ServicesIndex.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import DigitalTwin from './pages/DigitalTwin.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contact from './pages/Contact.jsx'
import Careers from './pages/Careers.jsx'
import ChatWidget from './components/ChatWidget.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-experience" element={<OurExperience />} />
          <Route path="/services" element={<ServicesLayout />}>
            <Route index element={<ServicesIndex />} />
            <Route path=":slug" element={<ServiceDetail />} />
          </Route>
          <Route path="/digital-twin" element={<DigitalTwin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App
