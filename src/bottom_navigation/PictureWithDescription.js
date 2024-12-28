import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { SafeAreaView, Image,Platform, Button, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TypeComponent } from '../components/TypeComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { throttle } from 'lodash';

import { useNavigation } from '@react-navigation/native';
const data = require('../../data.json'); 

const API_URL = "https://api.pexels.com/v1/search?query=natu"
const API_KEY = '456'



const PictureWithDescription = ({ }) => {
  const navigation = useNavigation();

  const [pixelPhotoList, setpixelPhotoList] = useState([])
  const [pixelUrl, setPixelUrl] = useState('')
  const lastOffset = useRef({ x: 0, y: 0 });


  useEffect(() => {
    axios.get(API_URL, {
      'headers': { 'Authorization': API_KEY }
    }).then((response) => {
    
      let photosarr = response?.data?.photos.map(photoInfo => photoInfo.src)
     setpixelPhotoList(photosarr)
    }
    ).catch(()=> {
      setpixelPhotoList(data)
    })
  }, [])

  useEffect(() => {
    if (pixelPhotoList.length !== 0) {
      // handleScroll()
      let randomPhoto = pixelPhotoList[Math.floor(Math.random() * pixelPhotoList.length)];
      console.log(randomPhoto.large2x)
      setPixelUrl(randomPhoto.large2x)

    }

  }, [pixelPhotoList])




  const sendtoAI = () =>{
    navigation.navigate('Details')
  }


  const throttledHandleScroll = throttle(({ x, y }) => {

    // const { x, y } = event?.nativeEvent?.contentOffset;
    if (x !== undefined || y !== undefined) {
      const dx = x - lastOffset?.current?.x;
      const dy = y - lastOffset?.current?.y;
      if (Math.abs(dx) > Math.abs(dy) && dx > 0) {
        const randomPhoto = pixelPhotoList[Math.floor(Math.random() * pixelPhotoList.length)];
        setPixelUrl(randomPhoto.large2x);
      }
      lastOffset.current = { x, y };
    }
  }, 300); // Adjust delay as needed


  const handleScroll = (event) => {
    const { x, y } = event.nativeEvent.contentOffset; // Extract values
    throttledHandleScroll({ x, y });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
       <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <KeyboardAwareScrollView
        extraScrollHeight={16}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        onScroll={handleScroll}
        scrollEventThrottle={16}
         style={styles.scrollView} 
        >
        <ScrollView horizontal onScroll={handleScroll} showsHorizontalScrollIndicator={false}  style={styles.scrollView} >
          <Image source={{ uri: pixelUrl || null }} style={[styles.image, { width: windowWidth }]} />
        </ScrollView>
    
      <TypeComponent />
     
      <Button title="Send to ChatGPT" onPress={sendtoAI} />
      </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
    margin: 0, 
    padding: 0,
  },
  image: {
    height: 475, // Set the height as needed
    resizeMode: 'cover',
    marginBottom: 0,
    padding: 0
  },
  scrollView: {
    // height: 450, 
    flex: 1,  // Ensure the ScrollView takes up available space
    marginBottom: 0, // Prevent extra space below the ScrollView
    padding:0
  },
});

export default PictureWithDescription;
