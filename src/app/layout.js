'use client'; // This ensures that this component is rendered on the client-side

import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            {/* Navegação */}
            <nav className='bg-gray-800 text-white p-4'>
                <div className='max-w-screen-lg mx-auto flex justify-between items-center'>
                    <div className='text-2xl font-bold'>
                        Minha Simulação Financeira
                    </div>
                    <div>
                        <Link href='/' className='px-4 py-2'>
                            Início
                        </Link>
                        <Link href='/simulation' className='px-4 py-2'>
                            Simulação
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Conteúdo principal */}
            <main className='flex-grow'>{children}</main>

            {/* Rodapé */}
            <footer className='bg-gray-800 text-white text-center py-4'>
                <p>
                    © 2025 Minha Simulação Financeira. Todos os direitos
                    reservados.
                </p>
            </footer>
        </div>
    );
};

export default Layout;
