import { isPointWithinRadius } from "geolib";


export const calculateDistance = (locationDevice,locationAddress) =>{
    
    return isPointWithinRadius(
                         locationDevice.coords,
                         locationAddress.coords,
                       1000);
                        
}