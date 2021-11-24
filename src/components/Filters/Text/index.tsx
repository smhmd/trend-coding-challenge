import React from 'react'
import { UseFiltersColumnProps } from 'react-table'
import { Influencer } from '~/types'

export const TextFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}: TextFilterProps) => {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} influencers...`}
    />
  )
}

interface TextFilterProps {
  column: UseFiltersColumnProps<Influencer>
}
