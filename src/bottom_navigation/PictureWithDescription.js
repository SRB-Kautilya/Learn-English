import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { SafeAreaView, Image, Text, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import getImage from '../util/httpcalls';
import { TypeComponent } from '../components/TypeComponent';
//import { API_URL, API_KEY } from '@env';
// import {API_KEY,API_URL} from 'react-native-dotenv';
const API_URL = "https://api.pexels.com/v1/search?query=nature&per_page=15"
const API_KEY = 'QQAGFfpuC4sbZiUadQ13WHhDmk6bwct6LQId8CjNX4mtXVsoG2wStgGk'
//console.log('test',API_URL,API_KEY)

const PictureWithDescription = ({ description }) => {

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
    )
  }, [])

  useEffect(() => {
    if (pixelPhotoList.length !== 0) {
      // handleScroll()
      let randomPhoto = pixelPhotoList[Math.floor(Math.random() * pixelPhotoList.length)];
      setPixelUrl(randomPhoto.large2x)

    }

  }, [pixelPhotoList])

  const handleScroll = (event) => {
    const { x, y } = event.nativeEvent.contentOffset;
    const dx = x - lastOffset.current.x;
    const dy = y - lastOffset.current.y;
    console.log('qwertyu', dx, dy)
    if (Math.abs(dx) > Math.abs(dy)) {

      if (dx > 0) {
        let randomPhoto = pixelPhotoList[Math.floor(Math.random() * pixelPhotoList.length)];
        setPixelUrl(randomPhoto.large2x)
      }
    }
    lastOffset.current = { x, y };
  };




  return (
    <SafeAreaView>
      <ScrollView horizontal={false} onScroll={handleScroll} scrollEventThrottle={16} >
        <ScrollView horizontal onScroll={handleScroll} showsHorizontalScrollIndicator={false} >
          <Image source={{ uri: pixelUrl ? pixelUrl : null }} style={[styles.image, { width: windowWidth }]} />
        </ScrollView>

        <TypeComponent />
      </ScrollView>
    </SafeAreaView>

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
    height: windowheight * 0.7,
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
