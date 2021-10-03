import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from './providers/AuthProvider';
import { WelcomeView } from './views/WelcomeView';
import { Logout } from './components/Logout';
import { Feed } from './views/Feed';


const Stack = createStackNavigator();

const App = () => {

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome View"
            component={WelcomeView}
            options={{ title: "Test App"}} />
          <Stack.Screen
            name="Feed"
            component={Feed}
            title="TestView"
            headerBackTitle="Sign out"
            options={{
              headerLeft: function Header() {
                return <Logout />
              }
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
