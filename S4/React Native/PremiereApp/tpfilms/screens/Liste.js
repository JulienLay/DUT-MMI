import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import FilmList from "../components/FilmList";

export default function Liste(props) {

    return (
        <View style={styles.container}>
            <FilmList cri={props.route.params.cri} monProps={props.navigation}></FilmList>
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
  });