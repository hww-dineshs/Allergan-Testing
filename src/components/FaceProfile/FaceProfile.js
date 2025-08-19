// --- CONSTANTS / DATA ---
const PROFILES = [
  { name: "Anne", age: 54 },
  { name: "Elisabeth", age: 46 },
  { name: "Katerina", age: 38 },
  { name: "Olivia", age: 42 },
  { name: "Sonya", age: 50 },
  { name: "Sunny", age: 61 },
];
const A = (p) => `../../assets/${p}`;

// SOURCES 
const Sources = {
  Anne: {
    leftMost: [
      A('patients-profiles/anne/before/LP_BF.jpg'),
      A('patients-profiles/anne/immediately-after/LP_AF.jpg'),
      A('patients-profiles/anne/3-months-after/LP_3_AF.jpg'),
      A('patients-profiles/anne/4-months-after/LP_4_AF.jpg'),
      // tests
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_3 MONTHS AFTER_RGB.jpg'), // after
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_BEFORE_RGB.jpg'),         // before
      A('patients-profiles/anne/pinch-test//HA_JUV_ANNE_PINCH_TEST_BEFORE_RGB.jpeg'),       // before
      A('patients-profiles/anne/pinch-test/HA_JUV_ANNE_PINCH TEST_3 MONTHS AFTER_RGB.jpg'), // after
      // videos
      A('patients-profiles/anne/treatment-video/Anne Before.mp4'),
      A('patients-profiles/anne/treatment-video/Anne After.mp4'),
    ],
    left: [
      A('patients-profiles/anne/before/LF_BF.jpg'),
      A('patients-profiles/anne/immediately-after/LF_AF.jpg'),
      A('patients-profiles/anne/3-months-after/LF_3_AF.jpg'),
      A('patients-profiles/anne/4-months-after/LF_4_AF.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/anne/pinch-test//HA_JUV_ANNE_PINCH_TEST_BEFORE_RGB.jpeg'),
      A('patients-profiles/anne/pinch-test/HA_JUV_ANNE_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/treatment-video/Anne Before.mp4'),
      A('patients-profiles/anne/treatment-video/Anne After.mp4'),
    ],
    center: [
      A('patients-profiles/anne/before/FF_BF.jpg'),
      A('patients-profiles/anne/immediately-after/FF_AF.jpg'),
      A('patients-profiles/anne/3-months-after/FF_3_AF.jpg'),
      A('patients-profiles/anne/4-months-after/FF_4_AF.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/anne/pinch-test//HA_JUV_ANNE_PINCH_TEST_BEFORE_RGB.jpeg'),
      A('patients-profiles/anne/pinch-test/HA_JUV_ANNE_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/treatment-video/Anne Before.mp4'),
      A('patients-profiles/anne/treatment-video/Anne After.mp4'),
    ],
    right: [
      A('patients-profiles/anne/before/RF_BF.jpg'),
      A('patients-profiles/anne/immediately-after/RF_AF.jpg'),
      A('patients-profiles/anne/3-months-after/RF_3_AF.jpg'),
      A('patients-profiles/anne/4-months-after/RF_4_AF.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/anne/pinch-test//HA_JUV_ANNE_PINCH_TEST_BEFORE_RGB.jpeg'),
      A('patients-profiles/anne/pinch-test/HA_JUV_ANNE_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/treatment-video/Anne Before.mp4'),
      A('patients-profiles/anne/treatment-video/Anne After.mp4'),
    ],
    rightMost: [
      A('patients-profiles/anne/before/RP_BF.jpg'),
      A('patients-profiles/anne/immediately-after/RP_AF.jpg'),
      A('patients-profiles/anne/3-months-after/RP_3_AF.jpg'),
      A('patients-profiles/anne/4-months-after/RP_4_AF.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/smile-test/HA_JUV_ANNE_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/anne/pinch-test//HA_JUV_ANNE_PINCH_TEST_BEFORE_RGB.jpeg'),
      A('patients-profiles/anne/pinch-test/HA_JUV_ANNE_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/anne/treatment-video/Anne Before.mp4'),
      A('patients-profiles/anne/treatment-video/Anne After.mp4'),
    ],
  },

  // Elisabeth maps to folder
  Elisabeth: {
    leftMost: [
      A('patients-profiles/elisabeth/before/LP_BF.jpg'),
      A('patients-profiles/elisabeth/immediately-after/LP_AF.jpg'),
      A('patients-profiles/elisabeth/3-months-after/LP_3_AF.jpg'),
      A('patients-profiles/elisabeth/4-months-after/LP_4_AF.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_BEFORE_RGB.jpg'), // before
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_3 MONTHS AFTER_RGB.jpg'), // after
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth Before.mp4'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth After.mp4'),
    ],
    left: [
      A('patients-profiles/elisabeth/before/LF_BF.jpg'),
      A('patients-profiles/elisabeth/immediately-after/LF_AF.jpg'),
      A('patients-profiles/elisabeth/3-months-after/LF_3_AF.jpg'),
      A('patients-profiles/elisabeth/4-months-after/LF_4_AF.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth Before.mp4'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth After.mp4'),
    ],
    center: [
      A('patients-profiles/elisabeth/before/FF_BF.jpg'),
      A('patients-profiles/elisabeth/immediately-after/FF_AF.jpg'),
      A('patients-profiles/elisabeth/3-months-after/FF_3_AF.jpg'),
      A('patients-profiles/elisabeth/4-months-after/FF_4_AF.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth Before.mp4'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth After.mp4'),
    ],
    right: [
      A('patients-profiles/elisabeth/before/RF_BF.jpg'),
      A('patients-profiles/elisabeth/immediately-after/RF_AF.jpg'),
      A('patients-profiles/elisabeth/3-months-after/RF_3_AF.jpg'),
      A('patients-profiles/elisabeth/4-months-after/RF_4_AF.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth Before.mp4'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth After.mp4'),
    ],
    rightMost: [
      A('patients-profiles/elisabeth/before/RP_BF.jpg'),
      A('patients-profiles/elisabeth/immediately-after/RP_AF.jpg'),
      A('patients-profiles/elisabeth/3-months-after/RP_3_AF.jpg'),
      A('patients-profiles/elisabeth/4-months-after/RP_4_AF.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/smile-test/HA_JUV_ELISABETH_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/elisabeth/pinch-test/HA_JUV_ELISABETH_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth Before.mp4'),
      A('patients-profiles/elisabeth/treatment-video/Elisabeth After.mp4'),
    ],
  },

  Katerina: {
    leftMost: [
      A('patients-profiles/katerina/before/LP_BF.jpg'),
      A('patients-profiles/katerina/immediately-after/LP_BF.jpg'),
      A('patients-profiles/katerina/3-months-after/LP_3_AF.jpg'),
      A('patients-profiles/katerina/4-months-after/LP_4_AF.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/treatment-video/Katerina Before.mp4'),
      A('patients-profiles/katerina/treatment-video/Katerina After.mp4'),
    ],
    left: [
      A('patients-profiles/katerina/before/LF_BF.jpg'),
      A('patients-profiles/katerina/immediately-after/LF_BF.jpg'),
      A('patients-profiles/katerina/3-months-after/LF_3_AF.jpg'),
      A('patients-profiles/katerina/4-months-after/LF_4_AF.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/treatment-video/Katerina Before.mp4'),
      A('patients-profiles/katerina/treatment-video/Katerina After.mp4'),
    ],
    center: [
      A('patients-profiles/katerina/before/FF_BF.jpg'),
      A('patients-profiles/katerina/immediately-after/FF_BF.jpg'),
      A('patients-profiles/katerina/3-months-after/FF_3_AF.jpg'),
      A('patients-profiles/katerina/4-months-after/FF_4_AF.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/treatment-video/Katerina Before.mp4'),
      A('patients-profiles/katerina/treatment-video/Katerina After.mp4'),
    ],
    right: [
      A('patients-profiles/katerina/before/RF_BF.jpg'),
      A('patients-profiles/katerina/immediately-after/RF_BF.jpg'),
      A('patients-profiles/katerina/3-months-after/RF_3_AF.jpg'),
      A('patients-profiles/katerina/4-months-after/RF_4_AF.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/treatment-video/Katerina Before.mp4'),
      A('patients-profiles/katerina/treatment-video/Katerina After.mp4'),
    ],
    rightMost: [
      A('patients-profiles/katerina/before/RP_BF.jpg'),
      A('patients-profiles/katerina/immediately-after/RP_BF.jpg'),
      A('patients-profiles/katerina/3-months-after/RP_3_AF.jpg'),
      A('patients-profiles/katerina/4-months-after/RP_4_AF.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/smile-test/JUV_HA_KATERINA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_BEFORE_RGB.jpg'),
      A('patients-profiles/katerina/pinch-test/JUV_HA_KATERINA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/katerina/treatment-video/Katerina Before.mp4'),
      A('patients-profiles/katerina/treatment-video/Katerina After.mp4'),
    ],
  },

  Olivia: {
    leftMost: [
      A('patients-profiles/olivia/before/LP_BF.jpg'),
      A('patients-profiles/olivia/immediately-after/HA_JUV_OLIVIA_LP_AFTER_RGB.jpg'),
      A('patients-profiles/olivia/3-months-after/LP_3_AF.jpg'),
      A('patients-profiles/olivia/4-months-after/LP_4_AF.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/treatment-video/Olivia Before.mp4'),
      A('patients-profiles/olivia/treatment-video/Olivia After.mp4'),
    ],
    left: [
      A('patients-profiles/olivia/before/LF_BF.jpg'),
      A('patients-profiles/olivia/immediately-after/HA_JUV_OLIVIA_LF_AFTER_RGB.jpg'),
      A('patients-profiles/olivia/3-months-after/LF_3_AF.jpg'),
      A('patients-profiles/olivia/4-months-after/LF_4_AF.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/treatment-video/Olivia Before.mp4'),
      A('patients-profiles/olivia/treatment-video/Olivia After.mp4'),
    ],
    center: [
      A('patients-profiles/olivia/before/FF_BF.jpg'),
      A('patients-profiles/olivia/immediately-after/HA_JUV_OLIVIA_FF_AFTER_RGB.jpg'),
      A('patients-profiles/olivia/3-months-after/FF_3_AF.jpg'),
      A('patients-profiles/olivia/4-months-after/FF_4_AF.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/treatment-video/Olivia Before.mp4'),
      A('patients-profiles/olivia/treatment-video/Olivia After.mp4'),
    ],
    right: [
      A('patients-profiles/olivia/before/RP_BF.jpg'),
      A('patients-profiles/olivia/immediately-after/HA_JUV_OLIVIA_RF_AFTER_RGB.jpg'),
      A('patients-profiles/olivia/3-months-after/RF_3_AF.jpg'),
      A('patients-profiles/olivia/4-months-after/RF_4_AF.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/treatment-video/Olivia Before.mp4'),
      A('patients-profiles/olivia/treatment-video/Olivia After.mp4'),
    ],
    rightMost: [
      A('patients-profiles/olivia/before/RF_BF.jpg'),
      A('patients-profiles/olivia/immediately-after/HA_JUV_OLIVIA_RP_AFTER_RGB.jpg'),
      A('patients-profiles/olivia/3-months-after/RP_3_AF.jpg'),
      A('patients-profiles/olivia/4-months-after/RP_4_AF.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/smile-test/HA_JUV_OLIVIA_SMILE TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_BEFORE_RGB.jpg'),
      A('patients-profiles/olivia/pinch-test/HA_JUV_OLIVIA_PINCH TEST_3 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/olivia/treatment-video/Olivia Before.mp4'),
      A('patients-profiles/olivia/treatment-video/Olivia After.mp4'),
    ],
  },

  Sonya: {
    leftMost: [
      A('patients-profiles/sonya/before/MAR_LP_BF.jpg'),
      A('patients-profiles/sonya/immediately-after/LP_APR_BF.jpg'),
      A('patients-profiles/sonya/3-months-after/LP_APR_AF.jpg'),
      A('patients-profiles/sonya/4-months-after/LP_4_AF.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/treatment-video/Sonya Before.mp4'),
      A('patients-profiles/sonya/treatment-video/Sonya After.mp4'),
    ],
    left: [
      A('patients-profiles/sonya/before/MAR_LF_BF.jpg'),
      A('patients-profiles/sonya/immediately-after/LF_APR_BF.jpg'),
      A('patients-profiles/sonya/3-months-after/LF_APR_AF.jpg'),
      A('patients-profiles/sonya/4-months-after/LF_4_AF.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/treatment-video/Sonya Before.mp4'),
      A('patients-profiles/sonya/treatment-video/Sonya After.mp4'),
    ],
    center: [
      A('patients-profiles/sonya/before/MAR_FF_BF.jpg'),
      A('patients-profiles/sonya/immediately-after/FF_APR_BF.jpg'),
      A('patients-profiles/sonya/3-months-after/FF_APR_AF.jpg'),
      A('patients-profiles/sonya/4-months-after/FF_4_AF.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/treatment-video/Sonya Before.mp4'),
      A('patients-profiles/sonya/treatment-video/Sonya After.mp4'),
    ],
    right: [
      A('patients-profiles/sonya/before/MAR_RF_BF.jpg'),
      A('patients-profiles/sonya/immediately-after/RF_APR_BF.jpg'),
      A('patients-profiles/sonya/3-months-after/RF_APR_AF.jpg'),
      A('patients-profiles/sonya/4-months-after/RF_4_AF.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/treatment-video/Sonya Before.mp4'),
      A('patients-profiles/sonya/treatment-video/Sonya After.mp4'),
    ],
    rightMost: [
      A('patients-profiles/sonya/before/MAR_RP_BF.jpg'),
      A('patients-profiles/sonya/immediately-after/RP_APR_BF.jpg'),
      A('patients-profiles/sonya/3-months-after/RP_APR_AF.jpg'),
      A('patients-profiles/sonya/4-months-after/RP_4_AF.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/smile-test/JUV_HA_SONYA_ST_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_MAR_REFORE_RGB.jpg'),
      A('patients-profiles/sonya/pinch-test/JUV_HA_SONYA_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sonya/treatment-video/Sonya Before.mp4'),
      A('patients-profiles/sonya/treatment-video/Sonya After.mp4'),
    ],
  },

  Sunny: {
    leftMost: [
      A('patients-profiles/sunny/before/MAR_LP_BF.jpg'),
      A('patients-profiles/sunny/immediately-after/LP_AF.jpg'),
      A('patients-profiles/sunny/3-months-after/LP_AF.jpg'),
      A('patients-profiles/sunny/4-months-after/LP_4_AF.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_4 MONTHS AFTER-RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sunny/treatment-video/Sunny before.mp4'),
      A('patients-profiles/sunny/treatment-video/Sunny After.mp4'),
    ],
    left: [
      A('patients-profiles/sunny/before/MAR_LF_BF.jpg'),
      A('patients-profiles/sunny/immediately-after/LF_AF.jpg'),
      A('patients-profiles/sunny/3-months-after/LF_AF.jpg'),
      A('patients-profiles/sunny/4-months-after/LF_4_AF.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_4 MONTHS AFTER-RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sunny/treatment-video/Sunny before.mp4'),
      A('patients-profiles/sunny/treatment-video/Sunny After.mp4'),
    ],
    center: [
      A('patients-profiles/sunny/before/MAR_FF_BF.jpg'),
      A('patients-profiles/sunny/immediately-after/FF_AF.jpg'),
      A('patients-profiles/sunny/3-months-after/FF_AF.jpg'),
      A('patients-profiles/sunny/4-months-after/FF_4_AF.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_4 MONTHS AFTER-RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sunny/treatment-video/Sunny before.mp4'),
      A('patients-profiles/sunny/treatment-video/Sunny After.mp4'),
    ],
    right: [
      A('patients-profiles/sunny/before/MAR_RF_BF.jpg'),
      A('patients-profiles/sunny/immediately-after/RF_AF.jpg'),
      A('patients-profiles/sunny/3-months-after/RF_AF.jpg'),
      A('patients-profiles/sunny/4-months-after/RF_4_AF.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_4 MONTHS AFTER-RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sunny/treatment-video/Sunny before.mp4'),
      A('patients-profiles/sunny/treatment-video/Sunny After.mp4'),
    ],
    rightMost: [
      A('patients-profiles/sunny/before/MAR_RP_BF.jpg'),
      A('patients-profiles/sunny/immediately-after/RP_AF.jpg'),
      A('patients-profiles/sunny/3-months-after/RP_AF.jpg'),
      A('patients-profiles/sunny/4-months-after/RP_4_AF.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/smile-test/JUV_HA_SUNNY_ST_4 MONTHS AFTER-RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_MAR_BEFORE_RGB.jpg'),
      A('patients-profiles/sunny/pinch-test/JUV_HA_SUNNY_PT_4 MONTHS AFTER_RGB.jpg'),
      A('patients-profiles/sunny/treatment-video/Sunny before.mp4'),
      A('patients-profiles/sunny/treatment-video/Sunny After.mp4'),
    ],
  },
};



const DISCLAIMERS = {
  Anne: `
'Before' photo was taken before all treatment. The first 'after' photo was taken immediately after HArmonyCa™ treatment. The second 'after' photo was taken 3 months after HArmonyCa™ treatment. The third 'after' photo was taken 4 months after HArmonyCa™ treatment and 1 month after JUVÉDERM® treatment.
Smile and Pinch test - 'Before' photo was taken before all treatment. The 'after' photo was taken 3 months after HArmonyCa™ treatment.
'Before' video was taken before all treatment. The 'after' video was taken 3 months after HArmonyCa™ treatment.
Our model, Anne, received a total of 4.6 mL of HArmonyCa™ in the cheeks and jawline, then 12 weeks later received a total of 14.5 mL of JUVÉDERM® in the cheeks, jawline, lips, marionette lines, nasolabial folds and tear trough.
Disclaimers: Individual results may vary.
Patients received free treatment and follow up, payment for their participation and their expenses paid for.
© Allergan Aesthetics
  `,
  Elisabeth: `
'Before' photo was taken before all treatment. The first 'after' photo was taken immediately after HArmonyCa™ treatment. The second 'after' photo was taken 3 months after HArmonyCa™ treatment. The third 'after' photo was taken 4 months after HArmonyCa™ treatment and 1 month after JUVÉDERM® treatment.
Smile and Pinch test - 'Before' photo was taken before all treatment. The 'after' photo was taken 3 months after HArmonyCa™ treatment.
'Before' video was taken before all treatment. The 'after' video was taken 3 months after HArmonyCa™ treatment.
Our model, Elisabeth, received a total of 5 mL of HArmonyCa™ in the cheeks and jawline, then 12 weeks later received a total of 12 mL of JUVÉDERM® in the cheeks, jawline, lips, nasolabial folds, temples and tear trough.
Disclaimers: Individual results may vary.
Patients received free treatment and follow up, payment for their participation and their expenses paid for.
© Allergan Aesthetics
  `,
  Katerina: `
'Before' photo was taken before all treatment. The first 'after' photo was taken 1 month after JUVÉDERM® treatment. The second 'after' photo was taken 1 month after JUVÉDERM® treatment and immediately after HArmonyCa™ treatment. The third 'after' photo was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
Smile and Pinch test - 'Before' photo was taken 1 month after JUVÉDERM® treatment and before HArmonyCa™ treatment. The 'after' photo was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
'Before' video was taken 1 month after JUVÉDERM® treatment and before HArmonyCa™ treatment. The 'after' video was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
Our model, Katerina, received a total of 11.6 mL of JUVÉDERM® in the cheeks, jawline, marionette lines, nasolabial folds, temples and tear trough, then 4 weeks later received a total of 4.8 mL of HArmonyCa™ in the cheeks and jawline.
Disclaimers: Individual results may vary.
Patients received free treatment and follow up, payment for their participation and their expenses paid for.
© Allergan Aesthetics
  `,
  Olivia: `
'Before' photo was taken before all treatment. The first 'after' photo was taken immediately after HArmonyCa™ treatment. The second 'after' photo was taken 3 months after HArmonyCa™ treatment. The third 'after' photo was taken 4 months after HArmonyCa™ treatment and 1 month after JUVÉDERM® treatment.
Smile and Pinch test - 'Before' photo was taken before all treatment. The 'after' photo was taken 3 months after HArmonyCa™ treatment.
'Before' video was taken before all treatment. The 'after' video was taken 3 months after HArmonyCa™ treatment.
Our model, Olivia, received a total of 5 mL of HArmonyCa™ in the cheeks and jawline, then 12 weeks later received a total of 12 mL of JUVÉDERM® in the cheeks, jawline, nasolabial folds, temples and tear trough.
Disclaimers: Individual results may vary.
Patients received free treatment and follow up, payment for their participation and their expenses paid for.
© Allergan Aesthetics
  `,
  Sonya: `
'Before' photo was taken before all treatment. The first 'after' photo was taken 1 month after JUVÉDERM® treatment. The second 'after' photo was taken 1 month after JUVÉDERM® treatment and immediately after HArmonyCa™ treatment. The third 'after' photo was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
Smile and Pinch test - 'Before' photo was taken 1 month after JUVÉDERM® treatment and before HArmonyCa™ treatment. The 'after' photo was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
'Before' video was taken 1 month after JUVÉDERM® treatment and before HArmonyCa™ treatment. The 'after' video was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
Our model, Sonya, received a total of 14.8 mL of JUVÉDERM® in the cheeks, jawline, lips, marionette lines, nasolabial folds, temples and tear trough, then 4 weeks later received a total of 4.8 mL of HArmonyCa™ in the cheeks and jawline.
Disclaimers: Individual results may vary.
Patients received free treatment and follow up, payment for their participation and their expenses paid for.
© Allergan Aesthetics
  `,
  Sunny: `
'Before' photo was taken before all treatment. The first 'after' photo was taken 1 month after JUVÉDERM® treatment. The second 'after' photo was taken 1 month after JUVÉDERM® treatment and immediately after HArmonyCa™ treatment. The third 'after' photo was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
Smile and Pinch test - 'Before' photo was taken 1 month after JUVÉDERM® treatment and before HArmonyCa™ treatment. The 'after' photo was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
'Before' video was taken 1 month after JUVÉDERM® treatment and before HArmonyCa™ treatment. The 'after' video was taken 4 months after JUVÉDERM® treatment and 3 months after HArmonyCa™ treatment.
Our model, Sunny, received a total of 17.6 mL of JUVÉDERM® in the cheeks, jawline, nasolabial folds, temples and tear trough, then 4 weeks later received a total of 2.4 mL of HArmonyCa™ in the cheeks and jawline.
Disclaimers: Individual results may vary.
Patients received free treatment and follow up, payment for their participation and their expenses paid for.
© Allergan Aesthetics
  `,
};

// One table image per profile
const TABLE_IMAGES = {
  Anne: A('patients-profiles/anne/table-info.svg'),
  Elisabeth: A('patients-profiles/elisabeth/table-info.svg'),
  Katerina: A('patients-profiles/katerina/table-info.svg'),
  Olivia: A('patients-profiles/olivia/table-info.svg'),
  Sonya: A('patients-profiles/sonya/table-info.svg'),
  Sunny: A('patients-profiles/sunny/table-info.svg'),
};

const INFO_ICON = A('logos/info_logo.svg');

const PRODUCT_VOLUME_IMG = {
  Anne: A('patients-profiles/anne/product-volume.svg'),
  Elisabeth: A('patients-profiles/elisabeth/product-volume.svg'),
  Katerina: A('patients-profiles/katerina/product-volume.svg'),
  Olivia: A('patients-profiles/olivia/product-volume.svg'),
  Sonya: A('patients-profiles/sonya/product-volume.svg'),
  Sunny: A('patients-profiles/sunny/product-volume.svg'),
};

// Profiles that follow the HArmonyCa caption pattern
const HCA_PROFILES = new Set(['Anne', 'Elisabeth', 'Olivia']);

// What to show under each of the 4 tiles for HCA profiles
const HCA_CAPTIONS = [
  // Tile 1
  { l1: 'Before', l2: '\u00A0', l3: '' },
  // Tile 2
  { l1: 'Immediately after', l2: 'HArmonyCa\u2122', l3: '' },
  // Tile 3
  { l1: '3 months after', l2: 'HArmonyCa\u2122', l3: '' },
  // Tile 4
  { l1: '4 months after', l2: 'HArmonyCa\u2122', l3: '1 month after JUV\u00C9DERM<sup>®</sup>' },
];

// JUVÉDERM-first profiles 
const JUV_PROFILES = new Set(['Katerina', 'Sonya', 'Sunny']);

const JUV_CAPTIONS = [
  // Tile 1
  { l1: 'Before', l2: '\u00A0', l3: '', info: false },
  // Tile 2
  { l1: '1 month after', l2: 'JUV\u00C9DERM<sup>®</sup>', l3: 'JUV\u00C9DERM<sup>®</sup> only', info: false },
  // Tile 3
  { l1: '1 month after', l2: 'JUV\u00C9DERM<sup>®</sup>', l3: 'Immediately after HArmonyCa\u2122', info: true },
  // Tile 4
  { l1: '4 months after', l2: 'JUV\u00C9DERM<sup>®</sup>', l3: '3 months after HArmonyCa\u2122', info: true },
];

// const VIDEO_SCHEMES = {
//   HCA: {
//     left:  { l1: 'Before',           l2: '',                 l3: '',                             l4: '' },
//     right: { l1: '3 months after',   l2: '',                 l3: '(HArmonyCa\u2122 only)',       l4: '' },
//   },
//   JUV: {
//     left:  { l1: 'Before',           l2: 'HArmonyCa\u2122',  l3: '1 month after',                l4: 'JUV\u00C9DERM<sup>®</sup>' },
//     right: { l1: '3 months after',   l2: 'HArmonyCa\u2122',  l3: '4 months after',               l4: 'JUV\u00C9DERM<sup>®</sup>' },
//   },
// };

// Static caption sets by profile group
const CAPTION_SETS = {
  hca: { // Anne, Elisabeth, Olivia
    before: A('texts/caption-before.svg'),
    after: A('texts/caption-3months-after-harmonyca-only.svg')
  },
  hca_juve: { // Katerina, Sonya, Sunny
    before: A('texts/caption-before-hca-1mo-juvederm.svg'),
    after: A('texts/caption-3mo-hca-4mo-juvederm.svg')
  }
};

// Groups
const GROUP_HCA = new Set(['Anne', 'Elisabeth', 'Olivia']);
const GROUP_HCA_JUVE = new Set(['Katerina', 'Sonya', 'Sunny']);

// bump ™ / ® size a touch inside captions & disclaimers
document.head.insertAdjacentHTML(
  'beforeend',
  '<style>.face-image-text sup, .disclaimer sup{font-size:.9em;line-height:0;}</style>'
);


// --- STATE ---
let selectedIndex = 0;
let selectedPerson = PROFILES[selectedIndex].name;
let currentPosition = 'center';
let sliderPositions = [250, 250];
let dragging = { active: false, which: -1 };
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// global zoom (applies to all four tiles)
let zoomScale = 1;
const ZOOM_MIN = 1;
const ZOOM_MAX = 2.5;
const ZOOM_STEP = 0.25;
// --- PAN (applies to all four tiles, like zoom) ---
let pan = { x: 0, y: 0 };
let panning = { active: false, startX: 0, startY: 0, originX: 0, originY: 0 };

// --- DOM HOOKS ---
const el = {
  burger: document.querySelector('.hamberger-icon'),
  options: document.querySelector('.options'),
  header2: document.querySelector('.header-2'),
  selectedName: document.querySelector('.selected-name'),
  leftArrow: document.querySelector('.left-arrow'),
  rightArrow: document.querySelector('.right-arrow'),
  faceIcons: Array.from(document.querySelectorAll('.face-icon')),
  disclaimerBody: document.querySelector('.disclaimer .disclaimer-body'),

  faceImages: [
    document.querySelector('.img-0'),
    document.querySelector('.img-1'),
    document.querySelector('.img-2'),
    document.querySelector('.img-3'),
  ],

  // tests
  smileBefore: document.querySelector('.smile-before'),
  smileAfter: document.querySelector('.smile-after'),
  pinchBefore: document.querySelector('.pinch-before'),
  pinchAfter: document.querySelector('.pinch-after'),
  sliders: Array.from(document.querySelectorAll('.test-image-wrapper')),
  thumbs: Array.from(document.querySelectorAll('.slider-thumb')),

  // videos
  video1: document.querySelector('.video-1'),
  video2: document.querySelector('.video-2'),

  // product button
  productBtn: document.querySelector('.product_and_volume'),
  // captionBlocks: Array.from(document.querySelectorAll('.face-images .face-tile .face-image-text')),

};


// --- PAN with drag/touch on any image ---
const grid = document.querySelector('.face-images');

// --- one global tooltip (hidden by default) ---
const pvTooltip = (() => {
  const node = document.createElement('div');
  node.id = 'pv-tooltip';
  node.style.cssText = `
    position:absolute; display:none; z-index:10000;
    background:#fff; border-radius:6px; padding:8px;
    box-shadow:0 2px 8px rgba(0,0,0,0.2);
    max-width: 240px; /* Limit the width of the tooltip */
  `;
  const img = document.createElement('img');
  img.id = 'pv-tooltip-img';
  img.alt = 'Product Volume';
  img.style.cssText = 'max-width:100%; height:auto; display:block;';
  node.appendChild(img);
  document.body.appendChild(node);

  const show = (src, iconElement) => {
    if (!src || !iconElement) return;
    img.src = src;

    const iconRect = iconElement.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    let top = iconRect.bottom + window.scrollY + 5;
    let left = iconRect.left + window.scrollX + (iconRect.width / 2) - (nodeRect.width / 2);

    // Adjust if the tooltip goes off-screen
    if (left < 0) {
      left = 5;
    }
    if (left + nodeRect.width > window.innerWidth) {
      left = window.innerWidth - nodeRect.width - 5;
    }
    if (top + nodeRect.height > window.innerHeight) {
      top = iconRect.top + window.scrollY - nodeRect.height - 5;
    }


    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
    node.style.display = 'block';
  };

  const hide = () => {
    node.style.display = 'none';
  };

  return {
    show,
    hide
  };
})();

// --- ensure an info icon lives at the end of the 4th tile caption ---
let infoIconEl = null;
// --- ensure info icon(s) on the correct tile(s)/line(s) ---
let infoIcon3El = null; // for tile 3, line 3
let infoIcon4El = null; // for tile 4, line 3

function makeInfoIcon() {
  const icon = document.createElement('img');
  icon.src = INFO_ICON;
  icon.alt = 'Info';
  icon.className = 'info-icon';
  icon.style.cssText = 'width:16px;height:16px;margin-left:6px;cursor:pointer;vertical-align:middle;';

  icon.addEventListener('mouseenter', (e) => {
    const src = PRODUCT_VOLUME_IMG[selectedPerson];
    pvTooltip.show(src, e.target);
  });

  icon.addEventListener('mouseleave', () => {
    pvTooltip.hide();
  });

  return icon;
}

function ensureInfoIcons() {
  const tiles = Array.from(document.querySelectorAll('.face-images .face-tile'));
  if (tiles.length < 4) return;

  // Helper: attach (or reattach) an icon to tile i (0-based), on that tile's 3rd <p>
  function attachIcon(iconRefName, tileIndex) {
    const tile = tiles[tileIndex];
    const caption = tile?.querySelector('.face-image-text');
    if (!caption) return null;

    const ps = caption.querySelectorAll('p');
    const targetLine = ps[2] || ps[ps.length - 1]; // 3rd line
    if (!targetLine) return null;

    let iconEl = (iconRefName === 'icon3') ? infoIcon3El : infoIcon4El;
    if (!iconEl) iconEl = makeInfoIcon();

    // If it's already somewhere else, reattach
    if (iconEl.parentElement !== targetLine) targetLine.appendChild(iconEl);

    // Save back
    if (iconRefName === 'icon3') infoIcon3El = iconEl;
    else infoIcon4El = iconEl;

    return iconEl;
  }

  // Show icons based on profile set
  if (JUV_PROFILES.has(selectedPerson)) {
    // Tile 3 & 4 get icons
    attachIcon('icon3', 2);
    attachIcon('icon4', 3);
  } else if (HCA_PROFILES.has(selectedPerson)) {
    // Only tile 4 gets icon
    // (Detach tile 3 icon if present)
    if (infoIcon3El && infoIcon3El.parentElement) infoIcon3El.parentElement.removeChild(infoIcon3El);
    infoIcon3El = null;

    attachIcon('icon4', 3);
  } else {
    // Neither should have icons
    if (infoIcon3El && infoIcon3El.parentElement) infoIcon3El.parentElement.removeChild(infoIcon3El);
    if (infoIcon4El && infoIcon4El.parentElement) infoIcon4El.parentElement.removeChild(infoIcon4El);
    infoIcon3El = null;
    infoIcon4El = null;
  }
}

function updateInfoTooltip() {
  // handlers already use PRODUCT_VOLUME_IMG[selectedPerson]; just ensure attachments exist
  ensureInfoIcons();
}


// Product sheet modal
// const modal = (() => {
//   const overlay = document.createElement('div');
//   overlay.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.45); display:none; align-items:center; justify-content:center; z-index:9999;`;
//   const box = document.createElement('div');
//   box.style.cssText = `width:720px; height:600px; background:#fff; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center;`;
//   const img = document.createElement('img');
//   img.src = A('images/product_sheet.svg'); img.alt = 'product sheet'; img.style.maxWidth = '100%'; img.style.maxHeight = '100%';
//   const close = document.createElement('button');
//   close.textContent = '×'; close.setAttribute('aria-label', 'Close');
//   close.style.cssText = `position:absolute; top:6px; right:10px; font-size:24px; line-height:1; background:transparent; border:none; cursor:pointer;`;
//   box.appendChild(img); box.appendChild(close); overlay.appendChild(box); document.body.appendChild(overlay);
//   overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.style.display = 'none'; });
//   close.addEventListener('click', () => (overlay.style.display = 'none'));
//   return { open: () => (overlay.style.display = 'flex'), close: () => (overlay.style.display = 'none') };
// })();

/* ===== Reusable scroll lock (tablet/iOS safe) ===== */
const scrollLock = (() => {
  let locks = 0;
  let scrollY = 0;
  const prevent = (e) => e.preventDefault();

  function apply() {
    scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    const b = document.body;

    // Freeze body at current offset so the viewport can't move
    b.style.position = 'fixed';
    b.style.top = `-${scrollY}px`;
    b.style.left = '0';
    b.style.right = '0';
    b.style.width = '100%';
    b.style.overflow = 'hidden';

    // Eat gestures so background never gets them via scroll chaining
    window.addEventListener('touchmove', prevent, { passive: false });
    window.addEventListener('wheel', prevent, { passive: false });
  }

  function release() {
    const b = document.body;

    // Restore body and jump back to the exact scroll position
    b.style.position = '';
    b.style.top = '';
    b.style.left = '';
    b.style.right = '';
    b.style.width = '';
    b.style.overflow = '';

    window.removeEventListener('touchmove', prevent);
    window.removeEventListener('wheel', prevent);
    window.scrollTo(0, scrollY);
  }

  return {
    lock()   { if (++locks === 1) apply(); },
    unlock() { if (locks > 0 && --locks === 0) release(); }
  };
})();



// Product sheet modal
const modal = (() => {
  const overlay = document.createElement('div');
  overlay.style.cssText =
'position:fixed; inset:0; background:rgba(0,0,0,0.45); display:none; align-items:center; justify-content:center; z-index:9999; overscroll-behavior:contain; touch-action:none;';  const box = document.createElement('div');
  box.style.cssText =
    'width:720px; height:600px; background:#fff; position:relative; overflow:visible; display:flex; align-items:center; justify-content:center; padding: 20px;';
  const img = document.createElement('img');
  img.alt = 'product sheet';
  img.style.maxWidth = '100%';
  img.style.maxHeight = '100%';

  const close = document.createElement('button');
  const closeIcon = document.createElement('img');
  closeIcon.src = A('icons/cross_button.svg');
  closeIcon.alt = '';
  close.appendChild(closeIcon);
  close.setAttribute('aria-label', 'Close');
  close.style.cssText =
    'position:absolute; top:0; right:0; transform: translate(14px, -12px); font-size:24px; line-height:1; background:transparent; border:none; cursor:pointer;';

  box.appendChild(img);
  box.appendChild(close);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // --- NEW: centralized close + Esc handling + scroll unlock ---
  const closeAndCleanup = () => {
    overlay.style.display = 'none';
    scrollLock.unlock();
    document.removeEventListener('keydown', escClose);
  };
  const escClose = (e) => {
    if (e.key === 'Escape') closeAndCleanup();
  };

  // backdrop click closes
 // don't close on backdrop click (mirror imgModal behavior)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    e.stopPropagation(); // swallow the click; keep modal open
  }
});

  // X button closes
  close.addEventListener('click', closeAndCleanup);

  // Keep setPerson EXACTLY as you had it
  function setPerson(name) {
    img.src = TABLE_IMAGES[name] || A('images/product_sheet.svg');
    img.alt = `${name} product sheet`;
  }

  // initialize to first profile so it's never empty
  setPerson(PROFILES[0].name);

  return {
    open: () => {
      overlay.style.display = 'flex';
      scrollLock.lock();                 // NEW: lock page scroll
      document.addEventListener('keydown', escClose); // NEW: Esc to close
    },
    close: closeAndCleanup,              // NEW: shared closer
    setPerson,                           // unchanged
  };
})();


