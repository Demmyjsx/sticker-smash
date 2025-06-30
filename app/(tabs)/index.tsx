// imported library
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker"

//imported components
import Buttton from "@/component/Buttton";
import ImageViewer from "@/component/ImageViewer";



const PlaceHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View
   style={ styles.container}
    >
      
      <View style={styles.imageContainer }>
            <ImageViewer imgSource={PlaceHolderImage}  />   
      </View>

      <View style={styles.footerContainer}>
         <Buttton label="Choose a photo" theme="primary" />
         <Buttton label="Use this photo" theme="primary"/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
container: {
 flex: 1,
 backgroundColor: '#25292e',
 alignItems:"center",

 
},

imageContainer:{
  flex:1,
},
footerContainer:{
  flex: 1/3,
  alignItems: "center",
  // backgroundColor: "red"
}
})