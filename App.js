import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ListMusic from './components/ListMusic';
import ReleseContainer from './components/release';
import PlaylistView from './components/PlaylistView';
import { LinearGradient } from 'expo-linear-gradient';
import BounceButton from './components/BounceButton';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function App() {

  const [HomeButtom, setHomeButton] = useState(false)
  const [SearchButtom, setSearchButton] = useState(true)
  const [LibraryButtom, setLibrayButton] = useState(true)

  const [music] = useState([
    {id: 1, image: require('./assets/images/BlackSabath.jpeg') ,text: "Black Sabath", autor: 1},      
    {id: 2, image: require('./assets/images/oficinag3.jpg') ,text: "Oficina G3", autor: 0},    
    {id: 3, image: require('./assets/images/blue.jpg') ,text: "Eiffel 65 - Blue", autor: 0},    
    {id: 4, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},  
    {id: 5, image: require('./assets/icon.png') ,text: "Black Sabath", autor: 0},  
    {id: 6, image: require('./assets/images/BlackSabath.jpeg') ,text: "Black Sabath", autor: 0},
    {id: 7, image: require('./assets/images/BlackSabath.jpeg') ,text: "Black Sabath", autor: 0}, 
    {id: 8, image: require('./assets/images/BlackSabath.jpeg') ,text: "Black Sabath", autor: 0},    

  ])

  const [favorites] = useState([
    {id: 1, image: require('./assets/images/curtidas.jpeg') ,text: "Músicas Curtidas"},
    {id: 2, image: require('./assets/images/semana.jpeg') ,text: "Descobertas da Semana"},
    {id: 3, image: require('./assets/images/rock.jpeg') ,text: "Sim, Eu Sou do ROCK"},
    {id: 4, image: require('./assets/images/eletronica.jpg') ,text: "Músicas Eletrônicas"},
    {id: 5, image: require('./assets/images/synthwave.jpeg') ,text: "Synthwave"},
    {id: 6, image: require('./assets/images/lo-fi.jpg') ,text: "Lo-Fis"},
  ])

  const [fontsLoaded] = useFonts({
    GothamBold: require('./assets/fonts/Spotify-Font/Gotham-Bold.otf'),
    GothamBook: require('./assets/fonts/Spotify-Font/GothamBook.ttf')
  })
  if (!fontsLoaded) {
    return null
  }
  
  //const Home1 = [{filled: './assets/images/homefilled.png', outlined: './assets/images/home.png'}]

  // const HomeOutlined = require('./assets/images/home.png')
  // const HomeFilled = require('./assets/images/homefilled.png')
   const LibraryOutilined = require('./assets/images/library.png')
   const LibraryFilled = require('./assets/images/libraryfilled.png')
   const SearchFilled = require('./assets/images/searchfilled.png')
   const SearchOutilined = require('./assets/images/search.png')

  const Home = () => {
    HomeButtom === true ? setHomeButton(false) : setHomeButton(true)
  }
  const Search = () => {
    SearchButtom === true ? setSearchButton(false) : setSearchButton(true)
  }
  const Library = () => {
    LibraryButtom === true ? setLibrayButton(false) : setLibrayButton(true)
  }

  const home1 = HomeButtom ? require('./assets/images/home.png') : require('./assets/images/homefilled.png')
  //const home1 = require(HomeButtom ? './assets/images/home.png' : './assets/images/homefilled.png')
  return (
      <View style={[styles.container,{paddingHorizontal:0}]}>
      <ScrollView style={styles.container}>
        <View style = {styles.title}>
          <Text style = {styles.text1}>Bom dia</Text>
          <View style = {{flexDirection:'row', width: 100, justifyContent:'space-between'}}>
            <BounceButton>
            <Ionicons name="notifications-outline" size={24} color="white" />
              </BounceButton>
            <BounceButton>
              <Octicons name="history" size={24} color="white" />
            </BounceButton>
            <BounceButton>
              <Octicons name="gear" size={24} color="white" />
            </BounceButton>
          </View>
        </View>
        
        <PlaylistView data={favorites} styleText={stylesView.text3}/>
        <ReleseContainer stylesText={stylesView} />
        <View style = {{marginVertical: 10}}>
          <Text style = {styles.text1}>Tocados recentemente</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        <View style = {{marginVertical: 10}}>
          <Text style = {styles.text1}>teste</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        <View style = {{marginVertical: 10}}>
          <Text style = {styles.text1}>teste</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        <View style = {{marginVertical: 10, marginBottom: 100}}>
          <Text style = {styles.text1}>teste</Text>
          <ListMusic dataa = {music} styleButton = {stylesView.container} styleImage = {stylesView.image} styleText = {stylesView.text1}/>
        </View>
        
        <StatusBar style= "auto" backgroundColor='#121212' />     
      </ScrollView>

      <LinearGradient style={styles.navigation} colors={['transparent','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.85)','rgba(0,0,0,0.9)','rgba(0,0,0,0.9)']}>
        <View style = {{flexDirection:"row", justifyContent: 'space-around', marginTop: 20}}>
          <BounceButton styleButton = {styles.navigationButton} onPressed={Home}>
            <Image source = {home1} style = {{width:24, height:24}}/>
            <Text style = {stylesView.text4}>ínicio</Text>
          </BounceButton>
          <BounceButton styleButton = {styles.navigationButton} onPressed={Search}>
            <Image source = {SearchButtom === true ? SearchOutilined : SearchFilled} style = {{width:24, height:24}}/>
            <Text style = {stylesView.text4}>Buscar</Text>
          </BounceButton>
          <BounceButton styleButton = {styles.navigationButton} onPressed={Library}>
            <Image source = {LibraryButtom === true ? LibraryOutilined : LibraryFilled} style = {{width:24, height:24}}/>
            <Text style = {stylesView.text4}>Biblioteca</Text>
          </BounceButton>
          <BounceButton styleButton = {styles.navigationButton}>
            <Image source = {require('./assets/images/spotify-512.png')} style = {{width:24, height:24}}/>
            <Text style = {stylesView.text4}>Premium</Text>
          </BounceButton>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 30,
    paddingHorizontal: 10,
    display: 'flex',
    height:"100%",
  },
  title: {
    flexDirection: "row", 
    height: "auto",
    marginBottom: 20,
    justifyContent:'space-between'
  },
  text1: {
    fontFamily: "GothamBold",
    fontSize: 25,
    color: "white",
  },
  navigation: {
    bottom: 0,
    position: "absolute",
    height: 60,
    width: "100%",
    justifyContent: 'center',
  },
  navigationButton:{
    alignItems: 'center',
    textAlign:'center',
  },
  nav:{
    alignSelf: 'center',
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
    marginLeft: 10,
  },
  text4: {
    fontFamily: "GothamBook",
    fontSize: 10,
    color: "white",

  },
})

