import styles from './index.module.scss'
import { Text } from '@chakra-ui/react'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <Text fontSize="xl">Earth</Text>
      <div className={styles.links}>
        {/* <div>About Me</div>
        <div>Education</div>
        <div>Skill</div>
        <div>Contact</div> */}
      </div>
    </div>
  )
}

export default Navbar
