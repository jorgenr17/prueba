export const getCurrentDate = () => {
  const date = new Date()
  const formatted = date.toISOString().substr(0, 10)
  const arrayDate = formatted.split('-')
  const date2 = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
  return date2
}
