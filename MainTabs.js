import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screnns/HomeScreen';
import TeamworkScreen from '../screnns/TeamworkScreen';
import ExploreScreen from '../screnns/ExploreScreen';
import RNKnowledgeScrren from '../screnns/RNKnowledgeScreen';
//import TabGuideScreen from '../screens/TabGuideScreen';
import { COLORS } from '../styles/ProjectStyles';


const Tab = createBottomTabNavigator();


export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'DASHBOARD' }}
      />
      <Tab.Screen
        name="Teamwork"
        component={TeamworkScreen}
        options={{ title: 'DATA 1' }}
      />
      <Tab.Screen
        name="RNKnowledge"
        component={RNKnowledgeScrren}
        options={{ title: 'DATA 2' }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: 'DATA 3' }}
      />
    </Tab.Navigator>
  );
}



