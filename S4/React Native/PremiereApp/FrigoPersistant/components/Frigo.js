import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Button } from 'react-native';
import Produit from '../Produit';
import FrigoForm from './FrigoForm';

export default function App() {
    const [frigo, setFrigo] = useState([])

    useEffect(() => {
        getFrigo();
      }, []);

    const handlerProduit = (produit) => {
        postFrigo(produit);
    };

    const handlerDelete = (produit) => {
        deleteFrigo(produit.id)
    };

    const handlerPlusUn = (produit) => {
        produit.qte++;
        putFrigo(produit);
      };
    
      const handlerMoinsUn = (produit) => {
        produit.qte--;
        if (produit.qte < 1) {
          deleteFrigo(produit.id);
        } else {
          putFrigo(produit);
        }
      };

    // GET les produits
    const getFrigo = () => {
        const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
        let fetchOptions = { method: "GET" }; // les options de l'API fetch
        // executer la req AJAX
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // dataJSON = les données renvoyées
                console.log(dataJSON); // ici le traitement des données …

                // pour affichage dans le navigateur
                const tabProduit = dataJSON.map((p) => new Produit(p.id, p.nom, p.qte));
                setFrigo(tabProduit);
            })
            .catch((error) => {
                // gestion des erreurs
                console.log(error);
            });
    };

    // DELETE
    const deleteFrigo = (id) => {
        const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
        let fetchOptions = { method: "DELETE" }; // les options de l'API fetch
        // executer la req AJAX
        fetch(url + "/" + id, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                getFrigo();
            })
            .catch((error) => console.log(error));
    };

    // POST
    const postFrigo = (produit) => {
        const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
        let fetchOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produit)
        }; // les options de l'API fetch
        // executer la req AJAX
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // dataJSON = les données renvoyées
                console.log(dataJSON); // ici le traitement des données …

                // pour affichage dans le navigateur
                getFrigo();
            })
            .catch((error) => {
                // gestion des erreurs
                console.log(error);
            });
    };

    // PUT
    const putFrigo = (produit) => {
        const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
        let fetchOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produit)
        }; // les options de l'API fetch
        // executer la req AJAX
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                // dataJSON = les données renvoyées
                console.log(dataJSON); // ici le traitement des données …

                // pour affichage dans le navigateur
                getFrigo();
            })
            .catch((error) => {
                // gestion des erreurs
                console.log(error);
            });
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
                                handlerPlusUn(item);
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
