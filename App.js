import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ListMusic from './components/ListMusic';
import ReleseContainer from './components/release';
import PlaylistView from './components/PlaylistView';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {

  const [music] = useState([
    {id: 1, image: require('./assets/images/BlackSabath.jpeg') ,text: "Black Sabath", autor: 1},      
    {id: 2, image: require('./assets/images/oficinag3.jpg') ,text: "Oficina G3", autor: 0},    
    {id: 3, image: require('./assets/images/blue.jpg') ,text: "Eiffel 65 - Blue", autor: 0},    
    {id: 4, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},  
    {id: 5, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},  
    {id: 6, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},   

  ])

  const [favorites] = useState([
    {id: 1, image: require('./assets/images/curtidas.jpeg') ,text: "Músicas Curtidas"},
    {id: 2, image: require('./assets/images/semana.jpeg') ,text: "Descobertas da Semana"},
    {id: 3, image: require('./assets/images/curtidas.jpeg') ,text: "Músicas Curtidas"},
    {id: 4, image: require('./assets/images/curtidas.jpeg') ,text: "Músicas Curtidas"},
    {id: 5, image: require('./assets/images/curtidas.jpeg') ,text: "Músicas Curtidas"},
    {id: 6, image: require('./assets/images/curtidas.jpeg') ,text: "Músicas Curtidas"},
  ])

  const [fontsLoaded] = useFonts({
    GothamBold: require('./assets/fonts/Spotify-Font/Gotham-Bold.otf'),
    GothamBook: require('./assets/fonts/Spotify-Font/GothamBook.ttf')
  })
  if (!fontsLoaded) {
    return null
  }
 
  return (
      <View style={[styles.container,{paddingHorizontal:0}]}>
      <ScrollView style={styles.container}>
        <View style = {styles.title}>
          <Text style = {styles.text1}>Bom dia</Text>
        </View>
        
        <PlaylistView data={favorites} styleText={stylesView.text3}/>
        <ReleseContainer stylesText={stylesView} />
        <View style = {{marginHorizontal: 10}}>
          <Text style = {styles.text1}>Tocados recentemente</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        <View style = {{marginHorizontal: 10}}>
          <Text style = {styles.text1}>teste</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        <View style = {{marginHorizontal: 10}}>
          <Text style = {styles.text1}>teste</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        <View style = {{marginHorizontal: 10, marginBottom: 100}}>
          <Text style = {styles.text1}>teste</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        
        <StatusBar style= "auto" backgroundColor='#121212' />     
      </ScrollView>

      <LinearGradient style={styles.navigation} colors={['transparent','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.8)','rgba(0,0,0,0.85)','rgba(0,0,0,0.9)']}>
        <View></View>
      </LinearGradient>
    </View>
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
    height: 50,
    width: "100%",
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
    flexWrap: 'wrap',
  },
  text2: {
    fontFamily: "GothamBook",
    fontSize: 12,
    color: "#909090",
  },
  text3: {
    fontFamily: "GothamBold",
    fontSize: 14,
    color: "white",
    flexWrap: 'wrap',
    flex: 1,
    verticalAlign: 'middle',
    marginLeft: 10,
  },
})

