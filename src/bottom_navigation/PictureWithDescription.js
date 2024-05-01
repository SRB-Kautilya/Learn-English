import React, { useEffect } from 'react';
import axios from "axios";
import { View, Image, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import getImage from '../util/httpcalls';
const url = "https://api.pexels.com/v1/search?query=nature&per_page=1"
const API_Key = '12345'

const PictureWithDescription = ({ description }) => {

  useEffect(() => {
    axios.get(url,{
      'headers': { 'Authorization': API_Key }
  }).then((response) => {
      console.log('response', response)
    }
    )
  }, [])


  return (
    <View style={styles.container}>
      <Image source={{ url: 'https://images.pexels.com/photos/4651215/pexels-photo-4651215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} style={styles.image} resizeMode="contain" />
      <Text style={styles.description}>{description}</Text>
      <TextInput
        placeholder="Type something..."
      />
      {/* <Text>You typed: {text}</Text> */}

    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Adjust this value to position the image lower or higher

  },
  image: {
    width: windowWidth, // Adjust width and height as needed
    height: windowheight * 0.5,
    // resizeMode: 'cover', // Or use other resizeMode options as needed
  },

  description: {
    // textAlign: 'center',
    fontSize: 16, // Adjust font size as needed
    color: 'black', // Adjust color as needed
    alignItems: 'center',
  },
});

export default PictureWithDescription;
