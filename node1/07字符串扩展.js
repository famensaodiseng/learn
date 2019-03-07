


const dt = new Date()

const  y  = dt.getFullYear();
const m = dt.getMonth() + 1 < 10 ? "0" + dt.getMonth() : dt.getMonth()
const d = dt.getDate()<10?"0"+dt.getDate():dt.getDate()

const hh = dt.getHours()
const mm = dt.getMinutes()
const ss = dt.getSeconds()


const dateStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`

console.log(dateStr);