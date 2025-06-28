import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";


const PlaceHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View
   style={ styles.container}
    >
      <Image source={PlaceHolderImage} style={styles.image} /> 
      <Text style={styles.text}>Home Screen</Text>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
container: {
 flex: 1,
 backgroundColor: '#25292e',
 alignItems:"center",
 justifyContent: "center",
 
},
text:{
  color: "#fff",

},
button:{
  fontSize:20,
  textDecorationLine: "underline",
  color: "white",
},
image: {
  width: 340,
  height: 440,
  borderRadius: 18,
},
})