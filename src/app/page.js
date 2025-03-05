'use client'; // This ensures that this component is rendered on the client-side

import Link from 'next/link';
import { Button, Container } from '@mantine/core';

export default function Home() {
    return (
        <div
            className='bg-gradient-to-r from-blue-500 to-purple-600 text-white flex'
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }} // Inline styles for centering
        >
            <Container
                size='xs' // Adjusted size to a smaller container
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center', // Explicit text center
                    padding: '2rem', // Adjust padding if needed
                }}>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                    Simule seu financiamento de forma simples e rápida
                </h1>
                <p className='text-lg mb-6'>
                    Descubra as melhores condições para realizar o sonho da casa
                    própria com nossa calculadora inteligente.
                </p>

                {/* Mantine Button */}
                <Link href='/simulation'>
                    <Button
                        variant='dark'
                        color='blue'
                        size='lg'
                        radius='xl'
                        className='px-6 py-2'
                        style={{ margin: '20px' }}>
                        Comece Agora
                    </Button>
                </Link>
            </Container>
        </div>
    );
}
