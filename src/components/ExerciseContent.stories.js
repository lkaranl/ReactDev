import React from 'react';
import { View } from 'react-native';
import ExerciseContent from './ExerciseContent';
import { ThemeProvider } from '../context/ThemeContext';

const mockExercise = {
  title: 'Calculadora Simples',
  description: 'Crie uma calculadora que realiza operações básicas de matemática.',
  difficulty: 'Iniciante',
  requirements: [
    'Implementar soma, subtração, multiplicação e divisão',
    'Tratar divisão por zero',
    'Limpar o resultado com botão C',
  ],
  initialCode: `function Calculadora() {
  // Implemente sua calculadora aqui
  return (
    <View>
      {/* Seu código aqui */}
    </View>
  );
}`,
  solution: `function Calculadora() {
  const [valor, setValor] = useState('0');
  const [operacao, setOperacao] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);

  // Implementação completa aqui...
}`,
};

const Story = {
  title: 'Componentes/ExerciseContent',
  component: ExerciseContent,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={{ flex: 1, padding: 16 }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default Story;

export const Padrao = {
  args: {
    exercise: mockExercise,
    onBack: () => console.log('Voltar pressionado'),
  },
};

export const SemExercicio = {
  args: {
    exercise: null,
    onBack: () => console.log('Voltar pressionado'),
  },
};

export const ExercicioAvancado = {
  args: {
    exercise: {
      ...mockExercise,
      difficulty: 'Avançado',
      title: 'Implementação de Redux',
      description: 'Crie uma implementação simplificada do Redux do zero.',
    },
    onBack: () => console.log('Voltar pressionado'),
  },
}; 