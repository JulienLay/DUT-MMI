import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';
import FilmDetail from "../components/FilmDetail";

export default function Detail(props) {
    return (
        <View style={styles.container}>
            <FilmDetail idFilm={props.route.params.id}></FilmDetail>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});