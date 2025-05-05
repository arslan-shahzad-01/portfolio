import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { PageTitleProvider } from './contexts/PageTitleContext';

// Lazy load pages for better performance as required in the assignment
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component for lazy-loaded routes
const LoadingFallback = () => <div className="page-loading">Loading...</div>;

function App() {
  return (
    <BrowserRouter>
      <PageTitleProvider>
        <MainLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </Suspense>
        </MainLayout>
      </PageTitleProvider>
    </BrowserRouter>
  );
}

export default App;
