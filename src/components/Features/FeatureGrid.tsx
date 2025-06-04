import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Zap, ShieldCheck, Users, Repeat, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  id: string;
  icon: React.ElementType; // Lucide icons are React components
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    id: '1',
    icon: Globe,
    title: 'Global Reach & Multi-Currency',
    description: 'Seamlessly send and receive payments in over 50 currencies across 200+ countries and territories. Expand your business horizons without financial borders.',
  },
  {
    id: '2',
    icon: Zap,
    title: 'Lightning-Fast Transactions',
    description: 'Experience rapid payment processing. Most international transfers are completed within minutes, ensuring your funds move as quickly as your business does.',
  },
  {
    id: '3',
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    description: 'Your financial security is our top priority. We employ state-of-the-art encryption and fraud prevention systems to protect your funds and sensitive data.',
  },
  {
    id: '4',
    icon: Users,
    title: 'Multi-User Access & Roles',
    description: 'Collaborate efficiently with your team. Set up multiple user accounts with customizable permissions and roles for secure financial management.',
  },
  {
    id: '5',
    icon: Repeat,
    title: 'Automated Recurring Payments',
    description: 'Simplify your regular international payments. Schedule and automate recurring transactions with our intuitive and flexible tools, saving you time and effort.',
  },
  {
    id: '6',
    icon: CreditCard,
    title: 'Smart Virtual Cards',
    description: 'Instantly issue and manage virtual debit and credit cards for secure online spending, global subscriptions, and streamlined employee expense management.',
  },
];

interface FeatureGridProps {
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ className }) => {
  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}> {/* Adjusted background to match hero or use muted: bg-muted/30 */}
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Unlock Powerful Financial Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Paymint offers a comprehensive suite of features designed to simplify your global payments, enhance security, and provide unparalleled control over your finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <Card 
              key={feature.id} 
              className="bg-muted/40 text-foreground border-border/30 shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="items-center text-center pt-8 pb-4">
                <div className="p-3 rounded-full bg-primary/10 mb-4 inline-block">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-sm flex-grow pb-8">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
