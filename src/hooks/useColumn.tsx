import { useMemo } from 'react'
import { Column } from 'react-table'
import { AvatarWithDialog, GenderFilter, TextFilter } from '~/components'
import { formatExperience, formatSkills, formatTags } from '~/helpers'
import { Filters } from '~/helpers/filters'
import { Influencer } from '~/types'

export const useColumn = () =>
  useMemo<Column<Influencer>[]>(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      {
        Header: 'Image',
        accessor: 'imagePostUrl',
        Cell: AvatarWithDialog,
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        Filter: GenderFilter,
        filter: Filters.strictEqual,
      },
      { Header: 'Email', accessor: 'email' },
      { Header: 'About', accessor: 'about' },
      { Header: 'Phone Number', accessor: 'phone' },
      {
        Header: 'Tags',
        Filter: TextFilter,
        accessor: formatTags,
      },
      {
        Header: 'Skills',
        Filter: TextFilter,
        accessor: formatSkills,
      },
      {
        Header: 'Experience',
        Filter: TextFilter,
        accessor: formatExperience,
      },
    ],
    []
  )
