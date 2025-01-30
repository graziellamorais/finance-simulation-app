'use client'; // This ensures that this component is rendered on the client-side

import Layout from './layout';

export default function Home() {
    return (
        <Layout>
            <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center min-h-screen'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                    Simule seu financiamento de forma simples e rápida
                </h1>
                <p className='text-lg mb-6'>
                    Descubra as melhores condições para realizar o sonho da casa
                    própria com nossa calculadora inteligente.
                </p>
                <button className='bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-100'>
                    Comece Agora
                </button>
            </div>
        </Layout>
    );
}
