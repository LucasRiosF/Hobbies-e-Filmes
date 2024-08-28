import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Hobbie from "../screens/Hobbie";
import Movies from "../screens/Movies";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hobbie" component={Hobbie} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
};

export default StackRoutes;