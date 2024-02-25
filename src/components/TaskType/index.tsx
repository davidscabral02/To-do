import { Text, View } from 'react-native';
import { styles } from './styles';

type TaskTypeProps = {
  title: string;
  count: number;
  color: 'purple' | 'blue';
};

export const TaskType = ({ title, count, color }: TaskTypeProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            color:
              color === 'purple'
                ? '#8284FA'
                : color === 'blue'
                ? '#4EA8DE'
                : '#D9D9D9',
          },
        ]}
      >
        {title}
      </Text>
      <View style={styles.countContainer}>
        <Text style={styles.countValue}>{count}</Text>
      </View>
    </View>
  );
};
