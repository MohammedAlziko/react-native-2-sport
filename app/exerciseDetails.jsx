import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';




const exerciseDetails = () => {
const item =  useLocalSearchParams();
console.log("GOT DATA :",item)




  return (
   
<View className="flex flex-1" >
<View className="shadow-md bg-neutral-200 rounded-b-[40px] " >

<Image source={{uri:item.gifUrl}}
contentFit='cover' className="rounded-b-[40px]"
 style={{width:wp(100),height:wp(100)}}
/>


</View>

<TouchableOpacity
className="mx-2 absolute rounded-full mt-2 right-0 "
onPress={()=> router.back()}
>

    <Ionicons 
    color="#f43f5e"
    name='close-circle' size={hp(4.5)} />
</TouchableOpacity>



<ScrollView className="mt-3 mx-4 space-y-2  "
showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}
>

<Animated.Text entering={FadeInDown.delay(200).springify().duration(500)} style={{fontSize:hp(3.5)}} className="font-semibold text-neutral-700 tracking-wide " >
  {item.name}
</Animated.Text>


<Animated.Text entering={FadeInDown.delay(300).springify().duration(500)} className="text-neutral-700 tracking-wide " >
  Equipment :
<Text style={{fontSize:hp(2)}} className="text-neutral-800 font-bold " >
{item?.equipment}
</Text>
</Animated.Text>

<Animated.Text entering={FadeInDown.delay(300).springify().duration(500)} className="text-neutral-700 tracking-wide " >
  Secondary Muscels :
<Text style={{fontSize:hp(2)}} className="text-neutral-800 font-bold " >
{item?.secondaryMuscles}
</Text>
</Animated.Text>
 
<Animated.Text entering={FadeInDown.delay(500).springify().duration(500)} className="text-neutral-700 tracking-wide " >
  Target :
<Text style={{fontSize:hp(2)}} className="text-neutral-800 font-bold " >
{item?.target}
</Text>
</Animated.Text>

<Animated.Text entering={FadeInDown.delay(600).springify().duration(500)} style={{fontSize:hp(3)}} className="text-neutral-800 font-bold " >
Instructions


</Animated.Text>

{
item.instructions.split(",").map((instruction,index) => (
  <Animated.Text entering={FadeInDown.delay(700).springify().duration(500)} style={{fontSize:hp(2)}} 
  className="text-neutral-800"
  key={index} >
{instruction}
  </Animated.Text>
))


}



</ScrollView>




</View>

   


  )
}

export default exerciseDetails