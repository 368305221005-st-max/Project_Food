import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function AboutProjectScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>About Project</Text>
      <Text style={styles.subtitle}>Project ฝึกอ่านโครงสร้างก่อนต่อยอด App จริง</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Separation of Concerns (SoC)</Text>
        <Text style={styles.bodyText}>• navigation/ = โครงสร้างเส้นทาง</Text>
        <Text style={styles.bodyText}>• screens/ = UI แต่ละหน้า</Text>
        <Text style={styles.bodyText}>• data/ = ชุดข้อมูล</Text>
        <Text style={styles.bodyText}>• styles/ = รูปแบบหน้าตา</Text>
        <Text style={styles.bodyText}>• assets/ = รูปภาพ</Text>
      </View>
    </ScrollView>
  );
}