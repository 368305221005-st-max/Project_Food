import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainTabs from './MainTabs';
import HowToScreen from '../screnns/HowToScreen';
import AboutProjectScreen from '../screnns/AboutProjectScreen';


const Drawer = createDrawerNavigator();


export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainApp"
        component={MainTabs}
        options={{ title: 'เมนูหลัก' }}
      />
      <Drawer.Screen
        name="HowTo"
        component={HowToScreen}
        options={{ title: 'คู่มือ' }}
      />
      <Drawer.Screen
        name="AboutProject"
        component={AboutProjectScreen}
        options={{ title: 'เกี่ยวกับ' }}
      />
      
    </Drawer.Navigator>
  );
}



