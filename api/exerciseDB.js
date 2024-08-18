import axios from "axios";
import { RapidApiKey } from "../constants";

const baseUrl ="https://exercisedb.p.rapidapi.com"


const apiCall = async (url ,params)=>{
try {
    
const options ={
    method:'GET',
url,
params,
headers: {
    'x-rapidapi-key': RapidApiKey,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }}; 
  
  const response = await axios.request(options)

return response.data



} catch (error) {
    console.log("error" ,error.message )
}


}



export const fetchExerData = async (bodyPart)=>{

    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`)

return data 
}









