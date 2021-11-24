import { Influencer } from '~/types'

type Accessor = (influencer: Influencer) => string

export const formatSkills: Accessor = (influencer) =>
  influencer.skillSet
    .map((skill) => `${skill.yearsOfExperience} years in ${skill.label}`)
    .join(', ') + '.'

export const formatExperience: Accessor = (influencer) =>
  `Experienced in ${String(
    Object.entries(influencer.previousPaidExperience)
      .filter((e) => e[1])
      .map((e) => e[0])
      .join(', ')
  )}`

export const formatTags: Accessor = (influencer) => influencer.tags.join(', ')
