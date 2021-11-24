import fs from 'fs'

import * as faker from 'faker'

import { genders, Influencer, skills } from '../types'
import { getRandomInt } from '../helpers'

export const influencers: Influencer[] = Array.from({ length: 30 }, () => ({
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  imagePostUrl: faker.image.image(),
  gender: faker.helpers.randomize(genders),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(2),
  about: faker.commerce.productDescription(),
  tags: Array.from({ length: getRandomInt(1, 10) }, faker.lorem.word),
  previousPaidExperience: {
    video: Math.random() > 0.5,
    photography: Math.random() > 0.5,
    socialPost: Math.random() > 0.5,
  },
  skillSet: Array.from({ length: getRandomInt(1, 3) }, () => ({
    label: faker.helpers.randomize(skills),
    yearsOfExperience: getRandomInt(0, 15),
  })),
}))

fs.writeFileSync(
  './src/assets/example.json',
  JSON.stringify(influencers, null, 2)
)
