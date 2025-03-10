'use client';

import { useForm } from '@mantine/form';
import {
    TextInput,
    Select,
    Radio,
    Group,
    Paper,
    Button,
    Title,
    Stack,
    Container,
} from '@mantine/core';

const SimulationForm = () => {
    // Initialize the form with empty values
    const form = useForm({
        initialValues: {
            pessoa: '',
            tipoFinanciamento: '',
            categoriaFinanciamento: '',
            cpf: '',
            renda: '',
            opcaoFinanciamento: '',
        },
    });

    // Function triggered when submitting the form
    const handleSubmit = (values) => {
        console.log('Form Data Submitted:', values);
    };

    return (
        <Container
            size='sm'
            className='h-screen flex items-center justify-center'>
            <Paper
                shadow='md'
                radius='lg'
                p='xl'
                withBorder
                className='max-w-md w-full'>
                <Title order={2} align='center' mb='lg'>
                    Simulação de Financiamento
                </Title>

                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack spacing='md'>
                        {/* Selection field for person type (Individual or Legal Entity) */}
                        <Select
                            label='Pessoa'
                            placeholder='Selecione'
                            data={['Física', 'Jurídica']}
                            {...form.getInputProps('pessoa')}
                        />

                        {/* Selection field for financing type */}
                        <Select
                            label='Tipo de Financiamento'
                            placeholder='Selecione'
                            data={[
                                {
                                    value: 'FinanciamentoResidencial',
                                    label: 'Residencial',
                                },
                                {
                                    value: 'FinanciamentoComercial',
                                    label: 'Comercial',
                                },
                                { value: 'FinanciamentoRural', label: 'Rural' },
                            ]}
                            {...form.getInputProps('tipoFinanciamento')}
                        />

                        {/* Selection field for financing category */}
                        <Select
                            label='Categoria de Financiamento'
                            placeholder='Selecione'
                            data={[
                                {
                                    value: 'ImóvelNovo',
                                    label: 'Aquisição de imóvel novo',
                                },
                                {
                                    value: 'ImóvelUsado',
                                    label: 'Aquisição de imóvel usado',
                                },
                                {
                                    value: 'Terreno',
                                    label: 'Aquisição de terreno',
                                },
                                { value: 'Construção', label: 'Construção' },
                                {
                                    value: 'Reforma',
                                    label: 'Reforma e/ou ampliação',
                                },
                            ]}
                            {...form.getInputProps('categoriaFinanciamento')}
                        />

                        {/* Input field for CPF */}
                        <TextInput
                            label='CPF'
                            placeholder='Digite seu CPF'
                            {...form.getInputProps('cpf')}
                        />

                        {/* Input field for gross family income */}
                        <TextInput
                            label='Renda Bruta Familiar (mensal)'
                            placeholder='Digite sua renda'
                            {...form.getInputProps('renda')}
                        />

                        {/* Radio button group for financing option */}
                        <Radio.Group
                            label='Opção de Financiamento'
                            {...form.getInputProps('opcaoFinanciamento')}>
                            <Stack spacing='xs'>
                                <Radio
                                    value='Pró-Cotista - Recursos FGTS'
                                    label='Pró-Cotista - Recursos FGTS'
                                />
                                <Radio
                                    value='SBPE (Créd. Imob. Poup. CAIXA): Taxa Balcão'
                                    label='SBPE (Créd. Imob. Poup. CAIXA): Taxa Balcão'
                                />
                                <Radio
                                    value='SBPE (TR): Taxa Balcão'
                                    label='SBPE (TR): Taxa Balcão'
                                />
                            </Stack>
                        </Radio.Group>

                        {/* Submit button */}
                        <Button type='submit' fullWidth>
                            Enviar
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
};

export default SimulationForm;
