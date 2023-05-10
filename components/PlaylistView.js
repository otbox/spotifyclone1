import { FlatList, Image, Platform, StyleSheet, Text, View } from "react-native"
import BounceButton from "./BounceButton"

export default function PlaylistView({data, styleText}) {
   
    return (
            <FlatList  
            data = {data} 
            numColumns={2}
            horizontal={false} 
            contentContainerStyle = {styles.container}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: -10}} />}
            scrollEnabled = {false}
            keyExtractor={data.id}
            renderItem={({item,index}) => {
                return(
                    <BounceButton sttyle={[{flex: 1}, {marginRight: index % 2 ? 0 : 5}]} key = {index}>
                        <View style = {styles.playlistcontainer}>
                            <Image source={item.image} style = {styles.image}/>     
                            <Text style = {styleText}>{item.text}</Text>
                        </View> 
                    </BounceButton>
                )
            }}
        />
    ) 
};

const styles = StyleSheet.create({
    container:{
        width : "100%",
        display: "flex",
        marginVertical: 0,
        paddingVertical:0,
        marginVertical: 20,
        justifyContent:"flex-start",
        paddingTop: 10,
    },
    playlistcontainer: {
        backgroundColor: "#2a2a2a",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        flex: 1,
        marginVertical: Platform.OS === "web" ? 5 : -5,
    },

    image: {
        width: 50,
        height: 50,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    }
})
