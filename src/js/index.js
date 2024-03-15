// Menu
// const menuBtn = document.getElementsByClassName('.header__burger');

// document.querySelector(".header__burger").addEventListener("click", () => {
//   document.querySelector(".header__nav").classList.toggle("show-menu");
// });

// Количество человек
const peopleBtn = document.querySelector(".people");
const peopleWrapper = document.querySelector(".people__wrapper");
const peopleItems = document.querySelectorAll(".people__item");
const peopleInput = document.querySelector(".people__input");

peopleBtn.addEventListener("click", () => {
  peopleWrapper.classList.toggle("active");
});

peopleItems.forEach((item) => {
  item.addEventListener("click", () => {
    peopleInput.textContent = item.textContent;
  });
  peopleWrapper.classList.remove("active");
});

// Опции

const optionBtn = document.querySelector(".options-input");
const optionList = document.querySelector(".option__wrapper");
const items = document.querySelectorAll(".list-items__item");
const optionClose = document.querySelector("#options-cancel");

const monthWrapper = document.querySelector(".month__wrapper");

const dateItems = {
  "февраль 2024": [
    "11 in 9:00",
    "12 in 9:00",
    "13 in 9:00",
    "14 in 9:00",
    "15 in 9:00",
    "16 in 9:00",
  ],
  "Август 2024": [
    "11 in 9:00",
    "12 in 9:00",
    "13 in 9:00",
    "14 in 9:00",
    "15 in 9:00",
    "16 in 9:00",
  ],
};

Object.keys(dateItems).map((month) => {
  const monthList = `
  <div class="available-month">
      ${month}
      <ul>
      </ul>
    </div>
  `;
  console.log(monthList);
  // const item = document.createElement("div");
  dateItems[month].map(() => {
    const item = `
      <div class="available-month" data-month-name="${month}">
        ${month}
      </div>
    `;
    monthWrapper.innerHTML += item;
  });
});
// Object.keys(dateItems).map((month) => {
//   const item = `
//     <div class="available-month">
//       ${month}
//       <ul>
//       </ul>
//     </div>
//   `;
//   const item = document.createElement("div");
//   dateItems[month].map(() => {
//     const item = `
//       <div class="available-month" data-month-name="${month}">
//         ${month}
//       </div>
//     `;
//   });
//   dateWrapper.innerHTML += item;
//   // const vacants = ;
// });

// const itemsText = document.querySelectorAll(".item-text");

optionBtn.addEventListener("click", (event) => {
  optionList.classList.add("active");
  if (event.target.nodeName == "BUTTON")
    console.log("Clicked", event.target.textContent);
  // optionList.style.display = "none";
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked");
    let selectedOption = item.querySelector(".item-text").innerText;
    // console.log(selectedOption);

    if (checked && checked.length > 0) {
      optionBtn.innerHTML = selectedOption;
    } else {
      optionBtn.innerText = "Выбери нужные опции";
    }
  });
});

optionClose.addEventListener("click", function (event) {
  // event.stopPropagation();
  console.log(optionClose, "click");
  optionList.classList.toggle("active");
});
// console.log(optionClose);
// function closeOptions(event) {
//   optionClose.style.color = "red";
//   event.stopPropagation();
//   optionList.style.color = "red";
// }

// optionClose.addEventListener("click", closeOptions);

// Date

// const dateItems = {
//   "февраль 2024": [
//     "11 in 9:00",
//     "12 in 9:00",
//     "13 in 9:00",
//     "14 in 9:00",
//     "15 in 9:00",
//     "16 in 9:00",
//   ],
//   "Август 2024": [
//     "11 in 9:00",
//     "12 in 9:00",
//     "13 in 9:00",
//     "14 in 9:00",
//     "15 in 9:00",
//     "16 in 9:00",
//   ],
// };

// const monthWrapper = document.querySelector(".month__wrapper");

// Object.keys(dateItems).map((month) => {
//   const item = `
//     <div class="available-month">
//       ${month}
//       <ul>

//       </ul>
//     </div>
//   `;
//   const item = document.createElement("div");
//   dateItems[month].map(() => {
//     const item = `
//       <div class="available-month" data-month-name="${month}">
//         ${month}
//       </div>
//     `;
//   });
//   dateWrapper.innerHTML += item;
//   // const vacants = ;
//   console.log(item);
// });

// Object.keys(dateItems).forEach((month) => {
//   // console.log(month);
//   const monthList = `
//       <div class="available-month">
//         ${month}
//         <ul class="available-dates">

//         </ul>
//       </div>
//     `;
//   monthWrapper.innerHTML += monthList;
// const item = document.createElement("div");
// dateItems[month].map(() => {
//   const item = `
//     <div class="available-month" data-month-name="${month}">
//       ${month}
//     </div>
//   `;
// });
// monthWrapper.innerHTML += item;
// console.log(item);
// console.log(dateItems[month]);
//   dateItems[month].forEach((time) => {
//     console.log(time);
//     const vacantDates = `
//         <li>${time}</li>
//       `;
//     monthWrapper.querySelector(".available-dates").append(vacantDates);
//     // monthWrapper.innerHTML += vacantDates;
//   });
// });

// Accordion

$(".acc").accordion({
  active: 0,
  collapsible: true,
  heightStyle: "content",
  icons: {
    header: "acc__accord",
    activeHeader: "acc__accord, acc__accord--active",
  },
});

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1.3,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".button-right",
  },

  mousewheel: true,
  keyboard: true,
});

// Select

// const defaultSelect = () => {
//   const element = document.querySelector(".default");
//   const choices = new Choices(element, {
//     searchEnabled: false,
//     itemSelectText: "",
//   });
// };

// defaultSelect();

// const optionInput = document.querySelector('.options-input');
// const options = document.querySelector('.options');

// optionInput.onclick = function() {
//   console.log('Кнопка нажата!');
//   options.style.display = 'block';
// }

// .onclick = function() {
//     entityInputs.hidden = true;
// }

// const optionsSelect = () => {
//   const option = document.querySelector('.option');
//   const optionChoices = new Choices(option, {
//     searchEnabled: false,
//     itemSelectText: '',
//   });
// }

// optionsSelect();