function getModalCaption(personName, tileIdx) {
  let caps;
  if (HCA_PROFILES.has(personName)) caps = HCA_CAPTIONS;
  else if (JUV_PROFILES.has(personName)) caps = JUV_CAPTIONS;
  else {
    caps = [
      { l1: 'Before', l2: '', l3: '' },
      { l1: 'Immediately after', l2: 'HArmonyCa\u2122', l3: '' },
      { l1: '3 months after', l2: 'HArmonyCa\u2122', l3: '' },
      { l1: '4 months after', l2: 'HArmonyCa\u2122', l3: '' },
    ];
  }
  const c = caps[tileIdx] || {};
  // keep <sup> tags so ®/™ render correctly
  const line1 = [c.l1, c.l2].filter(Boolean).join(' ').trim();
  const line2 = c.l3 ? `(${c.l3})` : '';
  return { line1, line2 };
}



// Image preview modal (per-tile “zoomAll” icon)
const imgModal = (() => {
  const overlay = document.createElement('div');
overlay.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.75); display:none; align-items:center; justify-content:center; z-index:10000; overscroll-behavior:contain; touch-action:none;`;  const box = document.createElement('div');
  box.style.cssText = `
  width: 640px; height: 480px;
  max-width: 95vw; max-height: 85vh;
  border-radius: 10px;
  position: relative;
  display: flex; align-items: center; justify-content: center;
`;
  const img = document.createElement('img');
  img.alt = 'preview';
  img.style.cssText = `
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 10px;`

const caption = document.createElement('div');
caption.className = 'img-modal-caption';
caption.style.cssText = `
  position:absolute; left:16px; bottom:14px;
  display:flex; flex-direction:column; gap:2px;
  padding:0;                   /* no pill */
  background:transparent;      /* no background */
  border-radius:0;             /* no rounded box */
  box-shadow:none;             /* no shadow */
  font-family:"Bricolage Grotesque", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color:#000;           /* use site text color */
`;
caption.innerHTML = `
  <p class="cap-main" style="margin:0; font-weight:400; font-size:14px; line-height:16px; letter-spacing:-0.56px;"></p>
  <p class="cap-sub"  style="margin:0; font-weight:400; font-size:12px; line-height:1.2;  letter-spacing:-0.04em;"></p>
`;

  // const close = document.createElement('button');
  // close.className = 'img-modal-close'; // Use class for styling
  // close.innerHTML = '&times;'; // Use times symbol for 'X'
  // close.setAttribute('aria-label', 'Close');
  const close = document.createElement('button');
  close.className = 'img-modal-close'; // keep existing CSS hooks
  close.setAttribute('aria-label', 'Close');

  // use SVG icon instead of text
  const closeIcon = document.createElement('img');
  closeIcon.src = A('icons/cross_button.svg'); // ../../assets/icons/cross_button.svg
  closeIcon.alt = '';                           // button already has aria-label
  closeIcon.style.cssText = 'width:20px;height:20px;display:block;pointer-events:none;';
  close.appendChild(closeIcon);


  const prev = document.createElement('button');
  prev.className = 'img-modal-nav img-modal-prev';
  prev.innerHTML = '&#10094;'; // Left arrow
  prev.setAttribute('aria-label', 'Previous image');

  const next = document.createElement('button');
  next.className = 'img-modal-nav img-modal-next';
  next.innerHTML = '&#10095;'; // Right arrow
  next.setAttribute('aria-label', 'Next image');

  box.appendChild(img);
box.appendChild(caption);   
  box.appendChild(close);
  box.appendChild(prev);
  box.appendChild(next);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  let currentIndex = 0;
  const images = [];

 const updateImage = () => {
  img.src = images[currentIndex];
  const { line1, line2 } = getModalCaption(selectedPerson, currentIndex);
  caption.querySelector('.cap-main').innerHTML = line1;  // keep <sup>
  const sub = caption.querySelector('.cap-sub');
  sub.innerHTML = line2;                                  // keep <sup>
  sub.style.display = line2 ? 'block' : 'none';
};


  // overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.style.display = 'none'; });
  // Don't close on backdrop click anymore
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      e.stopPropagation(); // ignore outside clicks
    }
  });


  // close.addEventListener('click', () => (overlay.style.display = 'none'));
 const closeModal = () => {
 overlay.style.display = 'none';
   scrollLock.unlock();
   document.removeEventListener('keydown', onKeyDown);
 };
 close.addEventListener('click', closeModal);


  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  // Close via Esc; allow arrow keys for nav too
  const onKeyDown = (e) => {
    // if (e.key === 'Escape') {
    //   overlay.style.display = 'none';
    //   document.body.classList.remove('no-scroll');
    //   document.removeEventListener('keydown', onKeyDown);
    if (e.key === 'Escape'){ closeModal();
    } else if (e.key === 'ArrowRight') {
      next.click();
    } else if (e.key === 'ArrowLeft') {
      prev.click();
    }
  };

  return {
    open: (src, index) => {
      images.length = 0; // Clear previous images
      const personImages = Sources[selectedPerson][currentPosition];
      for (let i = 0; i < 4; i++) {
        images.push(personImages[i]);
      }
      currentIndex = index;
      updateImage();
      overlay.style.display = 'flex';
      // document.body.classList.add('no-scroll');   // <— ADD THIS LINE
      scrollLock.lock();
      document.addEventListener('keydown', onKeyDown);
    },
    close: () => {
      // overlay.style.display = 'none';
      // document.body.classList.remove('no-scroll'); // <— remove lock when closed programmatically
      closeModal();
    }
  };
})();

// --- HELPERS ---
function setHeaderName() {
  const { name, age } = PROFILES[selectedIndex];
  el.selectedName.innerHTML = `${name},<span class="age"> age ${age}</span>`;
}

function setActiveFaceIcon() {
  if (!el.faceIcons || !el.faceIcons.length) return;
  el.faceIcons.forEach((node) => node.classList.remove('active'));
  const map = { leftMost: 0, left: 1, center: 2, right: 3, rightMost: 4 };
  const idx = map[currentPosition] ?? 2;
  if (el.faceIcons[idx]) el.faceIcons[idx].classList.add('active');
}
function resetZoom() {
  zoomScale = ZOOM_MIN;  // 1
  pan.x = 0;
  pan.y = 0;
  grid.classList.remove('can-pan'); // also clears grab cursor
}


function applyZoomAll() {
  // use the first image as reference size
  const ref = el.faceImages[0];
  if (!ref) return;

  const w = ref.clientWidth || 0;
  const h = ref.clientHeight || 0;

  // how far we can pan at the current zoom
  const maxX = Math.max(0, (w * zoomScale - w) / 2);
  const maxY = Math.max(0, (h * zoomScale - h) / 2);

  // clamp global pan, so we never show blank space
  pan.x = clamp(pan.x, -maxX, maxX);
  pan.y = clamp(pan.y, -maxY, maxY);

  el.faceImages.forEach((img) => {
    img.style.transformOrigin = 'center center';
    img.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${zoomScale})`;
    img.style.transition = panning.active ? 'none' : 'transform 0.15s ease';
  });

  // toggle grab cursor if zoomed in
  if (zoomScale > 1) {
    grid.classList.add('can-pan');
  } else {
    grid.classList.remove('can-pan');
  }


}


