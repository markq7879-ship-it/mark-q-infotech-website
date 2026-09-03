import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Solutions from '../pages/Solutions';   // ✅ correct
import Technology from '../pages/Technology'; // ✅ fixed (was Solutions)
import Projects from '../pages/Projects';
import Founder from '../pages/Founder';
import Contact from '../pages/Contact';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/technology" element={<Technology />} />  {/* ✅ now correct */}
      <Route path="/founder" element={<Founder />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
);
export default AppRoutes;