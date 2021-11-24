import { Row, FilterValue } from 'react-table'

export const strictEqual = <T extends object>(
  rows: Array<Row<T>>,
  [id]: string[],
  filterValue: FilterValue
) => {
  return rows.filter((row) => {
    return row.values[id] === filterValue
  })
}
