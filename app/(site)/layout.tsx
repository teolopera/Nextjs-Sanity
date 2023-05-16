import Link from 'next/link';
import { Metadata } from 'next';
import '../globals.css'

import { getPages } from '@/sanity/utils/sanity-utils';
import { ProviderTheme } from '@/providers/themeProvider';
import ThemeSwitcher from '../components/buttons/ThemeSwitcher';

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Have fun! Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();

  // max-w-8xl mx-auto px-4 sm:px-6 md:px-8

  return (
    <html lang="en">
      <body className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <ProviderTheme>
          <header className='flex items-center justify-between'>
              <Link 
                href='/' 
                className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
              >
                Logo
              </Link>
              <div className='flex items-center gap-3 text-sm text-gray-600'>
                <ThemeSwitcher />                
                {pages.map(page => (
                  <Link 
                    key={page._id} 
                    href={`/${page.slug}`}
                    className='hover:underline'
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
          </header>
          <main className='py-20'>
            {children}
          </main>
        </ProviderTheme>
      </body>
    </html>
  )
}
