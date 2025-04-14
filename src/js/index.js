// let today = new Date().toLocaleDateString("fa-IR");
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

function handleEnterMouse(id) {
  const mouseIn = document.getElementById(id);
  const phoneNumber = document.getElementById("phoneNumber");
  phoneNumber.classList.add("underline");
  mouseIn.classList.add("text-white");
  mouseIn.classList.remove("text-[#fe5d00]");
}
function handleOutMouse(id) {
  const mouseOut = document.getElementById(id);
  const phoneNumber = document.getElementById("phoneNumber");
  phoneNumber.classList.remove("underline");
  mouseOut.classList.add("text-[#fe5d00]");
  mouseOut.classList.remove("text-white");
}
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}
// href="tel:09193600064"
function handleTelPhone() {
  const telPhone = document.getElementById("telPhone");
  if (isMobile()) {
    const a = document.createElement("a");
    a.href = "tel:09193600064";
    telPhone.appendChild(a);
    a.click();
    telPhone.removeChild(a);
  } else {
    // const modal = document.getElementById("modal");
    // const text = document.createTextNode(
    //   "برای مشاوره و ثبت سفارش با شماره زیر در تماس بگیرید"
    // );
    // const phoneNumber = document.createTextNode("09193600064");
    // const p = document.createElement("p");
    // p.appendChild(text);
    // p.appendChild(phoneNumber)
    // modal.appendChild(p);
    // modal.classList.add("w-full","h-full")
  }
}

const header = document.querySelector("header");
const stickyOffset = 300;

function stickyHeader() {
  const phoneNumberDiv = document.querySelector("#phoneNumberDiv");
  if (window.pageYOffset > stickyOffset) {
    header.classList.add("bg-color", "shadow-xl");
    phoneNumberDiv.classList.remove("text-white");
    phoneNumberDiv.classList.add("text-[#fe8800]");
  } else {
    header.classList.remove("bg-color", "text-[#fe8800]", "shadow-xl");
    phoneNumberDiv.classList.add("text-white");
  }
}

const right = document.querySelectorAll(".right");
const left = document.querySelectorAll(".left");
const right_1 = document.querySelectorAll(".right_1");
const left_1 = document.querySelectorAll(".left_1");

window.onscroll = () => {
  stickyHeader();
  if (window.pageYOffset > 300) {
    right.forEach((p) => p.classList.add("!-translate-x-10", "!opacity-100"));
    left.forEach((p) => p.classList.add("!-translate-x-50", "!opacity-100"));
  } else {
    right.forEach((p) =>
      p.classList.remove("!-translate-x-10", "!opacity-100")
    );

    left.forEach((p) => p.classList.remove("!-translate-x-50", "!opacity-100"));
  }
  if (window.pageYOffset > 700) {
    right_1.forEach((p) => p.classList.add("!-translate-x-10", "!opacity-100"));
    left_1.forEach((p) => p.classList.add("!-translate-x-30", "!opacity-100"));
  } else {
    right_1.forEach((p) =>
      p.classList.remove("!-translate-x-10", "!opacity-100")
    );

    left_1.forEach((p) =>
      p.classList.remove("!-translate-x-30", "!opacity-100")
    );
  }
};
