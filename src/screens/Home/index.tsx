import {
  Alert,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { styles } from './styles';
import { useState } from 'react';

import { TaskType } from '../../components/TaskType';
import { EmptyList } from '../../components/EmptyList';
import { Task } from '../../components/Task';

export const Home = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksConcluded, setTasksConcluded] = useState<string[]>([]);

  const handleAddTask = (taskAdded: string) => {
    if (tasks.includes(taskAdded)) {
      console.log('aqui');
      return Alert.alert(
        'Tarefa já adicionada',
        'Esta tarefa já foi adicionada a sua lista, não é permitido adicionar tarefas repetidas!'
      );
    }

    setTasks((prevState) => [...prevState, task]);
    setTask('');
  };

  const handleConcluded = (taskConcluded: string) => {
    if (tasksConcluded.includes(taskConcluded)) {
      setTasksConcluded((prevState) =>
        prevState.filter((task) => task !== taskConcluded)
      );
    } else {
      setTasksConcluded((prevState) => [...prevState, taskConcluded]);
    }
  };

  const handleDeleteTask = (taskDeleted: string) => {
    Alert.alert(
      'Remover',
      `Você deseja realmente remover a tarefa, ${taskDeleted}?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setTasks((prevState) =>
              prevState.filter((task) => task !== taskDeleted)
            );
          },
          style: 'destructive',
        },
        { text: 'Não', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Logo.png')}
          resizeMode="cover"
        />
      </View>

      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={task}
            onChangeText={setTask}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddTask(task)}
          >
            <Icon name="plus-circle" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.tasks}>
          <TaskType title="Criadas" color="blue" count={tasks.length} />
          <TaskType
            title="Concluídas"
            color="purple"
            count={tasksConcluded.length}
          />
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              title={item}
              onChangeValue={() => {
                handleConcluded(item);
              }}
              onDelete={() => handleDeleteTask(item)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList
              title="Você ainda não tem tarefas cadastradas"
              subtitle="Crie tarefas e organize seus itens a fazer"
            />
          )}
        />
      </View>
    </View>
  );
};
