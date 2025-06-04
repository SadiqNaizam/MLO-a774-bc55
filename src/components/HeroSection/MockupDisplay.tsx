import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DollarSign, Euro, BarChart2, Users, Settings, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MockupDisplayProps {
  className?: string;
}

const MockupDisplay: React.FC<MockupDisplayProps> = ({ className }) => {

  const PlaceholderTransactionItem: React.FC<{ name: string, amount: string, date: string, isPositive?: boolean }> = ({ name, amount, date, isPositive }) => (
    <div className="flex justify-between items-center py-2 border-b border-border/50">
      <div>
        <p className="text-xs font-medium text-card-foreground">{name}</p>
        <p className="text-xxs text-muted-foreground/70">{date}</p>
      </div>
      <p className={cn("text-xs font-semibold", isPositive ? 'text-green-500' : 'text-red-500')}>{isPositive ? '+' : '-'}{amount}</p>
    </div>
  );

  return (
    <div className={cn("relative flex justify-center items-center w-full", className)}>
      {/* Laptop Mockup */}
      <div className="bg-neutral-800 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full max-w-3xl aspect-[16/10] relative z-10 border-2 border-neutral-700">
        <div className="bg-[#0A1D0A] w-full h-full rounded-sm sm:rounded-md md:rounded-lg overflow-hidden p-3 sm:p-4 md:p-5">
          <Card className="w-full h-full bg-card text-card-foreground shadow-inner overflow-hidden">
            <CardContent className="p-3 sm:p-4 h-full">
              <ScrollArea className="h-full w-full">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-3 p-1 border-b border-border/50">
                    <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-sm text-primary">Paymint</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Settings className="h-3.5 w-3.5 text-muted-foreground/70 hover:text-primary transition-colors"/>
                        <Users className="h-3.5 w-3.5 text-muted-foreground/70 hover:text-primary transition-colors"/>
                        <p className="text-xs text-muted-foreground/80">Hi James</p>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 flex-shrink-0">
                    {[ 
                      { icon: DollarSign, currency: 'USD Balance', amount: '15,780.50' },
                      { icon: Euro, currency: 'EUR Balance', amount: '8,230.10' },
                      { icon: CreditCard, currency: 'GBP Balance', amount: '12,905.30' }
                    ].map(item => (
                      <Card key={item.currency} className="bg-background/5 p-2 sm:p-3 rounded-md">
                        <item.icon className="h-4 w-4 text-primary mb-1" />
                        <p className="text-xxs sm:text-xs text-muted-foreground/80 font-medium truncate">{item.currency}</p>
                        <p className="text-xs sm:text-sm font-semibold text-card-foreground truncate">{item.amount}</p>
                      </Card>
                    ))}
                  </div>

                  {/* Transactions List Placeholder */}
                  <div className="flex-grow space-y-1.5 overflow-y-auto">
                    <p className="text-xs font-semibold text-card-foreground mb-1.5">Recent Transactions</p>
                    <PlaceholderTransactionItem name="Transfer from Stripe" amount="$2,500.00" date="June 15, 2024" isPositive />
                    <PlaceholderTransactionItem name="Spotify Subscription" amount="$9.99" date="June 14, 2024" />
                    <PlaceholderTransactionItem name="Adyen Payout" amount="$1,230.80" date="June 14, 2024" isPositive />
                    <PlaceholderTransactionItem name="Office Supplies Inc." amount="$150.25" date="June 13, 2024" />
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Phone Mockup - simplified, appears on larger screens */}
      <div className="hidden sm:block absolute bg-neutral-800 p-1.5 rounded-lg shadow-2xl w-[130px] md:w-[150px] aspect-[9/19] -right-2 md:-right-5 bottom-5 md:bottom-10 border-2 border-neutral-700 z-20">
        <div className="bg-[#0A1D0A] w-full h-full rounded-sm overflow-hidden p-1.5">
          <Card className="w-full h-full bg-card text-card-foreground shadow-inner overflow-hidden">
            <CardContent className="p-1.5 h-full">
              <ScrollArea className="h-full w-full">
                <div className="flex flex-col h-full">
                  <p className="text-xxs font-bold text-primary mb-1 text-center">Paymint</p>
                  <p className="text-xxs font-semibold text-card-foreground mb-1">Balances</p>
                  {['USD', 'EUR', 'GBP'].map(curr => (
                    <div key={curr} className="flex justify-between items-center py-1 my-0.5 bg-background/5 rounded-sm px-1">
                      <p className="text-xxs text-muted-foreground/80">{curr}</p>
                      <DollarSign className="h-2.5 w-2.5 text-primary" />
                    </div>
                  ))}
                  <p className="text-xxs font-semibold text-card-foreground mt-1.5 mb-1">Activity</p>
                   <PlaceholderTransactionItem name="Incoming" amount="$250" date="Today" isPositive />
                   <PlaceholderTransactionItem name="Outgoing" amount="$50" date="Yesterday" />
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MockupDisplay;
