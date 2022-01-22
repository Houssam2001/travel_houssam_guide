import axios from "axios"
export const getPlacesData=async (type,ne,sw)=>{

    try{
    const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
        },
        headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'd94e05a318msh7c8ed2e044df012p18c6c3jsn1d65c1f8fba6'
        }})
    return data
}
    catch (error){
    console.log(error)
    }
}
