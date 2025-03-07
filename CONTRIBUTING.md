# Guia de Contribuição

Obrigado por considerar contribuir com o React Native Tutorial App! Este documento fornece diretrizes e padrões para contribuições.

## 📝 Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Posso Contribuir?](#como-posso-contribuir)
3. [Padrões de Código](#padrões-de-código)
4. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
5. [Commits e Pull Requests](#commits-e-pull-requests)

## 🤝 Código de Conduta

Este projeto segue um Código de Conduta que todos os contribuidores devem respeitar. Por favor, leia [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) antes de contribuir.

## 💡 Como Posso Contribuir?

### 🐛 Reportando Bugs

- Use o template de issue para bugs
- Inclua passos detalhados para reproduzir o problema
- Forneça informações sobre seu ambiente (versão do React Native, OS, etc.)
- Se possível, adicione screenshots ou vídeos

### 🚀 Sugerindo Melhorias

- Use o template de issue para features
- Descreva o comportamento atual e o esperado
- Explique por que essa melhoria seria útil
- Inclua mockups ou exemplos se possível

### 💻 Desenvolvimento

1. Fork o repositório
2. Clone seu fork localmente
3. Crie uma branch para sua feature
4. Desenvolva e teste suas mudanças
5. Commit suas alterações
6. Push para seu fork
7. Abra um Pull Request

## 📐 Padrões de Código

### Estilo de Código

- Use ESLint e Prettier com as configurações do projeto
- Siga as convenções de nomenclatura:
  - PascalCase para componentes
  - camelCase para funções e variáveis
  - UPPER_SNAKE_CASE para constantes

### Estrutura de Componentes

```javascript
// imports
import React from 'react';
import { View } from 'react-native';

// tipos (se usando TypeScript)
interface Props {
  // ...
}

// componente
const MeuComponente: React.FC<Props> = ({ prop1, prop2 }) => {
  // hooks
  const [estado, setEstado] = useState();

  // efeitos
  useEffect(() => {
    // ...
  }, []);

  // handlers
  const handleEvent = () => {
    // ...
  };

  // render
  return (
    <View>
      {/* ... */}
    </View>
  );
};

// estilos
const styles = StyleSheet.create({
  // ...
});

// export
export default MeuComponente;
```

### Documentação

- Adicione JSDoc para componentes e funções importantes
- Mantenha o README atualizado
- Documente mudanças breaking

## 🔄 Processo de Desenvolvimento

1. **Planejamento**
   - Discuta a implementação na issue
   - Defina o escopo da mudança
   - Identifique possíveis impactos

2. **Desenvolvimento**
   - Escreva testes primeiro (TDD quando possível)
   - Mantenha commits pequenos e focados
   - Siga os padrões de código

3. **Revisão**
   - Auto-revise seu código
   - Responda aos comentários da revisão
   - Faça as alterações necessárias

4. **Testes**
   - Execute todos os testes
   - Teste em diferentes dispositivos
   - Verifique a performance

## 📝 Commits e Pull Requests

### Mensagens de Commit

Use o padrão convencional:
```
tipo(escopo): mensagem curta

Descrição mais detalhada se necessário
```

Tipos:
- `feat`: nova feature
- `fix`: correção de bug
- `docs`: alterações na documentação
- `style`: formatação, ponto e vírgula, etc
- `refactor`: refatoração de código
- `test`: adição/modificação de testes
- `chore`: alterações em build, deps, etc

### Pull Requests

- Use o template fornecido
- Vincule à issue relacionada
- Inclua screenshots/vídeos para mudanças visuais
- Mantenha o PR focado em uma única mudança
- Responda aos comentários prontamente

## ❓ Dúvidas?

Se você tiver alguma dúvida, sinta-se à vontade para:
- Abrir uma issue
- Enviar um email para support@example.com
- Participar do nosso canal no Discord 