function setSvgCaption(container, src, alt) {
  container.innerHTML = '';
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';
  img.className = 'caption-img';
  container.appendChild(img);
}

function renderCaptions(personName) {
  const tiles = document.querySelectorAll('.face-images .face-tile .face-image-text');
  if (!tiles || tiles.length < 4) return;

  // Always create exactly 3 <p> lines. Empty -> &nbsp;
  const setThreeFixedLines = (el, l1, l2, l3) => {
    el.innerHTML = '';

    const mk = (txt) => {
      const p = document.createElement('p');
      if (txt == null || txt === '' || txt === '\u00A0') {
        p.innerHTML = '&nbsp;';
      } else {
        // allow ™/® entities we pass in
        p.innerHTML = txt;
      }
      return p;
    };

    const p1 = mk(l1);
    const p2 = mk(l2);
    const p3 = mk(l3);
    // style line 3 a bit smaller like before
    p3.style.fontSize = '0.85em';
    p3.style.display = 'inline-flex';
    p3.style.alignItems = 'center';

    el.appendChild(p1);
    el.appendChild(p2);
    el.appendChild(p3);
  };

  if (HCA_PROFILES.has(personName)) {
    // Uses your HCA_CAPTIONS; if l3 is empty, it becomes &nbsp;
    HCA_CAPTIONS.forEach((cap, idx) => {
      const box = tiles[idx];
      if (!box) return;
      setThreeFixedLines(box, cap.l1, cap.l2, cap.l3 || '');
    });
  } else if (JUV_PROFILES.has(personName)) {
    // JUV-first profiles: all 3 lines defined
    JUV_CAPTIONS.forEach((cap, idx) => {
      const box = tiles[idx];
      if (!box) return;
      setThreeFixedLines(box, cap.l1, cap.l2, cap.l3);
    });
  } else {
    // Fallback: still force 3 lines
    const defaults = [
      { l1: 'Before', l2: '\u00A0', l3: '' },
      { l1: 'Immediately after', l2: 'HArmonyCa\u2122', l3: '' },
      { l1: '3 months after', l2: 'HArmonyCa\u2122', l3: '' },
      { l1: '4 months after', l2: 'HArmonyCa\u2122', l3: '' },
    ];
    defaults.forEach((cap, idx) => {
      const box = tiles[idx];
      if (!box) return;
      setThreeFixedLines(box, cap.l1, cap.l2, cap.l3);
    });
  }

  // Sync <img> alt with line 1
  const l1s = (() => {
    if (HCA_PROFILES.has(personName)) return HCA_CAPTIONS.map(c => c.l1);
    if (JUV_PROFILES.has(personName)) return JUV_CAPTIONS.map(c => c.l1);
    return ['Before', 'Immediately after', '3 months after', '4 months after'];
  })();
  el.faceImages.forEach((img, i) => { if (img) img.alt = l1s[i] || ''; });

  // Reattach info icons now that 3rd line is guaranteed to exist
  ensureInfoIcons();
}





