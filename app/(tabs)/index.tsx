// imported library
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, View } from "react-native";

//imported components 
import Buttton from "@/component/Buttton";
import ImageViewer from "@/component/ImageViewer";



const PlaceHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  const pickImageAsync = async ()=>{

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if(!result.canceled){
      console.log(result)
    } else{
      alert("you did not select any result")
    }
  }
  return (
    <View
   style={ styles.container}
    >
      
      <View style={styles.imageContainer }>
            <ImageViewer imgSource={PlaceHolderImage}  />   
      </View>

      <View style={styles.footerContainer}>
         <Buttton onPress={pickImageAsync} label="Choose a photo" theme="primary" />
         <Buttton label="Use this photo" />
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