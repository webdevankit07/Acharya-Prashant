import type { Metadata } from 'next';
import { Inter as FontSans, Noto_Sans_Devanagari as DevaNagari } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { ReactNode } from 'react';
import LanguageContextProvider from '@/context/languageContext';
import DataContextProvider from '@/context/DataContext';

import { cn } from '@/lib/utils';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

const fontNotoSans = DevaNagari({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'संतवाणी श्रृंखला | आचार्य प्रशांत',
    description: 'Acharya Prashant',
    icons: {
        icon: '/logo.png',
    },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontNotoSans.variable,
                    fontSans.variable
                )}
            >
                <LanguageContextProvider>
                    <DataContextProvider>
                        <Header />
                        {children}
                        <Footer />
                    </DataContextProvider>
                </LanguageContextProvider>
            </body>
        </html>
    );
}