function applyImages(person, position) {
  const arr = Sources[person][position];
  // grid
  el.faceImages.forEach((img, i) => (img.src = arr[i] || ''));
  // tests (Anne has after-before order for smile)
  if (person === 'Anne') {
    el.smileAfter.src = arr[4]; el.smileBefore.src = arr[5];
  } else {
    el.smileBefore.src = arr[4]; el.smileAfter.src = arr[5];
  }
  el.pinchBefore.src = arr[6]; el.pinchAfter.src = arr[7];
  // videos
  el.video1.src = arr[8]; el.video2.src = arr[9];
  // keep zoom level on swap
  applyZoomAll();
}

// function renderDisclaimer(name) {
//   if (!el.disclaimerBody) return;

//   const lines = (DISCLAIMERS[name] || '')
//     .split('\n')
//     .map(s => s.trim())
//     .filter(Boolean);

//   console.log("lines", lines);

//   // token that matches JUVÉDERM® or JUVÉDERM<sup>®</sup>
//   const JUV_TOKEN = String.raw`JUV(?:\u00C9|É)DERM(?:®|<sup>®<\/sup>)`;

//   // paragraph-1 rules, profile-specific
//   function applyBreaksFirstPara(html) {
//     if (HCA_PROFILES.has(name)) {
//       // “…taken 3 months …” -> “…taken 3<br>months …”
//       // return html.replace(/taken 3\s+months/i, 'taken 3<br>months');
//     }
//     if (JUV_PROFILES.has(name)) {
//       // A) put the break AFTER the period of the first sentence
//       html = html.replace(
//         new RegExp(String.raw`(1 month after ${JUV_TOKEN} treatment\.)\s+(The second)`, 'i'),
//         '$1<br>$2'
//       );
//       // B) split second sentence before “and immediately …”
//       html = html.replace(
//         new RegExp(String.raw`(1 month after ${JUV_TOKEN} treatment)\s+and`, 'i'),
//         '$1and'
//       );
//     }
//     return html;
//   }

