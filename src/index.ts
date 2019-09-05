import arrayToCsv from '@calipsa/array-to-csv'

const formatDate = (dateStr: any) =>
  dateStr
    ? new Date(dateStr).toLocaleString()
    : ''

const columns = [
  {
    key: 'client',
    label: 'Client',
  },
  {
    key: 'site',
    label: 'Site',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'lastAlarmAt',
    label: 'Last alarm',
    transform: formatDate,
  },
  {
    key: 'total',
    label: 'Total',
  },
  {
    key: 'valid',
    label: 'Valid',
  },
] as const

export = arrayToCsv(columns)
