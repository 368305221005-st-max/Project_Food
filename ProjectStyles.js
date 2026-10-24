import { StyleSheet } from 'react-native';

 export const COLORS = {
   primary: '#4F46E5',
   background: '#F8FAFC',
   white: '#FFFFFF',
   textPrimary: '#1E293B',
   textSecondary: '#64748B',
   border: '#E2E8F0',
   danger: '#DC2626',
 };

 export default StyleSheet.create({
   screen: {
 	flex: 1,
 	backgroundColor: COLORS.background,
 	paddingHorizontal: 20,
 	paddingTop: 20,
   },

   scrollContent: {
 	paddingBottom: 30,
   },

   center: {
 	justifyContent: 'center',
 	alignItems: 'center',
   },

   title: {
 	fontSize: 24,
 	fontWeight: 'bold',
 	color: COLORS.primary,
 	textAlign: 'center',
 	textDecorationLine: 'underline',
 	marginBottom: 16,
   },

   subtitle: {
 	fontSize: 20,
 	color: COLORS.textSecondary,
 	textAlign: 'center',
 	marginTop: 10,
   },

   bodyText: {
 	fontSize: 16,
 	lineHeight: 24,
 	color: COLORS.textPrimary,
 	marginBottom: 12,
   },

   topicCard: {
 	flexDirection: 'row',
 	alignItems: 'center',
 	backgroundColor: COLORS.white,
 	borderWidth: 1,
 	borderColor: COLORS.border,
 	borderRadius: 12,
 	padding: 12,
 	marginBottom: 12,
   },

   listImage: {
 	width: 80,
 	height: 80,
 	borderRadius: 10,
 	marginRight: 14,
 	backgroundColor: COLORS.border,
   },

   topicInfo: {
 	flex: 1,
   },

   topicTitle: {

   fontSize: 18,
 	fontWeight: 'bold',
 	color: COLORS.textPrimary,
 	marginBottom: 6,
   },

   topicSubText: {
  
 	fontSize: 16,
 	color: COLORS.textSecondary,
 	marginBottom: 2,
    },

   linkText: {
 	fontSize: 14,
 	color: COLORS.primary,
 	fontWeight: 'bold',
 	marginTop: 4,
   },

   detailImage: {
 	width: '100%',
 	height: 240,
  resizeMode: 'contain', //  ปรับให้แสดงผลรูปเต็มใบ
 	borderRadius: 14,
 	backgroundColor: COLORS.border,
 	marginBottom: 16,
   },

   detailTitle: {
 	fontSize: 22,
 	fontWeight: 'bold',
 	color: COLORS.textPrimary,
 	textAlign: 'center',
 	marginBottom: 12,
  marginTop: 8,
   },

   detailText: {
 	fontSize: 16,
 	lineHeight: 22,
  textAlign: 'right',    // จัดชิดซ้ายให้เรียงเป็นระเบียบ
 	color: COLORS.danger,
 	marginBottom: 18,
  
   },

   statRow: {
 	flexDirection: 'row',
 	justifyContent: 'space-between',
 	borderBottomWidth: 1,
 	borderBottomColor: COLORS.border,
 	paddingVertical: 10,
   },

   statLabel: {
 	fontSize: 16,
  fontWeight: 'bold',
 	color: COLORS.textPrimary,
   },

   statValue: {
 	fontSize: 16,
 	textAlign: 'right',      // จัดชิดขวา
 	color: COLORS.danger,
   },

   infoBox: {
 	backgroundColor: COLORS.white,
 	borderWidth: 1,
 	borderColor: COLORS.border,
 	borderRadius: 10,
 	padding: 12,
 	marginTop: 16,
   },

   infoText: {
 	fontSize: 14,
 	color: COLORS.textSecondary,
   },

   button: {
 	backgroundColor: COLORS.primary,
 	paddingHorizontal: 18,
 	paddingVertical: 10,
 	borderRadius: 8,
 	marginTop: 14,
   },

   buttonText: {
 	color: COLORS.white,
 	fontWeight: 'bold',
   },
 });


