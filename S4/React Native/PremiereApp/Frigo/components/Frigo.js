import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Button } from 'react-native';
import Produit from '../Produit';
import FrigoForm from './FrigoForm';

export default function App() {
    const [frigo, setFrigo] = useState(
        [
            new Produit("Carottes", 3),
            new Produit("Steack hache", 2)
        ]
    )

    const handlerProduit = (produit) => {
        let f = [...frigo];
        let p = f.find((v) => {
            return v.nom === produit.nom;
        });
        if (p) {
            p.qte = Number(p.qte) + Number(produit.qte);
        } else {
            f.push(produit);
        }
        setFrigo(f);
        console.log(f)
    };

    const handlerDelete = (produit) => {
        let f = [...frigo.filter((p) => p !== produit)];
        setFrigo(f);
    };

    const handlerPlusUn = (index) => {
        let f = [...frigo];
        f[index].qte++;
        setFrigo(f);
    };

    const handlerMoinsUn = (produit, index) => {
        let f = [...frigo];
        if (f[index].qte >= 1) {
            f[index].qte--;
        }
        if (f[index].qte < 1) {
            handlerDelete(produit);
        } else {
            setFrigo(f);
        }
    };

    return (
        <View style={styles.container}>

            <Text>Contenu de mon frigo</Text>
            <StatusBar style="auto" />

            <FrigoForm handlerP={handlerProduit}></FrigoForm>

            <FlatList
                data={frigo}
                renderItem={({ item, index }) =>
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.nom} ({item.qte})</Text>
                        <Button
                            title="🗑️"
                            onPress={() => {
                                handlerDelete(item);
                            }}
                        />
                        <Button
                            title="➕"
                            onPress={() => {
                                handlerPlusUn(index);
                            }}
                        />
                        <Button title="➖"
                            onPress={() => {
                                handlerMoinsUn(item, index);
                            }} 
                        />
                    </View>
                }
                keyExtractor={item => item.nom}
            ></FlatList>


        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        flexDirection: "row",
        backgroundColor: '#fff',
    },
});
