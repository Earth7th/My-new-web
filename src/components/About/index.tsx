import styles from './index.module.scss'
import Profile from '../../images/profile.jpg'
import { Image, Text } from '@chakra-ui/react'

const About: React.FC = (): JSX.Element => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <Text fontSize="2xl" as="b">
          About Me
        </Text>
      </div>
      <div className={styles.content}>
        <Image src={Profile} alt="profile" borderRadius="2xl" width={250} height={250} />
        <div className={styles.info}>
          <Text fontSize="sm">ชื่อ-นามสกุล: สิรวิชญ์กมล ล้อมพงศ์</Text>
          <Text fontSize="sm">ชื่อเล่น: เอิร์ธ</Text>
          <Text fontSize="sm">อายุ: 18 ปี</Text>
          <Text fontSize="sm">งานอดิเรก: อ่านนิยาย/การ์ตูน, เล่นเกม, ดูยูทูป, เขียนโปรแกรม, ถ่ายรูป และตัดต่อ</Text>
        </div>
      </div>
    </div>
  )
}

export default About
