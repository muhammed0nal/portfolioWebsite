import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Content from "../pages/Content";
import AboutMe from "../pages/AboutMe";
export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/content" element={<Content />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}
