import React from 'react';
import HeaderNav from '../components/layout/HeaderNav';
import HeroSection from '../components/HeroSection/HeroSection';
import FeatureGrid from '../components/Features/FeatureGrid';
import FooterSection from '../components/layout/FooterSection';

/**
 * IndexPage serves as the main landing page for the Paymint application.
 * It aggregates key sections like the navigation header, hero introduction,
 * feature highlights, and the footer.
 *
 * This component follows the LandingLayout template structure specified in the
 * project requirements, organizing organisms into a cohesive single-page experience.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex flex-col items-center flex-grow pt-16">
        {/* 
          The pt-16 class on <main> provides padding at the top 
          to prevent content from being obscured by the fixed HeaderNav (h-16).
          The 'items-center' class ensures that child sections are centered if they 
          don't span the full width. We apply 'w-full' to child sections 
          to make them take full width of the main container, allowing their internal 
          max-width and centering logic (e.g., 'container mx-auto') to function correctly.
        */}
        <HeroSection className="w-full" />
        <FeatureGrid className="w-full" />
        {/* Additional page sections can be added here as needed */}
      </main>
      <FooterSection />
    </div>
  );
};

export default IndexPage;
