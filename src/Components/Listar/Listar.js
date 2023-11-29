import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      if (!name) {
        Alert.alert('Por favor, digite um nome.');
        return;
      }

      setLoading(true);

      const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);

      if (response.data.count === 0) {
        Alert.alert('Nenhum resultado encontrado para o nome inserido.');
        setData(null);
      } else {
        const character = response.data.results[0];
        setData(character);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      Alert.alert('Ocorreu um erro ao buscar os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquisa SWAPI</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button title="Buscar" onPress={fetchData} />

      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <View style={styles.characterContainer}>
          {data ? (
            <View>
              <Text style={styles.label}>Nome:</Text>
              <Text>{data.name}</Text>

              <Text style={styles.label}>Altura:</Text>
              <Text>{data.height} cm</Text>

              <Text style={styles.label}>Peso:</Text>
              <Text>{data.mass} kg</Text>

              <Text style={styles.label}>Cor dos Olhos:</Text>
              <Text>{data.eye_color}</Text>

              <Text style={styles.label}>Gênero:</Text>
              <Text>{data.gender}</Text>
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 8,
  },
  characterContainer: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default UserList;
