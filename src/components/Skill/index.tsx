import styles from './index.module.scss'
import { Text, Image } from '@chakra-ui/react'

interface ITechStack {
  iconImage?: string
  name: string
}

interface ISkill {
  programming: ITechStack[]
  gameEngine: ITechStack[]
  tools: ITechStack[]
  others: ITechStack[]
}

const skills: ISkill = {
  programming: [
    {
      iconImage: 'https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png',
      name: 'C#',
    },
    {
      iconImage: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
      name: 'C++',
    },
    {
      iconImage: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
      name: 'HTML',
    },
    {
      iconImage: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
      name: 'CSS',
    },
  ],
  gameEngine: [
    {
      iconImage: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png',
      name: 'Unity',
    },
    {
      iconImage: 'https://static-00.iconduck.com/assets.00/unreal-engine-icon-512x512-0mwtjk1x.png',
      name: 'Unreal',
    },
  ],
  tools: [
    {
      iconImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png',
      name: 'Blender',
    },
    {
      iconImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
      name: 'Photoshop',
    },
    {
      iconImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png',
      name: 'Premiere Pro',
    },
    {
      iconImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Adobe_Audition_CC_icon_%282020%29.svg/2101px-Adobe_Audition_CC_icon_%282020%29.svg.png',
      name: 'Audition',
    },
    {
      iconImage:
        'https://community.aseprite.org/uploads/default/original/2X/6/66c33251292331d29585d32632c3870651b66e01.png',
      name: 'Aseprite',
    },
    {
      iconImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.svg.png',
      name: 'Arduino',
    },
  ],
  others: [
    {
      name: 'Building Models',
    },
    {
      name: 'Photograph',
    },
    {
      name: 'Writing Novels',
    },
  ],
}

const Skill: React.FC = (): JSX.Element => {
  const renderTechStack = (skill: ITechStack[]) => {
    return skill.map((stack: ITechStack, i: number) => {
      return (
        <div className={styles.stack} key={i}>
          {stack.iconImage && <Image src={stack.iconImage} alt="icon" width={50} height={50} />}
          <Text fontSize="md" marginTop={stack.iconImage ? 5 : 0}>
            {stack.name}
          </Text>
        </div>
      )
    })
  }
  return (
    <div className={styles.skill}>
      <div className={styles.header}>
        <Text fontSize="2xl" as="b">
          Skills
        </Text>
      </div>
      <div className={styles.content}>
        <div>
          <Text fontSize="lg">Programming Languages</Text>
          <div className={styles.stacks}>{renderTechStack(skills.programming)}</div>
        </div>
        <div>
          <Text fontSize="lg">Game Engines</Text>
          <div className={styles.stacks}>{renderTechStack(skills.gameEngine)}</div>
        </div>
        <div>
          <Text fontSize="lg">Tools</Text>
          <div className={styles.stacks}>{renderTechStack(skills.tools)}</div>
        </div>
        <div>
          <Text fontSize="lg">Others</Text>
          <div className={styles.stacks}>{renderTechStack(skills.others)}</div>
        </div>
      </div>
    </div>
  )
}

export default Skill
