
import { useEffect, useState} from "react";
import axios from "axios";

export function useRequestData(url) {


    const[listTrip,setListTrip]= useState(undefined)

    const [isLoadingListTrip, setIsLoadingListTrip] = useState (false)

    const [errorListTrip, setErrorListTrip]=useState("")

    useEffect(() => {
        setIsLoadingListTrip(true) 
        axios.get(url) 
        .then((response)=>{
        setIsLoadingListTrip(false) 
        setListTrip(response.data) 
      }).catch((error)=>{
        setIsLoadingListTrip(false) 
        console.log(error)
        setErrorListTrip(error) 
      })},[url])
      
      return [listTrip,isLoadingListTrip,errorListTrip] 
    
}

    



