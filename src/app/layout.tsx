import type { Metadata } from 'next';
import { Inter as FontSans, Noto_Sans_Devanagari as DevaNagari } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { ReactNode } from 'react';
import LanguageContextProvider from '@/context/languageContext';
import DataContextProvider from '@/context/DataContext';
import ActionContextProvider from '@/context/ActionContext';

export const fontSans = FontSans({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-sans',
});

export const fontNotoSans = DevaNagari({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
                className={`min-h-screen bg-background font-sans antialiased ${fontNotoSans.variable} ${fontSans.variable}`}
            >
                <ActionContextProvider>
                    <LanguageContextProvider>
                        <DataContextProvider>
                            <Header />
                            {children}
                            <Footer />
                        </DataContextProvider>
                    </LanguageContextProvider>
                </ActionContextProvider>
            </body>
        </html>
    );
}
