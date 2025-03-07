# Documentação da API

## 📚 Componentes

### Header
```typescript
interface HeaderProps {
  onBack?: () => void;
  onNavigate: (screen: string) => void;
}
```

O componente `Header` é responsável pela navegação superior do aplicativo.

#### Props
- `onBack`: Função opcional chamada quando o usuário pressiona o botão voltar
- `onNavigate`: Função para navegar entre telas

---

### Footer
```typescript
interface FooterProps {
  // Sem props necessárias atualmente
}
```

O componente `Footer` exibe a navegação inferior e informações adicionais.

---

### ExerciseContent
```typescript
interface Exercise {
  title: string;
  description: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  requirements: string[];
  initialCode: string;
  solution: string;
}

interface ExerciseContentProps {
  exercise: Exercise;
  onBack: () => void;
}
```

O componente `ExerciseContent` exibe os detalhes de um exercício específico.

#### Props
- `exercise`: Objeto contendo os detalhes do exercício
- `onBack`: Função para retornar à lista de exercícios

---

### TutorialContent
```typescript
interface Tutorial {
  id: string;
  title: string;
  content: string;
  category: string;
  difficulty: string;
}

interface TutorialContentProps {
  tutorial: Tutorial;
  onBack: () => void;
}
```

O componente `TutorialContent` exibe o conteúdo de um tutorial específico.

---

## 🔄 Contextos

### ThemeContext
```typescript
interface Theme {
  colors: {
    primary: string;
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    codeBackground: string;
    codeText: string;
  };
}

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}
```

O `ThemeContext` gerencia o tema global da aplicação.

#### Métodos
- `toggleTheme`: Alterna entre os temas claro e escuro

---

## 🎯 Hooks Personalizados

### useTheme
```typescript
function useTheme(): ThemeContextType
```

Hook para acessar o tema atual e suas funcionalidades.

#### Retorno
- `theme`: Objeto contendo as cores e estilos do tema atual
- `isDarkMode`: Boolean indicando se o tema escuro está ativo
- `toggleTheme`: Função para alternar o tema

---

## 📱 Navegação

### Funções de Navegação
```typescript
interface NavigationFunctions {
  handleSelectTutorial: (tutorial: Tutorial) => void;
  handleSelectCategory: (category: string) => void;
  handleSelectExercise: (exercise: Exercise) => void;
  handleNavigate: (screen: string) => void;
  handleBack: () => boolean;
}
```

#### Métodos
- `handleSelectTutorial`: Seleciona um tutorial para visualização
- `handleSelectCategory`: Seleciona uma categoria de tutoriais/exercícios
- `handleSelectExercise`: Seleciona um exercício para visualização
- `handleNavigate`: Navega para uma tela específica
- `handleBack`: Gerencia a navegação de volta

---

## 🔧 Utilitários

### Animações
```typescript
interface AnimationConfig {
  duration?: number;
  easing?: Animated.EasingFunction;
  useNativeDriver?: boolean;
}

function createFadeAnimation(
  value: Animated.Value,
  config?: AnimationConfig
): Animated.CompositeAnimation;

function createSlideAnimation(
  value: Animated.Value,
  config?: AnimationConfig
): Animated.CompositeAnimation;
```

Funções utilitárias para criar animações comuns.

---

## 📦 Dados

### Estrutura de Dados
```typescript
interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Tutorial {
  id: string;
  title: string;
  content: string;
  category: string;
  difficulty: string;
}

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  requirements: string[];
  initialCode: string;
  solution: string;
  category: string;
}
```

Estruturas de dados principais utilizadas na aplicação. 