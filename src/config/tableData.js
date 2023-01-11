function createData(customer, address, date, status) {
  return {
    customer,
    address,
    date,
    status,
  }
}

export const tableData = [
  createData('Hasan', 'Sialkot', '1/11/2023', 'Completed'),
  createData('Ali Hassan', 'Sargodha', '1/11/2023', 'Preparing'),
  createData('Asad', 'Lahore', '1/11/2023', 'Completed'),
  createData('Wasif', 'Multan', '1/11/2023', 'Completed'),
  createData('Hadia', 'Lahore', '1/11/2023', 'Preparing'),
  createData('Mam Abqa', "Don't Know", '1/11/2023', 'Preparing'),
  createData('Ertugrul', 'Turkey', '1/11/2023', 'Completed'),
  createData('Halima', 'Turkey', '1/11/2023', 'Completed'),
]

export const headCells = [
  {
    id: 'customer',
    label: 'Customer',
  },
  {
    id: 'address',
    label: 'Address',
  },
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'status',
    label: 'Status',
  },
]
