import React from 'react';
import { Leaf, Linkedin, Instagram, Github, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterLinkCategory {
  title: string;
  links: FooterLinkItem[];
}

const footerLinkCategories: FooterLinkCategory[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'API Documentation', href: '#api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#company' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Support Center', href: '#support' },
      { label: 'FAQs', href: '#faq' },
      { label: 'System Status', href: '#status' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
    ],
  },
];

interface SocialLink {
    name: string;
    href: string;
    icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-muted text-muted-foreground py-12 md:py-16')}>
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 mb-6 md:mb-0">
            <a href="/" className="flex items-center space-x-2 text-xl font-semibold text-primary mb-3">
              <Leaf className="h-6 w-6" />
              <span>Paymint</span>
            </a>
            <p className="text-sm">
              Secure cross-border payments, simplified for your global business needs.
            </p>
          </div>

          {footerLinkCategories.map((category) => (
            <div key={category.title} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground/80">
            &copy; {currentYear} Paymint Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/80 hover:text-primary transition-colors duration-200"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
