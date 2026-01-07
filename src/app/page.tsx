import Hero from '@/components/Hero';
import Services from '@/components/Services';
import RecordsManagement from '@/components/RecordsManagement';
import Certificates from '@/components/Certificates';
import WorkSamples from '@/components/WorkSamples';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RecordsManagement />
      <Certificates />
      <WorkSamples />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
