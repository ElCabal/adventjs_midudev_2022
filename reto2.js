function countHours(year, holidays) {
  let overTime = 0;
  holidays.forEach((element) => {
    const day = new Date(`${element}/${year}`).getDay() || 0;
    if (day !== 0 && day !== 6) {
      overTime += 2;
    }
  });
  return overTime;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
console.log(countHours("2029", holidays));
