
import React from 'react';
 import { ScrollView, View, Text, Image } from 'react-native';
 import styles from '../styles/ProjectStyles';

 export default function TopicDetailScreen({ route }) {
   const item = route.params.item;

  // ตรวจสอบว่าเป็นข้อมูล DATA 2 (RN Knowledge) หรือไม่
  const isData2 = item.id && String(item.id).startsWith('RN');
  
// =======================================================
  //  [กรณีเป็น DATA 2] แสดงผลเฉพาะองค์ความรู้ React Native
  // =======================================================
  if (isData2) {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#F8FAFC' }}
        contentContainerStyle={{ padding: 20 }}
      >
        {/* 1. หัวข้อหลักหน้าจอ */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#3B82F6',
            textDecorationLine: 'underline',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          รายละเอียดบทเรียน
        </Text>

        {/* 2. รูปภาพบทเรียน */}
        {item.image && (
          <View
            style={{
              backgroundColor: '#E2E8F0',
              borderRadius: 16,
              padding: 16,
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Image
              source={typeof item.image === 'string' ? { uri: item.image } : item.image}
              style={{ width: '100%', height: 180, borderRadius: 12 }}
              resizeMode="contain"
            />
          </View>
        )}

        {/* 3. ชื่อหัวข้อบทเรียน (topic) */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#0F172A',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          {item.topic}
        </Text>

        {/* 4. หมวดหมู่บทเรียน (category & id) */}
        <Text
          style={{
            fontSize: 14,
            color: '#64748B',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          หมวดหมู่: {item.category} ({item.id})
        </Text>

        {/* 5. แนวคิด/คำอธิบายหลัก (concept หรือ summary) */}
        {(item.concept || item.summary) && (
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#0F172A', width: 90, lineHeight: 22 }}>
              คำอธิบาย :
            </Text>
            <Text style={{ flex: 1, fontSize: 15, color: '#DC2626', lineHeight: 22 }}>
              {item.concept || item.summary}
            </Text>
          </View>
        )}

        {/* 6. วัตถุประสงค์ (purpose) */}
        {item.purpose && item.purpose.length > 0 && (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#0F172A', marginBottom: 6 }}>
              🎯 วัตถุประสงค์ :
            </Text>
            {item.purpose.map((p, index) => (
              <Text key={index} style={{ fontSize: 14, color: '#334155', marginLeft: 10, lineHeight: 20 }}>
                • {p}
              </Text>
            ))}
          </View>
        )}

        {/* 7. ตัวอย่างโค้ด (code_example) */}
        {item.code_example && (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#0F172A', marginBottom: 6 }}>
              💻 ตัวอย่างโค้ด :
            </Text>
            <View style={{ backgroundColor: '#0F172A', padding: 12, borderRadius: 8 }}>
              <Text style={{ fontFamily: 'monospace', color: '#38BDF8', fontSize: 13, lineHeight: 18 }}>
                {item.code_example}
              </Text>
            </View>
          </View>
        )}

        {/* 8. คำอธิบายโค้ดเพิ่มเติม (explanation) */}
        {item.explanation && (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 }}>
              💡 คำอธิบายโค้ด :
            </Text>
            <Text style={{ fontSize: 14, color: '#475569', lineHeight: 20 }}>
              {item.explanation}
            </Text>
          </View>
        )}

        {/* 9. การนำไปใช้งานจริง (application) */}
        {item.application && (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 }}>
              🚀 การประยุกต์ใช้งาน :
            </Text>
            <Text style={{ fontSize: 14, color: '#475569', lineHeight: 20 }}>
              {item.application}
            </Text>
          </View>
        )}

        {/* 10. คำสำคัญ/แท็ก (keywords) */}
        {item.keywords && item.keywords.length > 0 && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {item.keywords.map((kw, index) => (
              <View key={index} style={{ backgroundColor: '#E0F2FE', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>
                <Text style={{ fontSize: 12, color: '#0369A1', fontWeight: 'bold' }}>#{kw}</Text>
              </View>
            ))}
          </View>
        )}


        <View style={{ height: 1, backgroundColor: '#E2E8F0', marginTop: 8 }} />
      </ScrollView>
    );
  }

// =======================================================
  //  [กรณีเป็น DATA 1] แสดงผลเฉพาะสมาชิกกลุ่ม / ทีมงาน
  // =======================================================

   return (
 	<ScrollView
   	style={styles.screen}
       contentContainerStyle={styles.scrollContent}
 	>
   	<Text style={styles.title}>ข้อมูล</Text>

   	<Image
     	source={item.image}
     	style={styles.detailImage}
   	/>

   	<Text style={styles.detailTitle}>
     	{item.topic}
   	</Text>

   	<Text style={styles.detailText}>
     	{item.detail}
   	</Text>
    
    <Text style={styles.detailTitle}>
    {item.title}
    </Text>

    <Text style={styles.topicSubText}>
      {item.subtitle}
    </Text>

    <View style={styles.statRow}>
     	<Text style={styles.statLabel}>บทบาท : </Text>
     	<Text style={styles.statValue}>
       	{item.role}
     	</Text>
    </View>

     <View style={styles.statRow}>
     	<Text style={styles.statLabel}>หน้าที่ :</Text>
     	<Text style={styles.statValue}>
       	{item.description}
     	</Text>
    </View>

 	</ScrollView>
   );
 }


