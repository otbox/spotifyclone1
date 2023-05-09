import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ListMusic from './components/ListMusic';
import ReleseContainer from './components/release';
import PlaylistView from './components/PlaylistView';



export default function App() {

  const [music] = useState([
    {id: 1, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 1},      
    {id: 2, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},    
    {id: 3, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},    
    {id: 4, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},  
    {id: 5, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},  
    {id: 6, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},   

  ])

  const [fontsLoaded] = useFonts({
    GothamBold: require('./assets/fonts/Spotify-Font/Gotham-Bold.otf'),
    GothamBook: require('./assets/fonts/Spotify-Font/GothamBook.ttf')
  })
  if (!fontsLoaded) {
    return null
  }
 
  return (
    <ScrollView style={styles.container}>
        <View style = {styles.title}>
          <Text style = {styles.text1}>Bom dia</Text>
        </View>
        <View>
        <Text style = {styles.text1}>teste</Text>
        <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        <PlaylistView data={music} styleText={stylesView.text1}/>
        <ReleseContainer stylesText={stylesView} />
        <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
    paddingHorizontal: 10,
    display: 'flex',
    height:"100%",
  },
  title: {
    flexDirection: "row", 
    height: "auto",
    marginBottom: 20,
  },
  text1: {
    fontFamily: "GothamBold",
    fontSize: 25,
    color: "white",
  },
  navigation: {
    bottom: 0,
    position: "absolute",
    flex: 1,
    justifyContent: 'center',
  }
});

const stylesView = StyleSheet.create({
  container:{
    alignItems: "center",
    marginRight: 20,
  },
  image: {
    height: 120,
    width: 120,
  },
  text1: {
    fontFamily: "GothamBold",
    fontSize: 14,
    color: "white",
  },
  text2: {
    fontFamily: "GothamBook",
    fontSize: 12,
    color: "#909090",
  }
})

