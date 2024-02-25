import { SafeAreaView, StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
