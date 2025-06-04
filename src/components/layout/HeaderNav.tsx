import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#company' },
];

const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-16',
        isScrolled ? 'bg-background/95 shadow-lg backdrop-blur-sm' : 'bg-background',
      )}
    >
      <div className="container mx-auto max-w-screen-lg h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors">
          <Leaf className="h-6 w-6" />
          <span>Paymint</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => console.log('Contact Sales clicked from Header')}
          >
            Contact Sales
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => console.log('Create Account clicked from Header')}
          >
            Create Account
          </Button>
        </div>

        {/* Mobile Menu Trigger */} 
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                  <a href="/" className="flex items-center space-x-2 text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      <Leaf className="h-6 w-6" />
                      <span>Paymint</span>
                  </a>
                  <SheetClose asChild>
                       <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
              </div>
              
              <nav className="flex flex-col space-y-4 mb-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
                  onClick={() => { console.log('Contact Sales clicked from Header Mobile'); setIsMobileMenuOpen(false); }}
                >
                  Contact Sales
                </Button>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => { console.log('Create Account clicked from Header Mobile'); setIsMobileMenuOpen(false); }}
                >
                  Create Account
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
