export const tutorials = {
  react: [
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
    }
  ],
  reactNative: [
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
    }
  ]
};