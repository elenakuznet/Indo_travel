// Menu
// const menuBtn = document.getElementsByClassName('.header__burger');

document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".header__nav").classList.toggle("show-menu");
  // document.querySelector(".overlay").classList.toggle("show-menu");
});

// Количество человек
const peopleBtn = document.querySelector(".people");
const peopleWrapper = document.querySelector(".people__wrapper");
const peopleItems = document.querySelectorAll(".people__item");
const peopleInput = document.querySelector(".people__input");

peopleBtn.addEventListener("click", () => {
  peopleWrapper.classList.toggle("active");
});

// function removeAll() {
//   peopleItems.forEach((item, index) => {
//     peopleWrapper.classList.remove("active");
//     item[index].classList.remove("number-active");
//     // contents[index].classList.remove("content-active");
//   });
// }

peopleItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    peopleInput.textContent = item.textContent;
    // removeAll();

    peopleWrapper.classList.remove("active");

    // peopleWrapper.classList.add("active");
  });
});

// Опции

const optionBtn = document.querySelector(".options-input");
const optionList = document.querySelector(".option__wrapper");
const items = document.querySelectorAll(".item");
// const itemsText = document.querySelectorAll(".item-text");

optionBtn.addEventListener("click", () => {
  optionList.classList.toggle("active");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked");
    let selectedOption = item.querySelector(".item-text").innerText;
    console.log(selectedOption);

    // let btnText = document.querySelector(".btn-text");

    if (checked && checked.length > 0) {
      console.log(checked);
      // optionBtn.innerText = `${checked.length} Selected`;
      optionBtn.innerHTML = selectedOption;
    } else {
      optionBtn.innerText = "Выбери нужные опции";
    }
  });
});

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

const defaultSelect = () => {
  const element = document.querySelector(".default");
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });
};

defaultSelect();

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
