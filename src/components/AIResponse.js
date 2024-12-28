import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { View, Text, StyleSheet, Dimensions,TouchableOpacity, Linking} from 'react-native';
import { Dialog, Portal, Provider, ActivityIndicator } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
//import Clipboard from '@react-native-clipboard/clipboard';
import * as Clipboard from 'expo-clipboard';

export const AIResponse = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [aiResponse, setAiResponse] = useState('')
    const [loading, setLoading] = useState('')
    const [isPressed, setIsPressed] = useState(false);

    const handleWordPress = async (word) => {
    try {
        console.log('-->',word)
        await Clipboard.setStringAsync(word); // Copy the selected word
        await Linking.openURL(`https://www.google.com/search?q=define+${word}`); // Open Google search for the word
      } catch (error) {
        console.error('Error copying to clipboard or opening URL:', error);
      }
    }





    useEffect(()=>{
        setLoading(true);
        // navigation.navigate('Details')
    
        setTimeout(()=>{
          setAiResponse('The image depicts a breathtaking hot air balloon ride over a vast, arid landscape. Two hot air balloons float gracefully against a clear blue sky. The landscape below is a tapestry of rolling hills, rocky formations, and valleys, creating a sense of vastness and adventure. The warm sunlight casts a golden glow over the scene, emphasizing the beauty and tranquility of the moment.');
          setLoading(false)
        //   navigation.setParams({
        //     loading:loading,
        //     aiResponse:aiResponse
        //    })
        },3000)
    },[])
   


    const openModal = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);

    }

    return (
       
            <View style={styles.container}>
                {loading ? (
                    <ActivityIndicator style = {styles.spinner} size="large" color="#007AFF" />
                ) : (
                    <View style={styles.responseContainer}>
                    {aiResponse.split(' ').map((word, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handleWordPress(word.replace(/[^a-zA-Z]/g, ''))} // Remove punctuation from word
                        style={styles.wordTouchable}
                      >
                        <Text style={styles.word}>{word}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    spinner:{
        justifyContent: 'center',
        padding: 20,
    },
    responseText: {
        justifyContent: 'center',
        padding: 10,
        fontSize: 16,
        color: '#333',
        marginTop: 10,
        textAlign:'center',
        lineHeight: 20, 
        fontWeight: '500', 
      //  color: isPressed ? 'blue' : 'black', 
    //    textDecorationLine: isPressed ? 'underline' : 'none' 
    },
    responseContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      wordTouchable: {
        margin: 4,
      },
      word: {
        fontSize: 16,
        color: '#333',
       
      },
})


//export default AIResponse;