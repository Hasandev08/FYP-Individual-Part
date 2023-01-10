import * as React from 'react'

import EnhancedTableHead from '../TableHead/index'
import Pagination from '../../Pagination'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { rows } from '../../../config/tableData'

import './style.css'

export default function EnhancedTable({ stableSort, getComparator }) {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div className='table d-flex flex-column align-items-center'>
      <div>
        <TableContainer>
          <Table
            sx={{ width: { xs: 250, sm: 400, md: 550, lg: 900, xl: 1200 } }}
            aria-labelledby='tableTitle'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover>
                      <TableCell align='center'>{row.customer}</TableCell>
                      <TableCell align='center'>{row.address}</TableCell>
                      <TableCell align='center'>{row.date}</TableCell>
                      <TableCell align='center'>
                        <p
                          className={
                            row.status === 'Completed' ? 'status-complete' : 'status-preparing'
                          }
                        >
                          {row.status}
                        </p>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Pagination
          rows={rows}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  )
}
