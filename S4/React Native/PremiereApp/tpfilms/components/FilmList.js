import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Image, Text, TouchableOpacity } from 'react-native';


export default function FilmList(props) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        if (props.cri !== "") getFilm(props.cri);
    }, [props.cri]);

    const getFilm = (critere) => {
        const apiKey = "3665ec2ac101e47e4e29ad12fc9f17e1";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&page=1&query=${critere}`; // l’url de la ressource
        let fetchOptions = { method: "GET" }; // les options de l'API fetch
        // executer la req AJAX
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // dataJSON = les données renvoyées
                // console.log(dataJSON.results); // ici le traitement des données …
                // pour affichage dans le navigateur
                setFilms(dataJSON.results);
                // console.log(this.props.ville);
            })
            .catch((error) => {
                // gestion des erreurs
                console.log(error);
            });
    };

    if (films.length != 0) {
        return (
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity
                            onPress={() => props.monProps.navigate("Detail", { id: item.id })}>
                            <View style={styles.item}>
                                <Image
                                    source={{ url: "https://image.tmdb.org/t/p/w500/" + item.poster_path }}
                                    style={styles.image}></Image>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
                }
            />
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>Aucun film trouvé !</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
        borderRadius: 2,
        height: 140,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: 'gray'
    },
    title: {
        fontSize: 20,
    },
});