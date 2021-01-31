const vaccines = require("./TH/vaccines");
const diseases = require("./TH/diseases");
const packagers = require("./TH/packager");
const newsData = require("./TH/news");
export default {
  newsData,
  vaccines,
  diseases,
  packagers,
  home: "หน้าหลัก",
  vaccine: "วัคซีน",
  news: "ข่าวสาร",
  vaccineList: "รายการวัคซีน",
  login: "เข้าสู่ระบบ",
  register: "สมัครสมาชิก",
  username: "ชื่อผู้ใช้",
  password: "รหัสผ่าน",
  repeatPassword: "ยินยันรหัสผ่าน",
  usernameRequire: "กรุณากรอกชื่อผู้ใช้",
  passwordRequire: "กรุณากรอกรหัสผ่าน",
  passwordMismatch: "รหัสผ่านไม่ตรงกัน",
  passwordAtLeast: "รหัสผ่านต้องมีตัวอักษรมากกว่า",
  family: "ครอบครัว",
  packager: "แพ็กเกจวัคซีนเสริม",
  setting: "ตั้งค่า",
  event: "กิจกรรมที่ต้องทำ",
  recentActivity: "วันนัดที่กำลังจะถึงเร็วๆนี้",
  welcome: "ยินดีต้อนรับคุณ ",
  language: "ภาษา",
  accountSetting: "ตั้งค่าบัญชี",
  appointmentSuggestion: "แนะนำการนัดหมาย",
  category: "ประเภทวัคซีน",
  children: "สำหรับเด็ก",
  adult: "สำหรับผู้ใหญ่",
  ordering: "จัดเรียงวัคซีนโดย",
  others: "อื่นๆ",
  noEvent: "ไม่มีการนัดหมายในเร็วๆนี้",
  welcomeLanguage: "ยินดีต้อนรับสู่ Vaccinet",
  welcomeContinue: "ไปต่อ",
  loadmore: "เพิ่มเติม",
  receievedQA: "เคยฉีด",
  notReceievedQA: "ไม่เคยฉีด",
  networkMode: {
    offline: "คุณออฟไลน์อยู่",
    online: "คุณออนไลน์อยู่",
  },
  covidStat: {
    title: "รายงานสถานการณ์ โควิด-19 ในประเทศไทย",
    cases: "ติดเชื้อสะสม",
    recovered: "หายแล้ว",
    hospitalized: "รักษาอยู่ใน รพ.",
    death: "เสียชีวิต",
  },
  pin: {
    label: "โปรดกรอก PIN",
  },
  vaccineDetailsPage: {
    title: "รายละเอียดวัคซีน",
    suggestedAge: "อายุที่ควรได้รับวัคซีน",
    who: "บุคคลที่ควรได้รับวัคซีน และอายุที่ควรรับวัคซีน",
    appointmentBtn: "กำหนดวันฉีดวัคซีน",
    recordBtn: "บันทึกวัคซีน",
    description: "รายละเอียดโดยย่อ",
    warning: "คำเตือน/บุคคลที่ไม่ควรฉีด",
    vaccineReference:
      "ที่มาข้อมูล: ตำราวัคซีนและการสร้างเสริมภูมิคุ้มกันโรค ปี 2562 กรมควบคุมโรค กระทรวงสาธารณะสุข",
  },
  vaccinePackagerPage: {
    title: "แพ็กเกจวัคซีนเสริม",
  },
  labelError: {
    required: "โปรดกรอก{}",
    mistmatch: "{}ไม่ตรงกัน",
    atLeast: "{}ต้องมีตัวอักษรมากกว่า",
    duplicate: "{}ซ้ำ",
    notFound: "ไม่พบ{}นี้",
    incorrect: "{}ไม่ถูกต้อง",
  },
  recordVaccinePage: {
    title: "จดบันทึกวัคซีน",
    vaccineName: "ชื่อวัคซีน",
    batchNO: "เลขล็อตการผลิต",
    receivingDate: "วันที่ได้รับวัคซีน",
    hostpitalName: "ชื่อโรงพยาบาลที่รับวัคซีน",
    doctorInfo: "รหัสบุคลากรทางการแพทย์(สำหรับเจ้าหน้าที่)",
    freetext: "บันทึกข้อความ/รายละเอียดเพิ่มเติม",
    recordTo: "บันทึกการฉีดให้กับ",
    uploadImage: "อัพโหลดรูปภาพหลักฐานการฉีดวัคซีน (เลขล๊อตวัคซีน)",
    submitBtn: "บันทึกข้อมูล",
    cancelBtn: "ยกเลิก",
    packageMember: "แนะนำวัคซีนสำหรับ",
  },
  label: {
    ref: "ที่มา",
    pin: "PIN",
    username: "ชื่อผู้ใช้งาน",
    password: "รหัสผ่าน",
    name: "ชื่อ - นามสกุล",
    birthDate: "วันเกิด",
    disease: "โรคประจำตัว",
    vaccine: "วัคซีนที่เคยได้รับ",
    noneCongenitalDisease: "ไม่มีโรคประจำตัว",
    updateChildInfoTitle: "อัปเดตข้อมูลสมาชิกในครอบครัว",
    age: "อายุ",
    reporttitle: "สถานะภูมิคุ้มกัน",
    roadmap: "แผนการฉีดวัคซีน",
    history: "ประวัติการฉีด",
    search: "ค้นหา",
    sortBy: "เรียงข้อมูล",
    filterBy: "ตัวกรอง",
    unspecified: "ไม่ระบุสถานะ",
    overdue: "เกินกำหนดฉีด",
    vaccinated: "ฉีดแล้ว",
    vaccinating: "กำลังจะฉีด",
    all: "ทั้งหมด",
    vaccineName: "ชื่อวัคซีน",
    diseaseName: "ชื่อโรค",
    date: "วันที่",
    placeHolderSearch: "กรอกคำที่ต้องการค้นหา",
    confirmLogout: "คุณต้องการออกจากระบบใช่ไหม",
    logoutSuccess: "ออกจากระบบสำเร็จ",
    saveInfo: "บันทึกข้อมูลของคุณสำเร็จ",
    success: "สำเร็จ",
    confirmEdit: "คุณต้องการบันทึกการเปลี่ยนแปลงใช่ไหม",
    continue: "ไปต่อ",
    yes: "ใช่",
    no: "ไม่ใช่",
    notifyToEdit: "กรุณาแก้ไขข้อมูลส่วนตัวก่อนใช้งานแอพพลิเคชั่น",
    suggestedPlan: "สร้างแผนการฉีดวัคซีน",
    deleteFamily: "ลบ",
    deleteSuccess: "ลบโปรไฟล์สำเร็จ",
    confirmDelete: "คุณต้องการลบโปรไฟล์นี้ใช่ไหม",
    cannotDelete: "ไม่สามารถลบโปรไฟล์หลักได้"
  },
  labelAddAppointment: {
    child: "ชื่อเด็ก",
    vaccineList: "รายการวัคซีน",
    date: "วันที่",
    time: "เวลา",
    addAppointment: "เพิ่มการนัดหมาย",
    note: "ข้อมูลเพิ่มเติม",
    nextAppointMent: "การนัดหมายถัดไป",
    vcName: "ชื่อวัคซีน",
    complete: "ได้รับวัคซีนชนิดนี้ครบตามแผนแล้ว",
    day: "วัน",
  },
  historyPage: {
    title: "ประวัติการฉีดวัคซีน",
    received: "ได้รับวัคซีน",
    hospital: "โรงพยาบาล/คลินิค",
    date: "วันที่",
    nohistory: "ไม่มีประวัติการได้รับวัคซีน",
  },
  button: {
    cancel: "ยกเลิก",
    update: "อัปเดต",
    add: "เพิ่ม",
    save: "บันทึก",
    logout: "ออกจากระบบ",
    search: "ค้นหา",
  },
  camera: {
    takePhoto: "ถ่ายรูป",
    reset: "ถ่ายใหม่",
  },
};
