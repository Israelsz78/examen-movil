import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Details = () => {
    const route = useRoute();
    const { name, image, types, description, moves } = route.params;

    return (
        <View style={styles.outerContainer}>
            <View style={styles.redRectangle}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}></View>
                    <View style={styles.circlered}></View>
                    <View style={styles.circleyellow}></View>
                    <View style={styles.circlegreen}></View>
                </View>
            </View>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={{ width: '70%', aspectRatio: 1 }} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subtitulos}>Type:</Text>
                <Text style={styles.tipo}>{types && types.join(', ')}</Text>
                <Text style={styles.subtitulos}>Description:</Text>
                <Text style={styles.descripcion}>{description}</Text>
                <Text style={styles.subtitulos}>Attacks:</Text>
                <Text style={styles.ataques}>{moves.join(', ')}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitulos:{
        fontSize:30
    },
    name:{
        marginLeft: 10, fontSize: 50, textAlign: 'center'
    },
    tipo:{
        marginLeft: 10, 
        fontSize: 25
    },
    descripcion:{
        fontSize:15,
    },
    ataques:{
        fontSize:15
    },
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46BCD1',
        borderWidth: 16,
        borderColor: '#DFDFDF',
    },
    redRectangle: {
        height: 100,
        backgroundColor: 'red',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    circle: {
        width: 60, 
        height: 60,
        backgroundColor: '#31BCF7',
        borderRadius: 29,
        borderWidth: 3, 
        borderColor: 'white',
    },
    circlered: {
        width: 20,
        height: 20,
        backgroundColor: '#D60303',
        borderRadius: 29,
        borderWidth: 2,
        borderColor: 'black',
        margin:20
    },
    circleyellow: {
        width: 20,
        height: 20,
        backgroundColor: '#D6C903',
        borderRadius: 29,
        borderWidth: 2,
        borderColor: 'black',
        margin:20,
        marginLeft:4
    },
    circlegreen: {
        width: 20,
        height: 20,
        backgroundColor: '#1DD603',
        borderRadius: 29,
        borderWidth: 2,
        borderColor: 'black',
        margin:20,
        marginLeft:4
    },
    circleContainer:{
        marginTop:18,
        flexDirection: 'row',
        marginLeft: 20,
        
    }
});

export default Details;