import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, View, TextInput, Button, Dimensions } from 'react-native';
import Produit from '../Produit';

export default function FrigoForm(props) {
    const [nom, setNom] = useState("");
    const [qte, setQte] = useState(null);

    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log(nom);

        if (nom !== "") {
            let produit = new Produit(nom, qte);
            props.handlerP(produit);
            setNom("");
            setQte("");
        }
    };

   

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                value={nom}
                placeholder="un texte"
                onChangeText={setNom}
            />
            <TextInput
                style={styles.input}
                value={qte}
                placeholder="un nombre"
                keyboardType="numeric"
                onChangeText={setQte}
            />

            <Button
                title="Valider"
                color="#7f00ff"
                onPress={() => {
                    handleSubmit();
                }}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height
    }
});
