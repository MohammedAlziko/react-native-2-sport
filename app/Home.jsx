import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ImagesSlider from '../components/ImagesSlider';
import BodyPart from '../components/BodyPart';
import { Image } from 'expo-image';



 const Home = () => {
  return (

    <SafeAreaView edges={["top"]} className="flex-1 flex bg-white space-y-5" >
     <StatusBar style='dark' />
     
     {/* header */}
      <View className="flex-row px-4 justify-between items-center" >
      <View className="space-y-2" >
        <Text className="
        font-bold tracking-wider text-neutral-700
        " style={{fontSize:hp(4.5)}} >ready to </Text>
        <Text className="
        font-bold tracking-wider text-rose-500
        " style={{fontSize:hp(4.5)}} >workout</Text>
      </View>

<View className="flex justify-center items-center space-y-2" >
<Image 
source={require("../assets/images/avatar.png")}
style={{height:hp(6),width:hp(6)}}
className="rounded-full"
  />
<View style={{height:hp(5.5) ,width:hp(5.5)}} 
 className="rounded-full border-[3px]
 flex justify-center items-center bg-neutral-200
 border-neutral-300  " >
<Ionicons name='notifications' color="gray" size={hp(3)} />

</View>
</View>
    </View>  


{/* slider */}

<View>
  <ImagesSlider/>
</View>


<View className="flex-1" >
<BodyPart  />
</View>





    </SafeAreaView>
  
  )
}


export default Home;