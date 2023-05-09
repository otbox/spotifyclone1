import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import BounceButton from './BounceButton'

export default function ListMusic ({dataa, styleButton,styleImage,styleText}) {
    
    return (
        <FlatList 
            horizontal 
            data = {dataa} 
            showsHorizontalScrollIndicator={false}
            keyExtractor={dataa.id}
            renderItem={({item,index}) => {
                return(
                <BounceButton 
                image={item.image} 
                text={item.text}
                styleButton={styleButton}
                styleText={styleText}
                styleImage={styleImage}
                key= {index}
                />    
                )
            }}
        />
    )
}