import React from "react"
import type { Metadata } from 'next'
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: ["normal", "italic"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://hameed.pro'),
  title: {
    default: 'Hameed Ur Rehman — CRM Specialist, Systems Builder & Database Administrator | Hameed Pro',
    template: '%s | Hameed Pro',
  },
  description: 'Hameed Ur Rehman (Hameed Pro) builds and manages CRM systems, databases, workflow automation, and digital infrastructure for businesses. Specialising in HubSpot, Salesforce, PostgreSQL, data migration, and systems integration through Nexlink Media, Sheffield UK.',
  keywords: [
    'Hameed', 'Hameed Pro', 'Hameed Ur Rehman', 'hameed.pro',
    'CRM specialist', 'CRM implementation', 'CRM consultant', 'CRM systems',
    'HubSpot expert', 'Salesforce consultant', 'Zoho CRM',
    'database administrator', 'database design', 'PostgreSQL', 'database migration',
    'systems builder', 'systems integration', 'systems architect',
    'workflow automation', 'Zapier automation', 'Make automation', 'process automation',
    'data migration', 'data management', 'data cleanup',
    'Nexlink Media', 'Sheffield', 'UK',
    'website builder', 'web development', 'operational tooling',
    'small business CRM', 'non-profit CRM', 'property CRM',
    'Airtable', 'Metabase', 'Python', 'SQL',
    'e-commerce integration', 'Shopify integration', 'QuickBooks integration',
    'donor management', 'inventory system', 'sales pipeline',
    'freelance CRM specialist', 'independent systems builder',
  ],
  authors: [{ name: 'Hameed Ur Rehman', url: 'https://hameed.pro' }],
  creator: 'Hameed Ur Rehman',
  publisher: 'Nexlink Media',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hameed.pro',
    siteName: 'Hameed Pro — Hameed Ur Rehman',
    title: 'Hameed Ur Rehman — CRM Specialist, Systems Builder & Database Administrator',
    description: 'I build CRM systems, databases, and operational infrastructure for businesses. HubSpot, Salesforce, PostgreSQL, workflow automation, and data migration through Nexlink Media.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hameed Ur Rehman — CRM Specialist & Systems Builder',
    description: 'Building CRM systems, databases, and digital infrastructure for businesses. Specialising in HubSpot, Salesforce, PostgreSQL, and workflow automation.',
    creator: '@hameed.sys',
  },
  alternates: {
    canonical: 'https://hameed.pro',
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  name: 'Hameed Ur Rehman',
                  alternateName: ['Hameed Pro', 'Hameed'],
                  url: 'https://hameed.pro',
                  jobTitle: 'Systems Builder & CRM Specialist',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Nexlink Media',
                    url: 'https://hameed.pro',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Sheffield',
                    addressCountry: 'GB',
                  },
                  knowsAbout: [
                    'CRM Implementation', 'CRM Systems', 'HubSpot', 'Salesforce', 'Zoho CRM',
                    'Database Administration', 'PostgreSQL', 'MySQL', 'Database Design',
                    'Workflow Automation', 'Zapier', 'Make', 'Systems Integration',
                    'Data Migration', 'Data Management', 'Web Development',
                    'E-commerce Integration', 'Shopify', 'Airtable', 'Python', 'SQL',
                  ],
                  sameAs: [
                    'https://instagram.com/hameed.sys',
                  ],
                },
                {
                  '@type': 'WebSite',
                  name: 'Hameed Pro',
                  alternateName: 'Hameed Ur Rehman Portfolio',
                  url: 'https://hameed.pro',
                  description: 'Portfolio of Hameed Ur Rehman — CRM specialist, systems builder, and database administrator based in Sheffield, UK.',
                  publisher: {
                    '@type': 'Person',
                    name: 'Hameed Ur Rehman',
                  },
                },
                {
                  '@type': 'ProfessionalService',
                  name: 'Nexlink Media',
                  url: 'https://hameed.pro',
                  description: 'CRM implementation, database design, workflow automation, and systems building for individuals, small teams, and organisations.',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Sheffield',
                    addressCountry: 'GB',
                  },
                  founder: {
                    '@type': 'Person',
                    name: 'Hameed Ur Rehman',
                  },
                  serviceType: [
                    'CRM Implementation', 'Database Administration', 'Workflow Automation',
                    'Systems Integration', 'Data Migration', 'Web Development',
                  ],
                  areaServed: {
                    '@type': 'Country',
                    name: 'United Kingdom',
                  },
                },
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
