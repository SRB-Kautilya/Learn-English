import React, { useEffect,useState } from 'react';
import axios from "axios";
import { View, Image, Text, StyleSheet, TextInput, Dimensions,ScrollView } from 'react-native';
import getImage from '../util/httpcalls';
const url = "https://api.pexels.com/v1/search?query=nature&per_page=15"
const API_Key = '12345'

const PictureWithDescription = ({ description }) => {

  const[pixelPhotoList,setpixelPhotoList] = useState([])
  const[pixelUrl,setPixelUrl] = useState('')

  useEffect(() => {
    axios.get(url,{
      'headers': { 'Authorization': API_Key }
  }).then((response) => {
      console.log('response123', response?.data)
     
    let photosarr = response?.data?.photos.map(photoInfo => photoInfo.src)
      // const url = new URL(response?.data?.photos[1].src?.large2x)
      // console.log('response1234', url.toString())
      setpixelPhotoList(photosarr)
    }
    )
  }, [])

  useEffect(()=>{
   if(pixelPhotoList.length!==0){
  handleScroll()
   }

  },[pixelPhotoList])

  const handleScroll = () =>{
    let randomPhoto = pixelPhotoList[Math.floor(Math.random() * pixelPhotoList.length)];
    setPixelUrl(randomPhoto.large2x)
  }


  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled  onScroll={handleScroll}  scrollEventThrottle={5} >
      <Image source={{uri:pixelUrl ?pixelUrl:null  }} style={[styles.image, { width: windowWidth }]}/>
      </ScrollView>
      <Text style={styles.description}>{description}</Text>
      <TextInput
        placeholder="Type something..."
      />

    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingTop: 10, // Adjust this value to position the image lower or higher

  },
  image: {
    resizeMode: 'cover', // Adjust width and height as needed
    height: windowheight*0.5 ,
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
