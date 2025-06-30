import { View, Text, Pressable, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


type Props = {
    label : string;
    theme? : "primary"
}
export default function Buttton({label, theme}: Props) {

    if(theme === "primary"){
  return (
   <View style={[
    styles.buttonContainer, 
    {
        borderWidth: 4,borderColor : "#ffd33e",borderRadius: 18
    },]
   }>
      <Pressable  style={[styles.button, {backgroundColor:"#fff"}]}
      onPress={()=>alert("you have pressed this button")}> 
            <FontAwesome name="picture-o" size={24} color="#25292e" />
            <Text style={[ styles.buttonLabel, {color:"#25292e"}]} >{label}</Text>
      </Pressable>
   </View>
  )
}
}

const styles = StyleSheet.create({
    buttonContainer:{
        width: 320,
        height:68,
        marginHorizontal:20,
        alignItems:"center",
        justifyContent: "center",
        padding: 3,
    },
    button:{
        borderRadius: 10,
        width:"100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',

    },
    buttonLabel:{
        color: '#fff',
        fontSize:16,
    },
    buttonIcon: {
        paddingRight: 8,

    }
})