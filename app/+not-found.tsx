import { Link , Stack } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function NotFoundScreen() {
  return (

    <>
        <Stack.Screen options={{title: "Opps! Page Not Found"}} />
          <View style={styles.container}>
              <Link style={styles.text} href={"/"}>Go back home! okay</Link>
          </View>
      
    </>
    
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
  textDecorationLine: "underline"

},
button:{
  fontSize:20,
  textDecorationLine: "underline",
  color: "white",
}
})