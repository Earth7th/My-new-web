import styles from './index.module.scss'
import { Text, Button } from '@chakra-ui/react'

const Contact: React.FC = (): JSX.Element => {
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <Text fontSize="2xl" as="b">
          Contact
        </Text>
      </div>
      <div className={styles.content}>
        <a href="mailto:Earth7th.lord@gmail.cm">
          <Button colorScheme="red" size="md">
            Email
          </Button>
        </a>
        <a href="https://www.facebook.com/Earth7th.lord">
          <Button colorScheme="red" size="md">
            Facebook
          </Button>
        </a>
        <a href="https://www.instagram.com/sirawitkamol">
          <Button colorScheme="red" size="md">
            Instagram
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact
