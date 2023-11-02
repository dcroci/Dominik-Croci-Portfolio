import IntroSection from './components/IntroSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="snap-container">
      <IntroSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
}
