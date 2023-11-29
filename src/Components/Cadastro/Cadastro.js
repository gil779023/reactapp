// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet,Alert } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// function Register() {
//   const navigation = useNavigation();

//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/cadastrar', userData);
//       console.log(response.data);
//       Alert.alert('Cadastro realizado com sucesso!','Voce esta Cadastrado');

//       // Após o registro bem-sucedido, navegue para a tela de login
//       navigation.navigate('Login');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (name, value) => {
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cadastre-se</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Nome"
//         onChangeText={(text) => handleChange('name', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => handleChange('email', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         secureTextEntry={true}
//         onChangeText={(text) => handleChange('password', text)}
//       />
//       <Button title="Cadastrar" onPress={handleRegister} />
//       <Text style={styles.loginText}>
//         Já sou cadastrado?{' '}
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.linkText}>Faça o Login</Text>
//         </TouchableOpacity>
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
//     color: '#3498db',
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'blue',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingLeft: 8,
//     borderRadius:8,
//   },
//   loginText: {
//     marginTop: 16,
//   },
//   linkText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default Register;



import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function Register() {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/cadastrar', userData);
      console.log(response.data);
      Alert.alert('Cadastro realizado com sucesso!', 'Você está cadastrado');

      // Reset the input fields
      setUserData({
        name: '',
        email: '',
        password: '',
      });

      // Após o registro bem-sucedido, navegue para a tela de login
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Erro no cadastro', 'Houve um erro durante o cadastro. Tente novamente.');
    }
  };

  const handleChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => handleChange('name', text)}
        value={userData.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleChange('email', text)}
        value={userData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => handleChange('password', text)}
        value={userData.password}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
      <Text style={styles.loginText}>
        Já sou cadastrado?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Faça o Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 8,
  },
  loginText: {
    marginTop: 16,
  },
  linkText: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});

export default Register;

