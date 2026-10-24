import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

// DATA 1: ข้อมูลสมาชิกกลุ่ม (ใช้รูป local จากโฟลเดอร์ assets)
const TEAM_MEMBERS = [
  {
    id: '1',
    title: 'นางสาวชนันพร สุขโข',
    subtitle: 'รหัสนักศึกษา : 368305221004',
    role: 'ผู้พัฒนาระบบ',
    description: 'รับผิดชอบดูแลโครงสร้าง Navigation และการจัดการข้อมูลภายในแอปพลิเคชัน',
    image: require('../assets/images/01_noey.png'),
    views: 120,
    likes: 45,
  },
  {
    id: '2',
    title: 'นางสาวชยุตรา หงษ์ทอง',
    subtitle: 'รหัสนักศึกษา : 368305221005',
    role: 'ออกแบบ UI/UX',
    description: 'รับผิดชอบออกแบบระบบ Design System และตกแต่งหน้าตา UI สำหรับการ์ดและปุ่มกด',
    image: require('../assets/images/03_jus.png'),
    views: 98,
    likes: 38,
  },
  {
    id: '3',
    title: 'นางสาวปรานวาด สุจริต',
    subtitle: 'รหัสนักศึกษา : 368305221012',
    role: 'จัดการข้อมูลและทดสอบ',
    description: 'รับผิดชอบการจัดการข้อมูล Local Data และจัดทำคู่มือการใช้งาน',
    image: require('../assets/images/02_wale.png'),
    views: 115,
    likes: 50,
  },
];

export default function TeamworkScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* หัวข้อประจำหน้า */}
        <Text style={styles.title}>สมาชิกกลุ่ม</Text>
        <Text style={styles.subtitle}>ทีมนอนเยอะจนขอบตาดำ</Text>

        {/* รายการสมาชิกแต่ละคน */}
        {TEAM_MEMBERS.map((member) => (
          <Pressable
            key={member.id}
            style={styles.topicCard}
            onPress={() => navigation.navigate('TopicDetail', { item: member })}
          >
            {/* เรียกใช้รูปภาพ local ผ่าน source={member.image} */}
            <Image 
              source={member.image} 
              style={styles.listImage} 
              resizeMode="cover"
            />
            
            <View style={styles.topicInfo}>
              <Text style={styles.topicTitle}>{member.title}</Text>
             
                <Text style={styles.linkText}>ดูรายละเอียด</Text>
              
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}