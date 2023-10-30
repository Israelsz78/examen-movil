import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Unova = () => {
    const navigation = useNavigation(); // Obtiene la instancia de navegación
    const [pokemonTypes, setPokemonTypes] = useState({});
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=155&offset=494');
                if (response.status === 200) {
                    const pokemonDetails = await Promise.all(
                        response.data.results.map(async (pokemon) => {
                            const pokemonResponse = await axios.get(pokemon.url);
                            return pokemonResponse.data;
                        })
                    );
                    const types = {};
                    pokemonDetails.forEach((pokemon) => {
                        types[pokemon.name] = pokemon.types.map((typeData) => typeData.type.name);
                    });
                    setPokemonList(pokemonDetails);
                    setPokemonTypes(types);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error al obtener la lista de Pokémon', error);
            }
        };

        fetchPokemonList();
    }, []);

    const navigateToDetails = async (item) => {
        // Obtener el ID del Pokémon
        const pokemonId = item.id;

        // Obtener la descripción del Pokémon
        const descriptionResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        const description = descriptionResponse.data.flavor_text_entries[0].flavor_text;

        // Obtener los dos principales ataques del Pokémon
        const movesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const moves = movesResponse.data.moves.slice(0, 2).map((move) => move.move.name);

        navigation.navigate('Details', {
            name: item.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
            types: pokemonTypes[item.name],
            description: description,
            moves: moves,
        });
    };

    const renderItem = ({ item }) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`;

        return (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }} 
                onPress={() => navigateToDetails(item)}>
                <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
                <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                <Text style={{ marginLeft: 10 }}>
                    {pokemonTypes[item.name] && pokemonTypes[item.name].join(', ')}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            {loading ? (
                <Text>Cargando datos de los Pokémon...</Text>
            ) : (
                <FlatList
                    data={pokemonList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                />
            )}
        </View>
    );
};

export default Unova;