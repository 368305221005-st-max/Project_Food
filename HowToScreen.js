import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

// ชุดข้อมูล DATA 2
const DATA_2_ITEMS = [
  {
    id: '1',
    title: 'การใช้งาน React Native Navigation',
    subtitle: 'พื้นฐาน Stack และ Drawer',
    description: 'เรียนรู้โครงสร้างการส่งค่าระหว่างหน้าผ่าน RootStack, AppDrawer และ MainTabs รวมถึงการใช้งาน route.params ส่งข้อมูลไปยังหน้า Detail',
    image: require('../assets/images/02_wale.png'), // เปลี่ยนชื่อไฟล์รูปตามที่มีจริง
    views: 340,
    likes: 120,
  },
  {
    id: '2',
    title: 'การออกแบบ UI ด้วย StyleSheet',
    subtitle: 'การใช้งาน Flexbox และ Design System',
    description: 'การจัดการ Theme สี Deep Rose และจัดระเบียบสไตล์ด้วย Flexbox เพื่อให้รองรับการแสดงผลหน้าจอหลายขนาด',
    image: require('../assets/images/01_noey.png'),
    views: 280,
    likes: 95,
  },
];

export default function HowToScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.detailTitle}>คู่มือการใช้งาน / บทเรียน</Text>
        <Text style={styles.subtitle}>รายการองค์ความรู้</Text>

        {DATA_2_ITEMS.map((item) => (
          <Pressable
            key={item.id}
            style={styles.topicCard}
            onPress={() => navigation.navigate('TopicDetail', { item })}
          >
            <Image
              source={item.image}
              style={styles.listImage}
              resizeMode="cover"
            />
            <View style={styles.topicInfo}>
              <Text style={styles.topicTitle}>{item.title}</Text>
              <Text style={styles.topicSubText}>{item.subtitle}</Text>
              <Text style={styles.linkText}>อ่านรายละเอียดเพิ่มเติม {'->'}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}