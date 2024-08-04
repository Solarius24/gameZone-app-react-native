import "./gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewDetails from "./screens/reviewDetails";
import Home from "./screens/home";
import About from "./screens/about";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/Header";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ReviewForm from "./screens/reviewForm";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bald": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  function RootDrawerNavigation() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <Header title="GameZone" navigation={undefined} />
            ),
          
          }}
        />
        <Drawer.Screen
          name="Abaut"
          component={About}
          options={{
            headerTitle: () => (
              <Header title="GameZone" navigation={undefined} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

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
        <Stack.Screen
          name="Root"
          component={RootDrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
