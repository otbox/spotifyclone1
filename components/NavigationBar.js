// import { LinearGradient } from 'expo-linear-gradient';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import BounceButton from './BounceButton';

// export default function NavigationBar() {
//     <LinearGradient style={styles.navigation} colors={['transparent','rgba(0,0,0,0.7)','rgba(0,0,0,0.7)','rgba(0,0,0,0.8)','rgba(0,0,0,0.85)','rgba(0,0,0,0.9)']}>
//     <View style = {{flexDirection:"row", justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 5}}>
//       <BounceButton styleButton = {styles.navigationButton}>
//         <Image source = {require('../assets/icon.png')} style = {{width:24, height:24}}/>
//         <Text style = {styles.text2}>ínicio</Text>
//       </BounceButton>
//       <BounceButton styleButton = {styles.navigationButton}> 
//         <Image source = {require('../assets/icon.png')} style = {{width:24, height:24}}/>
//         <Text style = {styles.text2}>Buscar</Text>
//       </BounceButton>
//       <BounceButton styleButton = {styles.navigationButton}>
//         <Image source = {require('../assets/icon.png')} style = {{width:24, height:24}}/>
//         <Text style = {styles.text2}>Biblioteca</Text>
//       </BounceButton>
//       <BounceButton styleButton = {styles.navigationButton}>
//         <Image source = {require('../assets/icon.png')} style = {{width:24, height:24}}/>
//         <Text style = {styles.text2}>Premium</Text>
//       </BounceButton>
//     </View>
//   </LinearGradient>
// };

// const styles = StyleSheet.create({
//     container:{
//         alignItems: "center",
//         marginRight: 20,
//       },
//       text2: {
//         fontFamily: "GothamBook",
//         fontSize: 12,
//         color: "#909090",
//       },
//       navigationButton:{
//         flex: 1,
//         alignItems: 'center',
//         textAlign:'center',
//       },
//       navigation: {
//         bottom: 0,
//         position: "absolute",
//         height: 50,
//         width: "100%",
//       },
// })