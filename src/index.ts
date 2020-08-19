import arrayToCsv from '@calipsa/array-to-csv'

import {
  sumBy,
  formatNumber,
  formatDate,
} from './utils'

interface Item {
  client: string,
  site: string,
  name: string,
  createdAt: Date | string,
  lastAlarmAt: Date | string,
  total: number,
  processed: number,
  valid: number,
  labeledTrue: number,
  labeledFalse: number,
}

interface ItemWithReduction extends Item {
  reduction: number,
}

const getDataWithReduction = (data: Item): ItemWithReduction => ({
  ...data,
  reduction: 1 - data.valid / data.processed,
})

function getTotal(data: Item[]): ItemWithReduction {
  const valid = sumBy(data, 'valid')
  const processed = sumBy(data, 'processed')
  return {
    client: 'TOTAL',
    site: '',
    name: '',
    createdAt: '',
    lastAlarmAt: '',
    total: sumBy(data, 'total'),
    processed,
    valid,
    reduction: 1 - valid / processed,
    labeledTrue: sumBy(data, 'labeledTrue'),
    labeledFalse: sumBy(data, 'labeledFalse'),
  }
}

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
    key: 'createdAt',
    label: 'Created at',
    transform: formatDate,
  },
  {
    key: 'lastAlarmAt',
    label: 'Last alarm (selected time period)',
    transform: formatDate,
  },
  {
    key: 'total',
    label: 'Total',
  },
  {
    key: 'valid',
    label: 'True alarms',
  },
  {
    key: 'reduction',
    label: 'Reduction',
    transform: formatNumber,
  },
  {
    key: 'labeledTrue',
    label: 'Labelled true',
  },
  {
    key: 'labeledFalse',
    label: 'Labelled false',
  },
] as const

const toCsv = arrayToCsv(columns)

export = (data: Item[]) =>
  toCsv([
    ...data.map(getDataWithReduction),
    getTotal(data),
  ])
