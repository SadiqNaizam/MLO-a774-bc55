import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import MockupDisplay from './MockupDisplay';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('bg-background text-foreground py-20 md:py-28', className)}>
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 text-center">
        <Badge 
          variant="outline" 
          className="border-primary/70 text-primary bg-primary/10 py-1.5 px-4 text-sm font-medium mb-6 inline-block shadow-sm"
        >
          New Multi-currency account
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-200 mb-6 leading-tight">
          Cross-border payment <br className="hidden sm:inline" />made easy.
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          We help individuals and businesses to securely send and receive money globally, without the bank fees.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 md:mb-20">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto px-8 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            onClick={() => console.log('Create Account clicked')}
          >
            Create account <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto px-8 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            onClick={() => console.log('Contact Sales clicked')}
          >
            Contact sales <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <MockupDisplay />

      </div>
    </section>
  );
};

export default HeroSection;
