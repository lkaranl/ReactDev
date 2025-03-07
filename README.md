# React Native Tutorial App

Um aplicativo educacional desenvolvido em React Native para ajudar desenvolvedores a aprender programação através de tutoriais interativos e exercícios práticos.

## 🚀 Funcionalidades

- 📚 Tutoriais interativos por categoria
- 💻 Exercícios práticos com diferentes níveis de dificuldade
- 🌓 Suporte a tema claro/escuro
- 📱 Interface responsiva e amigável
- ⚡ Transições e animações suaves
- 🔍 Visualização de código com syntax highlighting

## 📋 Pré-requisitos

- Node.js >= 14.0.0
- npm >= 6.0.0 ou yarn >= 1.22.0
- React Native CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas macOS)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/react-native-tutorial-app.git
cd react-native-tutorial-app
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o Metro Bundler:
```bash
npm start
# ou
yarn start
```

4. Execute o aplicativo:
```bash
# Para Android
npm run android
# ou
yarn android

# Para iOS
npm run ios
# ou
yarn ios
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/         # Componentes React reutilizáveis
├── context/           # Contextos React (ex: ThemeContext)
├── data/             # Dados mockados e constantes
├── hooks/            # Custom hooks
├── navigation/       # Configuração de navegação
├── screens/          # Telas do aplicativo
├── styles/          # Estilos globais e temas
└── utils/           # Funções utilitárias
```

## 🎨 Componentes

### Header
- Barra superior do aplicativo
- Navegação entre telas
- Menu de opções
- Toggle de tema

### Footer
- Navegação rápida
- Informações adicionais
- Links úteis

### ExerciseContent
- Visualização detalhada de exercícios
- Código inicial e solução
- Nível de dificuldade
- Requisitos do exercício

### TutorialContent
- Conteúdo do tutorial
- Navegação entre seções
- Exemplos de código
- Recursos relacionados

## 🔄 Contextos

### ThemeContext
- Gerenciamento de tema (claro/escuro)
- Cores do sistema
- Estilos globais

## 🛣️ Navegação

O aplicativo utiliza uma navegação baseada em estados com as seguintes rotas principais:
- Home
- Tutoriais
- Exercícios
- Sobre

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

Para mais detalhes, consulte nosso [Guia de Contribuição](CONTRIBUTING.md).

## 📝 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 📞 Suporte

Para suporte, envie um email para support@example.com ou abra uma issue no GitHub. 