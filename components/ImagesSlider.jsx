import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View,  Dimensions, Image } from 'react-native';
import { sImages } from './../constants/index';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 



const { width } = Dimensions.get('window'); // Get the width of the screen

const images =sImages

const ImagesSlider = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slides every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: currentIndex * width, animated: true });
    }
  }, [currentIndex]);

  return (
    <View  style={{width:wp(100),height:hp(28)}} 
    className="mx-auto ">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true} // Disable manual scrolling
      
      >
        {images.map((image) => (
          <View key={image * Math.random()} className="mx-auto rounded-xl " style={{width:wp(90),height:hp(25)}}   >
            <Image source={image} className="w-[95%] mx-auto  rounded-xl h-full" resizeMode='cover' />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImagesSlider;





