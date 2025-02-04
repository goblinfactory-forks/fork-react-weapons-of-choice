import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rwoc/shared/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@rwoc/shared/components/ui/table';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: '$49',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    name: 'Enterprise',
    price: '$99',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

export const PricingPage: FC = () => {
  return (
    <div className="p-6 m-4 space-y-6">
      <h1 className="text-4xl font-bold mb-4 text-primary">Pricing</h1>
      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Pricing Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingTiers.map((tier) => (
            <Card key={tier.name}>
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {tier.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Comparison Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              {pricingTiers.map((tier) => (
                <TableHead key={tier.name}>{tier.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricingTiers[0].features.map((feature, index) => (
              <TableRow key={index}>
                <TableCell>{feature}</TableCell>
                {pricingTiers.map((tier) => (
                  <TableCell key={tier.name}>
                    {tier.features.includes(feature) ? '✔️' : '❌'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};