//   // paragraph-4 rule: “… JUVÉDERM … in the cheeks,” -> add <br> after “cheeks,”
//   const CHEEKS = new RegExp(String.raw`(${JUV_TOKEN}\s+in the cheeks,)`, 'i');

//   el.disclaimerBody.innerHTML = '';

//   lines.forEach((orig, idx) => {
//     let html = orig;

//     if (idx === 0) html = applyBreaksFirstPara(html);
//     // if (idx === 3) html = html.replace(CHEEKS, '$1<br>');

//     const wrap = document.createElement('div');
//     wrap.className = 'disclaimer-text';

//     const p = document.createElement('p');
//     // keep HTML when we inserted <br> or have <sup>®</sup>
//     if (html.includes('<br>') || /<sup>/.test(html)) p.innerHTML = html;
//     else p.textContent = html;

//     wrap.appendChild(p);
//     el.disclaimerBody.appendChild(wrap);
//   });
// }

function renderDisclaimer(name) {
  if (!el.disclaimerBody) return;

  const lines = (DISCLAIMERS[name] || '')
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean);

  console.log("lines", lines);

  // token that matches JUVÉDERM® or JUVÉDERM<sup>®</sup>
  const JUV_TOKEN = String.raw`JUV(?:\u00C9|É)DERM(?:®|<sup>®<\/sup>)`;

  // replace ™ and ® with <sup>
  function wrapSymbols(html) {
    return html
      .replace(/™/g, '<sup>™</sup>')
      .replace(/®/g, '<sup>®</sup>');
  }

  // paragraph-1 rules, profile-specific
  function applyBreaksFirstPara(html) {
    if (HCA_PROFILES.has(name)) {
      // example rule left commented out
    }
    if (JUV_PROFILES.has(name)) {
      // A) put the break AFTER the period of the first sentence
      html = html.replace(
        new RegExp(String.raw`(1 month after ${JUV_TOKEN} treatment\.)\s+(The second)`, 'i'),
        '$1<br>$2'
      );
      // B) split second sentence before “and immediately …”
      html = html.replace(
        new RegExp(String.raw`(1 month after ${JUV_TOKEN} treatment)\s+and`, 'i'),
        '$1and'
      );
    }
    return html;
  }

  // paragraph-4 rule (optional)
  const CHEEKS = new RegExp(String.raw`(${JUV_TOKEN}\s+in the cheeks,)`, 'i');

  el.disclaimerBody.innerHTML = '';

  lines.forEach((orig, idx) => {
    let html = orig;

    // replace symbols
    html = wrapSymbols(html);

    if (idx === 0) html = applyBreaksFirstPara(html);
    // if (idx === 3) html = html.replace(CHEEKS, '$1<br>');

    const wrap = document.createElement('div');
    wrap.className = 'disclaimer-text';

    const p = document.createElement('p');
    // keep HTML when we inserted <br> or <sup>
    if (/<(br|sup)>/.test(html)) p.innerHTML = html;
    else p.textContent = html;

    wrap.appendChild(p);
    el.disclaimerBody.appendChild(wrap);
  });
}









