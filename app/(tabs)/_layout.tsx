import { Tabs } from "expo-router";
//icons
import { AntDesign, FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';


export default function TabsLayout() {
  return(

    <Tabs 
    screenOptions={{
      tabBarActiveTintColor:"#ffd33d",
      headerStyle: {
        backgroundColor: '#25292e',

      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
      backgroundColor: "#25292e"
      }
      

}}>

           <Tabs.Screen name="index" 
            options={{
              headerTitle : "Sticker Smash",tabBarIcon: ({color,focused})=> focused ? 
              <FontAwesome5 name="home" size={24} color={color}/> : <AntDesign name="home" size={24} color={color} />}}/>
           <Tabs.Screen name="about" 
           options={{
            headerTitle: "About page",tabBarIcon: ({color , focused})=> focused ? 
            <Ionicons name="person" size={24} color={color} /> : <Fontisto name="person" size={24} color={color} />
           }} />
           {/* <Tabs.Screen name="+not-found"  /> */}
           
    </Tabs>

  );
}
