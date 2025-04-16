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
    right.forEach((p) =>
      p.classList.add("lg:!-translate-x-10", "!opacity-100")
    );
    left.forEach((p) => p.classList.add("lg:!-translate-x-50", "!opacity-100"));
  } else {
    right.forEach((p) =>
      p.classList.remove("lg:!-translate-x-10", "!opacity-100")
    );

    left.forEach((p) =>
      p.classList.remove("lg:!-translate-x-50", "!opacity-100")
    );
  }
  if (window.pageYOffset > 700) {
    right_1.forEach((p) =>
      p.classList.add("lg:!-translate-x-10", "!opacity-100")
    );
    left_1.forEach((p) =>
      p.classList.add("lg:!-translate-x-30", "!opacity-100")
    );
  } else {
    right_1.forEach((p) =>
      p.classList.remove("lg:!-translate-x-10", "!opacity-100")
    );

    left_1.forEach((p) =>
      p.classList.remove("lg:!-translate-x-30", "!opacity-100")
    );
  }
};
window.addEventListener("resize", function () {
  handle();
});
const handle = () => {
  const img = document.getElementById("bg_screen");

  img.className = "w-full md:min-h-screen max-md:h-[414px] z-0 opacity-85";
  img.alt = "header";
  img.draggable = "false";

  if (window.innerWidth < 768) {
    img.src = "../assets/images/baner3.jpg";
  } else {
    img.src = "../assets/images/IMG_20250412_180927.jpg";
  }
};
handle();

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.loading = "lazy";
});
