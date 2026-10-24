import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Image, ActivityIndicator, Button } from 'react-native';
import styles from '../styles/ProjectStyles';

// 🌐 เปลี่ยนตรงนี้เป็น GitHub Raw URL ของคุณ
const GMAIL_GITHUB_URL = "https://raw.githubusercontent.com/chananporn3085-ship-it/App_Pre_Project/refs/heads/main/topic.json";

export default function ExploreScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ฟังก์ชันดึงข้อมูลจาก GitHub ผ่าน fetch()
  const loadDataFromGitHub = async () => {
    try {
      setLoading(true);
      setError(null);
      const freshUrl = `${GMAIL_GITHUB_URL}?t=${new Date().getTime()}`;
      const response = await fetch(freshUrl);
      if (!response.ok) {
        throw new Error("ไม่สามารถเชื่อมต่อข้อมูลจาก GitHub ได้");
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDataFromGitHub();
  }, []);

  // กรณีรอดึงข้อมูล (Loading)
  if (loading) {
    return (
      <View style={[styles.screen, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text style={{ marginTop: 10, color: '#64748B' }}>กำลังดึงข้อมูลจาก GitHub...</Text>
      </View>
    );
  }

  // กรณีเกิดข้อผิดพลาด (Error + ปุ่ม Retry)
  if (error) {
    return (
      <View style={[styles.screen, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
        <Text style={{ fontSize: 16, color: '#DC2626', marginBottom: 12 }}>{error}</Text>
        <Button title="ลองใหม่อีกครั้ง" onPress={loadDataFromGitHub} color="#3B82F6" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.detailTitle}>EXPLORE</Text>

        {data.map((item) => (
          <Pressable
            key={item.id}
            style={styles.topicCard}
            onPress={() => navigation.navigate('TopicDetail', { item })}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.listImage}
              resizeMode="cover"
            />

            <View style={styles.topicInfo}>
              <Text style={styles.topicTitle}>{item.topic}</Text>
              <Text style={styles.topicSubText} numberOfLines={1}>
                {item.detail}
              </Text>
              <Text style={styles.linkText}>รายละเอียดเพิ่มเติม {'->'}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}