export const tutorials = {
  react: [
    {
      id: '1',
      title: 'Criação de Projetos React',
      description: 'Domine a inicialização de projetos com diferentes templates e configurações',
      steps: [
        {
          id: '1.1',
          title: 'Criação Básica',
          content: 'Para iniciar um projeto padrão com JavaScript:',
          code: 'npx create-react-app meu-app',
          details: {
            parameters: [
              '--template [nome]: Define o template a ser usado',
              '--use-npm: Força uso do npm mesmo com Yarn instalado',
              '--scripts-version [versão]: Versão específica do react-scripts'
            ],
            requirements: [
              'Node.js ≥ 14.0.0',
              'npm ≥ 5.6 ou Yarn ≥ 0.25'
            ]
          },
          tip: 'Execute primeiro npx create-react-app --version para verificar a instalação'
        },
        {
          id: '1.2',
          title: 'Templates Oficiais',
          content: 'Principais templates disponíveis:',
          subSteps: [
            {
              title: 'Template TypeScript',
              code: 'npx create-react-app meu-app-ts --template typescript',
              description: 'Configuração prévia para TypeScript com tipagem'
            },
            {
              title: 'Template PWA',
              code: 'npx create-react-app meu-app-pwa --template cra-template-pwa',
              description: 'Progressive Web App com service worker'
            }
          ]
        },
        {
          id: '1.3',
          title: 'Templates Customizados',
          content: 'Usando templates da comunidade:',
          code: 'npx create-react-app meu-app --template [nome-do-template]',
          examples: [
            {
              name: 'Template Redux',
              code: 'npx create-react-app meu-app-redux --template redux'
            },
            {
              name: 'Template Material-UI',
              code: 'npx create-react-app meu-app-mui --template @mui/material'
            }
          ],
          warning: 'Verifique a confiabilidade do template antes de usar'
        },
        {
          id: '1.4',
          title: 'Configuração Avançada',
          content: 'Opções para projetos específicos:',
          scenarios: [
            {
              title: 'Usando Yarn',
              code: 'yarn create react-app meu-app-yarn'
            },
            {
              title: 'Versão Específica',
              code: 'npx create-react-app@5.0.1 meu-app-legacy'
            },
            {
              title: 'Diretório Atual',
              code: 'npx create-react-app . --force',
              warning: 'Apaga conteúdo existente do diretório!'
            }
          ]
        },
        {
          id: '1.5',
          title: 'Verificação Inicial',
          content: 'Após criação, valide o funcionamento:',
          code: 'cd meu-app && npm start',
          checks: [
            'Servidor deve iniciar na porta 3000',
            'Acesse http://localhost:3000',
            'Edite src/App.js e veja o hot reload'
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Componentes e Props',
      description: 'Aprenda sobre componentes funcionais e props no React',
      steps: [
        {
          id: '2.1',
          title: 'Criando um componente',
          content: 'Crie um novo arquivo para seu componente',
          code: 'function MeuComponente(props) {\n  return <div>Olá, {props.nome}!</div>;\n}'
        }
      ]
    },
    {
      id: '3',
      title: 'Hooks no React',
      description: 'Domine o uso de hooks para gerenciamento de estado e efeitos colaterais',
      steps: [
        {
          id: '3.1',
          title: 'useState',
          content: 'Criando e atualizando estado em componentes funcionais',
          code: 'const [count, setCount] = useState(0);'
        },
        {
          id: '3.2',
          title: 'useEffect',
          content: 'Executando efeitos colaterais em componentes funcionais',
          code: 'useEffect(() => {\n  document.title = `Você clicou ${count} vezes`;\n}, [count]);'
        }
      ]
    },
    {
      id: '4',
      title: 'React Router',
      description: 'Navegação entre páginas em aplicações React',
      steps: [
        {
          id: '4.1',
          title: 'Configurando rotas',
          content: 'Instalação e configuração básica de rotas',
          code: 'npm install react-router-dom'
        },
        {
          id: '4.2',
          title: 'Criando links',
          content: 'Navegação entre páginas usando Link',
          code: '<Link to="/sobre">Sobre</Link>'
        }
      ]
    },
    {
      id: '5',
      title: 'Context API',
      description: 'Gerenciamento de estado global com Context API',
      steps: [
        {
          id: '5.1',
          title: 'Criando um contexto',
          content: 'Como criar e prover um contexto',
          code: 'const MeuContexto = React.createContext();'
        },
        {
          id: '5.2',
          title: 'Consumindo contexto',
          content: 'Acessando valores do contexto em componentes',
          code: 'const valor = useContext(MeuContexto);'
        }
      ]
    }
  ],
  reactNative: [
    {
      id: '3',
      title: 'Iniciando com React Native',
      description: 'Aprenda a criar seu primeiro aplicativo mobile com React Native',
      steps: [
        {
          id: '3.1',
          title: 'Configuração do ambiente',
          content: 'Instale as ferramentas necessárias para desenvolvimento React Native',
          code: 'npm install -g expo-cli'
        },
        {
          id: '3.2',
          title: 'Criando um novo projeto',
          content: 'Use o Expo para criar um novo projeto',
          code: 'npx create-expo-app meu-app-mobile'
        }
      ]
    },
    {
      id: '4',
      title: 'Navegação',
      description: 'Implemente navegação entre telas no app',
      steps: [
        {
          id: '4.1',
          title: 'Instalação do React Navigation',
          content: 'Adicione a biblioteca de navegação',
          code: 'npm install @react-navigation/native'
        },
        {
          id: '4.2',
          title: 'Criando Stack Navigator',
          content: 'Configuração básica de navegação em pilha',
          code: 'const Stack = createNativeStackNavigator();'
        }
      ]
    },
    {
      id: '5',
      title: 'Estilização',
      description: 'Aprenda a estilar componentes mobile',
      steps: [
        {
          id: '5.1',
          title: 'StyleSheet API',
          content: 'Criando estilos com StyleSheet',
          code: 'const styles = StyleSheet.create({\n  container: {\n    flex: 1\n  }\n});'
        },
        {
          id: '5.2',
          title: 'Flexbox Layout',
          content: 'Organizando elementos com Flexbox',
          code: 'container: {\n  flex: 1,\n  flexDirection: \'row\'\n}'
        }
      ]
    },
    {
      id: '6',
      title: 'Formulários',
      description: 'Trabalhe com entrada de dados do usuário',
      steps: [
        {
          id: '6.1',
          title: 'Componente TextInput',
          content: 'Capturando entrada de texto',
          code: '<TextInput\n  onChangeText={setText}\n  value={text}\n/>'
        },
        {
          id: '6.2',
          title: 'Envio de formulário',
          content: 'Lidando com submissão de dados',
          code: '<Button\n  title="Enviar"\n  onPress={handleSubmit}\n/>'
        }
      ]
    },
    {
      id: '7',
      title: 'Recursos do Dispositivo',
      description: 'Acesse recursos nativos do dispositivo',
      steps: [
        {
          id: '7.1',
          title: 'Câmera',
          content: 'Tire fotos usando expo-camera',
          code: 'import { Camera } from \'expo-camera\';'
        },
        {
          id: '7.2',
          title: 'Geolocalização',
          content: 'Obtenha a localização do dispositivo',
          code: 'import * as Location from \'expo-location\';'
        }
      ]
    }
  ]
};