function toParagraphs(multiline) {
  return multiline
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean)
    .map(p => `<p>${p}</p>`)
    .join('');
}

// --- video caption helpers (overlays on the two treatment videos) ---
// function ensureVideoCaption(videoEl) {
//   if (!videoEl) return null;

//   let wrap = videoEl.closest('.video-wrap');
//   if (!wrap) {
//     wrap = document.createElement('div');
//     wrap.className = 'video-wrap';
//     videoEl.parentNode.insertBefore(wrap, videoEl);
//     wrap.appendChild(videoEl);
//   }

//   let cap = wrap.querySelector('.video-caption');
//   if (!cap) {
//     cap = document.createElement('div');
//     cap.className = 'video-caption';
//     ['l1','l2','l3','l4'].forEach(cls => {
//       const p = document.createElement('p');
//       p.className = cls;
//       cap.appendChild(p);
//     });
//     wrap.appendChild(cap);
//   }
//   return cap;
// }

// function setCaption(capEl, lines) {
//   if (!capEl) return;

//   const keys = ['l1','l2','l3','l4'];
//   let any = false;

//   keys.forEach(k => {
//     const p = capEl.querySelector('.' + k);
//     const val = (lines[k] || '').trim();
//     // use textContent (no &nbsp;), and hide when empty
//     p.textContent = val;
//     p.style.display = val ? 'block' : 'none';
//     if (val) any = true;
//   });

