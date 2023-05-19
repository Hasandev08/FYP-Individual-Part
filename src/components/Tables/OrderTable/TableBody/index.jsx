import * as React from 'react'

import EnhancedTableHead from '../TableHead/index'
import Pagination from '../../../Pagination'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import './style.css'

export default function EnhancedTable({ filterTableData, getComparator, headCells, stableSort }) {
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
      const newSelected = filterTableData.map((n) => n.name)
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
    <div className='d-flex flex-column align-items-center'>
      <div>
        <TableContainer>
          <Table
            sx={{ width: { xs: 200, sm: 350, md: 700, lg: 950, xl: 1200 } }}
            aria-labelledby='tableTitle'
          >
            <EnhancedTableHead
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filterTableData.length}
            />
            <TableBody>
              {stableSort(filterTableData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover>
                      <TableCell align='left' style={{ width: 200 }}>
                        {row.customer}
                      </TableCell>
                      <TableCell align='left' style={{ width: 200 }}>
                        {row.address}
                      </TableCell>
                      <TableCell align='left' style={{ width: 200 }}>
                        {row.date}
                      </TableCell>
                      <TableCell align='left' style={{ width: 100 }}>
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
          filterTableData={filterTableData}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </div>
    </div>
  )
}
