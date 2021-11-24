import React from 'react'
import { TableInstance } from 'react-table'
import { Influencer } from '~/types'

export const Pagination = ({ instance }: PaginationProps) => {
  const {
    gotoPage,
    setPageSize,
    previousPage,
    nextPage,
    canNextPage,
    pageOptions,
    canPreviousPage,
    pageCount,
    state: { pageIndex, pageSize },
  } = instance

  return (
    <div className='pagination'>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          type='number'
          min={1}
          max={pageCount}
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value))
        }}>
        {[3, 6].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}

interface PaginationProps {
  instance: TableInstance<Influencer>
}