//   // hide the whole caption if literally nothing to show
//   capEl.style.display = any ? 'block' : 'none';
// }


// function hideCaption(capEl) { if (capEl) capEl.style.display = 'none'; }

// --- VIDEO CAPTIONS (SVG) ---
function ensureVideoWrap(videoEl) {
  if (!videoEl) return null;
  let wrap = videoEl.closest('.video-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'video-wrap';
    videoEl.parentNode.insertBefore(wrap, videoEl);
    wrap.appendChild(videoEl);
  }
  return wrap;
}

function ensureVideoCaptionImg(videoEl) {
  const wrap = ensureVideoWrap(videoEl);
  if (!wrap) return null;
  let img = wrap.querySelector('.video-caption-img');
  if (!img) {
    img = document.createElement('img');
    img.className = 'video-caption-img';
    img.alt = '';
    wrap.appendChild(img);
  }
  return img;
}

function updateVideoCaptions(personName) {
  // choose which pair to use strictly from CAPTION_SETS
  const set =
    GROUP_HCA.has(personName) ? CAPTION_SETS.hca :
      GROUP_HCA_JUVE.has(personName) ? CAPTION_SETS.hca_juve :
        null;

  const imgLeft = ensureVideoCaptionImg(el.video1); // "before"
  const imgRight = ensureVideoCaptionImg(el.video2); // "after"

  if (!imgLeft || !imgRight) return;

  if (set) {
    imgLeft.src = set.before; imgLeft.alt = 'Before caption';
    imgRight.src = set.after; imgRight.alt = 'After caption';
    imgLeft.style.display = 'block';
    imgRight.style.display = 'block';
  } else {
    imgLeft.style.display = 'none';
    imgRight.style.display = 'none';
  }
}


// function updateVideoCaptions(personName) {
//   const cap1 = ensureVideoCaption(el.video1);
//   const cap2 = ensureVideoCaption(el.video2);

//   if (HCA_PROFILES.has(personName)) {
//     setCaption(cap1, VIDEO_SCHEMES.HCA.left);
//     setCaption(cap2, VIDEO_SCHEMES.HCA.right);
//   } else if (JUV_PROFILES.has(personName)) {
//     setCaption(cap1, VIDEO_SCHEMES.JUV.left);
//     setCaption(cap2, VIDEO_SCHEMES.JUV.right);
//   } else {
//     hideCaption(cap1);
//     hideCaption(cap2);
//   }
// }


// Create (once) the two overlay caption <img>s inside a slider wrapper
function ensureSliderCaptionImgs(wrapper) {
  let left = wrapper.querySelector('.test-caption.left');
  let right = wrapper.querySelector('.test-caption.right');

  if (!left) {
    left = document.createElement('img');
    left.className = 'test-caption left';
    wrapper.appendChild(left);
  }
  if (!right) {
    right = document.createElement('img');
    right.className = 'test-caption right';
    wrapper.appendChild(right);
  }
  return { left, right };
}

// Show/hide & set sources per profile
function updateTestCaptions(personName) {
  let set = null;
  if (GROUP_HCA.has(personName)) set = CAPTION_SETS.hca;
  else if (GROUP_HCA_JUVE.has(personName)) set = CAPTION_SETS.hca_juve;

  el.sliders.forEach((wrapper) => {
    const { left, right } = ensureSliderCaptionImgs(wrapper);
    if (set) {
      left.src = set.before;
      left.alt = 'Before';
      right.src = set.after;
      right.alt = 'After';
      left.style.display = 'block';
      right.style.display = 'block';
    } else {
      left.style.display = 'none';
      right.style.display = 'none';
    }
  });
}



function changeImages(person, position) {
 person = 'Anne'; // ← ensure we always use Anne
  selectedPerson = person;
  currentPosition = position;
  setHeaderName();
  setActiveFaceIcon();
  resetZoom();                 // <--- add this
  applyImages(person, position);
  updateTestCaptions(person);   // <—— add this line
  pan.x = 0;
  pan.y = 0;
  applyZoomAll();
  renderDisclaimer(person);
  renderCaptions(person);     // <-- set the 2/3-line captions + place info icon
  updateVideoCaptions(person); updateInfoTooltip(person);
  el.options.style.display = 'none';
  el.header2.style.display = 'flex';
}


// --- INIT ---
changeImages('Anne', 'center');
applyZoomAll();

// --- BURGER ---
document.querySelector('.hamberger-icon').addEventListener('click', () => {
  const options = el.options;
  const show = options.style.display === 'none' || options.style.display === '';
  options.style.display = show ? 'flex' : 'none';
  el.header2.style.display = show ? 'none' : 'flex';
});

