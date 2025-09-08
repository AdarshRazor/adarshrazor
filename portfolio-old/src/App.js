import React from 'react';
import './App.css';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Experience from './components/pages/Experience';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import NonTech from './components/pages/NonTech';
import Footer from './components/Footer';
import BucketList from './components/pages/bucketlist';
import Misc from './components/pages/misc';
import Error404 from './components/pages/error404';
import Blog from './components/pages/Blog/Main';
import About from './components/pages/Blog/About';
import SaketBoi from './components/pages/Saket';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  const shouldRenderHeaderFooter =
    location.pathname !== '/404' &&
    location.pathname !== '/blog' &&
    location.pathname !== '/about' &&
    location.pathname !== '/saket';

  if (!location) {
    return <div>Error: Location is null</div>;
  }

  return (
    <>
      {shouldRenderHeaderFooter && <Header />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nontech" element={<NonTech />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/saket" element={<SaketBoi />} />
      </Routes>
      {shouldRenderHeaderFooter && (
      <ErrorBoundary>
        {shouldRenderHeaderFooter && <Footer />} {/* Conditionally render Footer */}
      </ErrorBoundary>
        )}
    </>
  );
}

export default App;