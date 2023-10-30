import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const navigation = useNavigation();
    const navigateToDetails = async () => {
        navigation.navigate('Inicio');
    };
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigateToDetails()}>
            <Image
                source={require('../img/icono.png')}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#D60303',
    },
    image: {
        width: '70%', 
        height: '70%', 
        resizeMode: 'contain',
    },
});

export default Main;