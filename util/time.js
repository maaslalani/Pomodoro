function convertTime(seconds) {

  if (seconds < 0)
    return '00:00'

  minutes = Math.floor(seconds / 60)
  seconds = seconds % 60

  if (minutes < 10)
    minutes = `0${minutes}`

  if (seconds < 10)
    seconds = `0${seconds}`

  return `${minutes}:${seconds}`
  
}
