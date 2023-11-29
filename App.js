
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/Components/loguin/LoginForm';
import Register from './src/Components/Cadastro/Cadastro';
import UserList from './src/Components/Listar/Listar';

// Crie o navegador
const Stack = createStackNavigator();

// Crie o componente principal que envolve a navegação
function App() {
  return (
    <NavigationContainer>
      {/* Configure as rotas dentro do Stack.Navigator */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Cadastro" component={Register} />
        <Stack.Screen name="Listar" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
