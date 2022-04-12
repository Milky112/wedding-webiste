console.log("WOI INI DIPANGGIL")

import * as xlsx from 'xlsx/xlsx.mjs';

var wb = xlsx.readFile("data.xlsx", { cellDates: true });

var ws = wb.Sheets["Sheet1"];

data = xlsx.utils.sheet_to_json(ws);

var total_attendance = 0

for (let i = 0; i < data.length; i++) {
  total_attendance += data[i].Attendance
}

function get_data() {
  return 5;
}

console.log(total_attendance)
