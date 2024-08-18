import { View, Text, FlatList,  TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyData } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { Image } from 'react-native'; 




 const BodyPart = ({data}) => {
  return (
    <View className="mx-4" >
      <Text
      className="font-semibold text-neutral-700  "
      style={{fontSize:hp(3)}} >
        Exercises
        </Text>


<FlatList  
data={bodyData}
renderItem={ ({item ,index})=> <BodyCard item={item} index={index} />}
columnWrapperStyle={{justifyContent:"space-between"}}
numColumns={2}
showsVerticalScrollIndicator={false}
contentContainerStyle={{paddingBottom:50,paddingTop:20}}
keyExtractor={(item)=> item.name}
/> 

 </View>
  )
}

const BodyCard =({item ,index})=>{
  return(
    <Animated.View entering={ index  % 2 === 1 ? FadeInRight.duration(3000).springify().delay(index*200) : FadeInLeft.duration(3000).springify().delay(index*200) }  >
      <TouchableOpacity
onPress={()=> router.push({pathname:"exercises",params:item})}
 style={{width:wp(44),height:wp(52)}}
className="flex justify-end p-4 mb-4  "
>
<Image  style={{width:wp(44),height:wp(52)}}
className="rounded-[35px] absolute "
source={item.image} />

<LinearGradient  
colors={["transparent","rgba(0,0,0,0.9)"]}
start={{x:.5,y:0}}
style={{width:wp(44),height:hp(15)}}
end={{x:0.5,y:1}}
 className="rounded-b-[35px] absolute bottom-0 "

/>

<Text 
className="text-white font-semibold tracking-wide text-center "
style={{fontSize:hp(2.3)}}
>
  {item?.name}
</Text>

</TouchableOpacity>

    </Animated.View>
  )
}




export default BodyPart


