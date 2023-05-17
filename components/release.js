import {Image, StyleSheet, Text, View} from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import BounceButton from './BounceButton';

export default function ReleseContainer({stylesText}) {
    const [Play,setPlay] = useState(true)
    const [Favorite,setFavorite] = useState(true)

    const buttonPlay = () => {
        Play === true ? setPlay(false) : setPlay(true)
    }

    const favoriteButton = () => {
        Favorite === true ? setFavorite(false) : setFavorite(true) 
    }

    return (
        <View style = {{marginVertical: 10}}> 
            <View style = {{flexDirection:"row", alignItems: "center"}}> 
                <Image style ={styles.autor} source = {require('../assets/images/oruan.jpg')} />
                <View>
                    <Text style = {stylesText.text2} >NOVO LANÇAMENTO DE</Text>
                    <Text style = {[stylesText.text1, {fontSize: 30}]}>Oruam</Text>
                </View>
            </View>
            <View style = {styles.container}> 
                <Image source={require('../assets/images/oruam.jpg')} style={styles.album}/>
                <View style = {styles.albumContainer}>
                    <Text style = {stylesText.text1}>Assault {'(Joias no Pulso)'}</Text>
                    <Text style = {stylesText.text2}>Single Orochi, Oruam, Mc Poze do Rodo</Text>
                    <View style={{marginTop: 40,flex: 1, justifyContent:'space-between', flexDirection:'row'}}>
                        <BounceButton onPressed={buttonPlay}>
                            
                        </BounceButton>
                        <BounceButton onPressed={favoriteButton}>
                            <MaterialCommunityIcons name={Favorite === true ? "cards-heart-outline" : "cards-heart"} size={28} color="white" />
                        </BounceButton>
                    </View>
                </View>
                
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        width: "100%",
        height: 140,
        flexDirection: 'row',
        borderRadius: 15,
        marginTop: 10,
    },
    albumContainer: {
        flex: 1,
        padding: 15,
    },
    album: {
        height: 140,
        width: 140,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    autor: {
        borderRadius: 50,
        height:  55,
        width: 55,
        marginRight: 10,
    },
    text: {
        color: "white",
    } 
}) 
