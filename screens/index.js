import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Agrega esta importación
import BtnRegion from '../component/btnregion';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const navigation = useNavigation(); // Obtén la función de navegación


  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTermLowerCase}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        console.log("Se encontró el Pokémon");

        // Obtén los dos primeros movimientos del Pokémon
        const moves = data.moves.slice(0, 2).map((move) => move.move.name);

        navigation.navigate('Details', {
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((type) => type.type.name),
          description: 'Descripción del Pokémon',
          moves: moves, // Pasa solo los dos primeros movimientos
        });
      })
      .catch((error) => {
        console.error(error);
        setPokemonData(null);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../img/icono.png')} style={styles.image} />
      <Text style={styles.title}>Pokedex</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar Pokémon"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>
      <BtnRegion />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D60303',
  },
  searchButton: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  searchBar: {
    backgroundColor: '#ffffff',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
});

export default Index;