import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthProvider} from './providers/AuthProvider';
import {WelcomeView} from './views/WelcomeView';
import {Logout} from './components/Logout';
import {Home} from './views/Home';
import Drop from './views/Drop';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
          <Stack.Screen
            name="Welcome View"
            component={WelcomeView}
            options={{title: 'Test App'}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            title="Home View"
            headerBackTitle="Sign out"
            options={{
              headerLeft: function Header() {
                return <Logout />;
              },
            }}
          />
          <Stack.Screen name="Drop" component={Drop} title="Drop Vieaw" />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
