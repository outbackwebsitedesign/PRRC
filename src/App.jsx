import { Routes, Route } from 'react-router-dom';
import PublicLayout from './pages/public/PublicLayout.jsx';
import Home from './pages/public/Home.jsx';
import Services from './pages/public/Services.jsx';
import About from './pages/public/About.jsx';
import Careers from './pages/public/Careers.jsx';
import Contact from './pages/public/Contact.jsx';
import ManagementPortal from './pages/ManagementPortal.jsx';
import TrainingPortal from './pages/TrainingPortal.jsx';
import FieldApp from './pages/FieldApp.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/portal" element={<ManagementPortal />} />
      <Route path="/training" element={<TrainingPortal />} />
      <Route path="/field" element={<FieldApp />} />
    </Routes>
  );
}
