export type Gender = 'male' | 'female'

export type Skill =
  | 'Graphic Design'
  | 'Paid Ads'
  | 'Photography'
  | 'Social Posts'
  | 'Unboxing Products'
  | 'Video Creation'
  | 'Video Editing'

export interface Influencer {
  _id: string
  firstName: string
  lastName: string
  imagePostUrl: string
  gender: Gender
  email: string
  phone: string
  about: string
  tags: string[]
  previousPaidExperience: {
    video: boolean
    photography: boolean
    socialPost: boolean
  }
  skillSet: Array<{
    label: Skill
    yearsOfExperience: number
  }>
}

export const genders: Gender[] = ['male', 'female']

export const skills: Skill[] = [
  'Graphic Design',
  'Paid Ads',
  'Photography',
  'Social Posts',
  'Unboxing Products',
  'Video Creation',
  'Video Editing',
]
