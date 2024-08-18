import { View, Text,  TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from "react-native-reanimated"
import { router } from 'expo-router';
import { Image} from 'expo-image';

 
const index = () => {
  return (
    <View className="  flex-1 flex justify-end " >

<StatusBar style='dark' />

<Image className="absolute w-full h-full " source={require("../assets/images/welcome.png")} />

<LinearGradient
colors={["transparent","#18181d"]}
style={{height:hp(70),width:wp(100)}}
className="pb-12 flex justify-end space-y-8 "
start={{x:0.5,y:0}}
end={{x:0.5,y:0.8}}
>
<Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center " >

<Text style={{fontSize:hp(5) }} className="text-white font-bold tracking-wide " >
  Best <Text className="text-rose-500" >Worktouts</Text>
</Text>
<Text  style={{fontSize:hp(5) }} className="text-white font-bold tracking-wide " >For you</Text>
</Animated.View>




<Animated.View entering={FadeInDown.delay(200).springify()}  >
    <TouchableOpacity 
    onPress={()=> router.push("/Home")}
    style={{height:hp(7),width:wp(80)}} className="bg-rose-500 
  border-[2px] rounded-full border-neutral-200
items-center justify-center flex mx-auto

  " >
    <Text style={{fontSize:hp(3)}} className="text-white
    font-bold tracking-widest
    " >
      Get Started
    </Text>
  </TouchableOpacity>
</Animated.View>

  



</LinearGradient>


    </View>
  )
}

export default index