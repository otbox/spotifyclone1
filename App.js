import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ListMusic from './components/ListMusic';
import BounceButton from './components/BounceButton';

export default function App() {

  const [music] = useState([
    {id: 1, image: require('./assets/icon.png') , text: "Black Sabath" , autor: 1},      
    {id: 2, image: require('./assets/icon.png') , text: "Black Sabath" , autor: 0},    
    {id: 3, image: require('./assets/icon.png') , text: "Black Sabath" , autor: 0},    
    {id: 4, image: require('./assets/icon.png') , text: "Black Sabath" , autor: 0},  
    {id: 5, image: require('./assets/icon.png') , text: "Black Sabath" , autor: 0},  
    {id: 6, image: require('./assets/icon.png') , text: "Black Sabath" , autor: 0},  
    {id: 7, image: require('./assets/icon.png') , text: "Black Sabath" , autor: 0},  

  ])

  const [fontsLoaded] = useFonts({
    GothamBold: require('./assets/fonts/Spotify-Font/Gotham-Bold.otf')
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
        <Text style = {styles.text1}>Por onde começar:</Text>
        
        <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
      </View>
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
    bottom: 20,
    position: "absolute",
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
    fontSize: 15,
    color: "white",
  }
})