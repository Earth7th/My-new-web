import styles from './index.module.scss'
import {
  Text,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepDescription,
  StepSeparator,
} from '@chakra-ui/react'

const steps = [
  { title: 'Computer Engineering @ KMUTT', description: '2023 - Present' },
  { title: 'โรงเรียงบางปะกอกวิทยาคม', description: '2017 - 2022' },
]

const Education: React.FC = (): JSX.Element => {
  return (
    <div className={styles.education}>
      <div className={styles.header}>
        <Text fontSize="2xl" as="b">
          Educations
        </Text>
      </div>
      <div className={styles.content}>
        <Stepper index={1} orientation="vertical" height="200px" gap="0" colorScheme="red">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus />
              </StepIndicator>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  )
}

export default Education
