export const exercises = {
  react: [
    {
      id: 'react-ex1',
      title: 'Componente de Lista de Tarefas',
      difficulty: 'Iniciante',
      description: 'Crie um componente de lista de tarefas com funcionalidade para adicionar, remover e marcar tarefas como concluídas.',
      requirements: [
        'Utilize o hook useState para gerenciar o estado das tarefas',
        'Implemente a adição de novas tarefas através de um formulário',
        'Adicione a funcionalidade de marcar tarefas como concluídas',
        'Implemente a remoção de tarefas da lista'
      ],
      initialCode: `import React, { useState } from 'react';

function TodoList() {
  // Implemente seu código aqui
  
  return (
    <div>
      {/* Seu componente aqui */}
    </div>
  );
}

export default TodoList;`,
      solution: `import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`
    },
    {
      id: 'react-ex2',
      title: 'Contador com useReducer',
      difficulty: 'Intermediário',
      description: 'Implemente um contador utilizando o hook useReducer para gerenciar o estado.',
      requirements: [
        'Utilize o hook useReducer para gerenciar o estado do contador',
        'Implemente ações para incrementar, decrementar e resetar o contador',
        'Adicione um limite máximo e mínimo para o contador'
      ],
      initialCode: `import React, { useReducer } from 'react';

// Implemente o reducer e as ações aqui

function Counter() {
  // Configure o useReducer aqui
  
  return (
    <div>
      {/* Seu componente aqui */}
    </div>
  );
}

export default Counter;`,
      solution: `import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count < 10 ? state.count + 1 : state.count };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : state.count };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Ação desconhecida');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <p>Limite: 0-10</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

export default Counter;`
    }
  ],
  reactNative: [
    {
      id: 'react-native-ex1',
      title: 'App de Lista de Compras',
      difficulty: 'Iniciante',
      description: 'Crie um aplicativo de lista de compras com React Native.',
      requirements: [
        'Utilize FlatList para exibir os itens da lista',
        'Implemente a adição de novos itens',
        'Adicione a funcionalidade de remover itens',
        'Estilize a aplicação usando StyleSheet'
      ],
      initialCode: `import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ShoppingList() {
  // Implemente seu código aqui
  
  return (
    <View style={styles.container}>
      {/* Seu componente aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  // Adicione mais estilos aqui
});`,
      solution: `import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: Date.now().toString(), name: newItem }]);
      setNewItem('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => removeItem(item.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Adicionar item"
        />
        <Button title="Adicionar" onPress={addItem} />
      </View>
      
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});`
    },
    {
      id: 'react-native-ex2',
      title: 'App de Previsão do Tempo',
      difficulty: 'Intermediário',
      description: 'Crie um aplicativo de previsão do tempo que exibe informações baseadas na localização.',
      requirements: [
        'Utilize componentes de UI personalizados',
        'Implemente navegação entre telas',
        'Adicione animações para melhorar a experiência do usuário',
        'Utilize ícones para representar diferentes condições climáticas'
      ],
      initialCode: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherApp() {
  // Implemente seu código aqui
  
  return (
    <View style={styles.container}>
      {/* Seu componente aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Adicione mais estilos aqui
});`,
      solution: `import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Simulação de dados de previsão do tempo
const mockWeatherData = {
  location: 'São Paulo',
  current: {
    temp: 28,
    condition: 'Ensolarado',
    humidity: 65,
    wind: 12,
  },
  forecast: [
    { day: 'Seg', temp: 29, condition: 'Ensolarado' },
    { day: 'Ter', temp: 27, condition: 'Parcialmente nublado' },
    { day: 'Qua', temp: 25, condition: 'Chuvoso' },
    { day: 'Qui', temp: 26, condition: 'Nublado' },
    { day: 'Sex', temp: 28, condition: 'Ensolarado' },
  ]
};

// Mapeamento de condições para ícones
const weatherIcons = {
  'Ensolarado': 'sunny',
  'Parcialmente nublado': 'partly-sunny',
  'Nublado': 'cloudy',
  'Chuvoso': 'rainy',
};

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      setWeather(mockWeatherData);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Carregando previsão do tempo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>{weather.location}</Text>
      </View>
      
      <View style={styles.currentWeather}>
        <Ionicons 
          name={weatherIcons[weather.current.condition]} 
          size={80} 
          color="#FFD700" 
        />
        <Text style={styles.temperature}>{weather.current.temp}°C</Text>
        <Text style={styles.condition}>{weather.current.condition}</Text>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Ionicons name="water" size={24} color="#0066cc" />
            <Text style={styles.detailText}>{weather.current.humidity}%</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="speedometer" size={24} color="#0066cc" />
            <Text style={styles.detailText}>{weather.current.wind} km/h</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.forecastTitle}>Previsão para 5 dias</Text>
      <ScrollView horizontal style={styles.forecastContainer}>
        {weather.forecast.map((day, index) => (
          <View key={index} style={styles.forecastDay}>
            <Text style={styles.forecastDayText}>{day.day}</Text>
            <Ionicons 
              name={weatherIcons[day.condition]} 
              size={30} 
              color="#FFD700" 
            />
            <Text style={styles.forecastTemp}>{day.temp}°C</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  header: {
    backgroundColor: '#0066cc',
    paddingVertical: 20,
    alignItems: 'center',
  },
  location: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  currentWeather: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 15,
    elevation: 3,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  condition: {
    fontSize: 20,
    marginBottom: 15,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 5,
    fontSize: 16,
  },
  forecastTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
  forecastContainer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  forecastDay: {
    backgroundColor: '#fff',
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 100,
    elevation: 2,
  },
  forecastDayText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forecastTemp: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});`
    }
  ]
}; 