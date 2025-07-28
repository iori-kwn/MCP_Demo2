import Header from './Header';
import Hero from './Hero';
import ImageSection from './ImageSection';
import ContentSection from './ContentSection';
import CardGrid from './CardGrid';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full min-h-screen">
      <Header />
      <Hero />
      <ImageSection />
      <ContentSection />
      <CardGrid />
      <Footer />
    </div>
  );
}

export default LandingPage;
