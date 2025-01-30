'use client'; // This ensures that this component is rendered on the client-side

import Layout from '../layout';

export default function Simulation() {
    return (
        <Layout>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-screen-lg mx-auto text-center'>
                    <h2 className='text-3xl font-semibold mb-4'>
                        Simulação de Financiamento
                    </h2>
                    <p className='mb-8'>
                        Aqui, você pode calcular o valor do seu financiamento e
                        descobrir as melhores condições para o seu perfil.
                    </p>

                    {/* Example form */}
                    <form className='space-y-4'>
                        <label className='block text-left'>
                            Valor do Imóvel
                        </label>
                        <input
                            type='number'
                            placeholder='Digite o valor do imóvel'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        <label className='block text-left'>
                            Número de Parcelas
                        </label>
                        <input
                            type='number'
                            placeholder='Digite o número de parcelas'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white py-2 rounded-lg font-semibold'>
                            Calcular
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
