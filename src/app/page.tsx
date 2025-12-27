import Hero from '@/components/Hero';
import Services from '@/components/Services';
import RecordsManagement from '@/components/RecordsManagement';
import WorkSamples from '@/components/WorkSamples';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RecordsManagement />
      <WorkSamples />
      <Contact />
      <Footer />
    </>
  );
}