// --- OPTIONS SELECT ---
el.options.addEventListener('click', (e) => {
  const img = e.target.closest('img[data-person]');
  if (!img) return;
  const person = img.getAttribute('data-person');
    if (person !== 'Anne') return; // ← NEW: ignore all but Anne
  const idx = PROFILES.findIndex((p) => p.name === person);
  if (idx !== -1) selectedIndex = idx;
  changeImages(person, 'center');
});

// --- HEADER ARROWS ---
function nextProfile() { selectedIndex = 0; changeImages('Anne', currentPosition); }
function prevProfile() { selectedIndex = 0; changeImages('Anne', currentPosition); }

el.leftArrow.addEventListener('click', prevProfile);
el.rightArrow.addEventListener('click', nextProfile);

// --- FACE ICONS CLICK ---
if (el.faceIcons && el.faceIcons.length) {
  el.faceIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const pos = icon.getAttribute('data-pos');
      if (!pos) return;
      currentPosition = pos;
      setActiveFaceIcon();
      changeImages(selectedPerson, currentPosition);
    });
  });
}

// --- SLIDERS (dynamic width for rotate) ---
function setSlider(i, xPx) {
  const wrapper = el.sliders[i];
  const w = wrapper.clientWidth || 0;

  // seam can be exactly 0 .. w
  const seam = clamp(xPx, 0, w);
  sliderPositions[i] = seam;

  const thumb = el.thumbs[i];
  const afterImg = i === 0 ? el.smileAfter : el.pinchAfter;

  // Use % so the wipe truly reaches both extremes
  const pct = w ? (seam / w) * 100 : 0;
  afterImg.style.clipPath = `inset(0 0 0 ${pct}%)`;

  // Put knob CENTER on the seam (no clamping)
  thumb.style.left = `${seam}px`;

  // keep if something else still reads it
  wrapper.style.setProperty('--cut', `${seam}px`);
}




function clientXToSliderPx(wrapper, clientX) {
  const rect = wrapper.getBoundingClientRect();
  const x = clientX - rect.left;
  return clamp(x, 0, rect.width);
}
function centerSliders() {
  sliderPositions = el.sliders.map(w => Math.round(w.clientWidth / 2));
  setSlider(0, sliderPositions[0]); setSlider(1, sliderPositions[1]);
}
centerSliders();
window.addEventListener('orientationchange', () => setTimeout(centerSliders, 50));
window.addEventListener('resize', () => setTimeout(centerSliders, 50));

// visual elements per slider
const icDividers = [];
const icKnobs = [];

el.sliders.forEach((wrapper, i) => {
  // Build “image compare” visuals per wrapper: divider + knob
  const divider = document.createElement('div');
  divider.className = 'ic-divider';
  wrapper.appendChild(divider);

  const knob = document.createElement('div');
  knob.className = 'ic-knob';
  wrapper.appendChild(knob);

  icDividers[i] = divider;
  icKnobs[i] = knob;

  // Vertically center the knob once (it will keep its Y via transform)
  knob.style.top = '50%';

  const startDrag = (ev) => {
    dragging.active = true; dragging.which = i;
    wrapper.classList.add('dragging'); // NEW: turn off easing while dragging
    const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
    const xPx = clientXToSliderPx(wrapper, clientX);
    setSlider(i, xPx);
    ev.preventDefault();
  };
  wrapper.addEventListener('mousedown', startDrag);
  wrapper.addEventListener('touchstart', startDrag, { passive: false });
});
window.addEventListener('mousemove', (ev) => {
  if (!dragging.active) return;
  const i = dragging.which; const wrapper = el.sliders[i];
  const xPx = clientXToSliderPx(wrapper, ev.clientX); setSlider(i, xPx);
});
window.addEventListener('touchmove', (ev) => {
  if (!dragging.active) return;
  const i = dragging.which; const wrapper = el.sliders[i];
  const x = ev.touches[0].clientX; const xPx = clientXToSliderPx(wrapper, x); setSlider(i, xPx);
}, { passive: false });
const endDrag = () => {
  if (!dragging.active) return;
  const i = dragging.which;
  if (i >= 0 && el.sliders[i]) el.sliders[i].classList.remove('dragging'); // NEW: restore easing
  dragging.active = false;
  dragging.which = -1;
};
window.addEventListener('mouseup', endDrag);
window.addEventListener('mouseleave', endDrag);
window.addEventListener('touchend', endDrag);

// --- VIDEO: click-to-toggle + keep both in sync ---
(function setupVideos() {
  const v1 = el.video1;
  const v2 = el.video2;
  if (!v1 || !v2) return;

  // Neutralize any HTML attributes
  v1.controls = false;
  v2.controls = false;
  v1.autoplay = false;
  v2.autoplay = false;

  // If the browser tried to autoplay before JS executed, stop it now.
  try { v1.pause(); } catch { }
  try { v2.pause(); } catch { }

  // Click anywhere on a video to toggle both
  const toggleBoth = (origin) => {
    const other = origin === v1 ? v2 : v1;
    if (origin.paused) {
      origin.play().catch(() => { });  // ignore autoplay policy errors
      other.play().catch(() => { });
    } else {
      origin.pause();
      other.pause();
    }
  };

  v1.addEventListener('click', () => toggleBoth(v1));
  v2.addEventListener('click', () => toggleBoth(v2));

  // Stay mirrored even if play/pause happens programmatically
  v1.addEventListener('play', () => { if (v2.paused) v2.play().catch(() => { }); });
  v2.addEventListener('play', () => { if (v1.paused) v1.play().catch(() => { }); });
  v1.addEventListener('pause', () => { if (!v2.paused) v2.pause(); });
  v2.addEventListener('pause', () => { if (!v1.paused) v1.pause(); });
})();


// --- PRODUCT SHEET MODAL ---
// el.productBtn.addEventListener('click', () => modal.open());
el.productBtn.addEventListener('click', () => {
  modal.setPerson(selectedPerson); // ensure correct table for current profile
  modal.open();
});
el.productBtn.style.setProperty('--cta-scale', '1.12');

// --- TILE CLICK HANDLERS ---
// 1) Per-tile zoom modal button (top-right)
document.querySelector('.face-images').addEventListener('click', (e) => {
  const btn = e.target.closest('.zoom-all-btn');
  if (!btn) return;
  const idx = Number(btn.getAttribute('data-img'));
  const imgEl = el.faceImages[idx];
  if (imgEl && imgEl.src) imgModal.open(imgEl.src, idx);
});



// function applyZoomAll() {
//   document.querySelectorAll('.faces-images').forEach(img => {
//     img.style.transform = `scale(${zoomScale})`;
//     img.style.transformOrigin = 'center center';
//   });
// }

document.querySelector('.face-images').addEventListener('click', (e) => {
  if (e.target.classList.contains('tile-zoom-plus') && !e.target.classList.contains('disabled')) {
    zoomScale = Math.min(ZOOM_MAX, zoomScale + ZOOM_STEP);
    applyZoomAll();
  } else if (e.target.classList.contains('tile-zoom-minus') && !e.target.classList.contains('disabled')) {
    zoomScale = Math.max(ZOOM_MIN, zoomScale - ZOOM_STEP);
    applyZoomAll();
  }
});

function isOnControl(target) {
  // ignore panning when clicking controls
  return (
    target.closest('.tile-zoom-pill') ||
    target.closest('.zoom-all-btn')
  );
}

function getPoint(ev) {
  const t = ev.touches ? ev.touches[0] : ev;
  return { x: t.clientX, y: t.clientY };
}

function startPan(ev) {
  // only when zoomed in
  if (zoomScale <= 1) return;
  // ignore plus/minus pill & zoomAll icon
  if (isOnControl(ev.target)) return;

  const pt = getPoint(ev);
  panning.active = true;
  panning.startX = pt.x;
  panning.startY = pt.y;
  panning.originX = pan.x;
  panning.originY = pan.y;

  grid.classList.add('is-panning');
  ev.preventDefault();
}

function movePan(ev) {
  if (!panning.active) return;
  const pt = getPoint(ev);
  const dx = pt.x - panning.startX;
  const dy = pt.y - panning.startY;

  pan.x = panning.originX + dx;
  pan.y = panning.originY + dy;
  applyZoomAll();

  ev.preventDefault();
}

function endPan() {
  if (!panning.active) return;
  panning.active = false;
  grid.classList.remove('is-panning');
}

grid.addEventListener('mousedown', startPan);
grid.addEventListener('touchstart', startPan, { passive: false });
window.addEventListener('mousemove', movePan);
window.addEventListener('touchmove', movePan, { passive: false });
window.addEventListener('mouseup', endPan);
window.addEventListener('touchend', endPan);



