const iranianMonths = {
  1: "فروردین",
  2: "اردیبهشت",
  3: "خرداد",
  4: "تیر",
  5: "مرداد",
  6: "شهریور",
  7: "مهر",
  8: "آبان",
  9: "آذر",
  10: "دی",
  11: "بهمن",
  12: "اسفند",
};
const iranianWeekdays = {
  0: "شنبه",
  1: "یکشنبه",
  2: "دوشنبه",
  3: "سه‌شنبه",
  4: "چهارشنبه",
  5: "پنج‌شنبه",
  6: "جمعه",
};
function convertPersianToEnglishNumber(persianNumber) {
  const persianToEnglishMapping = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  return persianNumber.replace(
    /[۰-۹]/g,
    (match) => persianToEnglishMapping[match]
  );
}

// تابع برای دریافت روز هفته به صورت فارسی
function getPersianWeekday(date) {
  const dayIndex = date.getDay();

  return iranianWeekdays[dayIndex == 6 ? 0 : dayIndex + 1];
}
function getPersianMonth(date) {
  const monthIndex = date.slice(5, 6);
  return iranianMonths[convertPersianToEnglishNumber(monthIndex)];
}

const today = new Date();
const persianWeekday = getPersianWeekday(today);

function getToDay() {
  return `امروز ${persianWeekday} ${today
    .toLocaleDateString("fa-IR")
    .slice(7, 10)} ${getPersianMonth(today.toLocaleDateString("fa-IR"))}`;
}
const toDayDate = document.getElementById("toDayDate");
toDayDate.innerHTML = getToDay();
