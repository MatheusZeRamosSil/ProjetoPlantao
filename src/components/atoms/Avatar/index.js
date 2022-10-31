import { Avatar } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const Profile = ({url_image}) =>{
   return <Avatar
    size={164}
    rounded
    source={{ uri: url_image}}
    containerStyle={styles.profile}
/>
}

const styles = StyleSheet.create({
    profile: {
        alignSelf: 'center',
        marginTop: 34,
    }   
});
