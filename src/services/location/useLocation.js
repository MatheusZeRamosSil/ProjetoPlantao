import * as Location from 'expo-location';

export const useLocation = () =>{
    const getPermissionLocationForeground = async() =>{
        try{
            let {status} = await Location.requestForegroundPermissionsAsync();
            return status
        }catch(error){
            return {error}
        }
    }

    const getCurrentLocation = async(status) => {
     
       if(status === 'granted'){
        try{
            let currentLocation = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
            return currentLocation
           
        }catch(error){
            console.log(error)
            return {error}
        }
       }
         
    }

    return{
        getCurrentLocation,
        getPermissionLocationForeground,
    }
}