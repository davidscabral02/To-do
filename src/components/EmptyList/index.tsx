import { Text, View } from 'react-native';
import { styles } from './styles';
import Icon from '@expo/vector-icons/Feather';

type EmptyListProps = {
  title: string;
  subtitle: string;
};

export const EmptyList = ({ title, subtitle }: EmptyListProps) => {
  return (
    <View style={styles.container}>
      <Icon name="clipboard" size={64} color="#808080" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
