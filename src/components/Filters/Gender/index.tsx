import React from 'react'
import { UseFiltersColumnProps } from 'react-table'
import { genders, Influencer } from '~/types'

import * as RadioGroup from '@radix-ui/react-radio-group'

export const GenderFilter = ({
  column: { filterValue, setFilter },
}: GenderFilterProps) => {
  return (
    <RadioGroup.Root
      className='flex space-x-2'
      value={filterValue}
      onValueChange={(e) => {
        setFilter(e || undefined)
      }}>
      <RadioGroup.Item value=''>
        <label className='cursor-pointer'>All</label>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      {genders.map((gender) => (
        <RadioGroup.Item value={gender}>
          <label className='cursor-pointer capitalize'>{gender}</label>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}

interface GenderFilterProps {
  column: UseFiltersColumnProps<Influencer>
}
