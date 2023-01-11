import React from 'react'
import TablePagination from '@mui/material/TablePagination'

function Pagination({
  filterTableData,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
}) {
  return (
    <TablePagination
      component='div'
      count={filterTableData.length}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 15]}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default Pagination
