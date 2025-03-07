export const tutorials = {
  react: [
    {
      id: 'create-react-app',
      title: 'Criando um Projeto React',
      description: 'Aprenda como criar um novo projeto React do zero usando Create React App ou Vite.',
      steps: [
        {
          id: 1,
          title: 'Usando Create React App',
          content: 'Create React App é uma forma oficial de criar aplicações React com uma boa configuração padrão.',
          code: `# Usando npx (recomendado)
npx create-react-app meu-projeto
cd meu-projeto
npm start

# Estrutura do projeto criado
meu-projeto/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── manifest.json
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   └── styles.css
  ├── package.json
  └── README.md`,
          language: 'bash',
          documentationUrl: 'https://create-react-app.dev/docs/getting-started'
        },
        {
          id: 2,
          title: 'Usando Vite',
          content: 'Vite é uma ferramenta de build mais moderna e rápida, muito popular para criar projetos React.',
          code: `# Criando projeto com Vite
npm create vite@latest meu-projeto -- --template react
cd meu-projeto
npm install
npm run dev

# Estrutura do projeto Vite
meu-projeto/
  ├── node_modules/
  ├── public/
  ├── src/
  │   ├── App.jsx
  │   └── main.jsx
  ├── index.html
  ├── package.json
  └── vite.config.js`,
          language: 'bash',
          documentationUrl: 'https://vitejs.dev/guide/'
        },
        {
          id: 3,
          title: 'Instalando Dependências Comuns',
          content: 'Algumas bibliotecas populares que você pode querer adicionar ao seu projeto.',
          code: `# Roteamento
npm install react-router-dom

# Gerenciamento de Estado
npm install @reduxjs/toolkit react-redux

# Estilização
npm install styled-components

# Requisições HTTP
npm install axios`,
          language: 'bash'
        }
      ]
    },
    {
      id: 'react-basics',
      title: 'Iniciando com React',
      description: 'Aprenda os conceitos básicos do React e comece a criar suas primeiras aplicações.',
      steps: [
        {
          id: 1,
          title: 'O que é React?',
          content: 'React é uma biblioteca JavaScript para criar interfaces de usuário. Ela foi desenvolvida pelo Facebook e é uma das bibliotecas mais populares para desenvolvimento web.',
          code: `// Exemplo de um componente React básico
import React from 'react';

function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
    </div>
  );
}

export default App;`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/learn/your-first-component'
        },
        {
          id: 2,
          title: 'Componentes e Props',
          content: 'Componentes são blocos reutilizáveis de código que retornam elementos React. Props são dados que passamos para os componentes.',
          code: `// Exemplo de componente com props
function Welcome({ name }) {
  return <h1>Bem-vindo, {name}!</h1>;
}

// Uso do componente
<Welcome name="Maria" />`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/learn/passing-props-to-a-component'
        },
        {
          id: 3,
          title: 'Estado e Eventos',
          content: 'O estado permite que os componentes mantenham e atualizem dados. Eventos são ações que o usuário pode realizar.',
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/learn/state-a-components-memory'
        }
      ]
    },
    {
      id: 'react-hooks',
      title: 'Hooks e Estado',
      description: 'Aprenda sobre os Hooks do React e como gerenciar estado em suas aplicações.',
      steps: [
        {
          id: 1,
          title: 'useState Hook',
          content: 'O useState é um Hook que permite adicionar estado a componentes funcionais.',
          code: `import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <p>Contador: {count}</p>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/reference/react/useState'
        },
        {
          id: 2,
          title: 'useEffect Hook',
          content: 'O useEffect permite executar efeitos colaterais em componentes funcionais.',
          code: `import { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Busca dados quando o componente monta
    fetch('https://api.exemplo.com/dados')
      .then(res => res.json())
      .then(data => setData(data));
  }, []); // Array vazio significa que o efeito roda apenas uma vez

  return <div>{data ? data.nome : 'Carregando...'}</div>;
}`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/reference/react/useEffect'
        }
      ]
    },
    {
      id: '3',
      title: 'Roteamento com React Router',
      description: 'Aprenda a implementar navegação entre páginas usando React Router',
      steps: [
        {
          id: '3.1',
          title: 'Instalação do React Router',
          content: 'Primeiro, instale o pacote react-router-dom usando npm ou yarn.',
          code: 'npm install react-router-dom'
        },
        {
          id: '3.2',
          title: 'Configuração básica',
          content: 'Configure o roteamento básico usando BrowserRouter e Routes.',
          code: 'import { BrowserRouter, Routes, Route } from \'react-router-dom\';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/sobre" element={<Sobre />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}'
        },
        {
          id: '3.3',
          title: 'Navegação programática',
          content: 'Aprenda a navegar entre rotas programaticamente usando o hook useNavigate.',
          code: 'import { useNavigate } from \'react-router-dom\';\n\nfunction BotaoNavegacao() {\n  const navigate = useNavigate();\n  \n  return (\n    <button onClick={() => navigate(\'/sobre\')}>\n      Ir para Sobre\n    </button>\n  );\n}'
        }
      ]
    },
    {
      id: 'react-performance',
      title: 'Otimização de Performance',
      description: 'Aprenda técnicas avançadas para otimizar a performance de suas aplicações React.',
      steps: [
        {
          id: 1,
          title: 'React.memo e useMemo',
          content: 'Aprenda a evitar renderizações desnecessárias usando React.memo e useMemo.',
          code: `// Exemplo de uso do React.memo
const MeuComponente = React.memo(({ dados }) => {
  return <div>{dados.map(item => <Item key={item.id} {...item} />)}</div>;
});

// Exemplo de useMemo
function ListaItems({ items }) {
  const itemsFiltrados = useMemo(() => {
    return items.filter(item => item.ativo);
  }, [items]);

  return <div>{itemsFiltrados.map(item => <Item key={item.id} {...item} />)}</div>;
}`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/reference/react/memo'
        },
        {
          id: 2,
          title: 'useCallback',
          content: 'Otimize a performance memorizando funções com useCallback.',
          code: `function ListaItems({ onItemClick }) {
  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);

  return items.map(item => (
    <Item 
      key={item.id} 
      onClick={() => handleClick(item.id)}
    />
  ));
}`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/reference/react/useCallback'
        }
      ]
    },
    {
      id: 'react-context',
      title: 'Gerenciamento de Estado Global',
      description: 'Aprenda a gerenciar estado global em React usando Context API e outros padrões.',
      steps: [
        {
          id: 1,
          title: 'Context API',
          content: 'Use o Context API para compartilhar dados entre componentes sem prop drilling.',
          code: `// Criando um contexto
const TemaContext = React.createContext();

// Provider no componente pai
function App() {
  const [tema, setTema] = useState('claro');
  
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <Componentes />
    </TemaContext.Provider>
  );
}

// Usando o contexto em qualquer componente filho
function BotaoTema() {
  const { tema, setTema } = useContext(TemaContext);
  return (
    <button onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
      Mudar Tema
    </button>
  );
}`,
          language: 'jsx',
          documentationUrl: 'https://react.dev/learn/passing-data-deeply-with-context'
        }
      ]
    }
  ],
  reactNative: [
    {
      id: 'create-react-native-app',
      title: 'Criando um Projeto React Native',
      description: 'Aprenda como criar um novo projeto React Native usando Expo ou React Native CLI.',
      steps: [
        {
          id: 1,
          title: 'Usando Expo (Recomendado para Iniciantes)',
          content: 'Expo é uma plataforma que facilita o desenvolvimento React Native, especialmente para iniciantes.',
          code: `# Instalando Expo CLI
npm install -g expo-cli

# Criando novo projeto
npx create-expo-app meu-app
cd meu-app
npx expo start

# Estrutura do projeto
meu-app/
  ├── assets/
  ├── node_modules/
  ├── App.js
  ├── app.json
  ├── babel.config.js
  └── package.json`,
          language: 'bash',
          documentationUrl: 'https://docs.expo.dev/get-started/create-a-new-app/'
        },
        {
          id: 2,
          title: 'Usando React Native CLI',
          content: 'React Native CLI é a forma tradicional de criar projetos, oferecendo mais controle sobre a configuração nativa.',
          code: `# Criando novo projeto
npx react-native@latest init MeuApp
cd MeuApp

# Para iOS (requer macOS)
cd ios && pod install && cd ..
npx react-native run-ios

# Para Android
npx react-native run-android

# Estrutura do projeto
MeuApp/
  ├── android/
  ├── ios/
  ├── node_modules/
  ├── src/
  ├── App.js
  ├── index.js
  └── package.json`,
          language: 'bash',
          documentationUrl: 'https://reactnative.dev/docs/environment-setup'
        },
        {
          id: 3,
          title: 'Instalando Dependências Comuns',
          content: 'Bibliotecas populares para desenvolvimento React Native.',
          code: `# Navegação
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

# Armazenamento Local
npx expo install @react-native-async-storage/async-storage

# Ícones
npx expo install @expo/vector-icons

# Gestos e Animações
npx expo install react-native-reanimated`,
          language: 'bash'
        }
      ]
    },
    {
      id: 'react-native-basics',
      title: 'Iniciando com React Native',
      description: 'Aprenda os conceitos básicos do React Native e comece a criar seus primeiros aplicativos móveis.',
      steps: [
        {
          id: 1,
          title: 'O que é React Native?',
          content: 'React Native é um framework que permite criar aplicativos móveis nativos usando JavaScript e React.',
          code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});`,
          language: 'jsx',
          documentationUrl: 'https://reactnative.dev/docs/getting-started'
        },
        {
          id: 2,
          title: 'Componentes Básicos',
          content: 'React Native fornece componentes básicos que são mapeados para componentes nativos.',
          code: `import { View, Text, Button, TextInput } from 'react-native';

function Example() {
  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput
        placeholder="Nome"
        onChangeText={(text) => console.log(text)}
      />
      <Button
        title="Clique aqui"
        onPress={() => alert('Botão pressionado!')}
      />
    </View>
  );
}`,
          language: 'jsx',
          documentationUrl: 'https://reactnative.dev/docs/components-and-apis'
        },
        {
          id: '6',
          title: 'Estilização e Layout',
          description: 'Aprenda sobre Flexbox e estilização no React Native',
          steps: [
            {
              id: '6.1',
              title: 'Flexbox no React Native',
              content: 'O React Native usa Flexbox para layout, mas com algumas diferenças do CSS web.',
              code: 'const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: \'column\',\n    justifyContent: \'center\',\n    alignItems: \'center\',\n  },\n});'
            },
            {
              id: '6.2',
              title: 'StyleSheet',
              content: 'Use StyleSheet.create para criar estilos otimizados e validados.',
              code: 'const styles = StyleSheet.create({\n  texto: {\n    fontSize: 16,\n    color: \'#333\',\n    marginBottom: 10,\n  },\n  container: {\n    padding: 20,\n    backgroundColor: \'#fff\',\n  },\n});'
            },
            {
              id: '6.3',
              title: 'Exemplo de Layout',
              content: 'Veja um exemplo prático de layout usando Flexbox e StyleSheet.',
              code: 'function LayoutExemplo() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.header}>\n        <Text style={styles.titulo}>Meu App</Text>\n      </View>\n      <View style={styles.content}>\n        <Text style={styles.texto}>Conteúdo principal</Text>\n      </View>\n    </View>\n  );\n}'
            }
          ]
        }
      ]
    },
    {
      id: 'react-native-start',
      title: 'Iniciando um Projeto do Zero com Expo',
      description: 'Aprenda a criar um projeto React Native do zero usando o Expo.',
      steps: [
        {
          id: 1,
          title: 'Instalação do Expo CLI',
          content: 'Primeiro, instale o Expo CLI globalmente em sua máquina.',
          code: 'npm install -g expo-cli',
          language: 'bash'
        },
        {
          id: 2,
          title: 'Criando um Novo Projeto',
          content: 'Use o comando `npx create-expo-app` para criar um novo projeto.',
          code: 'npx create-expo-app --template blank meu-app',
          language: 'bash'
        },
        {
          id: 3,
          title: 'Navegando até o Diretório do Projeto',
          content: 'Navegue até o diretório do projeto que você acabou de criar.',
          code: 'cd meu-app',
          language: 'bash'
        },
        {
          id: 4,
          title: 'Iniciando o Servidor de Desenvolvimento',
          content: 'Inicie o servidor de desenvolvimento para visualizar o aplicativo.',
          code: 'npx expo start',
          language: 'bash'
        },
        {
          id: 5,
          title: 'Executando no Emulador ou Dispositivo Físico',
          content: 'Escaneie o QR code com o aplicativo Expo Go ou execute no emulador.',
          code: 'Pressione "a" para Android ou "i" para iOS no terminal.',
          language: 'bash'
        }
      ]
    },
    {
      id: 'react-native-errors',
      title: 'Erros Comuns e Como Resolver',
      description: 'Aprenda a identificar e resolver os erros mais comuns no desenvolvimento com React Native.',
      steps: [
        {
          id: 1,
          title: 'Erro: "Unable to resolve module"',
          content: 'Esse erro ocorre quando o React Native não consegue encontrar um módulo. Verifique se o módulo está instalado corretamente.',
          solution: 'Execute `npm install` ou `yarn install` para instalar as dependências.',
          code: 'npm install nome-do-modulo',
          language: 'bash'
        },
        {
          id: 2,
          title: 'Erro: "Metro Bundler has encountered an error"',
          content: 'Esse erro geralmente ocorre devido a problemas no código ou na configuração do Metro Bundler.',
          solution: 'Tente reiniciar o servidor com `npx expo start --clear`.',
          code: 'npx expo start --clear',
          language: 'bash'
        },
        {
          id: 3,
          title: 'Erro: "No bundle URL present"',
          content: 'Esse erro pode ocorrer quando o servidor de desenvolvimento não está rodando corretamente.',
          solution: 'Verifique se o servidor está rodando e tente reiniciá-lo.',
          code: 'npx expo start',
          language: 'bash'
        },
        {
          id: 4,
          title: 'Erro: "Unable to load script"',
          content: 'Esse erro pode ocorrer devido a problemas de rede ou configuração do Metro Bundler.',
          solution: 'Verifique sua conexão de internet e tente reiniciar o servidor.',
          code: 'npx expo start --clear',
          language: 'bash'
        }
      ]
    },
    {
      id: 'react-native-navigation',
      title: 'Navegação com React Navigation',
      description: 'Aprenda a implementar navegação em apps React Native usando React Navigation.',
      steps: [
        {
          id: 1,
          title: 'Instalação e Configuração',
          content: 'Configure o React Navigation em seu projeto.',
          code: `// Instalação
npm install @react-navigation/native
npm install @react-navigation/native-stack

// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
          language: 'jsx',
          documentationUrl: 'https://reactnavigation.org/docs/getting-started'
        }
      ]
    }
  ],
  errors: {
    react: [
      {
        id: 'hooks-errors',
        title: 'Erros Comuns com Hooks',
        examples: [
          {
            error: 'React Hook "useState" is called in function "exemplo" that is neither a React function component nor a custom React Hook function',
            cause: 'Hooks só podem ser usados dentro de componentes React ou custom hooks.',
            solution: 'Mova o hook para dentro de um componente React ou crie um custom hook.',
            example: `// ❌ Errado
function exemplo() {
  const [state, setState] = useState(0);
}

// ✅ Correto
function ExemploComponent() {
  const [state, setState] = useState(0);
}`
          },
          {
            error: 'React Hook useEffect has a missing dependency: "callback"',
            cause: 'Dependência faltando no array de dependências do useEffect.',
            solution: 'Adicione todas as dependências necessárias ou use useCallback.',
            example: `// ❌ Errado
useEffect(() => {
  callback();
}, []); // ESLint: 'callback' is missing in dependencies

// ✅ Correto
useEffect(() => {
  callback();
}, [callback]);`
          }
        ]
      }
    ],
    reactNative: [
      {
        id: 'build-errors',
        title: 'Erros de Build',
        examples: [
          {
            error: 'Error: Unable to resolve module `@react-navigation/native` from `App.js`',
            cause: 'Pacote não instalado ou cache do Metro corrompido.',
            solution: 'Limpe o cache e reinstale as dependências.',
            example: `// Execute estes comandos
rm -rf node_modules
npm install
npx react-native start --reset-cache`
          },
          {
            error: 'Error: Invariant Violation: Native module cannot be null.',
            cause: 'Módulo nativo não está linkado corretamente.',
            solution: 'Reinstale os pods (iOS) ou reconstrua o projeto (Android).',
            example: `// Para iOS
cd ios && pod install && cd ..
// Para Android
cd android && ./gradlew clean && cd ..`
          }
        ]
      },
      {
        id: 'runtime-errors',
        title: 'Erros em Tempo de Execução',
        examples: [
          {
            error: 'undefined is not an object (evaluating \'_this.state.data\')',
            cause: 'Tentativa de acessar propriedade de estado não inicializada.',
            solution: 'Inicialize o estado corretamente e use optional chaining.',
            example: `// ❌ Errado
class MeuComponente extends React.Component {
  render() {
    return <Text>{this.state.data.title}</Text>;
  }
}

// ✅ Correto
class MeuComponente extends React.Component {
  state = { data: null }
  
  render() {
    return <Text>{this.state.data?.title}</Text>;
  }
}`
          }
        ]
      }
    ]
  }
};