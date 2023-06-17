import React from 'react';
import {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const Map = () => {
  const [MarkerOne, setMarkerOne] = useState([]);
  const [MarkerTwo, setMarkerTwo] = useState([]);
  const [MarkerThree, setMarkerThree] = useState([]);
  const [MarkerFour, setMarkerFour] = useState([]);
  const [MarkerFive, setMarkerFive] = useState([]);
  const [showMarker, setShowMarker] = useState(false);
  const [titleOne, setTitleOne] = useState([]);
  const [titleTwo, setTitleTwo] = useState([]);
  const [titleThree, setTitleThree] = useState([]);
  const [titleFour, setTitleFour] = useState([]);
  const [titleFive, setTitleFive] = useState([]);

  function hotels() {
    setMarkerOne([7.6689480322104515, 36.839001857813265]);
    setTitleOne(['Central Jimma Hotel', '3.9']);
    setMarkerTwo([7.674900621236568, 36.85280895861193]);
    setTitleTwo(['Honeyland Hotel', '3.5']);
    setMarkerThree([7.6676168625934205, 36.84100132936191]);
    setTitleThree(['Dololo Hotel', '3.8']);
    setMarkerFour([7.674854351533886, 36.83744038438395]);
    setTitleFour(['Awetu Grand', '4.1']);
    setMarkerFive([7.677253156899099, 36.833690196046696]);
    setTitleFive(['Degitu Hotel', '3.3']);
    setShowMarker(true);
  }
  function banks() {
    setMarkerOne([7.669093723028773, 36.8330175820304]);
    setTitleOne(['Abysinna Bank', '3.0']);
    setMarkerTwo([7.6733439861455, 36.8340754116508]);
    setTitleTwo(['Commercial Bank ', '4.5']);
    setMarkerThree([7.676287621032415, 36.83318677598065]);
    setTitleThree(['Dashen Bank', '1.0']);
    setMarkerFour([7.668622232674867, 36.83972365323942]);
    setTitleFour(['Geda Bank', '3.0']);
    setMarkerFive([7.673391683866728, 36.854373060901594]);
    setTitleFive(['Commercial Bank', '4.3']);
    setShowMarker(true);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 7.67344,
            longitude: 36.83441,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {showMarker && (
            <>
              <Marker
                draggable
                coordinate={{
                  latitude: MarkerOne[0] ? MarkerOne[0] : '',
                  longitude: MarkerOne[1] ? MarkerOne[1] : '',
                }}
                onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={titleOne[0]}
                description={titleOne[1]}
              />
              <Marker
                draggable
                coordinate={{
                  latitude: MarkerTwo[0] ? MarkerTwo[0] : '',
                  longitude: MarkerTwo[1] ? MarkerTwo[1] : '',
                }}
                onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={titleTwo[0]}
                description={titleTwo[1]}
              />
              <Marker
                draggable
                coordinate={{
                  latitude: MarkerThree[0] ? MarkerThree[0] : '',
                  longitude: MarkerThree[1] ? MarkerThree[1] : '',
                }}
                onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={titleThree[0]}
                description={titleThree[1]}
              />
              <Marker
                draggable
                coordinate={{
                  latitude: MarkerFour[0] ? MarkerFour[0] : '',
                  longitude: MarkerFour[1] ? MarkerFour[1] : '',
                }}
                onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={titleFour[0]}
                description={titleFour[1]}
              />
              <Marker
                draggable
                coordinate={{
                  latitude: MarkerFive[0] ? MarkerFive[0] : '',
                  longitude: MarkerFive[1] ? MarkerFive[1] : '',
                }}
                title={titleFive[0]}
                description={titleFive[1]}
              />
            </>
          )}
        </MapView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={banks}>
          <Text style={styles.text}>Banks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={hotels}>
          <Text style={styles.text}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Restaurants</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bfff',
    width: 72,
    height: 50,
    borderRadius: 23,
    margin: 10,
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});
