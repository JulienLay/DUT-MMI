import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import MapView, { Marker, Overlay } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
// import MapView from "react-native-map-clustering";

import WifiIcon from './assets/wifi.png'
import WCIcon from './assets/toilets.png'
import SnackIcon from './assets/snack_bar.png'
import BlueIcon from './assets/blue-pushpin.png'

const boundsIUT = [[43.620220, 2.260360], [43.622050, 2.262510]]

const marqueurs = [
  { // borne WIFI MMI TD rouge
    position: { latitude: 43.620680, longitude: 2.261520 },
    icon: WifiIcon,
    label: "Borne WIFI"
  },
  { // bornes WIFI MMI central
    position: { latitude: 43.620460, longitude: 2.261850 },
    icon: WifiIcon,
    label: "Borne WIFI"
  },
  { // toilettes MMI TD rouge
    position: { latitude: 43.620780, longitude: 2.261480 },
    icon: WCIcon,
  },
  { // toilettes MMI central
    position: { latitude: 43.620580, longitude: 2.261680 },
    icon: WCIcon,
  },
  { // toilettes MMI fond couloir
    position: { latitude: 43.620400, longitude: 2.261940 },
    icon: WCIcon,
  },
  { // salle etudiants MMI
    position: { latitude: 43.620360, longitude: 2.262100 },
    icon: SnackIcon,
  },
  { // grand amphi
    position: { latitude: 43.620840, longitude: 2.261310 },
    label: "Grand amphi",
    icon: BlueIcon,
  },
  { // petit amphi
    position: { latitude: 43.620740, longitude: 2.261310 },
    label: "Petit amphi",
    icon: BlueIcon,
  },
]

export default class App extends React.Component {
  state = {
    region: {
      latitude: 43.621350,
      longitude: 2.261258,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    position: {
      latitude: 43.621350,
      longitude: 2.261258,
    },
    coordUser: {
      latitude: 0,
      longitude: 0
    },
    errorMessage: ''

  }

  _getLocationAsync() {
    Location.requestForegroundPermissionsAsync()
      .then(response => {
        if (response.status !== 'granted') {
          this.setState({ errorMessage: 'Permission to access location was denied' });
        }
        else {
          Location.watchPositionAsync({ accuracy: Location.Accuracy.High }, (location) => {
            console.log(location);
            this.setState({ coordUser: { latitude: location.coords.latitude, longitude: location.coords.longitude } })
          })
        }
      })
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          maxZoomLevel={19}
          provider="google"
          style={styles.mapStyle}
          region={this.state.coordUser}>
          <Marker coordinate={this.state.coordUser} title="Vous êtes ici!" ></Marker>

          {marqueurs.map((m, index) => {
            return (
              <Marker
                key={index}
                coordinate={m.position}
                title={m.label}>
                <Text>{m.label}</Text>
                <Image source={m.icon} style={styles.marker}></Image>
              </Marker>
            )
          })}

          <Overlay image={require('./assets/IUTCastresGrisClair.png')} bounds={boundsIUT} ></Overlay>
        </MapView>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1
  },
  marker: {
    width: 40,
    height: 40
  }
});
