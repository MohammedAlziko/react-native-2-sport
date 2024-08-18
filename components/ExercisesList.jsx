import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { router } from 'expo-router';
import Animated, {  FadeIn, FadeInDown } from 'react-native-reanimated';
 



const ExerciseCard =({item,index})=>{
  return(
      <Animated.View entering={FadeInDown.duration(500).springify().delay(index*200)}  >

<TouchableOpacity
onPress={()=> router.push({pathname:"/exerciseDetails",params:item}) }
className="flex py-3 space-y-2"
>
  <View className=" h-fit pb-3 text-center  rounded-[25px] " >
    <Image  
    source={{uri:item.gifUrl}}
    resizeMode='cover'
    style={{height:wp(52),width:wp(44)}}
    className="rounded-[25px]"
    alt={item.name}
    />

<Text
className="text-neutral-700 text-center p-1 font-semibold ml-1 tracking-wide "
 numberOfLines={1}

>
{item.name.length >20     ?item.name.slice(0,20) + '...' : item.name }
</Text>

  </View>
</TouchableOpacity>
      </Animated.View>
  )
  }
  




const ExercisesList = ({data}) => {

  return (
    <View>
      
      <FlatList  
data={data}
renderItem={ ({item ,index})=> <ExerciseCard item={item} index={index} />}
columnWrapperStyle={{justifyContent:"space-between"}}
numColumns={2}
showsVerticalScrollIndicator={false}
contentContainerStyle={{paddingBottom:60,paddingTop:20}}
keyExtractor={(item)=> item.name}
/> 



    </View>
  )
}

export default ExercisesList