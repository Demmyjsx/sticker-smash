import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return(

   <>
      <StatusBar style="light"  />
        <Stack>
              <Stack.Screen name="(tabs)" 
                options={{
                  headerShown: false,
                    headerLeft:()=><></>
                  }}/>
              {/* <Stack.Screen name="about" options={{ headerTitle: "About"}} /> */}
              <Stack.Screen name="+not-found"  />
              
        </Stack>
   </>

  );
}
