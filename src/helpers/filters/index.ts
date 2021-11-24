import { useMemo } from 'react'
import { FilterTypes } from 'react-table'
import { Influencer } from '~/types'

import { strictEqual } from './strictEqual'

export enum Filters {
  strictEqual = 'strictEqual',
}

export const useFilterTypes = () =>
  useMemo<FilterTypes<Influencer>>(
    () => ({
      [Filters.strictEqual]: strictEqual,
    }),
    []
  )
