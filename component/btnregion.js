import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
const BtnRegion = () => {
    const navigation = useNavigation(); // Obtiene la instancia de navegación

    const navigateToKanto = () => {
        navigation.navigate('Kanto'); 
    };
    const navigateToJohto = () => {
        navigation.navigate('Johto'); 
    };
    const navigateToHoenn = () => {
        navigation.navigate('Hoenn'); 
    };
    const navigateToSinnoh = () => {
        navigation.navigate('Sinnoh'); 
    };
    const navigateToUnova = () => {
        navigation.navigate('Unova'); 
    };
    const navigateToKalos = () => {
        navigation.navigate('Kalos');
    };
    const navigateToAlola = () => {
        navigation.navigate('Alola'); 
    };
    const navigateToGalar = () => {
        navigation.navigate('Galar');
    };
    return (
        <View style={styles.container}>
        <View style={styles.column}>
            <TouchableOpacity style={styles.button} onPress={navigateToKanto}>
                <Text>Kanto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToJohto}>
                <Text>Johto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToHoenn}>
                <Text>Hoenn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToSinnoh}>
                <Text>Sinnoh</Text>
            </TouchableOpacity>
            {/* Agregar otros botones de la misma manera */}
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.button} onPress={navigateToUnova}>
                <Text>Unova</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToKalos}>
                <Text>Kalos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToAlola}>
                <Text>Alola</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToGalar}>
                <Text>Galar</Text>
            </TouchableOpacity>
            {/* Agregar otros botones de la misma manera */}
        </View>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 18,
    marginVertical: 50,
},
column: {
    flex: 1,
    margin: 6,
},
button: {
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10, 
    alignItems: 'center',
},
});

export default BtnRegion;