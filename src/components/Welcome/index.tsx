import styles from './index.module.scss'
import { Text, Code } from '@chakra-ui/react'

const Welcome: React.FC = (): JSX.Element => {
  return (
    <div className={styles.welcome}>
      <Code colorScheme="red">Hello, I am</Code>
      <Text fontSize="xl">Sirawitkamol Lomphong</Text>
    </div>
  )
}

export default Welcome
