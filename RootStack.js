import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AppDrawer from './AppDrawer';
import TopicDetailScreen from '../screnns/TopicDetailScreen';


const Stack = createNativeStackNavigator();


export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="AppDrawer"          
        component={AppDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopicDetail"          
        component={TopicDetailScreen}
        options={{ title: 'รายละเอียด' }}
      />
    </Stack.Navigator>
  );
}
