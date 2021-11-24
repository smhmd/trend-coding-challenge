import React, { useMemo } from 'react'
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
} from 'react-table'
import influencers from '~/assets/example.json'
import { Pagination, Table } from '~/components'
import { useColumn } from '~/hooks'
import { Influencer } from '~/types'
import { useFilterTypes } from '~/helpers'

export const App = () => {
  const data = useMemo(() => influencers as Influencer[], [])
  const columns = useColumn()
  const filterTypes = useFilterTypes()
  const instance = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageSize: 3 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  )

  return (
    <>
      <Table instance={instance} />
      <Pagination instance={instance} />
    </>
  )
}
