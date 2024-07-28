
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewDetails from "./screens/reviewDetails";
import Home from "./screens/home";
import About from "./screens/about";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
export default function App() {
  const [loaded, error] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bald": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
