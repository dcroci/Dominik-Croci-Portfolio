import IntroSection from '@/components/IntroSection';

import ProjectsSection from '@/components/ProjectsSection';
import ContactForm from '@/components/ContactForm';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-5 container mx-auto">
      <IntroSection />
      <div className=" lg:col-start-3 col-end-6">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactForm />
      </div>
    </div>
  );
}
