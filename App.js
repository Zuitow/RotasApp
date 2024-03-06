import { StyleSheet, Text, View } from 'react-native';

// Pacotes  Stack Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Criando uma instância do STACK NAVIGATOR,
// Isso nos permite utilizar comandos para definir a navegação da aplicação.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}

function Home() {
  return (

<View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
