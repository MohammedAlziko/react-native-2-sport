import { View,  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, useRouter } from 'expo-router'
import { testData } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ExercisesList from '../components/ExercisesList';
import { ScrollView } from 'react-native-virtualized-view';
import { fetchExerData } from '../api/exerciseDB';



const exercises = () => {

// const router =useRouter();
const item =useLocalSearchParams();
const [exerData, setExerData] = useState(testData)


console.log("Got Item",item)

const getExercises = async (bodyPart)=>{
 let data = await fetchExerData(bodyPart)
setExerData(data)

}



useState(() => { 
if(item){ getExercises(item.name)}


 },[item])




  return (
  <ScrollView> 
    <StatusBar style='light' hidden />

<Image 
source={item.image}
style={{width:wp(100) , height:hp(45)}}
className="rounded-b-[40px]"
/>

<TouchableOpacity
onPress={()=> router.back()}
className="absolute bg-rose-500 
rounded-full flex justify-center items-center 
mx-4 pr-1 mt-7 

"
style={{
    width:hp(5.5),
    height:hp(5.5)
}}
>
    <Ionicons color="white" name='caret-back-outline' size={hp(4)} />
</TouchableOpacity>



{/*   list Exers */}
<View className="mx-4 mt-4 space-y-3 " >
    <ExercisesList data={exerData} />
</View>


  </ScrollView>
  )
}

export default exercises
















