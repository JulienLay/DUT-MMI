import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';
import FilmList from './FilmList';

export default function FilmDetail(props) {

    const [detail, setDetail] = useState("")

    useEffect(() => {
        if (props.cri !== "") getFilmDetail();
    }, []);

    const getFilmDetail = () => {
        const apiKey = "3665ec2ac101e47e4e29ad12fc9f17e1";
        const url = `https://api.themoviedb.org/3/movie/${props.idFilm}?api_key=${apiKey}&language=fr`; // l’url de la ressource
        let fetchOptions = { method: "GET" }; // les options de l'API fetch
        // executer la req AJAX
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // dataJSON = les données renvoyées
                console.log(dataJSON);
                // pour affichage dans le navigateur
                setDetail(dataJSON);
            })
            .catch((error) => {
                // gestion des erreurs
                console.log(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>{detail.title}</Text>

            <Image
                source={{ url: "https://image.tmdb.org/t/p/w500" + detail.poster_path }}
                style={styles.image}>
            </Image>

            <Text style={styles.type}>Résumé</Text>
            <Text style={styles.resume}>{detail.overview}</Text>

            <Text style={styles.type}>Date de sortie</Text>
            <Text>{detail.release_date}</Text>

            <Text style={styles.type}>Note</Text>
            <Text>{detail.vote_average}</Text>

            <Text style={styles.type}>Durée (en min)</Text>
            <Text>{detail.runtime}</Text>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: 'gray'
    },
    titre: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10,
        marginRight: 10
    },
    type: {
        fontSize: 20,
        margin: 20
    },
    resume: {
        marginLeft: 10,
        marginRight: 10
    }
});