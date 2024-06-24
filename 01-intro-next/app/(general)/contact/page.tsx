import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Description',
  keywords: ['contact page', 'contact information'],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  )
}