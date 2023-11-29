
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
// import axios from 'axios';

// function LoginForm() {
//   const navigation = useNavigation(); // Obtenha o objeto de navegação

//   const [errorMessage, setErrorMessage] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleFormSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/login', {
//         email,
//         password,
//       });

//       const data = response.data;

//       setErrorMessage(data.mensagem);

//       if (!data.erro) {
//         // Navegue para a próxima tela ou realize outras ações necessárias
//         setErrorMessage(''); // Limpa a mensagem de erro
//         navigation.navigate('Listar'); // Substitua 'NomeDaProximaTela' pelo nome da sua próxima tela
//       }
//     } catch (error) {
//       console.error('Ocorreu um erro:', error);
//       setErrorMessage('Erro na requisição. Por favor, tente novamente mais tarde.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Entrar</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="E-mail"
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry={true}
//       />
//       <Button title="Login" onPress={handleFormSubmit} />
//       <Text style={styles.errorMessage}>{errorMessage}</Text>
//       <Text style={styles.signupText} onPress={() => navigation.navigate('Cadastro')}>
//         Não tem uma conta? Cadastre-se
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingLeft: 8,
//   },
//   errorMessage: {
//     color: 'red',
//     marginBottom: 16,
//   },
//   signupText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default LoginForm;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function LoginForm() {
  const navigation = useNavigation();

  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password,
      });

      const data = response.data;

      setErrorMessage(data.mensagem);

      if (!data.erro) {
        setErrorMessage('');
        navigation.navigate('Listar');
      }
    } catch (error) {
      console.error('Ocorreu um erro:', error);
      setErrorMessage('Erro na requisição. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#3498db"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#3498db"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.signupText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3498db',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 8,
    color: '#3498db',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginTop: 16,
    marginBottom: 8,
  },
  signupText: {
    color: '#3498db',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginForm;
