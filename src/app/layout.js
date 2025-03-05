'use client';

import React from 'react';
import Link from 'next/link';
import { MantineProvider, Container, Text } from '@mantine/core';
import '@mantine/core/styles.css';

const Layout = ({ children }) => {
    return (
        <html lang='pt-BR'>
            <body className='font-sans bg-gray-50 min-h-screen'>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        fontFamily: 'sans-serif',
                    }}>
                    {/* Main wrapper for centering content */}
                    <Container className='flex flex-row min-h-screen'>
                        {/* Nav */}
                        <nav
                            className='w-full max-w-3xl mx-auto p-4'
                            style={{
                                display: 'flex',
                                padding: '2rem',
                            }}>
                            <div className='space-x-6'>
                                <Link href='/' className='text-white px-4 py-2'>
                                    Início
                                </Link>
                                <Link
                                    href='/simulation'
                                    className='text-white px-4 py-2'>
                                    Simulação
                                </Link>
                            </div>
                        </nav>

                        {/* Main Content Area */}
                        <main className='flex-grow flex justify-center items-center p-4'>
                            <div className='w-full max-w-3xl mx-auto'>
                                {children}
                            </div>
                        </main>

                        {/* Footer */}
                        <footer>
                            <Text c='dimmed' size='xs'>
                                © 2025 Minha Simulação. All rights reserved.
                            </Text>
                        </footer>
                    </Container>
                </MantineProvider>
            </body>
        </html>
    );
};

export default Layout;
