export const tutorials = {
  react: [
    {
      id: '1',
      title: 'Iniciando com React',
      description: 'Aprenda os conceitos básicos do React e como criar seu primeiro componente',
      steps: [
        {
          id: '1.1',
          title: 'Criando um novo projeto',
          content: 'Use o comando create-react-app para iniciar um novo projeto React. Este comando configura todo o ambiente necessário para desenvolvimento.',
          code: 'npx create-react-app meu-app'
        },
        {
          id: '1.2',
          title: 'Estrutura do projeto',
          content: 'Entenda a estrutura de pastas e arquivos principais do projeto React. A pasta src contém seu código fonte, public contém arquivos estáticos.',
          code: 'meu-app/\n  ├── src/\n  │   ├── App.js\n  │   ├── index.js\n  │   └── components/\n  ├── public/\n  │   ├── index.html\n  │   └── favicon.ico\n  └── package.json'
        },
        {
          id: '1.3',
          title: 'Primeiro componente',
          content: 'Crie seu primeiro componente funcional. Os componentes são blocos reutilizáveis de UI que podem receber props.',
          code: 'function MeuComponente(props) {\n  return <div>Olá, {props.nome}!</div>;\n}'
        }
      ]
    },
    {
      id: '2',
      title: 'Hooks e Estado',
      description: 'Aprenda sobre os Hooks do React, especialmente useState e useEffect, para gerenciar estado e efeitos colaterais',
      steps: [
        {
          id: '2.1',
          title: 'useState Hook',
          content: 'O useState permite adicionar estado a componentes funcionais. Ele retorna um array com o valor atual e uma função para atualizá-lo.',
          code: 'const [contador, setContador] = useState(0);'
        },
        {
          id: '2.2',
          title: 'useEffect Hook',
          content: 'O useEffect permite executar efeitos colaterais em componentes funcionais. É útil para operações como chamadas de API e manipulação do DOM.',
          code: 'useEffect(() => {\n  document.title = `Contador: ${contador}`;\n}, [contador]);'
        },
        {
          id: '2.3',
          title: 'Exemplo prático',
          content: 'Veja como usar os hooks em um componente real, com contador e efeitos colaterais.',
          code: 'function Contador() {\n  const [contador, setContador] = useState(0);\n  \n  useEffect(() => {\n    document.title = `Contador: ${contador}`;\n  }, [contador]);\n  \n  return (\n    <div>\n      <p>Contador: {contador}</p>\n      <button onClick={() => setContador(contador + 1)}>\n        Incrementar\n      </button>\n    </div>\n  );\n}'
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
      id: '4',
      title: 'Iniciando com React Native',
      description: 'Aprenda a criar seu primeiro aplicativo mobile com React Native',
      steps: [
        {
          id: '4.1',
          title: 'Configuração do ambiente',
          content: 'Instale as ferramentas necessárias para desenvolvimento React Native, incluindo Node.js, JDK e Android Studio.',
          code: 'npm install -g expo-cli\nnpm install -g react-native-cli'
        },
        {
          id: '4.2',
          title: 'Criando um novo projeto',
          content: 'Use o Expo para criar um novo projeto React Native. O Expo simplifica o processo de desenvolvimento.',
          code: 'npx create-expo-app meu-app-mobile'
        },
        {
          id: '4.3',
          title: 'Estrutura do projeto',
          content: 'Entenda a estrutura básica de um projeto React Native e os arquivos principais.',
          code: 'meu-app-mobile/\n  ├── App.js\n  ├── assets/\n  ├── node_modules/\n  └── package.json'
        }
      ]
    },
    {
      id: '5',
      title: 'Componentes Básicos',
      description: 'Aprenda sobre os componentes básicos do React Native e suas diferenças do React web',
      steps: [
        {
          id: '5.1',
          title: 'View e Text',
          content: 'Os componentes View e Text são fundamentais no React Native. View é similar a div, e Text é usado para texto.',
          code: 'import { View, Text } from \'react-native\';\n\nfunction App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Olá, React Native!</Text>\n    </View>\n  );\n}'
        },
        {
          id: '5.2',
          title: 'TouchableOpacity',
          content: 'TouchableOpacity é usado para criar elementos interativos que respondem ao toque.',
          code: 'import { TouchableOpacity } from \'react-native\';\n\nfunction Botao() {\n  return (\n    <TouchableOpacity\n      onPress={() => alert(\'Botão pressionado!\')}\n      style={styles.botao}\n    >\n      <Text>Pressione-me</Text>\n    </TouchableOpacity>\n  );\n}'
        },
        {
          id: '5.3',
          title: 'Image',
          content: 'O componente Image é usado para exibir imagens no React Native.',
          code: 'import { Image } from \'react-native\';\n\nfunction ImagemExemplo() {\n  return (\n    <Image\n      source={require(\'./assets/logo.png\')}\n      style={styles.imagem}\n      resizeMode="contain"\n    />\n  );\n}'
        }
      ]
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
};