import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing Descripcion',
  keywords: ['pricing', 'pricing page'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  )
}