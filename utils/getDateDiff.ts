
const getDate = (raw?: number) => {
    if (raw) {
      const parsed: number[]  = raw.toString().split('.').map(s => Number(s)).reverse()
      return new Date(parsed[0], parsed[1] || 1)
    }
    return new Date(Date.now())
  }

const getDateDiff = (from?: number, to?: number) => {
  const dateFrom = getDate(from)
  const dateTo = getDate(to)

  const diff = (dateTo.getFullYear() * 12 + dateTo.getMonth()) - (dateFrom.getFullYear() * 12 + dateFrom.getMonth())
  
  const diffMonths = diff % 12
  const diffYears = Math.floor(diff / 12)

  return {
      diffMonths,
      diffYears
  }
}

export default getDateDiff