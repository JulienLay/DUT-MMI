import { StyleSheet, View, Button, Image, TextInput, Text } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Accueil(props) {

    const [cri, setCri] = useState("");

    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log(cri);

        if (cri !== "") {
            setCri("");
            props.navigation.navigate('Liste', { cri: cri });
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Bienvenue sur TheMovieDB !</Text>

            <TextInput
                style={styles.input}
                placeholder="Tapez un nom de film..."
                onChangeText={setCri}
            />
            <Button
                title={"Rechercher un film"}
                color={"green"}
                onPress={() => {
                    handleSubmit();
                }} />

            <Image source={require("../assets/themoviedb.png")}></Image>

            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 75,
        borderRadius: 100,
        width: Dimensions.get('window').width - 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderBottomWidth : 10
    },
    text : {
        fontSize : 50
    }
});