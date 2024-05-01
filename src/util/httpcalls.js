import axios from "axios";

const url = "https://api.pexels.com/v1/search?query=nature&per_page=1"
const API_Key = '1234'

export  async function getImage(){
   return await axios.get(url,{
        'headers': { 'Authorization': API_Key }
    })
}