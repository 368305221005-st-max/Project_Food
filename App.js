import { StyleSheet, Text, View } from 'react-native';


// You can import supported modules from npm
import { Card } from 'react-native-paper';
//
// or any files within the Snack
import AssetExample from './components/AssetExample';

import RootStack from './navigation/RootStack';

import { NavigationContainer } from '@react-navigation/native';


//import TopicListScreen from './screens/TopicListScreen';
//import TopicStack from './navigation/TopicStack';



export default function App() {
  return (
      <NavigationContainer>
       <RootStack />  
           {/*เรียกไฟล์ TopicStack ซึ่งจะรวม stack ui ทั้งหมด */}
      </NavigationContainer>


      //เรียกไฟล์ TopicList
  );   // ปิด return
}  // ปิด function
