type FilterFlags<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}

type AllowedNames<T, U> = FilterFlags<T, U>[keyof T]

type SubType<T, U> = Pick<T, AllowedNames<T, U>>

export const sumBy = <T extends {}>(arr: T[], prop: keyof SubType<T, number>) =>
  arr.reduce((acc, item) => (item[prop] as any) + acc, 0)

export const formatDate = (dateStr: any) =>
  dateStr
    ? new Date(dateStr).toLocaleString()
    : ''
