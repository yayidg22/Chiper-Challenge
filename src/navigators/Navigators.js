import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Web from '../screens/web/Web';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name="home" component={Home} options={{ title: "reddit/r/pics" }} />
            <Stack.Screen name="web" component={Web} />
        </Stack.Navigator>
    );
}



export default StackNavigator;