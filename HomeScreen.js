import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* หัวข้อประจำหน้า Dashboard */}
        <Text style={styles.title}>SMART CONTENT HUB</Text>
        <Text style={styles.subtitle}>ศูนย์รวมข้อมูลและบทเรียนเรียนรู้ React Native</Text>

        {/* แบนเนอร์ต้อนรับ (Banner) */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>ยินดีต้อนรับสู่แอปพลิเคชัน</Text>
          <Text style={styles.bodyText}>
            แอปนี้รวบรวมข้อมูลสมาชิกทีมงาน บทเรียน React Native 24 หัวข้อ และข้อมูลภายนอกผ่าน GitHub JSON
          </Text>
        </View>

        {/* เมนูด่วน (Quick Menu) */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>เมนูลัด (Quick Navigation)</Text>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Teamwork')}
          >
            <Text style={styles.buttonText}>ดูข้อมูลสมาชิกทีมงาน (DATA 1)</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('RNKnowledge')}
          >
            <Text style={styles.buttonText}>เข้าเรียน 24 บทเรียน RN (DATA 2)</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Explore')}
          >
            <Text style={styles.buttonText}>สำรวจข้อมูล GitHub JSON (DATA 3)</Text>
          </TouchableOpacity>
        </View>

        {/* กล่องสรุปสถานะระบบ */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>สถานะระบบ: พร้อมใช้งาน (v1.0.0)</Text>
          <Text style={styles.infoText}>สถาปัตยกรรม: Drawer 3 เมนู + Tab 4 เมนู</Text>
        </View>
      </ScrollView>
    </View>
  );
}