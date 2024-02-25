import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Icon from '@expo/vector-icons/Feather';
import { useState } from 'react';
import DashedLine from 'react-native-dashed-line';

type TaskProps = {
  title: string;
  onChangeValue: () => void;
  onDelete: () => void;
};

export const Task = ({ title, onChangeValue, onDelete }: TaskProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    onChangeValue();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={[styles.checkbox, isChecked && styles.checkboxChecked]}
      >
        {isChecked ? <Icon name="check" size={16} color="#fff" /> : <></>}
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, isChecked && styles.titleChecked]}>
          {title}
        </Text>
      </View>
      <Icon name="trash-2" size={20} color="#808080" onPress={onDelete} />
    </View>
  );
};
